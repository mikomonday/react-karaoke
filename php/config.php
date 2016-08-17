<?php
	$host = '192.185.16.232'; //localhost for development
	$db = 'mikomond_reactkaraoke';
	$user = 'mikomond_app';
	$pass = 'hataraitaramake';
	$charset = 'utf8';

	$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
	$opt = [
	    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
	    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
	    PDO::ATTR_EMULATE_PREPARES   => false,
	];

	$pdo = new PDO($dsn, $user, $pass, $opt);
?>