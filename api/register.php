<?php 
include('config.php');
if (isset($_POST['name']) && isset($_POST['number']) && isset($_POST['email']) && isset($_POST['pwd'])) {
	
	$name 	= $_POST['name'];
	$number = $_POST['number'];
	$email 	= $_POST['email'];
	$pwd 	= md5($_POST['pwd']);

	$InsertQuery = mysqli_query($con , "INSERT INTO `tblregister`(`name`, `number`, `email`, `passwd`) VALUES ('".$name."','".$number."','".$email."','".$pwd."')");

	if ($InsertQuery) {
		$json = array('status'=>'true',
					  'msg'=>'Registration done Successfully');
	}else{
		$json = array('status'=>'false',
					  'msg'=>'Something went wrong in Registration Process');
	}
	echo json_encode($json);
}else{
	$json = array('status'=>'false',
				  'msg'=>'Please Send All Parameters');
	echo json_encode($json);
}



 ?>