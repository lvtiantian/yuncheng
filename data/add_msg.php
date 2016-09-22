<?php
	$uid=$_REQUEST['uid'];
	$title=$_REQUEST['title'];
	$content=$_REQUEST['mainText'];
	$date=$_REQUEST['date'];
	$conn=mysqli_connect('127.0.0.1','root','','yc',3306);
	//$conn = mysqli_connect(SAE_MYSQL_HOST_M, SAE_MYSQL_USER, SAE_MYSQL_PASS,  SAE_MYSQL_DB, SAE_MYSQL_PORT);
	$sql="SET NAMES utf8";
	$result=mysqli_query($conn,$sql);
	$sql="INSERT INTO yc_msgs VALUES(null,$uid,'$title','$content','$date')";
	$result=mysqli_query($conn,$sql);
	if($result){
		echo 'succ';
	}else{
		echo 'erro';
	}
?>