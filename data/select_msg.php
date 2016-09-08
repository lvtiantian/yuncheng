<?php
	header("content-type:application/json");
	$uname=$_REQUEST['uname'];
	$conn=mysqli_connect('127.0.0.1','root','','yc',3306);
    $sql="SET NAMES utf8";
    $result=mysqli_query($conn,$sql);
	if(empty($uname)){
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
	}else{
		$sql="select * from yc_msgs WHERE user_name='$uname'";
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
	}
?>