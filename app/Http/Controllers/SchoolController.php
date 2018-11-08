<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use JWTAuthException;
use JWTAuth;
use App\Http\Requests;
use App\Models\Api\ApiUser as User;
use App\Models\Api\ApiSchoolProfiles as SchoolProfiles;
use App\Models\Api\ApiSchoolAdminProfiles as SchoolAdminProfiles;
use App\Models\Api\ApiStudent as Student;
use App\Models\Api\ApiResponder as Responder;
use App\Models\Roles;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use App\Models\Api\ApiStudentResponder as StudentResponder;
use App\Models\Api\ApiLocalResource as LocalResource;
use App\Models\Api\ApiCrisisResource as CrisisResource;

class SchoolController extends Controller
{

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
        if(!empty($user) && $user->isSuperAdmin()){
            $model = SchoolAdminProfiles::get();
            $sData = [];
            foreach ($model as $key => $value) {
                $sData[$key] = $value->getResponseData();
            }
            $response['data']['message'] = 'Request Successfull';
            $response['data']['code'] = 200;
            $response['data']['result'] = $sData;
            $response['status'] = true;
        }
        return $response;
    }

    /**
    *
    * Get List of schools without token
    *
    **/
    public function listwt(Request $request)
    {
        $response = [
                'data' => [
                    'code'      => 400,
                    'errors'     => '',
                    'message'   => 'Something went wrong. Please try again later!',
                ],
                'status' => false
            ];
        $model = SchoolAdminProfiles::get();
        $sData = [];
        foreach ($model as $key => $value) {
            $sData[$key] = $value->getResponseData();
        }
        $response['data']['message'] = 'Request Successfull';
        $response['data']['code'] = 200;
        $response['data']['result'] = $sData;
        $response['status'] = true;
        return $response;
    }

    public function createSchool(Request $request)
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
        if(!empty($user) && $user->isSuperAdmin()){
            $rules = [
                'username'   => ['required', 'email', 'max:191', Rule::unique('users')],
                'schoolName' => ['required','max:255',Rule::unique('school_profiles')],
                'firstName'  => ['required','max:200'],
                'lastName'   => ['required','max:200']
            ];

            $validator = Validator::make($request->all(), $rules);
            if ($validator->fails()) {
                $response['data']['message'] = 'Invalid input values.';
                $response['data']['errors'] = $validator->messages();
            }else{
                $rolesId = Roles::findByAttr('label',User::USER_ADMIN)->id;
                $password = bin2hex(openssl_random_pseudo_bytes(3));//substr(uniqid('', true), -5);
                $user = User::create([
                    'username'  => $request->get('username'),
                    'password'  => bcrypt($password),
                    'roleId'    => $rolesId,
                    'verified'  => User::STATUS_INACTIVE
                ]);
                if($user){
                    $modelSchoolProfile = new SchoolProfiles();
                    $modelSchoolProfile->schoolName = $request->get('schoolName');
                    $modelSchoolProfile->generateAccessCode();
                    $modelSchoolProfile->save();

                    if($modelSchoolProfile){
                        $modelSchoolAdminProfile = SchoolAdminProfiles::create([
                            'userId'            => $user->id,
                            'schoolProfileId'   => $modelSchoolProfile->id,
                            'firstName'         => $request->get('firstName'),
                            'lastName'          => $request->get('lastName')
                        ]);
                        if($modelSchoolAdminProfile && $modelSchoolAdminProfile->sendEmail($password)){
                            $response['data']['message'] = 'School Added Successfully';
                            $response['data']['code'] = 200;
                            $response['status'] = true;
                            $response['data']['result'] = [
                                'schoolName'    =>  $modelSchoolAdminProfile->schoolName,
                                'accessCode'    =>  $modelSchoolProfile->accessCode,
                                'firstName'     =>  $modelSchoolAdminProfile->firstName,
                                'lastName'      =>  $modelSchoolAdminProfile->lastName,
                                'username'      =>  $user->username
                            ];
                        }
                    }
                }
            }
        }
        return $response;
    }

    public function edit(Request $request)
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
        if(!empty($user) && $user->isSuperAdmin()){
            $rules = [
                'schoolId'   => ['required','exists:school_admin_profiles,id']
            ];
            if($request->get('schoolName') && !empty($request->get('schoolName'))){
                $modelSchoolAdminProfile = SchoolAdminProfiles::where(['id' => $request->get('schoolId')])->first();
                $rules['schoolName'] = ['required','max:255',"unique:school_profiles,schoolName,".$modelSchoolAdminProfile->schoolProfile->id];
            }
            if($request->get('firstName') && !empty($request->get('firstName')))
                $rules['firstName'] = ['required','max:200'];
            if($request->get('lastName') && $request->get('lastName'))
                $rules['lastName'] = ['required','max:200'];

            $validator = Validator::make($request->all(), $rules);
            if ($validator->fails()) {
                $response['data']['message'] = 'Invalid input values.';
                $response['data']['errors'] = $validator->messages();
            }else{
                $modelSchoolAdminProfile = SchoolAdminProfiles::where(['id' => $request->get('schoolId')])->first();
                $modelSchoolAdminProfile->firstName = (!empty($request->get('firstName'))) ? $request->get('firstName') : $modelSchoolAdminProfile->firstName;
                $modelSchoolAdminProfile->lastName = (!empty($request->get('lastName'))) ? $request->get('lastName') : $modelSchoolAdminProfile->lastName;
                if($modelSchoolAdminProfile->save()){
                    if(!empty($request->get('schoolName'))){
                        $modelSchoolProfile = SchoolProfiles::where(['id' => $modelSchoolAdminProfile->schoolProfileId])->first();
                        $modelSchoolProfile->schoolName = $request->get('schoolName');
                        $modelSchoolProfile->generateAccessCode();
                        $modelSchoolProfile->save();
                    }
                    $response['data']['message'] = 'School updated Successfully';
                    $response['data']['code'] = 200;
                    $response['status'] = true;
                    $response['data']['result'] = $modelSchoolAdminProfile->getResponseData();
                }
            }
        }
        return $response;
    }

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
        if(!empty($user) && $user->isSuperAdmin()){
            $rules = [
                'schoolId'   => ['required','exists:school_admin_profiles,id']
            ];

            $validator = Validator::make($request->all(), $rules);
            if ($validator->fails()) {
                $response['data']['message'] = 'Invalid input values.';
                $response['data']['errors'] = $validator->messages();
            }else{
                $modelSchoolAdminProfile = SchoolAdminProfiles::where(['id' => $request->get('schoolId')])->first();
                if(!empty($modelSchoolAdminProfile)){
                    $modelStudentProfile = Student::where(['schoolProfileId' => $modelSchoolAdminProfile->schoolProfileId])->get();
                    foreach ($modelStudentProfile as $key => $value) {
                        $userId = $value->userId;
                        $modelRS = StudentResponder::where(['studentProfileId' => $value->id])->delete();
                        if(!empty($value->delete())){
                            $modelUser = User::where(['id' => $userId])->delete();
                        }
                    }

                    $modelResponderProfile = Responder::where(['schoolAdminProfilesId' => $modelSchoolAdminProfile->id])->get();
                    foreach ($modelResponderProfile as $key => $value) {
                        $userId = $value->userId;
                        $modelRS = StudentResponder::where(['responderProfileId' => $value->id])->delete();
                        if(!empty($value->delete())){
                            $modelUser = User::where(['id' => $userId])->delete();
                        }
                    }

                    $schoolProfileId = $modelSchoolAdminProfile->schoolProfileId;
                    $userIdAdmin = $modelSchoolAdminProfile->userId;

                    $modelL = LocalResource::where(['schoolProfileId' => $schoolProfileId])->delete();
                    $modelC = CrisisResource::where(['schoolProfileId' => $schoolProfileId])->delete();

                    $modelSchoolAdminProfile->delete();

                    $modelSchoolProfile = SchoolProfiles::where(['id' => $schoolProfileId])->first();

                    if(!empty($modelSchoolProfile))
                        $modelSchoolProfile->delete();

                    $modelUser = User::where(['id' => $userIdAdmin])->delete();


                    $response['data']['message'] = 'School deleted Successfully';
                    $response['data']['code'] = 200;
                    $response['status'] = true;
                }
            }
        }
        return $response;
    }
}
