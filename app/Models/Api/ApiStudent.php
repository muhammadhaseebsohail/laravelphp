<?php

namespace App\Models\Api;

/* Dependencies */
use App\Models\Student;

/**
 * Class ApiStudent.
 */
class ApiStudent extends Student
{
    public function sendEmail(){
        \Mail::send('vendor.mail.html.waves.student', [
                'name'          => $this->fullName(),
                'accessCode'    => $this->schoolProfile->accessCode,
                'studentId'     => $this->studentId,
                'authCode'      => $this->authorizationCode
            ], function ($message) {
                $message->from('haseeb.sohail@ucp.edu.pk', 'The Waves Team');
                $message->to($this->user->username)->subject('Welcome to Waves!');
        });

        return true;
    }

    public function sendEmailFeedback($text)
    {
        \Mail::send('vendor.mail.html.waves.feedback', [
                'name' => $this->fullName(),
                'roleName' => $this->user->role->description,
                'feedback' => $text,
                'schoolName' => $this->schoolProfile->schoolName,
            ], function ($message) {
                $message->from('ahmed_411@live.com', 'The Waves Team');
                $message->to('haseeb.sohail@ucp.edu.pk')->subject('Feedback');
        });
        return true;
    }
}
