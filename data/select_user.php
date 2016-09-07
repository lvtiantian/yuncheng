<?php
   header("content-type:application/json");
   $uid=$_REQUEST['uid'];
   $conn=mysqli_connect('127.0.0.1','root','','yc',3306);
   $sql="SET NAMES utf8";
   $result=mysqli_query($conn,$sql);
   $sql="select * from yc_users WHERE user_id=$uid";
   $result=mysqli_query($conn,$sql);
   if($result){
       $row=mysqli_fetch_assoc($result);
       echo json_encode($row);
   }
   else{
      echo "³ö´í";
   }
?>