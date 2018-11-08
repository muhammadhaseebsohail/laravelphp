<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use JWTAuthException;
use JWTAuth;

use App\Models\Api\ApiCrisisResource as CrisisResource;
use App\Models\Api\ApiSchoolAdminProfiles as SchoolAdminProfiles;
use App\Models\Roles;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class CrisisResourceController extends Controller
{
	// Get Crisis Resource
    public function getCrisisResources(Request $request)
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
               'schoolProfileId' => ['required','exists:school_profiles,id'],  // id of the school
            ];
            $validator = Validator::make($request->all(), $rules);
            if ($validator->fails()) {
                $response['data']['message'] = 'Invalid input values.';
                $response['data']['errors'] = $validator->messages();
            }else
            {
                //$schoolAdminProfiles= SchoolAdminProfiles::find($request->schoolAdminProfileId);
                $crisisResource = CrisisResource::where('schoolProfileId','=',$request->schoolProfileId)->get();
                
                if ($crisisResource) {
                    $response['data']['message'] = 'Request Successfull';
                    $response['data']['code'] = 200;
                    $response['data']['result'] = $crisisResource;
                    $response['status'] = true;
                }
            }
        }
        return $response;
    }

    // Add Crisis Resource
    public function addCrisisResources(Request $request)
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
               'name'   => ['required', 'max:191',Rule::unique('crisis_resources')],
               'phoneNumber' => 'required',
               'website' => 'required',
               //'schoolAdminProfileId' => ['required','exists:school_admin_profiles,id'],
               'schoolProfileId' => ['required','exists:school_profiles,id'],  // id of the school
               'serviceTypeId' => 'required',
            ];

            $validator = Validator::make($request->all(), $rules);
            if ($validator->fails()) {
                $response['data']['message'] = 'Invalid input values.';
                $response['data']['errors'] = $validator->messages();
            }else
            {
                //$schoolAdminProfiles= SchoolAdminProfiles::find($request->schoolProfileId);
                $crisisResource = CrisisResource::create([
                    'name'  			=> $request->get('name'),
                    'phoneNumber'    	=> $request->get('phoneNumber'),
                    'website'    		=> $request->get('website'),
                    'schoolProfileId'  	=> $request->schoolProfileId,
                    'serviceTypeId'    	=> $request->get('serviceTypeId'),
                ]);            
                
                if ($crisisResource) {
                    $response['data']['message'] = 'Request Successfull';
                    $response['data']['code'] = 200;
                    //$response['data']['result'] = $crisisResource;
                    $response['status'] = true;
                }
            }
        }
        return $response;
    }


    // Edit Crisis Resource
    public function editCrisisResources(Request $request)
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
               'id'   => 'required',
               'name'   => ['required', 'max:191'],
               'phoneNumber' => 'required',
               'website' => 'required',
               //'schoolProfileId' => 'required',
               'serviceTypeId' => 'required',
            ];

            $validator = Validator::make($request->all(), $rules);
            if ($validator->fails()) {
                $response['data']['message'] = 'Invalid input values.';
                $response['data']['errors'] = $validator->messages();
            }else
            {
                $crisisResource = CrisisResource::where('id', $request->get('id'))
    								            ->update([
    								            	'name'  			=> $request->get('name'),
    								                'phoneNumber'    	=> $request->get('phoneNumber'),
    								                'website'    		=> $request->get('website'),
    								                'serviceTypeId'    	=> $request->get('serviceTypeId'),
    								            ]);            
                
                if ($crisisResource) {
                    $response['data']['message'] = 'Request Successfull';
                    $response['data']['code'] = 200;
                    //$response['data']['result'] = $crisisResource;
                    $response['status'] = true;
                }
            }
        }
        return $response;
    }


    // Del Crisis Resource
    public function delCrisisResources(Request $request)
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
               'id'   => 'required',
            ];

            $validator = Validator::make($request->all(), $rules);
            if ($validator->fails()) {
                $response['data']['message'] = 'Invalid input values.';
                $response['data']['errors'] = $validator->messages();
            }else
            {
                $crisisResource = CrisisResource::find( $request->get('id')); 
                $crisisResource->delete();           
                
                if ($crisisResource) {
                    $response['data']['message'] = 'Request Successfull';
                    $response['data']['code'] = 200;
                    //$response['data']['result'] = $localResource;
                    $response['status'] = true;
                }
            }
        }
        return $response;
    }



}
