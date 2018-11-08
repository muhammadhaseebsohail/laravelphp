<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use JWTAuthException;
use JWTAuth;
use App\Models\Api\ApiUser as User;
use App\Models\Api\ApiScheduleSessions as ScheduleSessions;
use App\Models\Api\ApiScheduleSessions2 as ScheduleSessions2;
use App\Models\Api\ApiStudentResponder as StudentResponder;
use App\Models\Api\ApiSchoolProfiles as SchoolProfiles;
use App\Models\Roles;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use App\Models\Api\ApiResponder as Responder;
use App\Models\Api\ApiStudent as Student;
use Carbon\Carbon;

class ScheduleController extends Controller
{
    // Create New Schedule For Messages
    public function createSession(Request $request)
    {
        $user = JWTAuth::toUser($request->token);
        $response = [
              'data' => [
                  'code'      => 400,
                  'errors'     => '',
                  'message'   => 'Invalid Token! User Not Found.',
              ],
              'status' => false
          ];
        if(!empty($user) && $user->isResponder())
        {

            $response = [
                'data' => [
                    'code' => 400,
                    'message' => 'Something went wrong. Please try again later!',
                ],
                'status' => false
            ];
            $rules = [
                'userId'        => ['required', 'exists:users,id,roleId,4'],
                'startDateTime' => ['required', 'date_format:Y-m-d H:i','after:today'],
                'endDateTime'   => ['required','date_format:Y-m-d H:i','after:startDateTime'],
                'type'          => ['required','in:'.implode(",",array_keys(ScheduleSessions2::getTypes()))],
                'repeated'      => 'required_unless:type,"'.ScheduleSessions2::TYPE_NEVER.'"|in:'.ScheduleSessions2::NOT_REPEATED.','.ScheduleSessions2::REPEATED,
                'rEndDate'      => ['date_format:Y-m-d H:i','after:endDateTime'],
                'description'   => ['required','max:255'],
                'causeData'     => ['required','json']
            ];
            $validator = Validator::make($request->all(), $rules);
            $validator->sometimes('rEndDate', 'required', function ($input) {
                return $input->type != ScheduleSessions2::TYPE_NEVER && $input->repeated == ScheduleSessions2::NOT_REPEATED;
            });

            if ($validator->fails()) {
                $response['data']['message'] = 'Invalid input values.';
                $response['data']['errors'] = $validator->messages();
            }else
            {
                $response['status'] = true;
                $response['data']['code'] = 501;
                $response['data']['message'] = 'Invalid user id!';
                $modelStudent = Student::where('userId', $request->get('userId'))->first();
                $startDate  = date('Y-m-d H:i:s',strtotime($request->get('startDateTime')));
                $endDate    = date('Y-m-d H:i:s',strtotime($request->get('endDateTime')));
                $rEndDate   = date('Y-m-d H:i:s',strtotime($request->get('rEndDate')));

                $onlySD  = Carbon::parse($request->startDateTime)->setTime('0','0','0','0');
                $onlyRED = Carbon::parse($request->rEndDate)->setTime('0','0','0','0');
                if(!empty($modelStudent))
                {
                    $modelStudentResponder = StudentResponder::where('studentProfileId', $modelStudent->id)
                        ->where('responderProfileId', $user->responder->id)
                        ->first();

                    $response['data']['message'] = 'Invalid user! This student is not assigned to you.';
                    if(!empty($modelStudentResponder))
                    {
                        if($request->type == ScheduleSessions2::TYPE_DAILY)
                        {
                            $difference = $onlySD->diffInDays($onlyRED);

                            $SD = Carbon::parse($request->startDateTime)->subDay();
                            $ED = Carbon::parse($request->endDateTime)->subDay();
                            
                            $dataValues = [];
                            $uniqueSessionId = $user->id.time();
                            for($i=0;$i<=$difference;$i++)
                            {
                                $SD = $SD->addDay();
                                $ED = $ED->addDay();
                                $dataValues[] = [
                                    'studentProfileId'      => $modelStudentResponder->studentProfileId,
                                    'responderProfileId'    => $modelStudentResponder->responderProfileId,
                                    'type'                  => $request->type,
                                    'repeated'              => $request->repeated,
                                    'description'           => $request->description,
                                    'status'                => ScheduleSessions2::ACTIVE,
                                    'startDate'             => $SD->format('Y-m-d H:i:s'),
                                    'endDate'               => $ED->format('Y-m-d H:i:s'),
                                    'rEndDate'              => $rEndDate,
                                    'sessionId'             => $uniqueSessionId,
                                    'causeData'             => json_encode(json_decode($request->causeData)),
                                    'schoolProfileId'       => $user->Responder->schoolProfileId,
                                                ];
                            }
                        }
                        elseif($request->type == ScheduleSessions2::TYPE_WEEKLY)
                        {
                            //return $onlyRED;
                            //$difference = $onlySD->diffInDays($onlyRED);
                            //return intval($difference/7);

                            $difference = intval(($onlySD->diffInDays($onlyRED))/7);

                            $SD = Carbon::parse($request->startDateTime)->subWeek();
                            $ED = Carbon::parse($request->endDateTime)->subWeek();
                            
                            $dataValues = [];
                            $uniqueSessionId = $user->id.time();
                            for($i=0;$i<=$difference;$i++)
                            {
                                $SD = $SD->addWeek();
                                $ED = $ED->addWeek();
                                $dataValues[] = [
                                    'studentProfileId'      => $modelStudentResponder->studentProfileId,
                                    'responderProfileId'    => $modelStudentResponder->responderProfileId,
                                    'type'                  => $request->type,
                                    'repeated'              => $request->repeated,
                                    'description'           => $request->description,
                                    'status'                => ScheduleSessions2::ACTIVE,
                                    'startDate'             => $SD->format('Y-m-d H:i:s'),
                                    'endDate'               => $ED->format('Y-m-d H:i:s'),
                                    'rEndDate'              => $rEndDate,
                                    'sessionId'             => $uniqueSessionId,
                                    'causeData'             => json_encode(json_decode($request->causeData)),
                                    'schoolProfileId'       => $user->Responder->schoolProfileId,
                                                ];
                            }
                        }
                        elseif($request->type == ScheduleSessions2::TYPE_MONTHLY)
                        {
                            $difference = $onlySD->diffInMonths($onlyRED);

                            $SD = Carbon::parse($request->startDateTime)->subMonth();
                            $ED = Carbon::parse($request->endDateTime)->subMonth();
                            
                            $dataValues = [];
                            $uniqueSessionId = $user->id.time();
                            for($i=0;$i<=$difference;$i++)
                            {
                                $SD = $SD->addMonth();
                                $ED = $ED->addMonth();
                                $dataValues[] = [
                                    'studentProfileId'      => $modelStudentResponder->studentProfileId,
                                    'responderProfileId'    => $modelStudentResponder->responderProfileId,
                                    'type'                  => $request->type,
                                    'repeated'              => $request->repeated,
                                    'description'           => $request->description,
                                    'status'                => ScheduleSessions2::ACTIVE,
                                    'startDate'             => $SD->format('Y-m-d H:i:s'),
                                    'endDate'               => $ED->format('Y-m-d H:i:s'),
                                    'rEndDate'              => $rEndDate,
                                    'sessionId'             => $uniqueSessionId,
                                    'causeData'             => json_encode(json_decode($request->causeData)),
                                    'schoolProfileId'       => $user->Responder->schoolProfileId,
                                                ];
                            }   
                        }
                        else
                        {

                            $SD = Carbon::parse($request->startDateTime);
                            $ED = Carbon::parse($request->endDateTime);
                            
                            $dataValues = [];
                            $uniqueSessionId = $user->id.time();
                            for($i=0;$i<1;$i++)
                            {
                                $dataValues[] = [
                                    'studentProfileId'      => $modelStudentResponder->studentProfileId,
                                    'responderProfileId'    => $modelStudentResponder->responderProfileId,
                                    'type'                  => $request->type,
                                    'repeated'              => $request->repeated,
                                    'description'           => $request->description,
                                    'status'                => ScheduleSessions2::ACTIVE,
                                    'startDate'             => $SD->format('Y-m-d H:i:s'),
                                    'endDate'               => $ED->format('Y-m-d H:i:s'),
                                    'rEndDate'              => $rEndDate,
                                    'sessionId'             => $uniqueSessionId,
                                    'causeData'             => json_encode(json_decode($request->causeData)),
                                    'schoolProfileId'       => $user->Responder->schoolProfileId,
                                                ];
                            }
                        }
                        if(!$modelStudentResponder->checkBothUser2($dataValues))
                        {

                            $modelSchedule = DB::table('schedule_sessions2')->insert($dataValues);
                            if($modelSchedule){
                                // $tempDate = Carbon::parse($startDate, 'GMT-6');
                                // return $tempDate;
                                $schoolTimeZone = $user->responder->schoolProfile->schoolTimeZone;
                                $message = 'New session scheduled by '.$user->getName().' '.date('Y-m-d g:i A',strtotime($startDate.$schoolTimeZone." Hours")).' - '.date('g:i A',strtotime($endDate.$schoolTimeZone." Hours"));
                                $modelStudent->user->sendPushNotification($message,"schedule");
                                $response['data']['code'] = 200;
                                $response['data']['message'] = 'Request Successfull.';

                                $modelSchedule = ScheduleSessions2::where('sessionId','=',$uniqueSessionId)->first();
                                $response['data']['result'] = $modelSchedule->getArrayResponse();
                            }
                        }
                        else
                        {
                            $response['data']['message'] = 'Unfortunately, this slot is not available. Please select another date/time';
                            $response['data']['code'] = 502;
                        }
                    }
                } 
            }
        }
      return $response;
    }

    public function updateSession(Request $request)
    {
        $user = JWTAuth::toUser($request->token);
        $response = [
              'data' => [
                  'code'      => 400,
                  'errors'     => '',
                  'message'   => 'Invalid Token! User Not Found.',
              ],
              'status' => false
          ];
        if(!empty($user) && $user->isResponder())
        {

            $response = [
                'data' => [
                    'code' => 400,
                    'message' => 'Something went wrong. Please try again later!',
                ],
                'status' => false
            ];
            $rules = [
                'scheduleId'        => ['required', 'exists:schedule_sessions2,id'],
                'startDateTime' => ['required', 'date_format:Y-m-d H:i','after:today'],
                'endDateTime'   => ['required','date_format:Y-m-d H:i','after:startDateTime'],
                'type'          => ['required','in:'.implode(",",array_keys(ScheduleSessions2::getTypes()))],
                'repeated'      => 'required_unless:type,"'.ScheduleSessions2::TYPE_NEVER.'"|in:'.ScheduleSessions2::NOT_REPEATED.','.ScheduleSessions2::REPEATED,
                'rEndDate'      => ['date_format:Y-m-d H:i','after:endDateTime'],
                'description'   => ['required','max:255'],
                'causeData'     => ['required','json']
            ];
            $validator = Validator::make($request->all(), $rules);
            $validator->sometimes('rEndDate', 'required', function ($input) {
                return $input->type != ScheduleSessions2::TYPE_NEVER && $input->repeated == ScheduleSessions2::NOT_REPEATED;
            });

            if ($validator->fails()) {
                $response['data']['message'] = 'Invalid input values.';
                $response['data']['errors'] = $validator->messages();
            }else
            {
                $response['status'] = true;
                $response['data']['code'] = 501;
                $response['data']['message'] = 'Invalid user id!';
                $modelSchedule  = ScheduleSessions2::where('id', $request->get('scheduleId'))->first();
                $startDate  = date('Y-m-d H:i:s',strtotime($request->get('startDateTime')));
                $endDate    = date('Y-m-d H:i:s',strtotime($request->get('endDateTime')));
                $rEndDate   = date('Y-m-d H:i:s',strtotime($request->get('rEndDate')));

                $onlySD  = Carbon::parse($request->startDateTime)->setTime('0','0','0','0');
                $onlyRED = Carbon::parse($request->rEndDate)->setTime('0','0','0','0');
                if(!empty($modelSchedule))
                {
                    $modelStudentResponder = StudentResponder::where('studentProfileId', $modelSchedule->studentProfileId)
                        ->where('responderProfileId', $user->responder->id)
                        ->first();

                    $response['data']['message'] = 'Invalid user! This student is not assigned to you.';
                    if(!empty($modelStudentResponder))
                    {
                        if($request->type == ScheduleSessions2::TYPE_DAILY)
                        {
                            $difference = $onlySD->diffInDays($onlyRED);

                            $SD = Carbon::parse($request->startDateTime)->subDay();
                            $ED = Carbon::parse($request->endDateTime)->subDay();
                            
                            $dataValues = [];
                            $uniqueSessionId = $user->id.time();
                            for($i=0;$i<=$difference;$i++)
                            {
                                $SD = $SD->addDay();
                                $ED = $ED->addDay();
                                $dataValues[] = [
                                    'studentProfileId'      => $modelStudentResponder->studentProfileId,
                                    'responderProfileId'    => $modelStudentResponder->responderProfileId,
                                    'type'                  => $request->type,
                                    'repeated'              => $request->repeated,
                                    'description'           => $request->description,
                                    'status'                => ScheduleSessions2::ACTIVE,
                                    'startDate'             => $SD->format('Y-m-d H:i:s'),
                                    'endDate'               => $ED->format('Y-m-d H:i:s'),
                                    'rEndDate'              => $rEndDate,
                                    'sessionId'             => $uniqueSessionId,
                                    'causeData'             => json_encode(json_decode($request->causeData)),
                                    'schoolProfileId'       => $user->Responder->schoolProfileId,
                                                ];
                            }
                        }
                        elseif($request->type == ScheduleSessions2::TYPE_WEEKLY)
                        {
                            //return $onlyRED;
                            //$difference = $onlySD->diffInDays($onlyRED);
                            //return intval($difference/7);

                            $difference = intval(($onlySD->diffInDays($onlyRED))/7);


                            //return $difference;

                            $SD = Carbon::parse($request->startDateTime)->subWeek();
                            $ED = Carbon::parse($request->endDateTime)->subWeek();
                            
                            $dataValues = [];
                            $uniqueSessionId = $user->id.time();
                            for($i=0;$i<=$difference;$i++)
                            {
                                $SD = $SD->addWeek();
                                $ED = $ED->addWeek();
                                $dataValues[] = [
                                    'studentProfileId'      => $modelStudentResponder->studentProfileId,
                                    'responderProfileId'    => $modelStudentResponder->responderProfileId,
                                    'type'                  => $request->type,
                                    'repeated'              => $request->repeated,
                                    'description'           => $request->description,
                                    'status'                => ScheduleSessions2::ACTIVE,
                                    'startDate'             => $SD->format('Y-m-d H:i:s'),
                                    'endDate'               => $ED->format('Y-m-d H:i:s'),
                                    'rEndDate'              => $rEndDate,
                                    'sessionId'             => $uniqueSessionId,
                                    'causeData'             => json_encode(json_decode($request->causeData)),
                                    'schoolProfileId'       => $user->Responder->schoolProfileId,
                                                ];
                            }
                        }
                        elseif($request->type == ScheduleSessions2::TYPE_MONTHLY)
                        {
                            $difference = $onlySD->diffInMonths($onlyRED);

                            $SD = Carbon::parse($request->startDateTime)->subMonth();
                            $ED = Carbon::parse($request->endDateTime)->subMonth();
                            
                            $dataValues = [];
                            $uniqueSessionId = $user->id.time();
                            for($i=0;$i<=$difference;$i++)
                            {
                                $SD = $SD->addMonth();
                                $ED = $ED->addMonth();
                                $dataValues[] = [
                                    'studentProfileId'      => $modelStudentResponder->studentProfileId,
                                    'responderProfileId'    => $modelStudentResponder->responderProfileId,
                                    'type'                  => $request->type,
                                    'repeated'              => $request->repeated,
                                    'description'           => $request->description,
                                    'status'                => ScheduleSessions2::ACTIVE,
                                    'startDate'             => $SD->format('Y-m-d H:i:s'),
                                    'endDate'               => $ED->format('Y-m-d H:i:s'),
                                    'rEndDate'              => $rEndDate,
                                    'sessionId'             => $uniqueSessionId,
                                    'causeData'             => json_encode(json_decode($request->causeData)),
                                    'schoolProfileId'       => $user->Responder->schoolProfileId,
                                                ];
                            }   
                        }
                        else
                        {

                            $SD = Carbon::parse($request->startDateTime);
                            $ED = Carbon::parse($request->endDateTime);
                            
                            $dataValues = [];
                            $uniqueSessionId = $user->id.time();
                            for($i=0;$i<1;$i++)
                            {
                                $dataValues[] = [
                                    'studentProfileId'      => $modelStudentResponder->studentProfileId,
                                    'responderProfileId'    => $modelStudentResponder->responderProfileId,
                                    'type'                  => $request->type,
                                    'repeated'              => $request->repeated,
                                    'description'           => $request->description,
                                    'status'                => ScheduleSessions2::ACTIVE,
                                    'startDate'             => $SD->format('Y-m-d H:i:s'),
                                    'endDate'               => $ED->format('Y-m-d H:i:s'),
                                    'rEndDate'              => $rEndDate,
                                    'sessionId'             => $uniqueSessionId,
                                    'causeData'             => json_encode(json_decode($request->causeData)),
                                    'schoolProfileId'       => $user->Responder->schoolProfileId,
                                                ];
                            }
                        }
                        $oldModelSchedule = ScheduleSessions2::find($request->scheduleId);
                        if(!$modelStudentResponder->checkBothUserU2($dataValues,$oldModelSchedule->sessionId) && $oldModelSchedule)
                        {
                            $currentDate        = date('Y-m-d H:i:s');
                            $modelSchedule      = DB::table('schedule_sessions2')->insert($dataValues);
                            $removeOldSchedule  = ScheduleSessions2::where('endDate','>=',$currentDate)
                                                                    ->where('sessionId','=',$oldModelSchedule->sessionId)
                                                                    ->delete();
                            if($modelSchedule && $removeOldSchedule )
                            {    
                                $modelStudent = Student::find($modelStudentResponder->studentProfileId);
                                $schoolTimeZone = $user->responder->schoolProfile->schoolTimeZone;
                                $message = date('Y-m-d g:i A',strtotime($oldModelSchedule->startDate.$schoolTimeZone." Hours")).' - '.date('g:i A',strtotime($oldModelSchedule->endDate.$schoolTimeZone." Hours")).' has been edited '.date('Y-m-d g:i A',strtotime($request->startDateTime.$schoolTimeZone." Hours")).' - '.date('g:i A',strtotime($request->endDateTime.$schoolTimeZone." Hours")).' by '.$user->getName();

                                //$message = 'New session scheduled by '.$user->getName().' '.date('Y-m-d H:i',strtotime($startDate)).' - '.date('H:i',strtotime($endDate));
                                $modelStudent->user->sendPushNotification($message,"schedule");
                                $response['data']['code'] = 200;
                                $response['data']['message'] = 'Request Successfull.';

                                $modelSchedule = ScheduleSessions2::where('sessionId','=',$uniqueSessionId)->first();
                                $response['data']['result'] = $modelSchedule->getArrayResponse();
                            }
                        }
                        else
                        {
                            $response['data']['message'] = 'Unfortunately, this slot is not available. Please select another date/time';
                            $response['data']['code'] = 502;
                        }
                    }
                } 
            }
        }
      return $response;
    }

    // Create New Schedule For Messages
    public function create(Request $request)
    {
        $user = JWTAuth::toUser($request->token);
        $response = [
              'data' => [
                  'code'      => 400,
                  'errors'     => '',
                  'message'   => 'Invalid Token! User Not Found.',
              ],
              'status' => false
          ];
        if(!empty($user) && $user->isResponder())
        {

            $response = [
                'data' => [
                    'code' => 400,
                    'message' => 'Something went wrong. Please try again later!',
                ],
                'status' => false
            ];
            $rules = [
                'userId'        => ['required', 'exists:users,id,roleId,4'],
                'startDateTime' => ['required', 'date_format:Y-m-d H:i','after:today'],
                'endDateTime'   => ['required','date_format:Y-m-d H:i','after:startDateTime'],
                'type'          => ['required','in:'.implode(",",array_keys(ScheduleSessions::getTypes()))],
                'repeated'      => 'required_unless:type,"'.ScheduleSessions::TYPE_NEVER.'"|in:'.ScheduleSessions::NOT_REPEATED.','.ScheduleSessions::REPEATED,
                'rEndDate'      => ['date_format:Y-m-d H:i','after:endDateTime'],
                'description'   => ['required','max:255'],
                'causeData'     => ['required','json']
            ];
            $validator = Validator::make($request->all(), $rules);
            $validator->sometimes('rEndDate', 'required', function ($input) {
                return $input->type != ScheduleSessions::TYPE_NEVER && $input->repeated == ScheduleSessions::NOT_REPEATED;
            });

            if ($validator->fails()) {
                $response['data']['message'] = 'Invalid input values.';
                $response['data']['errors'] = $validator->messages();
            }else
            {
                $response['status'] = true;
                $response['data']['code'] = 501;
                $response['data']['message'] = 'Invalid user id!';
                $modelStudent = Student::where('userId', $request->get('userId'))->first();
                $startDate  = date('Y-m-d H:i:s',strtotime($request->get('startDateTime')));
                $endDate    = date('Y-m-d H:i:s',strtotime($request->get('endDateTime')));
                $rEndDate   = date('Y-m-d H:i:s',strtotime($request->get('rEndDate')));
                if(!empty($modelStudent)){
                    $modelStudentResponder = StudentResponder::where('studentProfileId', $modelStudent->id)
                        ->where('responderProfileId', $user->responder->id)
                        ->first();

                    $response['data']['message'] = 'Invalid user! This student is not assigned to you.';
                    if(!empty($modelStudentResponder)){
                        if(!$modelStudentResponder->checkBothUser($request)){
                            $dataValues = [
                                'studentProfileId'      => $modelStudentResponder->studentProfileId,
                                'responderProfileId'    => $modelStudentResponder->responderProfileId,
                                'type'                  => $request->type,
                                'repeated'              => $request->repeated,
                                'description'           => $request->description,
                                'status'                => ScheduleSessions::ACTIVE,
                                'startDate'             => $startDate,
                                'endDate'               => $endDate,
                                'causeData'             => json_encode(json_decode($request->causeData))
                            ];
                            if($request->repeated == ScheduleSessions::NOT_REPEATED)
                                $dataValues['rEndDate'] = $request->rEndDate;

                            $modelSchedule = ScheduleSessions::create($dataValues);
                            if($modelSchedule){
                                // $tempDate = Carbon::parse($startDate, 'GMT-6');
                                // return $tempDate;
                                $message = 'New session scheduled by '.$user->getName().' '.date('Y-m-d H:i',strtotime($startDate)).' - '.date('H:i',strtotime($endDate));
                                $modelStudent->user->sendPushNotification($message,"schedule");
                                $response['data']['code'] = 200;
                                $response['data']['message'] = 'Request Successfull.';
                                $response['data']['result'] = $modelSchedule->getArrayResponse();
                            }
                        }
                        else{
                            $response['data']['message'] = 'Unfortunately, this slot is not available. Please select another date/time';
                            $response['data']['code'] = 502;
                        }
                    }
                } 
            }
        }
      return $response;
    }

    // Update Schedule
    public function update(Request $request)
    {
        $user = JWTAuth::toUser($request->token);
        $response = [
              'data' => [
                  'code'      => 400,
                  'errors'     => '',
                  'message'   => 'Invalid Token! User Not Found.',
              ],
              'status' => false
          ];
        if(!empty($user) && $user->isResponder())
        {

            $response = [
                'data' => [
                    'code' => 400,
                    'message' => 'Something went wrong. Please try again later!',
                ],
                'status' => false
            ];
            $rules = [
                'scheduleId'    => ['required', 'exists:schedule_sessions,id,responderProfileId,'.$user->responder->id],
                'startDateTime' => ['required', 'date_format:Y-m-d H:i','after:today'],
                'endDateTime'   => ['required', 'date_format:Y-m-d H:i','after:startDateTime'],
                'type'          => ['required','in:'.implode(",",array_keys(ScheduleSessions::getTypes()))],
                'repeated'      => 'required_unless:type,"'.ScheduleSessions::TYPE_NEVER.'"|in:'.ScheduleSessions::NOT_REPEATED.','.ScheduleSessions::REPEATED,
                'rEndDate'      => ['date_format:Y-m-d H:i','after:endDateTime'],
                'description'   => ['required','max:255'],
                'causeData'     => ['required','json']
            ];
            $validator = Validator::make($request->all(), $rules);
            $validator->sometimes('rEndDate', 'required', function ($input) {
                return $input->type != ScheduleSessions::TYPE_NEVER && $input->repeated == ScheduleSessions::NOT_REPEATED;
            });

            if ($validator->fails()) {
                $response['data']['message'] = 'Invalid input values.';
                $response['data']['errors'] = $validator->messages();
            }else
            {
                $response['status'] = true;
                $response['data']['code'] = 501;
                $response['data']['message'] = 'Invalid user id!';
                $modelSchedule  = ScheduleSessions::where('id', $request->get('scheduleId'))->first();
                $moduleScheduleBackup = $modelSchedule; 
                $startDate  = date('Y-m-d H:i:s',strtotime($request->get('startDateTime')));
                $endDate    = date('Y-m-d H:i:s',strtotime($request->get('endDateTime')));
                $rEndDate   = date('Y-m-d H:i:s',strtotime($request->get('rEndDate')));
                if(!empty($modelSchedule)){
                    $modelStudentResponder = StudentResponder::where('studentProfileId', $modelSchedule->studentProfileId)
                        ->where('responderProfileId', $user->responder->id)
                        ->first();

                    $response['data']['message'] = 'Invalid user! This student is not assigned to you.';
                    if(!empty($modelStudentResponder)){
                        if(!$modelStudentResponder->checkBothUserU($request,$modelSchedule->id)){
                            $dataValues = [
                                'type'                  => $request->type,
                                'repeated'              => $request->repeated,
                                'description'           => $request->description,
                                'startDate'             => $startDate,
                                'endDate'               => $endDate,
                                'causeData'             => json_encode(json_decode($request->causeData))
                            ];
                            if($request->repeated == ScheduleSessions::NOT_REPEATED)
                                $dataValues['rEndDate'] = $request->rEndDate;

                            if($modelSchedule->update($dataValues)){
                                $student = Student::find($moduleScheduleBackup->studentProfileId);
                                $message = date('Y-m-d H:i',strtotime($moduleScheduleBackup->startDate)).' - '.date('H:i',strtotime($moduleScheduleBackup->endDate)).' has been edited '.date('Y-m-d H:i',strtotime($modelSchedule->startDate)).' - '.date('H:i',strtotime($modelSchedule->endDate)).' by '.$user->getName();
                                $student->user->sendPushNotification($message,"schedule");

                                $response['data']['code'] = 200;
                                $response['data']['message'] = 'Request Successfull.';
                                $response['data']['result'] = $modelSchedule->getArrayResponse();
                            }
                        }
                        else{
                            $response['data']['message'] = 'This slot is not available. Please select the different Date/Time';
                            $response['data']['code'] = 502;
                        }
                    }
                } 
            }
        }
      return $response;
    }

    // Return Schedule List
    public function list(Request $request)
    {
        $user = JWTAuth::toUser($request->token);
        $response = [
              'data' => [
                  'code'      => 400,
                  'errors'     => '',
                  'message'   => 'Invalid Token! User Not Found.',
              ],
              'status' => false
          ];
        if(!empty($user) && ($user->isResponder() || $user->isStudent()))
        {
            $response['data']['message']    = 'Request Successfull.';
            $response['data']['code']       = 200;
            $response['data']['result']     = [];
            $response['status']             = true;

            $attrId = 'responderProfileId';
            $typeId = '';
            if($user->isStudent() && !empty($user->student)){
                $attrId = 'studentProfileId';
                $typeId = $user->student->id;
            }elseif(!empty($user->responder))
                $typeId = $user->responder->id;

            $modelSchedule = ScheduleSessions::where($attrId,'=',$typeId)
                                            ->where('status','=',ScheduleSessions::ACTIVE)
                                            ->get();

            $response['data']['result']['upcoming'] = [];
            $response['data']['result']['previous'] = [];
            foreach ($modelSchedule as $key => $value) {
                if($value->validity()){

                     
                    
                    //$tempDate = Carbon::parse($value->startDate);
                    //$tempDate2 = Carbon::parse($tempDate, 'GMT-6');
                    //print_r($tempDate2);
                    //$tempDate = Carbon::now('GMT-6');
                               //print_r($tempDate);
                               //exit();
                    //Daily Case Starts Here
                    if($value->type==1)
                    {
                        // print_r($nowFull);
                        // print_r($nowDate);
                        // print_r($startFull);
                        // print_r($startDate);
                        // print_r($endFull);
                        // print_r($endDate);
                        // exit();
                        $nowFull = Carbon::now();//new Carbon('2018-09-28 09:00:00.0');//
                        $nowDate = Carbon::now()->setTime('0','0','0','0');//new Carbon('2018-09-28 00:00:00.0');//


                        
                        $startFull = Carbon::parse($value->startDate);
                        $startDate = Carbon::parse($value->startDate)->setTime('0','0','0','0');
                        
                        $endFull = Carbon::parse($value->endDate);
                        $endDate = Carbon::parse($value->endDate)->setTime('0','0','0','0');


                        if($startDate->isPast())
                        {

                            $daysDiff = $startDate->diffInDays($nowDate);

                            if($daysDiff==0)
                            {

                                $nowHour = $nowFull->format('H');
                                $endHour = $endFull->format('H');
                                
                                if($nowHour>=$endHour)
                                {
                                    
                                    $nowMinute = $nowFull->format('i');
                                    $endMinute = $endFull->format('i');
                                    if($nowMinute>$endMinute)
                                    {
                                        $startFull->addDay($daysDiff+1);
                                        $endFull->addDay($daysDiff+1);

                                        $value->startDate   = $startFull->format('Y-m-d H:i:s');
                                        $value->endDate     = $endFull->format('Y-m-d H:i:s');
                                    }
                                }
                            }
                            else
                            {

                                $nowHour = $nowFull->format('H');
                                $endHour = $endFull->format('H');
                                
                                if($nowHour>=$endHour)
                                {

                                    
                                    $nowMinute = $nowFull->format('i');
                                    $endMinute = $endFull->format('i');
                                    
                                    
                                    if($nowMinute>$endMinute)
                                    {
                                        
                                
                                        $startFull->addDay($daysDiff+1);
                                        $endFull->addDay($daysDiff+1);

                                        $value->startDate   = $startFull->format('Y-m-d H:i:s');
                                        $value->endDate     = $endFull->format('Y-m-d H:i:s');
                                        
                                        // print_r($startFull);
                                        // print_r($endFull);
                                        // exit();        
                                    }
                                    else
                                    {
                                        $startFull->addDay($daysDiff);
                                        $endFull->addDay($daysDiff);

                                        $value->startDate   = $startFull->format('Y-m-d H:i:s');
                                        $value->endDate     = $endFull->format('Y-m-d H:i:s');
                                    }
                                }
                                else
                                {
                                    $startFull->addDay($daysDiff);
                                    $endFull->addDay($daysDiff);

                                    $value->startDate   = $startFull->format('Y-m-d H:i:s');
                                    $value->endDate     = $endFull->format('Y-m-d H:i:s');
                                }
                            }
                        }
                    }   //Daily Case Ends Here //Monthly Case Starts Here
                    else if($value->type==3)
                    {

                        $nowFull = Carbon::now();//new Carbon('2018-10-29 16:30:00.0');//
                        $nowDate = Carbon::now()->setTime('0','0','0','0');//new Carbon('2018-10-29 00:00:00.0');//
                        
                        $startFull = Carbon::parse($value->startDate);
                        $startDate = Carbon::parse($value->startDate)->setTime('0','0','0','0');
                        
                        $endFull = Carbon::parse($value->endDate);
                        $endDate = Carbon::parse($value->endDate)->setTime('0','0','0','0');

                        if($startDate->isPast())
                        {
                            $nowMonth = $nowFull->copy()->startOfMonth();
                            $startMonth = $startFull->copy()->startOfMonth();
                            

                            $monthDiff = $startMonth->diffInMonths($nowMonth);
                            
                            if($monthDiff==0)
                            {
                                $daysDiff = $startDate->diffInDays($nowDate);

                                if($daysDiff==0)
                                {

                                    $nowHour = $nowFull->format('H');
                                    $endHour = $endFull->format('H');
                                    
                                    if($nowHour>=$endHour)
                                    {
                                        
                                        $nowMinute = $nowFull->format('i');
                                        $endMinute = $endFull->format('i');
                                        if($nowMinute>$endMinute)
                                        {
                                            $startFull->addMonth($monthDiff+1);
                                            $endFull->addMonth($monthDiff+1);

                                            $value->startDate   = $startFull->format('Y-m-d H:i:s');
                                            $value->endDate     = $endFull->format('Y-m-d H:i:s');
                                        }
                                    }
                                }
                                else
                                {
                                    $startFull->addMonth($monthDiff+1);
                                    $endFull->addMonth($monthDiff+1);

                                    $value->startDate   = $startFull->format('Y-m-d H:i:s');
                                    $value->endDate     = $endFull->format('Y-m-d H:i:s');
                                }
                            }
                            else
                            {
                                $nowDay    = $nowFull->format('d');
                                $startDay  = $startFull->format('d');
                                // print_r($nowDay);
                                // print_r($startDay);
                                
                                if($nowDay > $startDay)
                                {
                                    $startFull->addMonth($monthDiff+1);
                                    $endFull->addMonth($monthDiff+1);

                                    $value->startDate   = $startFull->format('Y-m-d H:i:s');
                                    $value->endDate     = $endFull->format('Y-m-d H:i:s');
                                
                                }
                                else if($nowDay == $startDay)
                                {
                                    $nowHour = $nowFull->format('H');
                                    $endHour = $endFull->format('H');
                                    
                                    if($nowHour>=$endHour)
                                    {
                                        
                                        $nowMinute = $nowFull->format('i');
                                        $endMinute = $endFull->format('i');
                                        if($nowMinute>$endMinute)
                                        {
                                            $startFull->addMonth($monthDiff+1);
                                            $endFull->addMonth($monthDiff+1);

                                            $value->startDate   = $startFull->format('Y-m-d H:i:s');
                                            $value->endDate     = $endFull->format('Y-m-d H:i:s');
                                        }
                                        else
                                        {
                                            $startFull->addMonth($monthDiff);
                                            $endFull->addMonth($monthDiff);

                                            $value->startDate   = $startFull->format('Y-m-d H:i:s');
                                            $value->endDate     = $endFull->format('Y-m-d H:i:s');
                                        }
                                    }
                                    else
                                    {
                                        $startFull->addMonth($monthDiff);
                                        $endFull->addMonth($monthDiff);

                                        $value->startDate   = $startFull->format('Y-m-d H:i:s');
                                        $value->endDate     = $endFull->format('Y-m-d H:i:s');
                                    }
                                
                                }
                                else
                                {
                                    $startFull->addMonth($monthDiff);
                                    $endFull->addMonth($monthDiff);

                                    $value->startDate   = $startFull->format('Y-m-d H:i:s');
                                    $value->endDate     = $endFull->format('Y-m-d H:i:s');
                                    
                                }
                            }
                        }
                    }   //Monthly Case Ends Here //Weekly Case Starts
                    else if($value->type==2)
                    {
                        $nowFull = Carbon::now();//new Carbon('2018-10-15 14:07:00.0');//
                        $nowDate = Carbon::now()->setTime('0','0','0','0');//new Carbon('2018-10-15 00:00:00.0');//
                        
                        $startFull = Carbon::parse($value->startDate);
                        $startDate = Carbon::parse($value->startDate)->setTime('0','0','0','0');
                        
                        $endFull = Carbon::parse($value->endDate);
                        $endDate = Carbon::parse($value->endDate)->setTime('0','0','0','0');

                        if($startDate->isPast())
                        {
                            $weekDiff = $startDate->diffInWeeks($nowDate);
                            
                            if($weekDiff==0)
                            {

                                $daysDiff = $startDate->diffInDays($nowDate);

                                if($daysDiff==0)
                                {

                                    $nowHour = $nowFull->format('H');
                                    $endHour = $endFull->format('H');


                                    // print_r($nowHour);
                                    // echo "<br>";
                                    // print_r($endHour);
                                    // echo "<br>";
                                    if($nowHour>=$endHour)
                                    {
                                        
                                        $nowMinute = $nowFull->format('i');
                                        $endMinute = $endFull->format('i');
                                        
                                        // print_r($nowMinute);
                                        // echo "<br>";
                                        // print_r($endMinute);

                                        if($nowMinute>$endMinute)
                                        {
                                            //exit();
                                            $daysToAdd = ($weekDiff+1) * 7;
                                            $startFull->addDay($daysToAdd);
                                            $endFull->addDay($daysToAdd);

                                            $value->startDate   = $startFull->format('Y-m-d H:i:s');
                                            $value->endDate     = $endFull->format('Y-m-d H:i:s');
                                        }
                                    }
                                }
                                else
                                {

                                    //print_r($daysDiff);
                                    //exit();
                                    $daysToAdd = ($weekDiff+1) * 7;
                                    $startFull->addDay($daysToAdd);
                                    $endFull->addDay($daysToAdd);

                                    $value->startDate   = $startFull->format('Y-m-d H:i:s');
                                    $value->endDate     = $endFull->format('Y-m-d H:i:s');   
                                }
                            }
                            else
                            {
                                $dayOfNowWeek = $nowDate->dayOfWeek;
                                $dayOfStartwWeek = $startDate->dayOfWeek;
                                
                                // print_r($dayOfNowWeek);
                                // print_r($dayOfStartwWeek);
                                // print_r($nowDate);

                                if($dayOfNowWeek  == $dayOfStartwWeek)
                                {
                                    $nowHour = $nowFull->format('H');
                                    $endHour = $endFull->format('H');


                                    // print_r($nowHour);
                                    // echo "<br>";
                                    // print_r($endHour);
                                    // echo "<br>";
                                    if($nowHour>=$endHour)
                                    {
                                        
                                        $nowMinute = $nowFull->format('i');
                                        $endMinute = $endFull->format('i');
                                        
                                        // print_r($nowMinute);
                                        // echo "<br>";
                                        // print_r($endMinute);

                                        if($nowMinute>$endMinute)
                                        {
                                            //exit();
                                            $daysToAdd = ($weekDiff+1) * 7;
                                            $startFull->addDay($daysToAdd);
                                            $endFull->addDay($daysToAdd);

                                            $value->startDate   = $startFull->format('Y-m-d H:i:s');
                                            $value->endDate     = $endFull->format('Y-m-d H:i:s');
                                        }
                                        else
                                        {
                                            $daysToAdd = ($weekDiff) * 7;
                                            $startFull->addDay($daysToAdd);
                                            $endFull->addDay($daysToAdd);

                                            $value->startDate   = $startFull->format('Y-m-d H:i:s');
                                            $value->endDate     = $endFull->format('Y-m-d H:i:s');
                                        }
                                    }
                                    else
                                    {
                                        $daysToAdd = ($weekDiff) * 7;
                                        $startFull->addDay($daysToAdd);
                                        $endFull->addDay($daysToAdd);

                                        $value->startDate   = $startFull->format('Y-m-d H:i:s');
                                        $value->endDate     = $endFull->format('Y-m-d H:i:s');
                                    }
                                }
                                else
                                {
                                    $daysToAdd = ($weekDiff+1) * 7;
                                    $startFull->addDay($daysToAdd);
                                    $endFull->addDay($daysToAdd);

                                    $value->startDate   = $startFull->format('Y-m-d H:i:s');
                                    $value->endDate     = $endFull->format('Y-m-d H:i:s');   
                                }
                                // else if($dayOfNowWeek  < $dayOfStartwWeek)
                                // {
                                //     $daysToAdd = ($weekDiff+1) * 7;
                                //     $startFull->addDay($daysToAdd);
                                //     $endFull->addDay($daysToAdd);

                                //     $value->startDate   = $startFull->format('Y-m-d H:i:s');
                                //     $value->endDate     = $endFull->format('Y-m-d H:i:s');
                                // }
                                // else
                                // {
                                //     $daysToAdd = ($weekDiff+1) * 7;
                                //     $startFull->addDay($daysToAdd);
                                //     $endFull->addDay($daysToAdd);

                                //     $value->startDate   = $startFull->format('Y-m-d H:i:s');
                                //     $value->endDate     = $endFull->format('Y-m-d H:i:s');
                                // }
                                // print_r($value->startDate);
                                // print_r($value->endDate);
                                // exit();
                            }
                        }
                    }

                    // $response['data']['result']['previous'][] = [];
                    $response['data']['result']['upcoming'][] = $value->getArrayResponse();
                }
                else{
                    // $response['data']['result']['upcoming'][] = [];
                    $response['data']['result']['previous'][] = $value->getArrayResponse();
                }
            }
        }
      return $response;
    }


    // Return Schedule List
    public function listSession(Request $request)
    {
        $user = JWTAuth::toUser($request->token);
        $response = [
              'data' => [
                  'code'      => 400,
                  'errors'     => '',
                  'message'   => 'Invalid Token! User Not Found.',
              ],
              'status' => false
          ];
        if(!empty($user) && ($user->isResponder() || $user->isStudent()))
        {
            $response['data']['message']    = 'Request Successfull.';
            $response['data']['code']       = 200;
            $response['data']['result']     = [];
            $response['status']             = true;

            $attrId = 'responderProfileId';
            $typeId = '';
            if($user->isStudent() && !empty($user->student)){
                $attrId = 'studentProfileId';
                $typeId = $user->student->id;
            }elseif(!empty($user->responder))
                $typeId = $user->responder->id;

            $currentDate = date('Y-m-d H:i:s');
            $currentTime = date('H:i:s');


            $modelScheduleUpcoming = ScheduleSessions2::where($attrId,'=',$typeId)
                                            ->where('endDate','>=',$currentDate)
                                            ->where('status','=',ScheduleSessions2::ACTIVE)
                                            ->get();
            
            $modelSchedulePrevious = ScheduleSessions2::where($attrId,'=',$typeId)
                                            ->where('endDate','<',$currentDate)
                                            ->where('status','=',ScheduleSessions2::ACTIVE)
                                            ->get();
            $randomString = "123";
            $response['data']['result']['upcoming'] = [];
            $response['data']['result']['previous'] = [];
            foreach ($modelScheduleUpcoming as $key => $value) 
            {
                if($value->sessionId != $randomString)
                {
                    $response['data']['result']['upcoming'][] = $value->getArrayResponse();
                    $randomString = $value->sessionId;
                }
                
            }
            foreach ($modelSchedulePrevious as $key => $value){
                $response['data']['result']['previous'][] = $value->getArrayResponse();
            }
        }
        return $response;
    }

    // Delete Schedule
    public function delete(Request $request)
    {
        $user = JWTAuth::toUser($request->token);
        $response = [
              'data' => [
                  'code'      => 400,
                  'errors'     => '',
                  'message'   => 'Invalid Token! User Not Found.',
              ],
              'status' => false
          ];
        if(!empty($user) && $user->isResponder())
        {
            $rules = [
                'sessionId'   => ['required','exists:schedule_sessions,id']
            ];

            $validator = Validator::make($request->all(), $rules);
            if ($validator->fails()) {
                $response['data']['message'] = 'Invalid input values.';
                $response['data']['errors'] = $validator->messages();
            }else{
                $response['data']['message']    = 'Session not deleted Successfully. Please try again later!';
                $response['data']['code']       = 500;
                $response['status']             = true;

                $getSession = ScheduleSessions::where('id','=',$request->sessionId)
                                            ->where('responderProfileId','=',$user->responder->id)
                                            ->first();
                $student = Student::find($getSession->studentProfileId);
                //return $student;
                $isDeleted = ScheduleSessions::where('id','=',$request->sessionId)
                                            ->where('responderProfileId','=',$user->responder->id)
                                            ->delete();
                if($isDeleted){

                    $message = date('Y-m-d H:i',strtotime($getSession->startDate)).' - '.date('H:i',strtotime($getSession->endDate)).' session has been deleted by '.$user->getName();
                    $student->user->sendPushNotification($message,"schedule");
                    $response['data']['message']    = 'Request Successfully.';
                    $response['data']['code']       = 200;
                }
            }
        }
      return $response;
    }

    // Delete Schedule Session
    public function deleteSession(Request $request)
    {
        $user = JWTAuth::toUser($request->token);
        $response = [
              'data' => [
                  'code'      => 400,
                  'errors'     => '',
                  'message'   => 'Invalid Token! User Not Found.',
              ],
              'status' => false
          ];
        if(!empty($user) && $user->isResponder())
        {
            $rules = [
                'sessionId'   => ['required','exists:schedule_sessions2,id']
            ];

            $validator = Validator::make($request->all(), $rules);
            if ($validator->fails()) {
                $response['data']['message'] = 'Invalid input values.';
                $response['data']['errors'] = $validator->messages();
            }else{
                $response['data']['message']    = 'Session not deleted Successfully. Please try again later!';
                $response['data']['code']       = 500;
                $response['status']             = true;


                $getSession = ScheduleSessions2::find($request->sessionId);

                if(!empty($getSession))
                {
                    // $getSession = ScheduleSessions2::where('id','=',$request->sessionId)
                    //                             ->where('responderProfileId','=',$user->responder->id)
                    //                             ->first();
                    $student = Student::find($getSession->studentProfileId);
                    //return $student;
                    $currentDate = date('Y-m-d H:i:s');
                    $isDeleted = ScheduleSessions2::where('sessionId','=',$getSession->sessionId)
                                                ->where('endDate','>=',$currentDate)
                                                ->delete();
                    if($isDeleted){
                        $schoolTimeZone = $user->responder->schoolProfile->schoolTimeZone;
                        $message = date('Y-m-d g:i A',strtotime($getSession->startDate.$schoolTimeZone." Hours")).' - '.date('g:i A',strtotime($getSession->endDate.$schoolTimeZone." Hours")).' session has been deleted by '.$user->getName();
                        $student->user->sendPushNotification($message,"schedule");
                        $response['data']['message']    = 'Request Successfully.';
                        $response['data']['code']       = 200;
                    }
                }
            }
        }
      return $response;
    }

    public function sentNotificationsAA(){

        $currentDate = date('Y-m-d H:i:s');
        $modelSchedules = ScheduleSessions2::where('endDate','>=',$currentDate)->get();
        
        foreach ($modelSchedules as $key => $value) 
        {

            $flag = 0;
            $flag2 = 0;

            $schoolTimeSymbol = $value->student->schoolProfile->schoolTimeSymbol;
            $schoolTimeValue  = $value->student->schoolProfile->schoolTimeValue;
            $schoolTimeZone   = $value->student->schoolProfile->schoolTimeZone." Hours";
            
            
            $plus1 =    $schoolTimeValue + 1;
            $plus12 =   $schoolTimeValue + 12;

            $currentDateTime = strtotime(date('Y-m-d H:i:s',strtotime($plus12.' Hours')));
            $currentDateTimeOneHour = strtotime(date('Y-m-d H:i:s',strtotime($plus1.' Hours')));
            


            $startDateTimeStamp = strtotime($value->startDate.$schoolTimeZone);
            
            //return date('H:i',$startDateTimeStamp);
            if(date('H:i',$currentDateTime) == date('H:i',$startDateTimeStamp)){
                 $flag = 1;
                 //return "flag 1 mai agea hai:";
            }
            if(date('H:i',$currentDateTimeOneHour) == date('H:i',$startDateTimeStamp)){
                $flag2 = 1;   
                //return "flag 2 mai agea hai:";
            }
            if($flag)
            {
                // Send to Student
                $message = 'Your upcoming session in next 12 hours with '.$value->responder->user->getName().' ('.$value->description.').';
                $value->student->user->sendPushNotification($message,"schedule");
                //Send to Responder
                $message = 'Your upcoming session in next 12 hours with '.$value->student->user->getName().' ('.$value->description.').';
                $value->responder->user->sendPushNotification($message,"schedule");

                return $message;


            }
            if($flag2)
            {
            
                //Send to Student
                $message = 'Your upcoming session in next 1 hours with '.$value->responder->user->getName().' ('.$value->description.').';
                $value->student->user->sendPushNotification($message,"schedule");
                //Send to Responder
                $message = 'Your upcoming session in next 1 hours with '.$value->student->user->getName().' ('.$value->description.').';
                $value->responder->user->sendPushNotification($message,"schedule");

                return $message;
            }
        }
    }

    public function analytics(Request $request)
    {
        $user = JWTAuth::toUser($request->token);
        $response = [
                'data' => [
                    'code'      => 400,
                    'error'     => '',
                    'message'   => 'Invalid Token! User Not Found.',
                ],
                'status' => false
            ];
        if(!empty($user))
        {
            $response = [
                'data' => [
                    'code' => 400,
                    'message' => 'Something went wrong. Please try again later!',
                ],
               'status' => false
            ];
            $rules = [
               'schoolProfileId'    => ['required','exists:school_profiles,id'],
            ];
            $validator = Validator::make($request->all(), $rules);
            if ($validator->fails()) {
                $response['data']['message'] = 'Invalid input values.';
                $response['data']['errors'] = $validator->messages();
            }else
            {

                $school = SchoolProfiles::find($request->schoolProfileId);
                $schoolTimeZone = $school->schoolTimeZone;

                $date=array();
                $oneDayBeforeWeek = Carbon::now()->startOfWeek()->subDay()->format('Y-m-d');
                $oneDayAfterWeek = Carbon::now()->endOfWeek()->addDay()->format('Y-m-d');
                $date[0]=Carbon::now()->startOfWeek()->format('Y-m-d H:i:s');

                for($i=1; $i<=6 ; $i++ )
                {
                    $date[$i]=Carbon::parse($date[0])->addDay($i)->format('Y-m-d H:i:s');
                }

                for($i=0; $i<=6 ; $i++ )
                {
                    $date[$i]= date('Y-m-d',strtotime($date[$i].$schoolTimeZone." Hours"));
                }

                $schedules = ScheduleSessions2::whereDate('startDate','>=',$oneDayBeforeWeek)
                                                ->whereDate('startDate','<=',$oneDayAfterWeek)
                                                ->where('schoolProfileId','=',$request->schoolProfileId)
                                                ->get();
                foreach($schedules as $schedule)
                {
                    $schedule['startDate'] = date('Y-m-d',strtotime($schedule->startDate.$schoolTimeZone." Hours"));
                }


                $count=array();
                $count[0]=0;
                for($i=1; $i<=6 ; $i++ )
                {
                    $count[$i]=0;
                }

                foreach ($schedules as $schedule) {
                    if($date[0]==$schedule->startDate)
                    {
                        $count[0]++;
                    }
                    elseif($date[1]==$schedule->startDate)
                    {
                        $count[1]++;
                    }
                    elseif($date[2]==$schedule->startDate)
                    {
                        $count[2]++;
                    }
                    elseif($date[3]==$schedule->startDate)
                    {
                        $count[3]++;
                    }
                    elseif($date[4]==$schedule->startDate)
                    {
                        $count[4]++;
                    }
                    elseif($date[5]==$schedule->startDate)
                    {
                        $count[5]++;
                    }
                    elseif($date[6]==$schedule->startDate)
                    {
                        $count[6]++;
                    }
                }
                
                if ($schedules) 
                {
                    $response['data']['message'] = 'Request Successfull';
                    $response['data']['code'] = 200;
                    $response['status'] = true;
                    $response['data']['result'] = $count;
                }  
            }
        }
        return $response;
    }
}
