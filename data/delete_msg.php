<?php
	$uid=$_REQUEST['uid'];
	$title=$_REQUEST['title'];
	$conn=mysqli_connect('127.0.0.1','root','','yc',3306);
	//$conn = mysqli_connect(SAE_MYSQL_HOST_M, SAE_MYSQL_USER, SAE_MYSQL_PASS,  SAE_MYSQL_DB, SAE_MYSQL_PORT);
	$sql="SET NAMES utf8";
	$result=mysqli_query($conn,$sql);
	$sql="SELECT * FROM yc_msgs WHERE user_id='$uid' AND msg_title='$title'";
	$result=mysqli_query($conn,$sql);
	if(count($result)==1){
    	$sql="DELETE from yc_msgs WHERE user_id='$uid' AND msg_title='$title'";
        $result=mysqli_query($conn,$sql);
        if($result){
        	echo 'succ';
        }else{
           	echo 'erro';
        }
    }
?>