<?php
	header("Content-Type:application/json;charset=utf-8");
	$uname=$_REQUEST['uname'];
	$upwd=$_REQUEST['upwd'];
	$conn=mysqli_connect('127.0.0.1','root','','yc',3306);
	$sql="SET NAMES UTF8";
	$result=mysqli_query($conn,$sql);
	$sql="SELECT * FROM yc_users WHERE user_name='$uname' AND user_pwd='$upwd'";
	$result=mysqli_query($conn,$sql);
	$row=mysqli_fetch_assoc($result);
	if(count($row)>0){
		$arr=["msg"=>"SUCC","user_id"=>1,"uname"=>"$uname"];
		echo json_encode($arr);
	}else{
		$arr=["msg"=>"ERR","reason"=>"用户名或密码错误","sql"=>"$sql"];
		echo json_encode($arr);
	}
?>