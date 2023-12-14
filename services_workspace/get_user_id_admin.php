<?php 
header("Access-Control-Allow-Origin: *");
session_start();

$res = array( "id_user" => $_SESSION['id'], 'admin' => $_SESSION['admin']);

echo json_encode($res);