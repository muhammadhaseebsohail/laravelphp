<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Models\Api\ApiUser as User;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Storage;

use JWTAuthException;
use JWTAuth;

class ImageController extends Controller
{
    public function storeDP(Request $request)
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
			 	'userId' => 'required',
			 	'image' => 'required',
			];
			$validator = Validator::make($request->all(), $rules);
			if ($validator->fails()) {
			  	$response['data']['message'] = 'Invalid input values.';
			  	$response['data']['errors'] = $validator->messages();
			}else
			{
				$user = User::find($request->userId);

				if(!empty($user))
				{

					$file_data = $request->input('image');

//					return $file_data; 
				   	 
				   	@list($type, $file_data) = explode(';', $file_data);
				   	@list(, $file_data) = explode(',', $file_data); 
				   	@list(, $type) = explode('/', $type); 
				   	//str_replace('/', '.', $type);
				   	$file_name = 'image_'.time().'.'.$type; //generating unique file name;
				   	//return $type;
				   	if($file_data!=""){ // storing image in storage/app/public Folder 
				        \Storage::disk('public')->put($file_name,base64_decode($file_data)); 
				    	
				    	$user->avatarFilePath= $file_name;

					    if ($user->save())
					    {
							$response['data']['message'] = 'Request Successfull';
							$response['data']['code'] = 200;
							//$response['data']['result'] = 'http://ec2-18-219-131-166.us-east-2.compute.amazonaws.com/wavesbackend/storage/public/'.$user->avatarFilePath;
							$response['status'] = true;
						}
				    }
				    else
				    {
				    		$response['data']['message'] = 'File Required';
							$response['data']['code'] = 400;
							//$response['data']['result'] = $user->avatarFilePath;
							$response['status'] = true;
				    }	
				}
				else
				{
					$response['data']['message'] = 'User Does not exist';
					$response['data']['code'] = 400;
					//$response['data']['result'] = $localResource;
					$response['status'] = true;
				}
			}
		}
		return $response;
    }


    public function showDP(Request $request)
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
			 	'userId' => 'required',
			];
			$validator = Validator::make($request->all(), $rules);
			if ($validator->fails()) {
			  	$response['data']['message'] = 'Invalid input values.';
			  	$response['data']['errors'] = $validator->messages();
			}else
			{
				$user = User::find($request->userId);

				if(!empty($user))
				{
					//local path
					//$path = 'http://localhost/wavesbackend/public/storage/'.$user->avatarFilePath;
					//server path

					if($user->avatarFilePath != null)
					{
						$path = 'http://ec2-18-219-131-166.us-east-2.compute.amazonaws.com/wavesbackend/storage/app/public/'.$user->avatarFilePath;
						$response['data']['message'] = 'Request Successfull';
						$response['data']['code'] = 200;
						$response['data']['result'] = $path;
						$response['data']['orignalImageName'] = $user->avatarFilePath;
						$response['status'] = true;
					}
					else
					{
						$response['data']['message'] = 'Image not present';
						$response['data']['code'] = 400;
						//$response['data']['result'] = $path;
						$response['status'] = true;
					}		
				}
				else
				{
					$response['data']['message'] = 'User Does not exist';
					$response['data']['code'] = 400;
					//$response['data']['result'] = $localResource;
					$response['status'] = true;
				}
			}
		}
		return $response;
    }

    public function removeDP(Request $request)
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
			 	'userId' => 'required',
			];
			$validator = Validator::make($request->all(), $rules);
			if ($validator->fails()) {
			  	$response['data']['message'] = 'Invalid input values.';
			  	$response['data']['errors'] = $validator->messages();
			}else
			{
				$user = User::find($request->userId);

				if(!empty($user))
				{
					if(\File::delete($user->avatarFilePath))
					{
						return "hahhaha";
					}

					$user->avatarFilePath = null;

					if($user->save())
					{
						$response['data']['message'] = 'Request Successfull';
						$response['data']['code'] = 200;
						//$response['data']['result'] = $path;
						$response['status'] = true;
					}
				}
				else
				{
					$response['data']['message'] = 'User Does not exist';
					$response['data']['code'] = 400;
					//$response['data']['result'] = $localResource;
					$response['status'] = true;
				}
			}
		}
		return $response;
    }
}
