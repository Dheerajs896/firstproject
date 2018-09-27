<?php 
$hostName = 'localhost';
$userName = 'root';
$passwd   = '';
$dbName   = 'reactjs';

$con = mysqli_connect($hostName,$userName,$passwd,$dbName);

if (!$con) {
	echo "Conection Failed!!";
}


 ?>