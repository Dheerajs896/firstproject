<?php 
include('config.php');

$SelectQuery = mysqli_query($con , "SELECT * FROM `tblregister`");
while ($row = mysqli_fetch_array($SelectQuery)) {
	$teampArray[] = array('id'=>$row['id'],
						  'name'=>$row['name'],
						  'number'=>$row['number'],
						  'email'=>$row['email'],
						  'pwd'=>$row['passwd']);
}
if (!empty($teampArray)) {
	$json = array('status'=>'true',
				  'data'=>$teampArray);
}else{
	$json = array('status'=>'flase',
				  'data'=>'Data Not Found');
}

echo json_encode($json);


 ?>