<?php
    $uname=$_REQUEST['uname'];
    $upwd=$_REQUEST['upwd'];
    $conn=mysqli_connect('127.0.0.1','root','','yc',3306);
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