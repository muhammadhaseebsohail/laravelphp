<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Responders</title>
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
			<h1>Responders</h1>
		</center>
		<hr>
		<table class="table table-striped">
			<thead>
				<tr>
					<th>Title</th>
					<th>First Name</th>
					<th>Last Name</th>
					<th>Responder ID</th>
					<th>Email</th>
					<th>Role</th>
				</tr>
			</thead>
			<tbody>
				@foreach($responder as $res)
				<tr>
					<td>{{$res->title}}</td>
					<td>{{$res->firstName}}</td>
					<td>{{$res->lastName}}</td>
					<td>{{$res->responderId}}</td>
					<td>{{$res->username}}</td>
					<td>{{$res->position}}</td>
				</tr>
				@endforeach
			</tbody>
		</table>
	</div>
	
</body>
</html>