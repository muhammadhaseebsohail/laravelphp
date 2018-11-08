<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use JWTAuthException;
use JWTAuth;
use App\Models\Api\ApiUser as User;
use App\Models\Api\ApiChat as Chat;
use App\Models\Api\ApiThreads as Threads;
use App\Models\Roles;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use App\Models\Api\ApiScheduleAlert as ScheduleAlert;
use App\Models\Api\ApiSchoolProfiles as SchoolProfiles;

use Carbon\Carbon;

class ChatController extends Controller
{
    // Get Messages Length
    public function getLength(Request $request)
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
                 'threadId'   => ['required','exists:user_threads,id']
              ];

              $validator = Validator::make($request->all(), $rules);
                if ($validator->fails()) {
                    $response['data']['message'] = 'Invalid input values.';
                    $response['data']['errors'] = $validator->messages();
                }else
                {
                    $response['data']['message'] = 'Request Successfull';
                    $response['data']['code'] = 200;
                    $response['status'] = true;
                    $chatCount = Chat::where('threadId' , '=' , $request->threadId)
                                    ->count();
                    $response['data']['chatLength'] = $chatCount;
                }
            }
        return $response;
    }
    // Get Messages
    public function get(Request $request)
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
             'threadId'   => ['required','exists:user_threads,id']
          ];

          $validator = Validator::make($request->all(), $rules);
            if ($validator->fails()) {
                $response['data']['message'] = 'Invalid input values.';
                $response['data']['errors'] = $validator->messages();
            }else
            {
                $threadId = $request->threadId;
                $userId = $user->id;
                $modelChat = Chat::where('threadId' , '=' , $threadId)
                                    ->where(function($query) use ($userId,$threadId) {
                                        return $query->where('fromUser','=',$userId)
                                            ->orWhere('toUser','=',$userId);
                                    })
                                    ->orderBy('id','asc')
                                    ->get();

                $modelThread = Threads::where('id' , '=' , $request->threadId)
                                 ->first();
                $toUser = $user->id;
                if(!empty($modelThread)){
                    $toUser = $modelThread->toUser;
                    if($modelThread->fromUser != $user->id)
                        $toUser = $modelThread->fromUser;
                }
                $response['data']['message'] = 'Request Successfull';
                $response['data']['code'] = 200;
                $response['status'] = true;
                $modelUser = User::where('id','=',$toUser)->first();
                $response['data']['toUser'] = $modelUser->getArrayResponse();
                $response['data']['result'] = [];
                $response['data']['threadId'] = $request->threadId;
                foreach ($modelChat as $key => $value) {
                    $response['data']['result'][] = [
                        'id'            => $value->id,
                        'message'       => $value->message,
                        'fromUser'      => $value->fUser->getArrayResponse(),
                        'toUser'        => $value->tUser->getArrayResponse(),
                        'anonimity'     => $value->thread->anonimityFlag,
                        'threadName'    => $value->thread->threadName,
                        'read'          => $value->read,
                        'createdAt'     => date('Y-m-d H:i:s',strtotime($value->createdAt))
                    ];
                }
                // $response['total'] = $modelChat->total();
                // $response['currentPage'] = $modelChat->currentPage();
                // $response['perPage'] = $modelChat->perPage();
                // $response['hasMorePages'] = $modelChat->hasMorePages();
            }
        }
      return $response;
    }
    // Save Message in threads
    public function save(Request $request)
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
             'userId'       => ['required','exists:users,id','uniqueUserID:'.$user->id],
             'message'      => ['required','max:455'],
             'threadName'   => ['required','exists:user_threads,threadName']
          ];
            Validator::extend('uniqueUserID', function ($attribute, $value, $parameters, $validator) {
                return $parameters[0] != $value;
            },'userId must be different with logged-in user id.');

          $validator = Validator::make($request->all(), $rules);
            if ($validator->fails()) {
                $response['data']['message'] = 'Invalid input values.';
                $response['data']['errors'] = $validator->messages();
            }else
            {
                $modelThread = Threads::where('threadName','=',$request->threadName)->first();
                $response['data']['code'] = 400;
                if(!empty($modelThread)){

                    $schoolProfileId = "";
                    if($user->isResponder())
                    {
                      $schoolProfileId = $user->Responder->schoolProfileId;
                    }
                    elseif($user->isStudent()){
                      $schoolProfileId = $user->Student->schoolProfileId;
                    }
                    $modelChat = Chat::create([
                        'message'   => $request->message,
                        'fromUser'  => $user->id,
                        'toUser'    => $request->userId,
                        'threadId'  => $modelThread->id,
                        'schoolProfileId' => $schoolProfileId
                    ]);
                    if($modelChat){
                        if($modelThread->type==1)
                        {
                          if($modelThread->anonimityFlag==1)
                          {
                            if($modelChat->fUser->isStudent())
                            {
                              $message ='Anonymous: '.$modelChat->message;
                            }
                            else
                            {
                              $message = $modelChat->fUser->getName().' (Anonymous): '.$modelChat->message;     
                            }
                          }
                          else
                          {
                            if($modelChat->fUser->isStudent())
                            {
                              $message = $modelChat->fUser->getName().' (Anonymous): '.$modelChat->message;
                            }
                            else
                            {
                              $message = $modelChat->fUser->getName().' (Anonymous): '.$modelChat->message;    
                            }
                          }
                        }
                        else
                        {
                          $message = $modelChat->fUser->getName().': '.$modelChat->message;
                        }
                        $modelChat->tUser->sendPushNotification($message,"message");
                        $response['data']['message'] = 'Request Successfull';
                        $response['status'] = true;
                        $response['data']['code'] = 200;
                        $response['data']['result'] = [
                            'id'            => $modelChat->id,
                            'message'       => $modelChat->message,
                            'fromUser'      => $modelChat->fUser->getArrayResponse(),
                            'toUser'        => $modelChat->tUser->getArrayResponse(),
                            'threadName'    => $modelThread->threadName
                        ];
                    }
                }
            }
        }
      return $response;
    }
    // Create New Thread for messages
    public function createThread(Request $request)
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
             'causeData'    => ['json'],
             'anonimity'    => ['required','in:'.Threads::TYPE_NON_ANONYMOUS.','.Threads::TYPE_ANONYMOUS],
             'level'        => ['numeric','min:0'],
             'userId'       => ['required','exists:users,id','uniqueUserID:'.$user->id],
          ];

            Validator::extend('uniqueUserID', function ($attribute, $value, $parameters, $validator) {
                return $parameters[0] != $value;
            },'userId must be different with logged-in user id.');

          $validator = Validator::make($request->all(), $rules);
            if ($validator->fails()) {
                $response['data']['message'] = 'Invalid input values.';
                $response['data']['errors'] = $validator->messages();
            }else
            {
                $isCreateNew = true;
                $modelThread = [];
                $fromUser = $user->id;
                $toUser = $request->userId;
                if(!$request->anonimity){
                    $modelThread = Threads::where(function($query) use ($fromUser,$toUser) {
                                        return $query->where('fromUser','=',$fromUser)
                                            ->where('toUser','=',$toUser)
                                            ->where('type','=',Threads::TYPE_NON_ANONYMOUS);
                                    })
                                 ->orWhere(function($query) use ($fromUser,$toUser) {
                                        return $query->where('fromUser','=',$toUser)
                                            ->where('toUser','=',$fromUser)
                                            ->where('type','=',Threads::TYPE_NON_ANONYMOUS);
                                    })
                                 ->first();
                    if(!empty($modelThread))
                        $isCreateNew = false;
                }

                if($isCreateNew && empty($modelThread)){
                    $threadSchoolProfileId=0;
                    if($user->isResponder())
                    {
                      $threadSchoolProfileId = $user->Responder->schoolProfileId;
                    }
                    else
                    {
                      $threadSchoolProfileId = $user->Student->schoolProfileId;
                    }
                    $modelThread = Threads::create([
                        'fromUser'      => $user->id,
                        'toUser'        => $request->userId,
                        'causeData'     => $request->causeData,
                        'threadName'    => Threads::uniqueThreadName($user->id),
                        'threadLabel'   => Threads::uniqueThreadLabel($fromUser,$toUser,$request->anonimity),
                        'type'          => $request->anonimity,
                        'level'         => $request->level,
                        'anonimityFlag' => $request->anonimity,
                        'schoolProfileId'=>$threadSchoolProfileId
                    ]);
                    if(!empty($modelThread)){

                        $modelToUser = User::where('id','=',$toUser)->first();
                        if($user->isResponder() && $modelToUser->isStudent()){

                            $modelChat = Chat::create([
                                'message'   => ' ',
                                'fromUser'  => $user->id,
                                'toUser'    => $modelToUser->id,
                                'threadId'=> $modelThread->id,
                                'read'=> 1,
                                'schoolProfileId'=>$user->Responder->schoolProfileId
                            ]);
                        }
                        else{
                            $modelChat = Chat::create([
                                'message'   => ' ',
                                'fromUser'  => $user->id,
                                'toUser'    => $modelToUser->id,
                                'threadId'=> $modelThread->id,
                                'read'=> 1,
                                'schoolProfileId'=>$user->Student->schoolProfileId
                            ]);
                        }
                    }
                }

                $response['data']['code'] = 400;
                if($modelThread){
                    $response['data']['message'] = 'Request Successfull';
                    $response['status'] = true;
                    $response['data']['code'] = 200;
                    $response['data']['result'] = $modelThread->getArrayResponse();
                }
            }
        }
      return $response;
    }
    // Mass Messenger
    public function massMessenger(Request $request)
    {
      $user = JWTAuth::toUser($request->token);
      $uniqueTime = $user->id.time();
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
                'usersData' => ['required','json'],
                'message'   => ['required','string','max:500'],
                // 'sendDate'  => ['required']
            ];
            $validator = Validator::make($request->all(), $rules);
            if ($validator->fails()) {
                $response['data']['message'] = 'Invalid input values.';
                $response['data']['errors'] = $validator->messages();
            }
            else {
                $rules = [
                    '*.userId'       => ['required','exists:users,id','uniqueUserID:'.$user->id]
                    // '*.message'      => ['required','max:255'],
                ];
                Validator::extend('uniqueUserID', function ($attribute, $value, $parameters, $validator) {
                    return $parameters[0] != $value;
                },'userId must be different with logged-in user id.');

                $validator = Validator::make(json_decode($request->usersData, true), $rules);
                if ($validator->fails()){
                    $response['data']['message'] = 'Invalid input values.';
                    $response['data']['errors'] = $validator->messages();
                }
            }
            if(empty($response['data']['errors']))
            {
                $resultData = [];
                $fromUser = $user->id;
                $usersData = json_decode($request->usersData);
                foreach ($usersData as $key => $value) {
                    $isCreateNew = true;
                    $modelThread = [];
                    $toUser = $value->userId;
                    $isValidUser = User::where(['id' => $toUser])->first();
                    if(!empty($isValidUser)){
                        if(empty($request->sendDate)){
                            
                        
                            $modelThread = Threads::where(function($query) use ($fromUser,$toUser) {
                                    return $query->where('fromUser','=',$fromUser)
                                            ->where('toUser','=',$toUser)
                                            ->where('type','=',Threads::TYPE_NON_ANONYMOUS);
                                    })
                                 ->orWhere(function($query) use ($fromUser,$toUser) {
                                        return $query->where('fromUser','=',$toUser)
                                            ->where('toUser','=',$fromUser)
                                            ->where('type','=',Threads::TYPE_NON_ANONYMOUS);
                                    })
                                 ->first();

                            if(empty($modelThread)){
                                $modelThread = Threads::create([
                                    'fromUser'      => $user->id,
                                    'toUser'        => $value->userId,
                                    'threadName'    => Threads::uniqueThreadName($user->id),
                                    'threadLabel'   => Threads::uniqueThreadLabel($fromUser,$toUser,$request->anonimity),
                                    'type'          => Threads::TYPE_NON_ANONYMOUS,
                                    'anonimityFlag' => Threads::TYPE_NON_ANONYMOUS,
                                    'schoolProfileId'=>$user->Responder->schoolProfileId
                                ]);
                                if(!empty($modelThread)){

                                    // $modelToUser = User::where('id','=',$toUser)->first();
                                    // if($user->isResponder() && $modelToUser->isStudent()){

                                    //     $modelChat = Chat::create([
                                    //         'message'   => 'Hey There how can i help you?',
                                    //         'fromUser'  => $user->id,
                                    //         'toUser'    => $modelToUser->id,
                                    //         'threadId'=> $modelThread->id
                                    //     ]);
                                    // }
                                    // else{
                                    //     $modelChat = Chat::create([
                                    //         'message'   => 'Hey There how can i help you?',
                                    //         'fromUser'  => $modelToUser->id,
                                    //         'toUser'    => $user->id,
                                    //         'threadId'=> $modelThread->id
                                    //     ]);
                                    // }
                                }
                            }
                            $modelChat = Chat::create([
                                'message'   => $request->message,
                                'fromUser'  => $user->id,
                                'toUser'    => $value->userId,
                                'threadId'=> $modelThread->id,
                                'schoolProfileId'=>$user->Responder->schoolProfileId
                            ]);
                            if(!empty($modelChat)){
                                $message = $modelChat->fUser->getName().': '.$modelChat->message;
                                $modelChat->tUser->sendPushNotification($message,"message");
                                $resultData[] = [
                                    'user' => $modelChat->tUser->getArrayResponse(),
                                    'chat' => [
                                        'id'            => $modelChat->id,
                                        'message'       => $modelChat->message,
                                        'fromUser'      => $modelChat->fUser->getArrayResponse(),
                                        'toUser'        => $modelChat->tUser->getArrayResponse(),
                                    ],
                                    'thread' => $modelThread->getArrayResponse()
                                ];
                            }

                        }
                        else
                        {
                            $newAlert = new ScheduleAlert();
                            $newAlert->fromUser = $fromUser;
                            $newAlert->toUser = $toUser;
                            $newAlert->message = $request->message;
                            $newAlert->sendDate = $request->sendDate;//date("Y-m-d H:i");;
                            $newAlert->status = $uniqueTime;
                            $newAlert->save();
                            // DB work to dooooo
                        }
                    }
                }
                $response['data']['message'] = 'Request Successfull';
                $response['status'] = true;
                $response['data']['code'] = 200;
                $response['data']['result'] = $resultData;
            }
        }
      return $response;
    }
    // Get User Message along with messages
    public function getThreads(Request $request)
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
            // $modelChat = Chat::join('user_threads','user_threads.id','=','users_chat.threadId')
            //         ->select(['users_chat.threadId','users_chat.id','user_threads.threadName','users_chat.createdAt','users_chat.fromUser','users_chat.toUser','users_chat.message','users_chat.read'])
            //         ->where(function ($query) use ($user) {
            //             $query->where('user_threads.fromUser','=',$user->id)
            //                   ->orwhere('user_threads.toUser','=',$user->id);
            //         })
            //         ->orderBy('users_chat.createdAt','desc')
            //         ->get()
            //         ->groupBy(function($model) use($user) {
            //             // if($model->fromUser == $user->id)
            //             //     return $model->toUser;
            //             // elseif($model->toUser == $user->id)
            //                 return $model->threadId;
            //         })
            //         ->map(function($model) {
            //             return $model->sortByDesc('users_chat.createdAt')->take(1);
            //         });
            $userId = $user->id;
            $modelThreads = Threads::where(function ($query) use ($userId) {
                        $query->where('fromUser','=',$userId)
                              ->orwhere('toUser','=',$userId);
                    })
                    ->get();
            $list = collect($modelThreads)->map(function ($model) {
                    return $model->id;
                });
            $modelChat = Chat::whereIn('threadId',$list)
                            ->orderBy('createdAt','desc')
                            ->get()
                            ->groupBy(function($model) use($user) {
                                // if($model->fromUser == $user->id)
                                //     return $model->toUser;
                                // elseif($model->toUser == $user->id)
                                    return $model->threadId;
                            })
                            ->map(function($model) {
                                return $model->sortByDesc('id')->take(1);
                            });
            $response['data']['message'] = 'Request Successfull';
            $response['data']['code'] = 200;
            $response['status'] = true;
            $response['data']['result'] = [];
            $response['data']['fromUser'] = $user->getArrayResponse();
            $response['data']['threadCount'] = count($modelChat);
            foreach ($modelChat as $key => $value) {
                foreach ($value as $key2 => $value2) {
                    $modelUser = $value2->fUser;
                    $userId = $modelUser->id;
                    if($value2->toUser != $user->id){
                        $modelUser = $value2->tUser;
                        $userId = $modelUser->id;
                    }

                    $modelThread = Threads::where('id','=',$value2->threadId)            
                                    ->orderBy('id','desc')       
                                    ->first();
                    $modelUnreadCount = Chat::where('threadId','=',$value2->threadId)
                                    ->where('toUser','=',$user->id)
                                    ->where('read','=',Chat::MESSAGE_UNREAD)
                                    ->count();
                    $chatArr = [
                        'id' => '',
                        'message' => '',
                        'createdAt' => '',
                        'fromUser' => ''
                    ];
                    // if(!empty($modelChat)){
                        $chatArr['id'] = $value2->id;
                        $chatArr['message'] = $value2->message;
                        $chatArr['createdAt'] = date('Y-m-d H:i:s',strtotime($value2->createdAt));
                        $chatArr['fromUser'] = $value2->fromUser;
                    // }
                    $response['data']['result'][] = [
                        // 'user' => [
                        //     'userId' => $userId,
                        //     'username' => $modelUser->username,
                        //     'name' => $modelUser->getName(),
                        //     'image' => $modelUser->getImage(),
                        // ],
                        'user'              => $modelUser->getArrayResponse(),
                        'thread'            => $modelThread->getArrayResponse(),
                        'chat'              => $chatArr,
                        'totalUnreadMsgs'   => $modelUnreadCount
                    ];
                }
            }

        }
      return $response;
    }
    // Mark all read/unread messages inside the thread 
    public function markMessages(Request $request)
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
                'threadId'       => ['required','exists:user_threads,id']
            ];

            $validator = Validator::make($request->all(), $rules);
            if ($validator->fails()) {
                $response['data']['message'] = 'Invalid input values.';
                $response['data']['errors'] = $validator->messages();
            }else
            {
                $id = $user->id;
                $threadId = $request->threadId;
                $modelThread = Threads::where(function($query) use ($id,$threadId) {
                                        return $query->where('fromUser','=',$id)
                                            ->where('id','=',$threadId);
                                    })
                                 ->orWhere(function($query) use ($id,$threadId) {
                                        return $query->where('toUser','=',$id)
                                            ->where('id','=',$threadId);
                                    })
                                 ->first();
                $response['data']['code'] = 500;
                $response['status'] = true;
                if(!empty($modelThread)){
                    $modelChat = Chat::where('threadId','=',$threadId)
                                    ->where('toUser', '=' ,$id)
                                    ->update(['read' => Chat::MESSAGE_READ]); 
                    if($modelChat){
                        $response['data']['message'] = 'Request Successfull';
                        $response['data']['code'] = 200;
                    }
                }
                else
                    $response['data']['message'] = 'Invalid thread! You are not enrolled to this thread.';
            }
        }
      return $response;
    }


    // Mass Messenger Admin
    public function massMessengerAdmin(Request $request)
    {
      $user = JWTAuth::toUser($request->token);
      $uniqueTime = $user->id.time();
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
                'usersData' => ['required','json'],
                'message'   => ['required','string','max:500'],
            ];
            $validator = Validator::make($request->all(), $rules);
            if ($validator->fails()) {
                $response['data']['message'] = 'Invalid input values.';
                $response['data']['errors'] = $validator->messages();
            }
            else {
                $rules = [
                    '*.userId'       => ['required','exists:users,id','uniqueUserID:'.$user->id]
                    // '*.message'      => ['required','max:255'],
                ];
                Validator::extend('uniqueUserID', function ($attribute, $value, $parameters, $validator) {
                    return $parameters[0] != $value;
                },'userId must be different with logged-in user id.');

                $validator = Validator::make(json_decode($request->usersData, true), $rules);
                if ($validator->fails()){
                    $response['data']['message'] = 'Invalid input values.';
                    $response['data']['errors'] = $validator->messages();
                }
            }
            if(empty($response['data']['errors']))
            {
                $resultData = [];
                $fromUser = $user->id;
                $usersData = json_decode($request->usersData);
                foreach ($usersData as $key => $value) {
                    //$isCreateNew = true;
                    //$modelThread = [];
                    $toUser = $value->userId;
                    $isValidUser = User::where(['id' => $toUser])->first();
                    if(!empty($isValidUser))
                    {
                        if(empty($request->sendDate)){
                            $message = $user->getName().': '.$request->message;
                            $isValidUser->sendPushNotification($message,"message");
                            $resultData[] = [
                                'user' => $isValidUser->getArrayResponse(),
                            ];
                        }
                        else
                        {
                            $newAlert = new ScheduleAlert();
                            $newAlert->fromUser = $fromUser;
                            $newAlert->toUser = $toUser;
                            $newAlert->message = $request->message;
                            $newAlert->sendDate = $request->sendDate;//date("Y-m-d H:i");
                            $newAlert->status = $uniqueTime;
                            $newAlert->save();
                            // DB work to dooooo

                            if($newAlert)
                            {
                                $resultData[] = [
                                    'user' => $isValidUser->getArrayResponse(),
                                ];
                            }
                        }
                    }
                }
                $response['data']['message'] = 'Request Successfull';
                $response['status'] = true;
                $response['data']['code'] = 200;
                $response['data']['result'] = $resultData;
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
                $oneDayBeforeWeek = Carbon::now()->startOfWeek()->subDay()->format('Y-m-d');
                $oneDayAfterWeek = Carbon::now()->endOfWeek()->addDay()->format('Y-m-d');
                $date[0]=Carbon::now()->startOfWeek()->format('Y-m-d H:i:s');

                for($i=1; $i<=6 ; $i++ )
                {
                    $date[$i]=Carbon::parse($date[0])->addDay($i)->format('Y-m-d H:i:s');
                }

                for($i=0; $i<=6 ; $i++ )
                {
                    $date[$i]= date('Y-m-d',strtotime($date[$i].$schoolTimeZone." Hours"));
                }


                $chats = Chat::whereDate('createdAt','>=',$oneDayBeforeWeek)
                                  ->whereDate('createdAt','<=',$oneDayAfterWeek)
                                  ->where('schoolProfileId','=',$request->schoolProfileId)
                                  ->get();

                foreach($chats as $chat)
                {
                    $chat['sendDate'] = date('Y-m-d',strtotime($chat->createdAt.$schoolTimeZone." Hours"));
                }

                $count=array();
                $count[0]=0;
                for($i=1; $i<=6 ; $i++ )
                {
                    $count[$i]=0;
                }

                foreach ($chats as $chat) {
                    if($date[0]==$chat->sendDate)
                    {
                        $count[0]++;
                    }
                    elseif($date[1]==$chat->sendDate)
                    {
                        $count[1]++;
                    }
                    elseif($date[2]==$chat->sendDate)
                    {
                        $count[2]++;
                    }
                    elseif($date[3]==$chat->sendDate)
                    {
                        $count[3]++;
                    }
                    elseif($date[4]==$chat->sendDate)
                    {
                        $count[4]++;
                    }
                    elseif($date[5]==$chat->sendDate)
                    {
                        $count[5]++;
                    }
                    elseif($date[6]==$chat->sendDate)
                    {
                        $count[6]++;
                    }
                }
                
                if ($chats) 
                {
                    $response['data']['message'] = 'Request Successfull';
                    $response['data']['code'] = 200;
                    $response['status'] = true;
                    $response['data']['result'] = $count;
                }  
            }
        }
        return $response;
    }
}
