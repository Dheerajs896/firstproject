<?php 
include('config.php');

if (isset($_POST['email']) && isset($_POST['pwd'])) {
	$email 	= $_POST['email'];
	$pwd 	= $_POST['pwd'];

	$SelectQuery = mysqli_query($con , "SELECT * FROM `tblregister` WHERE `email` = '".$email."' and `passwd`='".$pwd."'");
	if (mysqli_num_rows($SelectQuery) > 0) {
		$json = array('status'=>'true',
					  'msg'=>'Login Successfully');
	}else{
		$json = array('status'=>'false',
					  'msg'=>'Invalid Email Nand Password');
	}
	echo json_encode($json);
}else{
	$json = array('status'=>'false',
				  'msg'=>'Please Send All Parameters');
	echo json_encode($json);
}


 ?>