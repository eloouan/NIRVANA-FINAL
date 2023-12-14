<?php 
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include("db_connect.php");

$sql="SELECT * FROM `points`" ;
$result = mysqli_query($conn, $sql);

include("db_disconnect.php");

echo json_encode(mysqli_fetch_all($result, MYSQLI_ASSOC));