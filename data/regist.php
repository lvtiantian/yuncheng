<?php
    	$uname=$_REQUEST['uname'];
    	$conn=mysqli_connect('127.0.0.1','root','','yc',3306);
		//$conn = mysqli_connect(SAE_MYSQL_HOST_M, SAE_MYSQL_USER, SAE_MYSQL_PASS,  SAE_MYSQL_DB, SAE_MYSQL_PORT);
    	$sql="SET NAMES UTF8";
    	$result=mysqli_query($conn,$sql);
    	$sql="SELECT * FROM yc_users WHERE user_name='$uname'";
    	$result=mysqli_query($conn,$sql);
    	$row=mysqli_fetch_assoc($result);
    	if(count($row)>0){
    		echo 'erro';
    	}else{
    		echo 'succ';
    	}
?>