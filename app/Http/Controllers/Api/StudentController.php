<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use JWTAuthException;
use JWTAuth;

use App\Models\Api\ApiUser as User;
use App\Models\Api\ApiStudent as Student;
use App\Models\Api\ApiResponder as Responder;
use App\Models\Api\ApiSchoolAdminProfiles as SchoolAdminProfiles;
use App\Models\Api\ApiStudentResponder as StudentResponder;
use App\Models\Roles;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class StudentController extends Controller
{


	// Get Students
    public function getStudents(Request $request)
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
		if(!empty($user) && $user->isAdmin())
		{

		  	$response = [
		      	'data' => [
		        	'error' => 400,
		         	'message' => 'Something went wrong. Please try again later!',
		      	],
		     	'status' => false
		  	];
		  	$rules = [
		     	'schoolProfileId' => 'required',
		  	];
		  	$validator = Validator::make($request->all(), $rules);
		  	if ($validator->fails()) {
		    	$response['data']['message'] = 'Invalid input values.';
		    	$response['data']['errors'] = $validator->messages();
		  	}else
		  	{

		      	//$schoolAdminProfiles= SchoolAdminProfiles::find($request->schoolAdminProfileId);

		      	if(!empty($request->schoolProfileId))
		      	{
			      	// $student =  DB::table('student_profiles')
						   //          ->join('users', 'users.id', '=', 'student_profiles.userId')
						   //          ->join('responder_students', 'responder_students.studentProfileId', '=', 'student_profiles.id')
						   //          ->join('responder_profiles', 'responder_profiles.id', '=', 'responder_students.responderProfileId')
						   //          ->select('student_profiles.*','student_profiles.firstName as fullName', 'users.username','responder_profiles.responderId','responder_profiles.firstName as ResFirstName','users.verified')
						   //          ->where('student_profiles.schoolProfileId','=',$request->schoolProfileId)
						   //          ->get();
		      		$student =  DB::table('student_profiles')
						            ->join('users', 'users.id', '=', 'student_profiles.userId')
						            ->select('student_profiles.*','users.*','student_profiles.id as studentProfileId')
						            ->where('student_profiles.schoolProfileId','=',$request->schoolProfileId)
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
			      
				    if ($student) {
				        $response['data']['message'] = 'Request Successfull';
				        $response['data']['code'] = 200;
				        $response['data']['result'] = $student;
				        $response['status'] = true;
				    }
				}
			}
		}
		return $response;
	}



	// Add Students
    public function createStudents(Request $request)
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
    	if(!empty($user))// && $user->isAdmin())
    	{
	        $response = [
	            'data' => [
	                'code' => 400,
	               	'message' => 'Something went wrong. Please try again later!',
	            ],
	           'status' => false
	        ];
	        $rules = [
	           'username'   => ['required', 'email', 'max:191', Rule::unique('users')],
	           'designatedResponder'   => 'required',
	           'firstName' => 'required',
	           'lastName' => 'required',
	           'gradeLevel' => 'required',
	           'schoolProfileId' => 'required',
	           'studentId' => ['required', Rule::unique('student_profiles')],
	        ];

	        $validator = Validator::make($request->all(), $rules);
	        if ($validator->fails()) {
	            $response['data']['message'] = 'Invalid input values.';
	            $response['data']['errors'] = $validator->messages();
	        }else
	        {
	        	// First Check weather the Responder Is counselor or not
	            $responderProfile = Responder::where('userId','=',$request->get('designatedResponder'))->first();

	            

	            //if($responderProfile->getCategory->levelId == "counselor" || $responderProfile->position == "Counselor"
	        			//|| $responderProfile->position == "COUNSELOR")
	            if($responderProfile->getCategory->levelId == 1 )
	            {

	            			           // echo $request->schoolAdminProfileId;
	            //exit();
	            	$rolesId = Roles::findByAttr('label','student')->id;
		            $authorizationCode = rand(100000,999999);
		            // Second Enter Data in users Table
		            $user = User::create([
		                'username'  => $request->get('username'),
		                'password'  => bcrypt($authorizationCode),
		                'roleId'    => $rolesId,
		                'verified'  => User::STATUS_INACTIVE
		            ]);

		            // Third Get schoolAdminProfiles Table schoolProfileId


		            //$schoolAdminProfiles= SchoolAdminProfiles::find($request->schoolAdminProfileId);

		            
		            // Fourth Enter Data in studentProfiles Table
		            $studentProfile = Student::create([
		                'userId'  			=> $user->id,
		                'schoolProfileId'  	=> $request->schoolProfileId,
		                'studentId'    		=> $request->get('studentId'),
		                'firstName'    		=> $request->get('firstName'),
		                'lastName'    		=> $request->get('lastName'),
		                'gradeLevel'    	=> $request->get('gradeLevel'),
		                'authorizationCode' => $authorizationCode
		            ]);

		            // Fifth Enter Data in responder_students Table
		            $studentResponder = StudentResponder::create([
		                'studentProfileId'  	=> $studentProfile->id,
		                'responderProfileId'    => $responderProfile->id,
		            ]);
		            

		            if ($user && $studentProfile && $studentResponder && $studentProfile->sendEmail() ) {
		                $response['data']['message'] = 'Request Successfull';
		                $response['data']['code'] = 200;
		                //$response['data']['result'] = $user->getArrayResponse();
		                $response['status'] = true;
		            }
	        	}
	        	else
	        	{
	        		$response = [
	        		    'data' => [
	        		        'code' => 400,
	        		       	'message' => 'This responder is not a Primary Responder!',
	        		    ],
	        		   'status' => false
	        		];	
	        	}
			}
		}   
        return $response;
    }

    // Edit Responder
    public function editStudents(Request $request)
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
               'userId'   => 'required', 
               'firstName'   => 'required',
               'lastName'   => 'required',
               'gradeLevel' => 'required',
               'designatedResponder' => 'required',
               
            ];

            $validator = Validator::make($request->all(), $rules);
            if ($validator->fails()) {
                $response['data']['message'] = 'Invalid input values.';
                $response['data']['errors'] = $validator->messages();
            }else
            {

            	$responder = Responder::where('userId', $request->get('designatedResponder'))->first();
            	// First Check weather the Responder Is counselor or not

            	if(!empty($responder))
            	{
		            //if($responder->position == "counselor" || $responder->position == "Counselor"
		        			//|| $responder->position == "COUNSELOR")
		            if($responder->getCategory->levelId == 1 )
		            {

	  	                $student = Student::where('userId', $request->get('userId'))
		                                                ->update([
		                                                    'firstName'    => $request->get('firstName'),
		                                                    'lastName'     => $request->get('lastName'),
		                                                    'gradeLevel'     => $request->get('gradeLevel'),
		                                                ]);
		                $studentData = Student::where('userId', $request->get('userId'))->first();

		                $studentResponder = StudentResponder::where('studentProfileId', $studentData->id)
		                                                ->update(['responderProfileId'=> $responder->id]);

		                
		                if ($student && $studentResponder) {
		                    $response['data']['message'] = 'Request Successfull';
		                    $response['data']['code'] = 200;
		                    //$response['data']['result'] = $student;
		                    $response['status'] = true;
		                }
		            }
		            else
		            {
		            	$response['data']['message'] = 'The Responder You Assign is not a Primary Responder';
	                    $response['data']['code'] = 400;
	                    $response['status'] = true;
		            }
		        }
		        else
		        {
		        	$response['data']['message'] = 'Responder Dont Exist';
                    $response['data']['code'] = 400;
                    $response['status'] = true;
		        }
            }
        }
        return $response;
    }

    // Del Local Resource
    public function delStudents(Request $request)
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
           'userId'   => 'required',
        ];

        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            $response['data']['message'] = 'Invalid input values.';
            $response['data']['errors'] = $validator->messages();
        }else
        {
        	$student = User::where('id', $request->get('userId'))->first();
            $studentData = Student::where('userId', $request->get('userId'))->first();
        	$studentResponder = StudentResponder::where('studentProfileId', $studentData->id)->delete();

            // foreach ($studentResponder as $SR ) {
            // 	$SR->delete();
            // }
            //$studentResponder->delete();
            $studentData->delete();
            $student->delete();
            if ($studentData && $studentResponder && $student) {
                $response['data']['message'] = 'Request Successfull';
                $response['data']['code'] = 200;
                //$response['data']['result'] = $localResource;
                $response['status'] = true;
            }
        }
      }
      return $response;
    }



    public function StudentAssignToResponder(Request $request)
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
		if(!empty($user) && $user->isResponder())
		{

		  	$response = [
		      	'data' => [
		          	'error' => 400,
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
		  		$responder = Responder::where('userId','=',$request->userId)->first();

		  		if(!empty($responder))
		  		{
		  			$student =  DB::table('student_profiles')
					            ->join('users', 'users.id', '=', 'student_profiles.userId')
					            ->join('responder_students', 'responder_students.studentProfileId', '=', 'student_profiles.id')
					            // ->join('responder_profiles', 'responder_profiles.id', '=', 'responder_students.responderProfileId')
					            ->select('student_profiles.*','student_profiles.firstName as fullName','users.username','users.avatarFilePath')
					            ->where('responderProfileId','=',$responder->id)
					            ->get();
					foreach($student as $std)
					{
						$std->fullName= $std->firstName." ".$std->lastName;
					}
					if($student) 
					{
			          	$response['data']['message'] = 'Request Successfull';
			          	$response['data']['code'] = 200;
			          	$response['data']['result'] = $student;
			          	$response['status'] = true;
			    	}
		  		}
		  		else
		  		{
		  			$response['data']['message'] = 'Reponder Does not exist';
		  			$response['data']['code'] = 400;
		  			$response['status'] = true;
		  		}
		  	}
		}
		return $response;
    }

    // Re Send Email Student
    public function reSendEmailStudent(Request $request)
    {
        $user = JWTAuth::toUser($request->token);
        $response = [
                'data' => [
                    'code'      => 400,
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
               'userId' => 'required',
            ];
            $validator = Validator::make($request->all(), $rules);
            if ($validator->fails()) {
                $response['data']['message'] = 'Invalid input values.';
                $response['data']['errors'] = $validator->messages();
            }else
            {


                $responder = Student::where('userId','=',$request->userId)->first();

                if ($responder->sendEmail()) {
                    $response['data']['message'] = 'Request Successfull';
                    $response['data']['code'] = 200;
                    //$response['data']['result'] = $responder;
                    $response['status'] = true;
                }
            }
        }
        return $response;
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
                $active = User::where('roleId','=','4')
	                            ->where('verified', '=', 1)
	                            ->get();
	            $activeList=[];
	            foreach($active as $a) {
	            	$activeList[]=$a->id;
	            }
                $activeStudents = Student::whereIn('userId',$activeList)
                						->where('schoolProfileId','=',$request->schoolProfileId)
                						->count();


                $inActive = User::where('roleId','=','4')
	                            ->where('verified', '=', 0)
	                            ->get();
	            $inActiveList=[];
	            foreach($inActive as $a) {
	            	$inActiveList[]=$a->id;
	            }
                $inActiveStudents = Student::whereIn('userId',$inActiveList)
                						->where('schoolProfileId','=',$request->schoolProfileId)
                						->count();	
                $response['data']['message'] = 'Request Successfull';
                $response['data']['code'] = 200;
                $response['status'] = true;
                $response['data']['result'][]= $activeStudents;
                $response['data']['result'][]= $inActiveStudents;
            }
        }
        return $response;
    }
}
