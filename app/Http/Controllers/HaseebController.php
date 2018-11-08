<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use App\HaseebModel;
class HaseebController extends Controller
{
    public function get($id)
    {
    	$new = HaseebModel::where('fid','=',$id)->get();

    	$response['data']['message'] = 'Request Successfull';
		                $response['data']['error'] = 200;
		                $response['data']['result'] = $new;
		                $response['status'] = true;

		                return $response;

    }

    public function add(Request $request)
    {
    	$new = new HaseebModel();

    	$new->fid = $request->fid;
    	$new->name = $request->name;
    	$new->comment = $request->comment;
    	$new->save();


    	$response = [
    	        'data' => [
    	            'code'      => 00,
    	            'error'     => '',
    	            'message'   => 'Data save ogea',
    	        ],
    	        'status' => true
    	    ];

    	    return $response;

    }

}
