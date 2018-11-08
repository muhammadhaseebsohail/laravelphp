<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Model;

class ScheduleSessions2 extends Model
{
    //Attributes Constants
    const CREATED_AT    = 'createdAt';
    const UPDATED_AT    = 'updatedAt';
    const TYPE_NEVER    = 0;
    const TYPE_DAILY    = 1;
    const TYPE_WEEKLY   = 2;
    const TYPE_MONTHLY  = 3;
    const NOT_REPEATED  = 0;
    const REPEATED  = 1;
    const ACTIVE  = 1;
    const IN_ACTIVE  = 0;

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'schedule_sessions2';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'studentProfileId',
        'responderProfileId',
        'type',
        'repeated',
        'description',
        'status',
        'startDate',
        'endDate',
        'rEndDate',
        'sessionId',
        'causeData',
        'schoolProfileId'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
    ];

    /**
     * @return mixed
     */
    public function student()
    {
        return $this->hasOne(Student::class,'id','studentProfileId');
    }

    /**
     * @return mixed
     */
    public function responder()
    {
        return $this->hasOne(Responder::class,'id','responderProfileId');
    }

    /**
     * @return Array
     */
    public static function getTypes(){
        return [
                self::TYPE_NEVER    => 'Never', 
                self::TYPE_DAILY    => 'Daily',
                self::TYPE_WEEKLY   => 'Weekly',
                self::TYPE_MONTHLY  => 'Monthly'
            ];
    }

    public function getArrayResponse(){
        $response = [
                'id'                => $this->id,
                'studentProfile'    => $this->student->getResponseData(),
                'studentFullName'   => $this->student->fullName(),
                'responderProfile'  => $this->responder->getResponseData(),
                'type'              => $this->type,
                'repeated'          => $this->repeated,
                'description'       => $this->description,
                'sessionId'         => $this->sessionId,
                'status'            => $this->status,
                'startDate'         => date('Y-m-d H:i',strtotime($this->startDate)),
                'endDate'           => date('Y-m-d H:i',strtotime($this->endDate)),
                'createdAt'         => date('Y-m-d H:i:s',strtotime($this->createdAt)),
                'causeData'         => $this->causeData,
                'validity'          => $this->validity()
            ];

        if($this->repeated == self::NOT_REPEATED && !empty($this->rEndDate))
            $response['rEndDate']   =  date('Y-m-d H:i:s',strtotime($this->rEndDate));

        return $response;
    }

    public function validity()
    {
        return (strtotime($this->endDate) >= strtotime('now')) ? true : false;
    }

    public static function sentNotifications(){

        $currentDate = date('Y-m-d H:i:s');
        $modelSchedules = ScheduleSessions2::where('endDate','>=',$currentDate)->get();
        
        foreach ($modelSchedules as $key => $value) 
        {

            $flag = 0;
            $flag2 = 0;

            $schoolTimeSymbol = $value->student->schoolProfile->schoolTimeSymbol;
            $schoolTimeValue  = $value->student->schoolProfile->schoolTimeValue;
            $schoolTimeZone   = $value->student->schoolProfile->schoolTimeZone." Hours";
            
            
            $plus1 =    $schoolTimeValue + 1;
            $plus12 =   $schoolTimeValue + 12;

            $currentDateTime = strtotime(date('Y-m-d H:i:s',strtotime($plus12.' Hours')));
            $currentDateTimeOneHour = strtotime(date('Y-m-d H:i:s',strtotime($plus1.' Hours')));
            


            $startDateTimeStamp = strtotime($value->startDate.$schoolTimeZone);
            
            //return date('H:i',$startDateTimeStamp);
            if(date('H:i',$currentDateTime) == date('H:i',$startDateTimeStamp)){
                 $flag = 1;
                 //return "flag 1 mai agea hai:";
            }
            if(date('H:i',$currentDateTimeOneHour) == date('H:i',$startDateTimeStamp)){
                $flag2 = 1;   
                //return "flag 2 mai agea hai:";
            }
            if($flag)
            {
                // Send to Student
                $message = 'Your upcoming session in next 12 hours with '.$value->responder->user->getName().' ('.$value->description.').';
                $value->student->user->sendPushNotification($message,"schedule");
                //Send to Responder
                $message = 'Your upcoming session in next 12 hours with '.$value->student->user->getName().' ('.$value->description.').';
                $value->responder->user->sendPushNotification($message,"schedule");
            }
            if($flag2)
            {
                //Send to Student
                $message = 'Your upcoming session in next 1 hours with '.$value->responder->user->getName().' ('.$value->description.').';
                $value->student->user->sendPushNotification($message,"schedule");
                //Send to Responder
                $message = 'Your upcoming session in next 1 hours with '.$value->student->user->getName().' ('.$value->description.').';
                $value->responder->user->sendPushNotification($message,"schedule");
            }
        }
    }
}
