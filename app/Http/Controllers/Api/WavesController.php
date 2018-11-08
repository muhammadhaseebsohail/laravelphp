<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Models\Api\ApiWaves as Waves;

use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

use App\Models\Api\ApiUser as User;
use App\Models\Api\ApiChat as Chat;
use App\Models\Api\ApiThreads as Threads;
use App\Models\Api\ApiScheduleSessions2 as ScheduleSessions2;

use JWTAuthException;
use JWTAuth;

class WavesController extends Controller
{
    public function listWaves(Request $request)
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
            	$waves = Waves::all();

                if ($waves) {
                    $response['data']['message'] = 'Request Successfull';
                    $response['data']['code'] = 200;
                    $response['data']['result'] = $waves;
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
                $waves = Waves::all();
                $waveslist=[];
                foreach ($waves as $wave) {
                    $waveslist[]=$wave->name;
                }

                $counters=[];
                foreach ($waveslist as $wave) {
                    $counters[$wave]=0;
                }

                $threads = Threads::where('schoolProfileId','=',$request->schoolProfileId)->get();
                $sessions = ScheduleSessions2::where('schoolProfileId','=',$request->schoolProfileId)->get();

                foreach ($threads as $thread ) 
                {

                    if($thread->causeData)
                    {
                        for ($i=0 ; $i<count($waves) ; $i++) 
                        {
                            if(preg_match('('.$waveslist[$i].')', $thread->causeData))
                            {
                                $counters[$waveslist[$i]]++;
                            }
                        }
                    }
                    
                }
                foreach ($sessions as $session ) 
                {

                    if($session->causeData)
                    {
                        for ($i=0 ; $i<count($waves) ; $i++) 
                        {
                            if(preg_match('('.$waveslist[$i].')', $session->causeData))
                            {
                                $counters[$waveslist[$i]]++;
                            }
                        }
                    }
                    
                }
                
                $response['data']['message'] = 'Request Successfull';
                $response['data']['code'] = 200;
                $response['status'] = true;
                $response['data']['result']['counters'] = $counters;
                $response['data']['result']['waveslist']= $waveslist;
                 
            }
        }
        return $response;
    }
}
