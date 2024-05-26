<?php 
$servername="jdbc:mysql://localhost:3306/blogs";
$database=" Blogs";
$username="root";
$password="root";
$connect=new mysqli($servername,$username,$password,$database);
if( $connect -> connect_error){
    die("connection failed",$conn-> connect_error);
}
echo "connected successfull";
?>