<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use JWTAuthException;
use JWTAuth;
use App\Models\Api\ApiUser as User;
use App\Models\Api\ApiScheduleSessions as ScheduleSessions;
use App\Models\Api\ApiStudentResponder as StudentResponder;
use App\Models\Roles;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use App\Models\Api\ApiResponder as Responder;
use App\Models\Api\ApiStudent as Student;

class ScheduleController extends Controller
{
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
                                $message = 'New session scheduled by '.$user->getName();
                                $modelStudent->user->sendPushNotification($message,"schedule");
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

                $isDeleted = ScheduleSessions::where('id','=',$request->sessionId)
                                            ->where('responderProfileId','=',$user->responder->id)
                                            ->delete();
                if($isDeleted){
                    $response['data']['message']    = 'Request Successfully.';
                    $response['data']['code']       = 200;
                }
            }
        }
      return $response;
    }
}
