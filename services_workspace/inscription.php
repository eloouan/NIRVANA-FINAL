<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
	include("db_connect.php");
	include("user_crud.php");

	
	if (isset($_GET['name']) && isset($_GET['password'])){
		$name = $_GET["name"];
		$password = $_GET["password"];
		
		$password_crypte = hash('sha256', $password);

		$sql = "SELECT name, password FROM `user`";
		$query = mysqli_query($conn, $sql);
		$deja_present = false;

		while($result = mysqli_fetch_assoc($query)){
			if ($name == $result['name'] ){
				$deja_present = true;
			}
		}
		if (!$deja_present){
			insert_user($conn, $name, $password_crypte);
		}
		
	include "db_disconnect.php";
		echo json_encode($deja_present);
	}