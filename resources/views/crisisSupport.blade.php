<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Crisis Supports</title>
	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

	<!-- jQuery library -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

	<!-- Latest compiled JavaScript -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body>

	<div class="container">
		<center>
			<h1>Crisis Supports</h1>
		</center>
		<hr>
		<table class="table table-striped">
			<thead>
				<tr>
					<th>Name</th>
					<th>Phone Number</th>
					<th>Website</th>
					<th>Service</th>
				</tr>
			</thead>
			<tbody>
				@foreach($crisisSupport as $res)
				<tr>
					<td>{{$res->name}}</td>
					<td>{{$res->phoneNumber}}</td>
					<td>{{$res->website}}</td>
					<td>{{$res->serviceTypeId}}</td>
				</tr>
				@endforeach
			</tbody>
		</table>
	</div>
	
</body>
</html>