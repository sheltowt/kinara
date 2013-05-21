<?php

/*
 * Database connection using mysqli - http://www.php.net/manual/en/mysqli.quickstart.php
 * OOP database connection
 * To connect to the database in your files, use require_once('connect.php');
 * Database connection will be accessible via the $link variable for use with mysqli functions
 *
*/

global $link;
$link = new mysqli("localhost", "sheltowt_kinara", "9uSw4nadrUcA", "sheltowt_kinara");
if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}

// Uncomment next line to see connection details
// echo $mysqli->host_info . "\n";

?>