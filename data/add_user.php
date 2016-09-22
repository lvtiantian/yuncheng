<?php
    $uname=$_REQUEST['uname'];
    $upwd=$_REQUEST['upwd'];
    $conn=mysqli_connect('127.0.0.1','root','','yc',3306);
	//$conn = mysqli_connect(SAE_MYSQL_HOST_M, SAE_MYSQL_USER, SAE_MYSQL_PASS,  SAE_MYSQL_DB, SAE_MYSQL_PORT);
    $sql="SET NAMES UTF8";
    $result=mysqli_query($conn,$sql);
    $sql="INSERT INTO yc_users VALUE(NULL,'$uname','$upwd')";
    $result=mysqli_query($conn,$sql);
    if($result){
        echo "注册成功，您是我们的第".mysqli_insert_id($conn)."个用户";
    }else{
        echo "你的sql语句有错:$sql";
    }
?>