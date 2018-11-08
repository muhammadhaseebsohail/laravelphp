<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ScheduleAlert extends Model
{
    //Status Constants
	const CREATED_AT = 'createdAt';
    const UPDATED_AT = 'updatedAt';
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'schedules_alert';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'fromUser',
        'toUser',
        'message',
        'sendDate',
        'status'
    ];


    public static function sentNotifications()
    {
    	$oldAlerts = ScheduleAlert::where('sendDate','=',date('Y-m-d H:i'))->get();
    	foreach ($oldAlerts as $alert) 
    	{
    		$user = User::find($alert->fromUser);
    		if(!empty($user))
    		{
    	        $fromUser = $user->id;
    	        $toUser = $alert->toUser;
    	        $isValidUser = User::where(['id' => $toUser])->first();
    	        if(!empty($isValidUser))
    	        {
    	        	if(!$user->isAdmin())
    	        	{
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

						if(empty($modelThread))
						{
						  	$modelThread = Threads::create([
						    	'fromUser'      => $fromUser,
						      	'toUser'        => $toUser,
						      	'threadName'    => Threads::uniqueThreadName($fromUser),
						      	'threadLabel'   => Threads::uniqueThreadLabel($fromUser,$toUser,0),
						      	'type'          => Threads::TYPE_NON_ANONYMOUS,
						      	'anonimityFlag' => Threads::TYPE_NON_ANONYMOUS,
						      	'schoolProfileId'=>$user->Responder->schoolProfileId
						  	]);
						  	
						}
	                  	$modelChat = Chat::create([
	                      	'message'   => $alert->message,
	                      	'fromUser'  => $fromUser,
	                      	'toUser'    => $toUser,
	                      	'threadId'=> $modelThread->id
	                      	'schoolProfileId'=>$user->Responder->schoolProfileId,
	                  	]);

	                  	if(!empty($modelChat)){
		                    $message = $user->getName().': '.$modelChat->message;
		                    $isValidUser->sendPushNotification($message,"message");
		                }
		            }
		            else
		            {
		            	$message = $user->getName().': '.$alert->message;
		                $isValidUser->sendPushNotification($message,"message");
		            }
    	      	}
    	  	}
    	}
    }
}
