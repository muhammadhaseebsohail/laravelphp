<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Api\ApiScheduleAlert as ScheduleAlert;
use JWTAuthException;
use JWTAuth;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use App\Models\Api\ApiUser as User;

class ScheduleAlertController extends Controller
{
    public function getFutureAlerts(Request $request)
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
               'sendDate' => 'required',
            ];
            $validator = Validator::make($request->all(), $rules);
            if ($validator->fails()) {
                $response['data']['message'] = 'Invalid input values.';
                $response['data']['errors'] = $validator->messages();
            }else
            {
                //$sendDate = "2018-10-17 15:49:00";
               	$distinct_alerts = DB::table('schedules_alert')->select('status','message','sendDate')->where('fromUser','=',$user->id)->where('sendDate','>=',$request->sendDate)->distinct('status')->get();
                
                $response['data']['result'] = [];
                foreach ($distinct_alerts as $res) 
                {
                    $tempArray =[];
                    $alert = ScheduleAlert::where('status','=',$res->status)->get();
                    foreach($alert as $a)
                    {
                        $user = User::find($a->toUser);
                        if($user->isResponder())
                        {
                            $tempArray[] = $user->Responder->getResponseData();
                        }
                        else if($user->isStudent())
                        {
                            $tempArray[] = $user->Student->getResponseData();
                        }
                    }
                    $response['data']['result'][] = [ 
                                                        "id" => $res->status,
                                                        "sendDate" => $res->sendDate,
                                                        "message" => $res->message,
                                                        "users" => $tempArray
                                                    ];
                }

                if ($distinct_alerts) {
                    $response['data']['message'] = 'Request Successfull';
                    $response['data']['code'] = 200;
                    //$response['data']['result'] = $resultArray;
                    $response['status'] = true;
                }
            }
        }
        return $response;
    }


    public function editAlert(Request $request)
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
               'id' => 'required',
               'sendDate' =>'required',
               'message' =>'required'
            ];
            $validator = Validator::make($request->all(), $rules);
            if ($validator->fails()) {
                $response['data']['message'] = 'Invalid input values.';
                $response['data']['errors'] = $validator->messages();
            }else
            {
                $alert = ScheduleAlert::where('status','=',$request->id)->get();   
                //where('id','=',$request->id)->where('sendDate','>',$request->sendDate)->get();
                

                foreach ($alert as $a ) {
                    $a->sendDate = $request->sendDate;
                    $a->message = $request->message;
                    $a->save();
                }
                

                
                if ($alert) {
                    $response['data']['message'] = 'Request Successfull';
                    $response['data']['code'] = 200;
                    $response['data']['result'] = $alert;
                    $response['status'] = true;
                }
            }
        }
        return $response;
    }


    public function deleteAlert(Request $request)
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
               'id' => 'required',
            ];
            $validator = Validator::make($request->all(), $rules);
            if ($validator->fails()) {
                $response['data']['message'] = 'Invalid input values.';
                $response['data']['errors'] = $validator->messages();
            }else
            {
                $alert = ScheduleAlert::where('status','=',$request->id)->get();


                foreach ($alert as $a ) {
                    $a->delete();
                }
                
                 if ($alert) {
                    $response['data']['message'] = 'Request Successfull';
                    $response['data']['code'] = 200;
                    //$response['data']['result'] = $alert;
                    $response['status'] = true;
                }
            }
        }
        return $response;
    }
}
