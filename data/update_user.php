<?php
    $uid=$_REQUEST['uid'];
    $uname=$_REQUEST['uname'];
    $upwd=$_REQUEST['upwd'];
    $conn=mysqli_connect('127.0.0.1','root','','yc',3306);
	//$conn = mysqli_connect(SAE_MYSQL_HOST_M, SAE_MYSQL_USER, SAE_MYSQL_PASS,  SAE_MYSQL_DB, SAE_MYSQL_PORT);
    $sql="SET NAMES UTF8";
    $result=mysqli_query($conn,$sql);
    $sql="UPDATE yc_users SET user_name='$uname',user_pwd='$upwd' WHERE user_id=$uid";
    $result=mysqli_query($conn,$sql);
        $result=mysqli_query($conn,$sql);
    if($result){
        echo 'succ';
    }else{
        echo "erro";
    }
?>