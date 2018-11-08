<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use JWTAuthException;
use JWTAuth;
use App\Models\Api\ApiUser as User;
use App\Models\Api\ApiResponder as Responder;
use App\Models\Api\ApiStudent as Student;
use App\Models\Roles;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use App\Models\Api\ApiSchoolAdminProfiles as SchoolAdminProfiles;
use App\Models\Api\ApiStudentResponder as StudentResponder;
use App\Models\Api\ApiThreads as Threads;

class ResponderController extends Controller
{

    // Get Responder
    public function getResponder(Request $request)
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
               'schoolAdminProfilesId' => 'required',
            ];
            $validator = Validator::make($request->all(), $rules);
            if ($validator->fails()) {
                $response['data']['message'] = 'Invalid input values.';
                $response['data']['errors'] = $validator->messages();
            }else
            {


                $responder = Responder::join('users', 'users.id', '=', 'responder_profiles.userId')
                                        ->select('responder_profiles.id','responder_profiles.userId','users.username','users.avatarFilePath','responder_profiles.firstName','responder_profiles.lastName','responder_profiles.title','responder_profiles.responderId','responder_profiles.position','responder_profiles.authorizationCode')
                                        ->where('schoolAdminProfilesId','=',$request->schoolAdminProfilesId)
                                        ->get();
                foreach($responder as $res)
                {
                    $res['resNameId']= $res->firstName."(".$res->responderId.")";
                }
                
                if ($responder) {
                    $response['data']['message'] = 'Request Successfull';
                    $response['data']['code'] = 200;
                    $response['data']['result'] = $responder;
                    $response['status'] = true;
                }
            }
        }
        return $response;
    }

    // Get Responder
    public function getResponderCounselor(Request $request)
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
               'schoolAdminProfilesId' => 'required',
            ];
            $validator = Validator::make($request->all(), $rules);
            if ($validator->fails()) {
                $response['data']['message'] = 'Invalid input values.';
                $response['data']['errors'] = $validator->messages();
            }else
            {


                $responder = Responder::join('users', 'users.id', '=', 'responder_profiles.userId')
                                        ->select('responder_profiles.id','responder_profiles.userId','users.username','users.avatarFilePath','responder_profiles.firstName','responder_profiles.lastName','responder_profiles.title','responder_profiles.responderId','responder_profiles.position','responder_profiles.authorizationCode')
                                        ->where('schoolAdminProfilesId','=',$request->schoolAdminProfilesId)
                                        ->where('position','=','Counselor')
                                        ->get();
                foreach($responder as $res)
                {
                    $res['resNameId']= $res->firstName."(".$res->responderId.")";
                }
                
                if ($responder) {
                    $response['data']['message'] = 'Request Successfull';
                    $response['data']['code'] = 200;
                    $response['data']['result'] = $responder;
                    $response['status'] = true;
                }
            }
        }
        return $response;
    }

    // Get Responder for Responder
    public function getResponderForResponder(Request $request)
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
               'schoolAdminProfilesId' => 'required',
               'userId' => 'required',
            ];
            $validator = Validator::make($request->all(), $rules);
            if ($validator->fails()) {
                $response['data']['message'] = 'Invalid input values.';
                $response['data']['errors'] = $validator->messages();
            }else
            {


                $responder = Responder::join('users', 'users.id', '=', 'responder_profiles.userId')
                                        ->select('responder_profiles.id','responder_profiles.userId','users.username','users.avatarFilePath','users.onlineStatus','responder_profiles.firstName','responder_profiles.lastName','responder_profiles.title','responder_profiles.responderId','responder_profiles.position','responder_profiles.authorizationCode')
                                        ->where('schoolAdminProfilesId','=',$request->schoolAdminProfilesId)
                                        ->where('responder_profiles.userId','!=',$request->userId)
                                        ->get();
                foreach($responder as $res)
                {
                    $res['resNameId']= $res->firstName."(".$res->responderId.")";
                }
                
                if ($responder) {
                    $response['data']['message'] = 'Request Successfull';
                    $response['data']['code'] = 200;
                    $response['data']['result'] = $responder;
                    $response['status'] = true;
                }
            }
        }
        return $response;
    }

    // Add Responder
    public function addResponder(Request $request)
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
        if(!empty($user) && $user->isAdmin())
        {
            $response = [
                'data' => [
                    'code' => 400,
                    'message' => 'Something went wrong. Please try again later!',
                ],
               'status' => false
            ];
            $rules = [
                'responderId'   => ['required', Rule::unique('responder_profiles')],
                'title'         => 'required',
                'firstName'     => 'required',
                'lastName'      => 'required',
                'username'      => ['required', 'email', 'max:191', Rule::unique('users')],
                'position'      => 'required',
               
            ];

            $validator = Validator::make($request->all(), $rules);
            if ($validator->fails()) {
                $response['data']['message'] = 'Invalid input values.';
                $response['data']['errors'] = $validator->messages();
            }else
            {

                $rolesId = Roles::findByAttr('label',User::USER_RESPONDER)->id;

                $authorizationCode = rand(100000,999999);
                // First Enter Data in users Table
                $modelUser = User::create([
                    'username'  => $request->get('username'),
                    'password'  => bcrypt($authorizationCode),
                    'roleId'    => $rolesId,
                    'verified'  => User::STATUS_INACTIVE
                ]);
                // Now Enter Data in responder table
                if($modelUser){
                    $modelSchoolAdminProfile = SchoolAdminProfiles::where(['userId' => $user->id])->first();
                    if(!empty($modelSchoolAdminProfile)){
                        $responder = Responder::create([
                            'title'                 => $request->get('title'),
                            'firstName'             => $request->get('firstName'),
                            'lastName'              => $request->get('lastName'),
                            'responderId'           => $request->get('responderId'),
                            'userId'                => $modelUser->id,
                            'position'              => $request->get('position'),
                            'schoolAdminProfilesId' => $modelSchoolAdminProfile->id,
                            'authorizationCode'     => $authorizationCode,
                            'isAvailable'           => 0,
                        ]);
                        
                        if ($responder && $responder->sendEmail()) {
                            $response['data']['code'] = 200;
                            //$response['data']['result'] = $responder;
                            $response['status'] = true;
                            $response['data']['message'] = 'Responder added Successfully';
                            $response['data']['school'] = $responder->schoolAdminProfile->getResponseData();
                            $response['data']['user'] = $modelUser->getArrayResponse();
                        }
                    }
                }
            }
        }
        return $response;
    }


    // Edit Responder
    public function editResponder(Request $request)
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
        if(!empty($user) && $user->isAdmin())
        {
            $response = [
                'data' => [
                    'code' => 400,
                    'message' => 'Something went wrong. Please try again later!',
                ],
               'status' => false
            ];
            $rules = [
               'userId'   => ['required','exists:users,id'], 
               'title'   => 'required',
               'firstName'   => 'required',
               'lastName' => 'required',
               'position' => 'required',
               
            ];

            $validator = Validator::make($request->all(), $rules);
            if ($validator->fails()) {
                $response['data']['message'] = 'Invalid input values.';
                $response['data']['errors'] = $validator->messages();
            }
            else
            {
                $responderCheck = Responder::where('userId', $request->get('userId'))->first();
                $studentResponder = StudentResponder::where('responderProfileId','=',$responderCheck->id)->first();

                if($responderCheck->position == "counselor" || $responderCheck->position == "Counselor"
                        || $responderCheck->position == "COUNSELOR")
                {
                    if($request->position == "counselor" || $request->position == "Counselor" || $request->position == "COUNSELOR")
                    {
                          $responder = Responder::where('userId', $request->get('userId'))
                                                ->update([
                                                    'title'        => $request->get('title'),
                                                    'firstName'    => $request->get('firstName'),
                                                    'lastName'     => $request->get('lastName'),
                                                    'position'     => $request->get('position'),
                                                ]);           
                            
                        if ($responder) {
                            $response['data']['message'] = 'Responder updated Successfull';
                            $response['data']['code'] = 200;
                            $response['status'] = true;
                        }
                        
                    }
                    else
                    {
                      

                        if(empty($studentResponder))
                        {
                
                            $responder = Responder::where('userId', $request->get('userId'))
                                                            ->update([
                                                                'title'        => $request->get('title'),
                                                                'firstName'    => $request->get('firstName'),
                                                                'lastName'     => $request->get('lastName'),
                                                                'position'     => $request->get('position'),
                                                            ]);           
                            
                            if ($responder) {
                                $response['data']['message'] = 'Responder updated Successfull';
                                $response['data']['code'] = 200;
                                $response['status'] = true;
                            }
                        }
                        else
                        {
                            $response['data']['message'] = 'Request Successfull';
                            $response['data']['code'] = 500;
                            $response['data']['errors'] = 'Some student assigned to this responder. Please re-assigned all the designated students.';
                        }
                    }
                }
                else
                {
                    $responder = Responder::where('userId', $request->get('userId'))
                                            ->update([
                                                'title'        => $request->get('title'),
                                                'firstName'    => $request->get('firstName'),
                                                'lastName'     => $request->get('lastName'),
                                                'position'     => $request->get('position'),
                                            ]);           
                        
                    if ($responder) {
                        $response['data']['message'] = 'Responder updated Successfull';
                        $response['data']['code'] = 200;
                        $response['status'] = true;
                    }
                }
            }
        }
        return $response;
    }

    public function deleteResponder(Request $request)
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
        if(!empty($user) && $user->isAdmin()){
            $rules = [
                'userId'   => ['required','exists:responder_profiles,userId']
            ];

            $validator = Validator::make($request->all(), $rules);
            if ($validator->fails()) {
                $response['data']['message'] = 'Invalid input values.';
                $response['data']['errors'] = $validator->messages();
            }else{
                $modelUser = User::where('id','=',$request->get('userId'))->first();
                $modelSRCnt = StudentResponder::where('responderProfileId','=',$modelUser->responder->id)->count();
                if($modelSRCnt >= 1 && $modelUser->responder->isCounselor()){
                    $response['data']['message'] = 'Request Successfull';
                    $response['data']['code'] = 500;
                    $response['data']['errors'] = 'Some student assigned to this responder. Please re-assigned all the designated students.';

                    return $response;
                }
                $modelSRCnt = StudentResponder::where('responderProfileId','=',$modelUser->responder->id)->delete();
                $modelResponder = Responder::where('id','=',$modelUser->responder->id)->first();
                if($modelResponder->delete() && $modelUser->delete()){
                    $response['data']['message'] = 'Responder deleted Successfully';
                    $response['data']['code'] = 200;
                    $response['status'] = true;
                }
            }
        }
        return $response;
    }

    // Add Responder
    public function signup(Request $request)
    {
        $response = [
            'data' => [
                'code' => 400,
                'message' => 'Something went wrong. Please try again later!',
            ],
           'status' => false
        ];
        $rules = [
            'schoolId'          => ['required', 'exists:school_admin_profiles,id'],
            'accessCode'        => ['required', 'exists:school_profiles,accessCode'],
            'role'              => ['required', 'in:'.implode(",",array_keys(User::getTypes()))],
            // 'authorizationCode' => ['required_if:role,"'.User::USER_RESPONDER, 'exists:responder_profiles,authorizationCode'],
            'resAuthCode' => ['required_if:role,"'.User::USER_RESPONDER, 'exists:responder_profiles,authorizationCode'],
            'stdAuthCode' => ['required_if:role,"'.User::USER_STUDENT, 'exists:student_profiles,authorizationCode'],
            'username'          => ['required', 'email', 'max:191', 'exists:users,username']
        ];

        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            $response['data']['message'] = 'Invalid input values.';
            $response['data']['errors'] = $validator->messages();
        }else
        {
            $response['status'] = true;
            $response['data']['message'] = 'Invalid input values.';
            $response['data']['code'] = 500;
            if($request->get('role') == User::USER_RESPONDER){
                $modelUser = User::join('responder_profiles', 'responder_profiles.userId', '=', 'users.id')
                            ->where('users.username','=',$request->get('username'))
                            ->first();
                $modelSchoolAdminProfile = SchoolAdminProfiles::join('school_profiles', 'school_profiles.id', '=', 'school_admin_profiles.schoolProfileId')
                            ->where('school_admin_profiles.id','=',$request->get('schoolId'))->first();
                if(!empty($modelUser) && !empty($modelSchoolAdminProfile) && $modelUser->isResponder()){
                    if($modelUser->authorizationCode == $request->get('resAuthCode') && $modelSchoolAdminProfile->accessCode == $request->get('accessCode')){
                        $resetToken = md5(time() . $modelUser->id . 'waves');

                        $user = User::where('id','=',$modelUser->userId)->first();
                        if($user){
                            $user->update([
                                'resetPasswordToken' => $resetToken
                            ]);
                            $response['data']['message'] = 'Request Successfull';
                            $response['data']['result'] = $user->getArrayResponse();
                            $response['data']['resetToken'] = $resetToken;
                            $response['data']['code'] = 200;
                        }
                    }
                }
            }
            elseif($request->get('role') == User::USER_STUDENT){
                $modelUser = User::join('student_profiles', 'student_profiles.userId', '=', 'users.id')
                            ->where('users.username','=',$request->get('username'))
                            ->first();
                $modelSchoolAdminProfile = SchoolAdminProfiles::join('school_profiles', 'school_profiles.id', '=', 'school_admin_profiles.schoolProfileId')
                            ->where('school_admin_profiles.id','=',$request->get('schoolId'))->first();
                if(!empty($modelUser) && !empty($modelSchoolAdminProfile) && $modelUser->isStudent()){
                    if($modelUser->authorizationCode == $request->get('stdAuthCode') && $modelSchoolAdminProfile->accessCode == $request->get('accessCode')){
                        $resetToken = md5(time() . $modelUser->id . 'waves');

                        $user = User::where('id','=',$modelUser->userId)->first();
                        if($user){
                            $user->update([
                                'resetPasswordToken' => $resetToken
                            ]);
                            $response['data']['message'] = 'Request Successfull';
                            $response['data']['result'] = $user->getArrayResponse();
                            $response['data']['resetToken'] = $resetToken;
                            $response['data']['code'] = 200;
                        }
                    }
                }
            }
        }
        return $response;
    }

    public function ResponderAssignToStudent(Request $request)
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
        if(!empty($user) && $user->isStudent())
        {

            $response = [
                'data' => [
                    'code' => 400,
                    'message' => 'Something went wrong. Please try again later!',
                ],
                'status' => false
            ];
            $rules = [
                'userId' => 'required',
            ];
            $validator = Validator::make($request->all(), $rules);
            if ($validator->fails()) {
                $response['data']['message'] = 'Invalid input values.';
                $response['data']['errors'] = $validator->messages();
            }else
            {
                $student = Student::where('userId','=',$request->userId)->first();

                if(!empty($student))
                {
                    $studentResponder = Responder::join('users', 'users.id', '=',
                                                        'responder_profiles.userId')
                                ->join('responder_students', 'responder_students.responderProfileId', '=', 'responder_profiles.id')
                                ->select('responder_profiles.*', 'users.username','users.avatarFilePath','users.onlineStatus')
                                ->where('studentProfileId','=',$student->id)
                                ->where('responder_students.verified','=',1)
                                ->get();

                    $arrA=array();
                    $count=0;
                    foreach($studentResponder as $res)
                    {
                        $arrA[$count] = $res->id;
                        $count++;
                        $fromUser = $user->id;
                        $toUser = $res->userId;
                        $isExist = Threads::where(function($query) use ($fromUser,$toUser) {
                                        return $query->where('fromUser','=',$fromUser)
                                            ->where('toUser','=',$toUser)
                                            ->where('type','=',0);
                                    })
                                 ->orWhere(function($query) use ($fromUser,$toUser) {
                                        return $query->where('fromUser','=',$toUser)
                                            ->where('toUser','=',$fromUser)
                                            ->where('type','=',0);
                                    })
                                 ->first();

                        $res['chatFlag']= false;
                        if(!empty($isExist))
                            $res['chatFlag']= true;

                        $res['status']= true;                        
                    }
                    
                    $otherResponders =  Responder::join('users', 'users.id', '=', 
                                                        'responder_profiles.userId')
                                ->select('responder_profiles.*', 'users.username','users.avatarFilePath')
                                ->where('schoolAdminProfilesId','=',$student->schoolProfile->schoolAdminProfile->id)
                                ->where('users.verified','=',1)
                                ->whereNotIn('responder_profiles.id', $arrA)
                                ->get();

                    foreach($otherResponders as $res)
                    {
                        $res['chatFlag']= false;
                        $res['status']= false;
                    }


                    $result = $studentResponder->merge($otherResponders);                
                    
                    if($result) 
                    {
                        $response['data']['message'] = 'Request Successfull';
                        $response['data']['code'] = 200;
                        $response['data']['result'] = $result;
                        $response['status'] = true;
                    }
                }
                else
                {
                    $response['data']['message'] = 'Student Does not exist';
                    $response['data']['code'] = 400;
                    $response['status'] = true;
                }
            }
        }
        return $response;
    }
}
