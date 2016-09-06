<?php
    	$uname=$_REQUEST['uname'];
    	$conn=mysqli_connect('127.0.0.1','root','','yc',3306);
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