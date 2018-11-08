<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    //Status Constants
    const STATUS_ACTIVE   = 1;
    const STATUS_INACTIVE = 0;
    const CREATED_AT = 'createdAt';
    const UPDATED_AT = 'updatedAt';
    const USER_SUPER_ADMIN = 'super_admin';
    const USER_ADMIN = 'admin';
    const USER_RESPONDER = 'responder';
    const USER_STUDENT = 'student';
    
    use Notifiable;

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'users';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'username',
        'password',
        'roleId',
        'resetPasswordToken',
        'avatarFilePath',
        'deviceToken',
        'verified',
        // 'createdAt',
        // 'updatedAt'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'resetPasswordToken','deviceToken',
    ];

    /**
     * The dynamic attributes from mutators that should be returned with the user object.
     * @var array
     */
    protected $appends = ['full_name'];

    /**
     * @return mixed
     */
    public function role()
    {
        return $this->hasOne(Roles::class,'id','roleId');
    }

    /**
     * @return mixed
     */
    public function schoolAdminProfile()
    {
        return $this->hasOne(SchoolAdminProfiles::class,'userId','id');
    }

    public function statusVerified(){
        return ($this->verified) ? 'Active' : 'In-Active';
    }

    public function isSuperAdmin(){
        if($this->role->label == self::USER_SUPER_ADMIN)
            return true;

        return false;
    }

    public function isAdmin(){
        if($this->role->label == self::USER_ADMIN)
            return true;

        return false;
    }

    public function isResponder(){
        if($this->role->label == self::USER_RESPONDER)
            return true;

        return false;
    }

    public function isStudent(){
        if($this->role->label == self::USER_STUDENT)
            return true;

        return false;
    }

    public function isValidUser(){
        if($this->isSuperAdmin())
            return true;
        elseif($this->isAdmin() && !empty($this->schoolAdminProfile))
            return true;

        return false;
    }
}
