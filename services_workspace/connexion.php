<?php

include 'db_connect.php';

if(isset($_POST["name"])){
	$sql="SELECT * FROM `user`";
	$query=mysqli_query($conn, $sql) or die(mysqli_error($conn));
	$name = $_POST['name'];
	$password = $_POST['password'];
	$password_crypte = hash('sha256', $password);

	while($result = mysqli_fetch_assoc($query)){

		if ($result['name'] == $name && $result['password'] == $password_crypte){
			$_SESSION["connecte"] = time(); 
			
			if ($result['admin'] == 1){
				$_SESSION['admin'] = time();
				echo $_SESSION['admin'];
				echo "admin";
			}

			header("Location: index.html");
		}
	}
}
include 'db_disconnect.php';