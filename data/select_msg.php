<?php
	header("content-type:application/json");
	$conn=mysqli_connect('127.0.0.1','root','','yc',3306);
	$sql="SET NAMES utf8";
	$result=mysqli_query($conn,$sql);
	$sql="select * from yc_msgs";
	$result=mysqli_query($conn,$sql);
	if($result){
		$arr=[];
		while(($row=mysqli_fetch_assoc($result))!==null){
			$arr[]=$row;
		}
		echo json_encode($arr);
	}
	else{
		echo "出错";
	}
?>