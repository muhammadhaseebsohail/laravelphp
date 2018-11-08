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
use App\Models\Api\ApiSchoolAdminProfiles as SchoolAdminProfiles;
use App\Models\Api\ApiStudentResponder as StudentResponder;
use App\Models\Api\ApiResponder as Responder;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $response = [
                'data' => [
                    'code' => 400,
                    'message' => 'Invalid credentials or missing parameters',
                ],
                'status' => false
            ];
        if(isset($request['username'],$request['password'])){
            $credentials = $request->only('username', 'password');
            $token = null;
            try {
               if (!$token = JWTAuth::attempt($credentials)) {
                    return [
                        'data' => [
                            'code' => 400,
                            'message' => 'Email or password wrong.',
                        ],
                        'status' => false
                    ];
               }
            } catch (JWTAuthException $e) {
                return [
                        'data' => [
                            'code' => 500,
                            'message' => 'Fail to create token.',
                        ],
                        'status' => false
                    ];
            }
            $user = JWTAuth::toUser($token);
            if($user->isValidUser())
            {
                $response['data']['code'] = 200;
                $flag = false;
                if($user->isAdmin() && !$user->isVerified()){
                    $flag = true;
                    $user->verified = User::STATUS_ACTIVE;
                    $user->save();
                }         
                $response['status'] = true; 
                $code = $response['data']['code'];      
                $response['data'] = User::loginUser($user->id,$token);
                $response['data']['code'] = $code; 

                if($user->isAdmin()){
                    if($flag)
                        $response['data']['code'] = 300;

                    $response['data']['school'] = $user->schoolAdminProfile->getResponseData();
                }
                elseif($user->isResponder()){
                    $response['data']['user'] = $user->responder->getResponseData();
                    $response['data']['school'] = $user->responder->schoolAdminProfile->getResponseData();
                }
                elseif($user->isStudent()){
                    $response['data']['user'] = $user->student->getResponseData();
                    $response['data']['school'] = $user->student->schoolProfile->schoolAdminProfile->getResponseData();
                }
            }
            else
                $response['data']['message'] = 'Not a valid user';
        }
        return $response;
    }

    public function isValidToken(Request $request){
        $user = JWTAuth::toUser($request->token);
        $response = [
                'data' => [
                    'code' => 400,
                    'message' => 'Invalid Token! User Not Found.',
                ],
                'status' => false
            ];
        if(!empty($user)){
            $response['status'] = true;
            $response['data']['code'] = 200;
            $flag = false;
            if($user->isAdmin() && !$user->isVerified()){
                $flag = true;
                $user->verified = User::STATUS_ACTIVE;
                $user->save();
            }      
            $token = $request->token;
            $code = $response['data']['code'];  
            $response['data'] = User::loginUser($user->id,$token,'Valid Token');
            $response['data']['code'] = $code; 
            if($user->isAdmin()){
                if($flag)
                    $response['data']['code'] = 300;

                $response['data']['school'] = $user->schoolAdminProfile->getResponseData();
            }
            elseif($user->isResponder()){
                $response['data']['user'] = $user->responder->getResponseData();
                $response['data']['school'] = $user->responder->schoolAdminProfile->getResponseData();
            }
            elseif($user->isStudent()){
                $response['data']['user'] = $user->student->getResponseData();
                $response['data']['school'] = $user->student->schoolProfile->schoolAdminProfile->getResponseData();
            }
        }
        return $response;
    }

    public function logout(Request $request){
        $user = JWTAuth::toUser($request->token);
        $response = [
                'data' => [
                    'code' => 400,
                    'message' => 'Invalid Token! User Not Found.',
                ],
                'status' => false
            ];
        if(!empty($user)){
            JWTAuth::invalidate($request->token);
            $user->clearDeviceToken();
            $response['data']['message'] = 'Logout successfully.';
            $response['data']['code'] = 200;
            $response['status'] = true;
        }
        return $response;
    }

    public function updateUserDevice(Request $request){
        $user = JWTAuth::toUser($request->token);
        $response = [
                'data' => [
                    'code' => 400,
                    'message' => 'Invalid Token! User Not Found.',
                ],
                'status' => false
            ];
        if(!empty($user)){
            $rules = [
                'deviceToken' => 'required',
                'deviceType' => 'required|Numeric|in:0,1'
            ];
            $validator = Validator::make($request->all(), $rules);
            if ($validator->fails()) {
                $response['data']['message'] = 'Invalid input values.';
                $response['data']['errors'] = $validator->messages();
            }else{
                $response['status'] = true;
                $response['data']['code'] = 200;
                $response['data']['message'] = 'Request Successfull.';
                $model = User::where('id','=',$user->id)->first();
                if(!empty($model)){
                    $model->update([
                        'deviceToken' => $request->deviceToken,
                        'deviceType' => $request->deviceType
                    ]);
                }
                else
                    $response['data']['message'] = 'Device token not saved successfully. Please try again.';
            }
        }
        return $response;
    }

    public function getRoles(Request $request)
    {
        $response = [
                'data' => [
                    'error' => 400,
                    'message' => 'No data found.',
                ],
                'status' => false
            ];
        $modelRoles = Roles::get();

        $response['data']['message'] = 'Request Successfull';
        $response['data']['error'] = 200;
        $response['data']['result'] = $modelRoles;
        $response['status'] = true;
        return $response;
    }

    public function createAdmin(Request $request)
    {
        $response = [
            'data' => [
                'error' => 400,
                'message' => 'Something went wrong. Please try again later!',
            ],
            'status' => false
        ];
        $request['roleId'] = 'super_admin';
        $rules = [
            'username'   => ['required', 'email', 'max:191', Rule::unique('users')],
            'password'   => 'required|min:5',
            'roleId'     => ['required','exists:roles,label'],
            'code'       => ['required','in:stackcru']
        ];

        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            $response['data']['message'] = 'Invalid input values.';
            $response['data']['errors'] = $validator->messages();
        }else{
            $rolesId = Roles::findByAttr('label',$request->get('roleId'))->id;
            $user = User::create([
                'username'  => $request->get('username'),
                'password'  => bcrypt($request->get('password')),
                'roleId'    => $rolesId,
                'verified'  => User::STATUS_ACTIVE
            ]);
            if ($user) {
                $response['data']['message'] = 'Request Successfull';
                $response['data']['error'] = 200;
                $response['data']['result'] = $user->getArrayResponse();
                $response['status'] = true;
            }
        }
        return $response;
    }

    // Responder & Student Signup
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
            'stdAuthCode' => ['required_if:role,"'.User::USER_STUDENT, 'exists:student_profiles,authorizationCode']
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
                            ->where('responder_profiles.authorizationCode','=',$request->get('resAuthCode'))
                            ->first();
                $modelSchoolAdminProfile = SchoolAdminProfiles::join('school_profiles', 'school_profiles.id', '=', 'school_admin_profiles.schoolProfileId')
                            ->where('school_admin_profiles.id','=',$request->get('schoolId'))->first();
                if(!empty($modelUser) && !empty($modelSchoolAdminProfile) && $modelUser->isResponder()){
                    if($modelUser->authorizationCode == $request->get('resAuthCode') && $modelSchoolAdminProfile->accessCode == $request->get('accessCode') && $modelSchoolAdminProfile->id == $modelUser->schoolAdminProfilesId){
                        $resetToken = md5(time() . $modelUser->id . 'waves');

                        $user = User::where('id','=',$modelUser->userId)->first();
                        if($user){
                            $user->update([
                                'resetPasswordToken' => $resetToken,
                                'createdResetPToken' => date('Y-m-d H:i:s')
                            ]);
                            $response['data']['message'] = 'Request Successfull';
                            $response['data']['result'] = $user->responder->getResponseData();
                            $response['data']['resetToken'] = $resetToken;
                            $response['data']['code'] = 200;
                        }
                    }
                }
            }
            elseif($request->get('role') == User::USER_STUDENT){
                $modelUser = User::join('student_profiles', 'student_profiles.userId', '=', 'users.id')
                            ->where('student_profiles.authorizationCode','=',$request->get('stdAuthCode'))
                            ->first();
                $modelSchoolAdminProfile = SchoolAdminProfiles::join('school_profiles', 'school_profiles.id', '=', 'school_admin_profiles.schoolProfileId')
                            ->where('school_admin_profiles.id','=',$request->get('schoolId'))->first();
                if(!empty($modelUser) && !empty($modelSchoolAdminProfile) && $modelUser->isStudent()){
                    if($modelUser->authorizationCode == $request->get('stdAuthCode') && $modelSchoolAdminProfile->accessCode == $request->get('accessCode') && $modelSchoolAdminProfile->schoolProfileId == $modelUser->schoolProfileId){
                        $resetToken = md5(time() . $modelUser->id . 'waves');

                        $user = User::where('id','=',$modelUser->userId)->first();
                        if($user){
                            $user->update([
                                'resetPasswordToken' => $resetToken,
                                'createdResetPToken' => date('Y-m-d H:i:s')
                            ]);
                            $response['data']['message'] = 'Request Successfull';
                            $response['data']['result'] = $user->student->getResponseData();
                            $response['data']['resetToken'] = $resetToken;
                            $response['data']['code'] = 200;
                        }
                    }
                }
            }
        }
        return $response;
    }

    // Update Online Status for User
    public function updateOnlineStatus(Request $request)
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
               'status'   => ['required', 'in:0,1']
            ];

            $validator = Validator::make($request->all(), $rules);
            if ($validator->fails()) {
                $response['data']['message'] = 'Invalid input values.';
                $response['data']['errors'] = $validator->messages();
            }else
            {
                $response['status'] = true;
                $response['data']['code'] = 401;
                $isSaved = User::where('id','=',$user->id)
                                ->update(['onlineStatus' => $request->status]);
                if($isSaved){
                    $response['data']['code'] = 200;
                    $response['data']['message'] = 'Request Successfull';
                }
            }
        }   
        return $response;
    }
}
