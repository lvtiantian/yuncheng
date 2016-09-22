<?php
	header("content-type:application/json");
	$uid=$_REQUEST['uid'];
	$conn=mysqli_connect('127.0.0.1','root','','yc',3306);
	//$conn = mysqli_connect(SAE_MYSQL_HOST_M, SAE_MYSQL_USER, SAE_MYSQL_PASS,  SAE_MYSQL_DB, SAE_MYSQL_PORT);
    $sql="SET NAMES utf8";
    $result=mysqli_query($conn,$sql);
	if(empty($uid)){
		$sql="select * from yc_msgs";
        	$result=mysqli_query($conn,$sql);
        	if($result){
        		$arr=[];
        		while(($row=mysqli_fetch_assoc($result))!==null){
        			$sql2="select * from yc_users WHERE user_id=$row[user_id]";
        			$result2=mysqli_query($conn,$sql2);
        			while(($row2=mysqli_fetch_assoc($result2))!==null){
        				$row['user_name']=$row2['user_name'];
        			}
        			$arr[]=$row;
        		}
        		echo json_encode($arr);
        	}
        	else{
        		echo "出错";
        	}
	}else{
		$sql="select * from yc_msgs WHERE user_id='$uid'";
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