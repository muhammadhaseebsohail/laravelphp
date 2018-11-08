<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;


use App\Models\Api\ApiUser as User;
use App\Models\Api\ApiStudent as Student;
use App\Models\Api\ApiResponder as Responder;
use App\Models\Api\ApiStudentResponder as StudentResponder;
use App\Models\Api\ApiRefferalRequest as RefferalRequest;

use App\Models\Api\ApiSchoolAdminProfiles as SchoolAdmin;

use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

use JWTAuthException;
use JWTAuth;

class RefferController extends Controller
{
	public function RefferNewResponder(Request $request)
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
		     	'refferedBy' 	=> ['required','exists:users,id'],
		     	'refferedTo' 	=> ['required','exists:users,id'],
		     	'studentId'		=> ['required','exists:users,id'],
		     	'description'	=> ['required'],
		  	];
		  	$validator = Validator::make($request->all(), $rules);
		  	if ($validator->fails()) {
		    	$response['data']['message'] = 'Invalid input values.';
		      	$response['data']['errors'] = $validator->messages();
		  	}else
		  	{

		      	$refferedBy= Responder::where('userId','=',$request->refferedBy)->first();

		      	if(!empty($refferedBy))
		      	{
		      		if($refferedBy->position == "Counselor")
		      		{
			      		$refferedTo= Responder::where('userId','=',$request->refferedTo)->first();

			      		if(!empty($refferedTo))
			      		{
			      			if($refferedTo->user->verified)
			      			{
				      			$student= Student::where('userId','=',$request->studentId)->first();

					      		if(!empty($student))
					      		{	
					      			$student_responder_old = StudentResponder::
					      								where('studentProfileId','=',$student->id)
					      								->where('responderProfileId','=',$refferedBy->id)
					      								->first();
					      			if(!empty($student_responder_old))
					      			{
					      				$student_responder_new = StudentResponder::
					      								where('studentProfileId','=',$student->id)
					      								->where('responderProfileId','=',$refferedTo->id)
					      								->first();
					      				if(empty($student_responder_new))
					      				{	

						      				$student_responder_new = StudentResponder::create([
					                            'studentProfileId'     	=> $student->id,
					                            'responderProfileId'   	=> $refferedTo->id,
					                            'verified'				=> '0',
					                        ]);
					                        $refferalRequest = RefferalRequest::create([
					                            'schoolAdminProfileId'  => $refferedBy->schoolAdminProfilesId,
					                            'refferedBy'   			=> $refferedBy->id,
					                            'refferedTo'			=> $refferedTo->id,
					                            'studentId'				=> $student->id,
					                            'description'			=> $request->description,
					                            'status'				=> 0,
					                        ]);	

					                        if($student_responder_new && $refferalRequest)
					                        {			
								      			$response['data']['message'] = 'New Responder Assigned';
							      				$response['data']['code'] = 200;
							      				$response['status'] = true;
							      			}
							      		}
							      		else
							      		{
							      			$response['data']['message'] = 'The following responder is already assigned to student';
							      			$response['data']['code'] = 400;
							      			$response['status'] = true;	
							      		}
					      			}
					      			else
					      			{
					      				$response['data']['message'] = 'You cant assign new responder to this student';
					      				$response['data']['code'] = 400;
					      				$response['status'] = true;
					      			}
						      	}
				      	      	else
				      	      	{
				      	      		$response['data']['message'] = 'The user is not a student';
				      				$response['data']['code'] = 400;
				      				$response['status'] = true;
				      	      	}
				      	    }
				      	    else
				      	    {
	      	    	      		$response['data']['message'] = 'The User has not signed up yet!!';
	      	    				$response['data']['code'] = 400;
	      	    				$response['status'] = true;
				      	    }
				      	}
				      	else
				      	{
				      		$response['data']['message'] = 'The user you are reffering is not responder';
							$response['data']['code'] = 400;
							$response['status'] = true;
				      	}
				    }
				    else
				    {
				    	$response['data']['message'] = 'You are not allowed to reffer responders';
						$response['data']['code'] = 400;
						$response['status'] = true;
				    }

				}
				else
				{
					$response['data']['message'] = 'The user who is reffering is not a responder';
					$response['data']['code'] = 400;
					$response['status'] = true;
				}
		  	}
		}
		return $response;	
	}


	public function getNewRequests(Request $request)
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
               'schoolAdminProfileId' => 'required',
            ];
            $validator = Validator::make($request->all(), $rules);
            if ($validator->fails()) {
                $response['data']['message'] = 'Invalid input values.';
                $response['data']['errors'] = $validator->messages();
            }else
            {
            	$requests = RefferalRequest::
            	join('responder_profiles as RefBy', 'RefBy.id','=','requests.refferedBy')
            	->join('responder_profiles as RefTo', 'RefTo.id','=','requests.refferedTo')
            	->join('student_profiles as stu', 'stu.id','=','requests.studentId')
            	->select('requests.id',
            			 'requests.status',
            			 'requests.description',
            			 'RefBy.firstName as RefByFirstName',
            			 'RefBy.lastName as RefByLastName',
            			 'RefBy.responderId as RefByResponderId',
 		       			 'RefTo.firstName as RefToFirstName',
 		       			 'RefTo.lastName as RefToLastName',
 		       			 'RefTo.responderId as RefToResponderId',
 		       			 'stu.firstName as stuFirstName',
 		       			 'stu.lastName as stuLastName',
 		       			 'stu.studentId',
 		       			 'requests.createdAt'
 		       			)
				->where('schoolAdminProfileId','=',$request->schoolAdminProfileId)
				->orderBy('requests.id', 'desc')
				//->where('status','=','0')
				->get();

                if ($requests) {
                    $response['data']['message'] = 'Request Successfull';
                    $response['data']['code'] = 200;
                    $response['data']['result'] = $requests;
                    $response['status'] = true;
                }
            }
        }
        return $response;
	}



	public function approveRequests(Request $request)
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
               'requestId' =>  ['required','exists:requests,id'],
            ];
            $validator = Validator::make($request->all(), $rules);
            if ($validator->fails()) {
                $response['data']['message'] = 'Invalid input values.';
                $response['data']['errors'] = $validator->messages();
            }else
            {
            	$refferalRequest = RefferalRequest::find($request->requestId);

            	if(!empty($refferalRequest))
            	{
            		if($refferalRequest->status==0)
            		{
            			$student_responder = StudentResponder::
		      							where('studentProfileId','=',$refferalRequest->studentId)
		      							->where('responderProfileId','=',$refferalRequest->refferedTo)
		      							->first();

            			$refferalRequest->status=1;
            			$student_responder->verified=1;

		                if ($refferalRequest->save() && $student_responder->save()) {
		                    $response['data']['message'] = 'Request Successfull';
		                    $response['data']['code'] = 200;
		                    $response['status'] = true;
		                }
		            }
		            else
		            {
		            	$response['data']['message'] = 'Request Already Accepted';
	                    $response['data']['code'] = 400;
	                    $response['status'] = true;
		            }
	            }
	            else
	            {
	            	$response['data']['message'] = 'Request Does not exist';
                    $response['data']['code'] = 400;
                    $response['status'] = true;	
	            }
            }
        }
        return $response;
	}

	public function delRequests(Request $request)
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
               'requestId' =>  ['required','exists:requests,id'],
            ];
            $validator = Validator::make($request->all(), $rules);
            if ($validator->fails()) {
                $response['data']['message'] = 'Invalid input values.';
                $response['data']['errors'] = $validator->messages();
            }else
            {
            	$refferalRequest = RefferalRequest::find($request->requestId);

            	if(!empty($refferalRequest))
            	{
            		$student_responder = StudentResponder::
		      							where('studentProfileId','=',$refferalRequest->studentId)
		      							->where('responderProfileId','=',$refferalRequest->refferedTo)
		      							->first();

	                if ($refferalRequest->delete() && $student_responder->delete()) {
	                    $response['data']['message'] = 'Request Successfull';
	                    $response['data']['code'] = 200;
	                    $response['status'] = true;
	                }
		            
	            }
	            else
	            {
	            	$response['data']['message'] = 'Request Does not exist';
                    $response['data']['code'] = 400;
                    $response['status'] = true;	
	            }
            }
        }
        return $response;
	}    
}
