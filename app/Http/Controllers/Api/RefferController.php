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
use App\Models\Api\ApiSchoolProfiles as SchoolProfiles;

use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

use JWTAuthException;
use JWTAuth;

use Carbon\Carbon;

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
		      		if($refferedBy->getCategory->levelId == 1)
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
					                            'schoolProfileId'  		=> $refferedBy->schoolProfileId,
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
               'schoolProfileId' => 'required',
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
				->where('requests.schoolProfileId','=',$request->schoolProfileId)
				->orderBy('requests.id', 'desc')
				//->where('status','=','0')
				->get();

				foreach($requests as $req)
                {
                    $req['fullName']= $req->RefByFirstName." ".$req->RefByLastName;
                }

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

                        $responder = Responder::find($student_responder->responderProfileId);
                        $schoolTimeZone = $responder->schoolProfile->schoolTimeZone;

                        $approvedTime=Carbon::now()->format('Y-m-d H:i:s');;
            			$refferalRequest->status=1;
                        $refferalRequest->approvedTime=date('Y-m-d H:i:s',strtotime($approvedTime.$schoolTimeZone." Hours"));
            			$student_responder->verified=1;

		                if ($refferalRequest->save() && $student_responder->save()) {
		                	
                            //$message = 'Referring request accepted by '.$user->getName();
		                	$std 	= Student::find($refferalRequest->studentId);
                            $resBy 	= Responder::find($refferalRequest->refferedBy);
                            $resTo 	= Responder::find($refferalRequest->refferedTo);

                            // Send to Student
                            $message = 'You are being reffered by '.$resBy->user->getName().' to '.$resTo->user->getName();
                            //$std->user->sendPushNotification($message);
                            $student_responder->studentProfile->user->sendPushNotification($message,"reffer");
                            //Send to Responder
                            $message = 'A new Student '.$std->user->getName().' has been reffered to you by '.$resBy->user->getName();
                            //$resTo->user->sendPushNotification($message);
                            $student_responder->responderProfile->user->sendPushNotification($message,"reffer");
		                    
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

                $date[0] = Carbon::now()->startOfWeek()->format('Y-m-d');

                for($i=1; $i<=6 ; $i++ )
                {
                    $date[$i]=Carbon::parse($date[0])->addDay($i)->format('Y-m-d');
                }

                for($i=0; $i<=6 ; $i++ )
                {
                    $date[$i]= date('Y-m-d',strtotime($date[$i].$schoolTimeZone." Hours"));
                }

                $refferal=array();
                $refferal[0] = RefferalRequest::where('schoolProfileId','=',$request->schoolProfileId)
                                        ->whereDate('approvedTime', '=', $date[0])
                                        ->where('status', '=', 1)
                                        ->count();

                for($i=1;$i<=6;$i++)
                {
                    $refferal[$i] = RefferalRequest::where('schoolProfileId','=',$request->schoolProfileId)
                                        ->whereDate('approvedTime', '=', $date[$i])
                                        ->where('status', '=', 1)
                                        ->count();
                }                  
                
                if($refferal) 
                {
                    $response['data']['message'] = 'Request Successfull';
                    $response['data']['code'] = 200;
                    $response['status'] = true;
                    $response['data']['result'] = $refferal;
                }  
            }
        }
        return $response;
    }    
}
