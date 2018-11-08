<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use JWTAuthException;
use JWTAuth;
use App\Http\Requests;
use App\Models\Api\ApiUser as User;
use App\Models\Roles;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use App\Models\Api\ApiResponder as Responder;
use App\Models\Api\ApiLocalResource as LocalResource;
use App\Models\Api\ApiSchoolAdminProfiles as SchoolAdminProfiles;
use App\Models\Api\ApiSchoolProfiles as SchoolProfiles;
use App\Models\Api\ApiCrisisResource as CrisisResource;
use App\Models\Api\ApiStudentResponder as StudentResponder;
use App\Models\Api\ApiStudent as Student;
use App\Models\InvoicesExport;
use App\Models\Api\ApiResponderCategory as ResponderCategory;
class ImportDataController extends Controller
{
    public function localResource(Request $request){
        $user = JWTAuth::toUser($request->token);
        $response = [
                'data' => [
                    'code'      => 400,
                    'errors'    => '',
                    'message'   => 'Invalid Token! User Not Found.',
                ],
                'status' => false
            ];
        if(!empty($user) ){ //&& $user->isAdmin()
            $rules = [
                'jsonData'   => ['required','json'],
            ];

            $validator = Validator::make($request->all(), $rules);
            if ($validator->fails()) {
                $response['data']['message'] = 'Invalid input values.';
                $response['data']['errors'] = $validator->messages();
            }else{
                $jsonData = json_decode($request->get('jsonData'));
                $errorsData = [];
                $rules = [
                   'name'   => ['required', 'max:191',Rule::unique('local_resources')],
                   'insuranceType'   => 'required',
                   'streetAddress' => 'required',
                   'city' => 'required',
                   'state' => 'required',
                   'zipCode' => 'required',
                   'phoneNumber' => 'required',
                   'website' => 'required',
                   'schoolAdminProfileId' => ['required','exists:school_admin_profiles,id'],
                   // 'serviceTypeId' => 'required',
                ];
                $response['data']['message'] = 'Invalid input values.';
                $cnt = 0;
                $errorCnt = 1;
                $savedRecords = 0;
                foreach ($jsonData as $key => $value) {
                    $attributes = (Array) $value;
                    $validator = Validator::make($attributes, $rules);
                    if ($validator->fails()) {
                        foreach ($validator->messages()->toArray() as $key => $value) {
                            $errorsData[$cnt]['number'] = $cnt + 1;
                            $errorsData[$cnt]['recordNumber'] = $errorCnt;
                            $errorsData[$cnt]['attribute'] = $key;
                            $errorsData[$cnt]['message'] = $value[0];    
                            ++$cnt;
                        }
                    }
                    else{
                        $schoolAdminProfiles= SchoolAdminProfiles::find($attributes['schoolAdminProfileId']);
                        if(!empty($schoolAdminProfiles)){
                            $attributes['schoolProfileId'] = $schoolAdminProfiles->schoolProfileId;
                            unset($attributes['schoolAdminProfileId']);
                            $localResource = LocalResource::create($attributes);
                            ++$savedRecords;
                        }
                    }
                    ++$errorCnt;
                }
                $response['status'] = true;
                $response['data']['result']['total_records'] = count($jsonData);
                $response['data']['result']['total_saved'] = $savedRecords;
                if(!empty($errorsData)){
                    $data = collect($errorsData);
                    $model = new InvoicesExport($data);
                    $filename = $user->id.'_localResourceErrors_'.date('d_M_Y_H_i_s').'.xlsx';
                    ($model)->store('files/'.$filename);
                    $response['data']['errorFile'] = $model->getFileUrl($filename);
                    $response['data']['result']['total_unsaved'] = count($jsonData) - $savedRecords;
                    $response['data']['code'] = 500;
                    return $response;
                }
                $response['data']['code'] = 200;
                $response['data']['message'] = 'Local Resource imported successfully';
            }
        }
        return $response;
    }

    public function crisisResource(Request $request){
        $user = JWTAuth::toUser($request->token);
        $response = [
                'data' => [
                    'code'      => 400,
                    'errors'     => '',
                    'message'   => 'Invalid Token! User Not Found.',
                ],
                'status' => false
            ];
        if(!empty($user)){ //&& $user->isAdmin()
            $rules = [
                'jsonData'   => ['required','json'],
            ];

            $validator = Validator::make($request->all(), $rules);
            if ($validator->fails()) {
                $response['data']['message'] = 'Invalid input values.';
                $response['data']['errors'] = $validator->messages();
            }else{
                $jsonData = json_decode($request->get('jsonData'));
                $errorsData = [];
                $rules = [
                   'name'   => ['required', 'max:191',Rule::unique('crisis_resources')],
                   'phoneNumber' => 'required',
                   'website' => 'required',
                   'schoolAdminProfileId' => ['required','exists:school_admin_profiles,id'],
                   'serviceTypeId' => 'required',
                ];
                $response['data']['message'] = 'Invalid input values.';
                $cnt = 0;
                $errorCnt = 1;
                $savedRecords = 0;
                foreach ($jsonData as $key => $value) {
                    $attributes = (Array) $value;
                    $validator = Validator::make($attributes, $rules);
                    if ($validator->fails()) {
                        foreach ($validator->messages()->toArray() as $key => $value) {
                            $errorsData[$cnt]['number'] = $cnt + 1;
                            $errorsData[$cnt]['recordNumber'] = $errorCnt;
                            $errorsData[$cnt]['attribute'] = $key;
                            $errorsData[$cnt]['message'] = $value[0];    
                            ++$cnt;
                        }
                    }
                    else{
                        $schoolAdminProfiles= SchoolAdminProfiles::find($attributes['schoolAdminProfileId']);
                        if(!empty($schoolAdminProfiles)){
                            $attributes['schoolProfileId'] = $schoolAdminProfiles->schoolProfileId;
                            unset($attributes['schoolAdminProfileId']);
                            $localResource = CrisisResource::create($attributes);
                            ++$savedRecords;
                        }
                    }
                    ++$errorCnt;
                }
                $response['status'] = true;
                $response['data']['result']['total_records'] = count($jsonData);
                $response['data']['result']['total_saved'] = $savedRecords;
                if(!empty($errorsData)){
                    $data = collect($errorsData);
                    $model = new InvoicesExport($data);
                    $filename = $user->id.'_crisisResourceErrors_'.date('d_M_Y_H_i_s').'.xlsx';
                    ($model)->store('files/'.$filename);
                    $response['data']['errorFile'] = $model->getFileUrl($filename);
                    $response['data']['result']['total_unsaved'] = count($jsonData) - $savedRecords;
                    $response['data']['code'] = 500;
                    return $response;
                }
                $response['data']['code'] = 200;
                $response['data']['message'] = 'Crisis Resource imported successfully';
            }
        }
        return $response;
    }

    public function responder(Request $request){
        $user = JWTAuth::toUser($request->token);
        $response = [
                'data' => [
                    'code'      => 400,
                    'errors'     => '',
                    'message'   => 'Invalid Token! User Not Found.',
                ],
                'status' => false
            ];
        if(!empty($user) ){ //&& $user->isAdmin()
            $rules = [
                'jsonData'   => ['required','json'],
            ];

            $validator = Validator::make($request->all(), $rules);
            if ($validator->fails()) {
                $response['data']['message'] = 'Invalid input values.';
                $response['data']['errors'] = $validator->messages();
            }else{
                $jsonData = json_decode($request->get('jsonData'));
                $errorsData = [];
                $rules = [
                    'responderId'   => ['required', Rule::unique('responder_profiles')],
                    'title'         => 'required',
                    'firstName'     => 'required',
                    'lastName'      => 'required',
                    'username'      => ['required', 'email', 'max:191', Rule::unique('users')],
                    'position'      => 'required|exists:levels,id',
                    'schoolProfileId' => ['required','exists:school_profiles,id'],
                   
                ];
                $response['data']['message'] = 'Invalid input values.';
                $cnt = 0;
                $errorCnt = 1;
                $savedRecords = 0;
                foreach ($jsonData as $key => $value) {
                    $attributes = (Array) $value;
                    $validator = Validator::make($attributes, $rules);
                    if ($validator->fails()) {
                        foreach ($validator->messages()->toArray() as $key => $value) {
                            $errorsData[$cnt]['number'] = $cnt + 1;
                            $errorsData[$cnt]['recordNumber'] = $errorCnt;
                            $errorsData[$cnt]['attribute'] = $key;
                            $errorsData[$cnt]['message'] = $value[0];    
                            ++$cnt;
                        }
                    }
                    else{
                        $rolesId = Roles::findByAttr('label',User::USER_RESPONDER)->id;

                        $authorizationCode = rand(100000,999999);
                        // First Enter Data in users Table
                        $modelUser = User::create([
                            'username'  => $attributes['username'],
                            'password'  => bcrypt($authorizationCode),
                            'roleId'    => $rolesId,
                            'verified'  => User::STATUS_INACTIVE
                        ]);
                        // Now Enter Data in responder table
                        if($modelUser){
                            //$modelSchoolAdminProfile = SchoolAdminProfiles::where(['userId' => $user->id])->first();
                            $modelSchoolProfile = SchoolProfiles::find($attributes['schoolProfileId']);
                            if(!empty($modelSchoolProfile)){
                               

                                $responderCategory =  ResponderCategory::where('schoolProfileId','=',$modelSchoolProfile->id)
                                                                        ->where('levelId','=',$attributes['position'])->first();
                                $responder = Responder::create([
                                    'title'                 => $attributes['title'],
                                    'firstName'             => $attributes['firstName'],
                                    'lastName'              => $attributes['lastName'],
                                    'responderId'           => $attributes['responderId'],
                                    'userId'                => $modelUser->id,
                                    'position'              => $responderCategory->id,
                                    'schoolProfileId'       => $modelSchoolProfile->id,
                                    'authorizationCode'     => $authorizationCode,
                                    'isAvailable'           => 0,
                                ]);


                                
                                if ($responder) {
                                    ++$savedRecords;
                                    $responder->sendEmail();
                                }
                            }
                        }
                    }
                    ++$errorCnt;
                }
                $response['status'] = true;
                $response['data']['result']['total_records'] = count($jsonData);
                $response['data']['result']['total_saved'] = $savedRecords;
                if(!empty($errorsData)){
                    $data = collect($errorsData);
                    $model = new InvoicesExport($data);
                    $filename = $user->id.'_responderErrors_'.date('d_M_Y_H_i_s').'.xlsx';
                    ($model)->store('files/'.$filename);
                    $response['data']['errorFile'] = $model->getFileUrl($filename);
                    $response['data']['result']['total_unsaved'] = count($jsonData) - $savedRecords;
                    $response['data']['code'] = 500;
                    return $response;
                }
                $response['data']['code'] = 200;
                $response['data']['message'] = 'Responders imported successfully';
            }
        }
        return $response;
    }

    public function student(Request $request){
        $user = JWTAuth::toUser($request->token);
        $response = [
                'data' => [
                    'code'      => 400,
                    'errors'     => '',
                    'message'   => 'Invalid Token! User Not Found.',
                ],
                'status' => false
            ];
        if(!empty($user) && $user->isAdmin()){
            $rules = [
                'jsonData'   => ['required','json'],
            ];

            $validator = Validator::make($request->all(), $rules);
            if ($validator->fails()) {
                $response['data']['message'] = 'Invalid input values.';
                $response['data']['errors'] = $validator->messages();
            }else{
                $jsonData = json_decode($request->get('jsonData'));
                $errorsData = [];
                $rules = [
                   'username'               => ['required', 'email', 'max:191', Rule::unique('users')],
                   'responderId'            => ['required','exists:responder_profiles,responderId'],
                   'firstName'              => 'required',
                   'lastName'               => 'required',
                   'gradeLevel'             => 'required',
                   'schoolProfileId'        => ['required','exists:school_profiles,id'],
                   'studentId'              => ['required', Rule::unique('student_profiles')],
                ];
                $response['data']['message'] = 'Invalid input values.';
                $cnt = 0;
                $errorCnt = 1;
                $savedRecords = 0;
                foreach ($jsonData as $key => $value) {
                    $attributes = (Array) $value;
                    $validator = Validator::make($attributes, $rules);
                    if ($validator->fails()) {
                        foreach ($validator->messages()->toArray() as $key => $value) {
                            $errorsData[$cnt]['number'] = $cnt + 1;
                            $errorsData[$cnt]['recordNumber'] = $errorCnt;
                            $errorsData[$cnt]['attribute'] = $key;
                            $errorsData[$cnt]['message'] = $value[0];    
                            ++$cnt;
                        }
                    }
                    else{
                        // First Check weather the Responder Is counselor or not
                        $responderProfile = Responder::where('responderId','=',$attributes['responderId'])->first();

                        //if(!empty($responderProfile) && strtolower($responderProfile->position) == "counselor")
                        if(!empty($responderProfile) && $responderProfile->getCategory->levelId == 1 )
                        {
                            $rolesId = Roles::findByAttr('label','student')->id;
                            $authorizationCode = rand(100000,999999);
                            // Second Enter Data in users Table
                            $user = User::create([
                                'username'  => $attributes['username'],
                                'password'  => bcrypt($authorizationCode),
                                'roleId'    => $rolesId,
                                'verified'  => User::STATUS_INACTIVE
                            ]);

                            // Third Get schoolAdminProfiles Table schoolProfileId
                            //$schoolAdminProfiles= SchoolAdminProfiles::find($attributes['schoolAdminProfileId']);

                            
                            // Fourth Enter Data in studentProfiles Table
                            $studentProfile = Student::create([
                                'userId'            => $user->id,
                                'schoolProfileId'   => $attributes['schoolProfileId'],
                                'studentId'         => $attributes['studentId'],
                                'firstName'         => $attributes['firstName'],
                                'lastName'          => $attributes['lastName'],
                                'gradeLevel'        => $attributes['gradeLevel'],
                                'authorizationCode' => $authorizationCode,
                            ]);

                            // Fifth Enter Data in responder_students Table
                            $studentResponder = StudentResponder::create([
                                'studentProfileId'      => $studentProfile->id,
                                'responderProfileId'    => $responderProfile->id,
                            ]);
                            

                            if ($user && $studentProfile && $studentResponder) {
                                ++$savedRecords;
                                // $studentProfile->sendEmail();
                            }
                        }else{
                            $errorsData[$cnt]['number'] = $cnt + 1;
                            $errorsData[$cnt]['recordNumber'] = $errorCnt;
                            $errorsData[$cnt]['attribute'] = 'responderId';
                            $errorsData[$cnt]['message'] = (empty($responderProfile)) ? 'Invalid responderId' : 'Responder is not a primary responder';    
                            ++$cnt;
                        }
                    }
                    ++$errorCnt;
                }
                $response['status'] = true;
                $response['data']['result']['total_records'] = count($jsonData);
                $response['data']['result']['total_saved'] = $savedRecords;
                if(!empty($errorsData)){
                    $data = collect($errorsData);
                    $model = new InvoicesExport($data);
                    $filename = $user->id.'_studentErrors_'.date('d_M_Y_H_i_s').'.xlsx';
                    ($model)->store('files/'.$filename);
                    $response['data']['errorFile'] = $model->getFileUrl($filename);
                    $response['data']['result']['total_unsaved'] = count($jsonData) - $savedRecords;
                    $response['data']['code'] = 500;
                    return $response;
                }
                $response['data']['code'] = 200;
                $response['data']['message'] = 'Students imported successfully';
            }
        }
        return $response;
    }
}
