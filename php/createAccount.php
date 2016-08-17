<?php
require 'config.php';

$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];
$return = array();

$accountCheckQuery = $pdo->prepare("SELECT username FROM userAccounts WHERE username = :username OR email = :email");
$accountCheckQuery->execute(['username' => $username, 'email' => $email]);
$row = $accountCheckQuery->fetch();

//If rows exist account in use
if ($row) {
	$return['log'] = 'accountExists';
} else {
	$return['log'] = '';

	$accountCreateInsert = $pdo->prepare("INSERT INTO userAccounts (username, password, email) VALUES (:username, :password, :email)");
	$accountCreateInsert->execute(['username' => $username, 'password' => $password, 'email' => $email]);

	$return['log'] = 'accountCreated';
}

echo json_encode($return);
?>