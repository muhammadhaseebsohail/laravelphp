<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use JWTAuthException;
use JWTAuth;

use App\Models\Api\ApiLocalResource as LocalResource;
use App\Models\Api\ApiSchoolAdminProfiles as SchoolAdminProfiles;
use App\Models\Roles;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class LocalResourceController extends Controller
{
    // Get Local Resource
    public function getLocalResources(Request $request)
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
             'schoolProfileId' => 'required',
          ];
          $validator = Validator::make($request->all(), $rules);
          if ($validator->fails()) {
              $response['data']['message'] = 'Invalid input values.';
              $response['data']['errors'] = $validator->messages();
          }else
          {

              //$schoolAdminProfiles= SchoolAdminProfiles::find($request->schoolAdminProfileId);

              $localResource = LocalResource::where('schoolProfileId','=',$request->schoolProfileId)->get();
              
              if ($localResource) {
                  $response['data']['message'] = 'Request Successfull';
                  $response['data']['code'] = 200;
                  $response['data']['result'] = $localResource;
                  $response['status'] = true;
              }
          }
      }
      return $response;
    }



    // Edit Local Resource
    public function editLocalResources(Request $request)
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
           'insuranceType'   => 'required',
           'streetAddress' => 'required',
           'city' => 'required',
           'state' => 'required',
           'zipCode' => 'required',//min 6 -5
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
            $localResource = LocalResource::where('id', $request->get('id'))
                            ->update([
                              'name'        => $request->get('name'),
                                'insuranceType'   => $request->get('insuranceType'),
                                'streetAddress'     => $request->get('streetAddress'),
                                'city'          => $request->get('city'),
                                'state'         => $request->get('state'),
                                'zipCode'       => $request->get('zipCode'),
                                'phoneNumber'     => $request->get('phoneNumber'),
                                'website'       => $request->get('website'),
                                'serviceTypeId'     => $request->get('serviceTypeId'),
                            ]);            
            
            if ($localResource) {
                $response['data']['message'] = 'Request Successfull';
                $response['data']['code'] = 200;
                //$response['data']['result'] = $localResource;
                $response['status'] = true;
            }
        }
      }
      return $response;
    }


    // Add Local Resource
    public function addLocalResources(Request $request)
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
           'name'   => ['required', 'max:191',Rule::unique('local_resources')],
           'insuranceType'   => 'required',
           'streetAddress' => 'required',
           'city' => 'required',
           'state' => 'required',
           'zipCode' => 'required',
           'phoneNumber' => 'required',
           'website' => 'required',
           'schoolProfileId' => ['required','exists:school_profiles,id'],
           'serviceTypeId' => 'required',
        ];

        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            $response['data']['message'] = 'Invalid input values.';
            $response['data']['errors'] = $validator->messages();
        }else
        {

            //$schoolAdminProfiles= SchoolAdminProfiles::find($request->schoolAdminProfileId);
            $localResource = LocalResource::create([
                'name'        => $request->get('name'),
                'insuranceType'   => $request->get('insuranceType'),
                'streetAddress'     => $request->get('streetAddress'),
                'city'          => $request->get('city'),
                'state'         => $request->get('state'),
                'zipCode'       => $request->get('zipCode'),
                'phoneNumber'     => $request->get('phoneNumber'),
                'website'       => $request->get('website'),
                'schoolProfileId'   => $request->schoolProfileId,
                'serviceTypeId'     => $request->get('serviceTypeId'),
            ]);            
            
            if ($localResource) {
                $response['data']['message'] = 'Request Successfull';
                $response['data']['code'] = 200;
                //$response['data']['result'] = $localResource;
                $response['status'] = true;
            }
        }
      }
      return $response;
    }


    // Del Local Resource
    public function delLocalResources(Request $request)
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
            $localResource = LocalResource::find( $request->get('id')); 
            $localResource->delete();           
            
            if ($localResource) {
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
