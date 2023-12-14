<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include 'db_connect.php';

if(isset($_GET["name"])){

	session_start();

	$sql="SELECT * FROM `user`";
	$query=mysqli_query($conn, $sql) or die(mysqli_error($conn));
	$name = $_GET['name'];
	$password = $_GET['password'];
	$password_crypte = hash('sha256', $password);
	$user_id = -2;
	$loginSuccessful = false;
	$isadmin = false;

	while($result = mysqli_fetch_assoc($query)){

		if ($result['name'] == $name && $result['password'] == $password_crypte){
			$_SESSION["id"] = $result['id']; 
			
			if ($result['admin'] == 1){
				$_SESSION['admin'] = time();
				$isadmin = true;
				
			}
			$loginSuccessful = true;
			break;
		} 
	}
	include 'db_disconnect.php';

	echo json_encode(["loginSuccessful" => $loginSuccessful, 'user_id' => $_SESSION["id"],"isadmin" => $isadmin,]);

}
