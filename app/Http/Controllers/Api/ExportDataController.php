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
use App\Models\Api\ApiStudent as Student;
use App\Models\Api\ApiResponder as Responder;
use App\Models\Api\ApiLocalResource as LocalResource;
use App\Models\Api\ApiCrisisResource as CrisisResource;
use App\Models\DataExport;
use PDF;
class ExportDataController extends Controller
{
    public function students(Request $request){
        $user = JWTAuth::toUser($request->token);
        $response = [
                'data' => [
                    'code'      => 400,
                    'errors'     => '',
                    'message'   => 'Invalid Token! User Not Found.',
                ],
                'status' => false
            ];
        $rules = [
                'schoolAdminProfileId' => 'required',
            ];
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            $response['data']['message'] = 'Invalid input values.';
            $response['data']['errors'] = $validator->messages();
        }else
        {
            if(!empty($user)){ //$user->isAdmin()
                $response['data']['code'] = 500;
                $response['data']['message'] = 'No Record Found!';
                $response['status'] = true;

                //$schoolAdminProfiles= SchoolAdminProfiles::where('userId','=',$user->id)->first();
                $schoolAdminProfiles= SchoolAdminProfiles::where('id','=',$request->schoolAdminProfileId)->first();
                $students = [];
                if(!empty($schoolAdminProfiles)){
                    $students =  DB::table('student_profiles')
                                            ->join('users', 'users.id', '=', 'student_profiles.userId')
                                            ->join('responder_students', 'responder_students.studentProfileId', '=', 'student_profiles.id')
                                            ->join('responder_profiles', 'responder_profiles.id', '=', 'responder_students.responderProfileId')
                                            ->where('schoolProfileId','=',$schoolAdminProfiles->schoolProfileId)
                                            ->select('student_profiles.firstName','student_profiles.lastName','student_profiles.studentId','users.username','student_profiles.gradeLevel',
                                                DB::raw("CONCAT(responder_profiles.firstName,' (',responder_profiles.responderId,')') AS name_resId")
                                            )
                                            ->get();
                }
                if(!empty($students)){
                    $data = collect($students);
                    $model = new DataExport($data);
                    $filename = $user->id.'_studentsExport_'.date('d_M_Y_H_i_s').'.xlsx';
                    ($model)->store('files/'.$filename);
                    $response['data']['link'] = $model->getFileUrl($filename);
                    $response['data']['code'] = 200;
                    $response['data']['message'] = 'Request Successfull';
                }
            }
        }
        return $response;
    }

    public function LocalResource()
    {

        //$user = JWTAuth::toUser($request->token);
        // $response = [
        //         'data' => [
        //             'code'      => 400,
        //             'errors'     => '',
        //             'message'   => 'Invalid Token! User Not Found.',
        //         ],
        //         'status' => false
        //     ];
        // $rules = [
        //         'schoolProfileId' => 'required',
        //     ];
        // $validator = Validator::make($request->all(), $rules);
        // if ($validator->fails()) {
        //     $response['data']['message'] = 'Invalid input values.';
        //     $response['data']['errors'] = $validator->messages();
        // }else
        {
            //if(!empty($user)) //$user->isAdmin()
            { 
                $response['data']['code'] = 500;
                $response['data']['message'] = 'No Record Found!';
                $response['status'] = true;
                

                $localResource=LocalResource::where('schoolProfileId','=',36)->get();

                // $student =  DB::table('student_profiles')
                //                 ->join('users', 'users.id', '=', 'student_profiles.userId')
                //                 ->select('student_profiles.*','users.*','student_profiles.id as studentProfileId')
                //                 ->where('student_profiles.schoolProfileId','=',36)//$request->schoolProfileId)
                //                 ->get();

                // //Student::where('schoolProfileId','=',$schoolAdminProfiles->schoolProfileId)->get();
                // foreach($student as $std)
                // {
                //     $std->fullName= $std->firstName." ".$std->lastName;

                //     $student_responder = StudentResponder::where('studentProfileId','=',$std->studentProfileId)
                //                                         ->where('verified','=',1)->first();
                //     //return $student_responder;

                //     $responder = Responder::find($student_responder->responderProfileId);
                //     $std->responderAttached= $responder;
                // }
                if(!empty($localResource)){
                    $pdf = PDF::loadView('localResource', ['localResource'=>$localResource]);
                    return $pdf->download('localResource.pdf');
                }
            }
        }
        return $response;
    }
    public function crisisSupport()
    {

        //$user = JWTAuth::toUser($request->token);
        // $response = [
        //         'data' => [
        //             'code'      => 400,
        //             'errors'     => '',
        //             'message'   => 'Invalid Token! User Not Found.',
        //         ],
        //         'status' => false
        //     ];
        // $rules = [
        //         'schoolProfileId' => 'required',
        //     ];
        // $validator = Validator::make($request->all(), $rules);
        // if ($validator->fails()) {
        //     $response['data']['message'] = 'Invalid input values.';
        //     $response['data']['errors'] = $validator->messages();
        // }else
        {
            //if(!empty($user)) //$user->isAdmin()
            { 
                $response['data']['code'] = 500;
                $response['data']['message'] = 'No Record Found!';
                $response['status'] = true;
                

                $crisisSupport=CrisisResource::where('schoolProfileId','=',36)->get();

                // $student =  DB::table('student_profiles')
                //                 ->join('users', 'users.id', '=', 'student_profiles.userId')
                //                 ->select('student_profiles.*','users.*','student_profiles.id as studentProfileId')
                //                 ->where('student_profiles.schoolProfileId','=',36)//$request->schoolProfileId)
                //                 ->get();

                // //Student::where('schoolProfileId','=',$schoolAdminProfiles->schoolProfileId)->get();
                // foreach($student as $std)
                // {
                //     $std->fullName= $std->firstName." ".$std->lastName;

                //     $student_responder = StudentResponder::where('studentProfileId','=',$std->studentProfileId)
                //                                         ->where('verified','=',1)->first();
                //     //return $student_responder;

                //     $responder = Responder::find($student_responder->responderProfileId);
                //     $std->responderAttached= $responder;
                // }
                if(!empty($crisisSupport)){
                    $pdf = PDF::loadView('crisisSupport', ['crisisSupport'=>$crisisSupport]);
                    return $pdf->download('crisisSupport.pdf');
                }
            }
        }
        return $response;
    }

    public function student()
    {

        //$user = JWTAuth::toUser($request->token);
        // $response = [
        //         'data' => [
        //             'code'      => 400,
        //             'errors'     => '',
        //             'message'   => 'Invalid Token! User Not Found.',
        //         ],
        //         'status' => false
        //     ];
        // $rules = [
        //         'schoolProfileId' => 'required',
        //     ];
        // $validator = Validator::make($request->all(), $rules);
        // if ($validator->fails()) {
        //     $response['data']['message'] = 'Invalid input values.';
        //     $response['data']['errors'] = $validator->messages();
        // }else
        {
            //if(!empty($user)) //$user->isAdmin()
            { 
                $response['data']['code'] = 500;
                $response['data']['message'] = 'No Record Found!';
                $response['status'] = true;
                


                $student =  DB::table('student_profiles')
                                ->join('users', 'users.id', '=', 'student_profiles.userId')
                                ->select('student_profiles.*','users.*','student_profiles.id as studentProfileId')
                                ->where('student_profiles.schoolProfileId','=',31)//$request->schoolProfileId)
                                ->get();

                //Student::where('schoolProfileId','=',$schoolAdminProfiles->schoolProfileId)->get();
                foreach($student as $std)
                {
                    $std->fullName= $std->firstName." ".$std->lastName;

                    $student_responder = StudentResponder::where('studentProfileId','=',$std->studentProfileId)
                                                        ->where('verified','=',1)->first();
                    //return $student_responder;

                    $responder = Responder::find($student_responder->responderProfileId);
                    $std->responderAttached= $responder;
                }
                if(!empty($student)){
                    $pdf = PDF::loadView('student', ['student'=>$student]);
                    return $pdf->download('student.pdf');
                }
            }
        }
        return $response;
    }

    public function responder()
    {

        //$user = JWTAuth::toUser($request->token);
        // $response = [
        //         'data' => [
        //             'code'      => 400,
        //             'errors'     => '',
        //             'message'   => 'Invalid Token! User Not Found.',
        //         ],
        //         'status' => false
        //     ];
        // $rules = [
        //         'schoolProfileId' => 'required',
        //     ];
        // $validator = Validator::make($request->all(), $rules);
        // if ($validator->fails()) {
        //     $response['data']['message'] = 'Invalid input values.';
        //     $response['data']['errors'] = $validator->messages();
        // }else
        {
            //if(!empty($user)) //$user->isAdmin()
            { 
                $response['data']['code'] = 500;
                $response['data']['message'] = 'No Record Found!';
                $response['status'] = true;
                


                $responder = Responder::join('users', 'users.id', '=', 'responder_profiles.userId')
                                        //->join('responder_categories', 'responder_categories.id', '=', 'responder_profiles.position')
                                        ->select('responder_profiles.id','responder_profiles.userId','users.username','users.avatarFilePath','responder_profiles.firstName','responder_profiles.lastName','responder_profiles.title','responder_profiles.responderId','responder_profiles.authorizationCode','users.verified','responder_profiles.position')
                                        ->where('schoolProfileId','=',31)//$request->schoolProfileId)
                                        ->get();
                foreach($responder as $res)
                {
                    $res['resNameId']= $res->firstName."(".$res->responderId.")";
                    $res['fullName']= $res->firstName." ".$res->lastName;
                    $res['position']= $res->getCategory->positionName;
                }
                
                if ($responder) {
                    $pdf = PDF::loadView('responder', ['responder'=>$responder]);
                    return $pdf->download('responder.pdf');
                }
            }
        }
        return $response;
    }
}
