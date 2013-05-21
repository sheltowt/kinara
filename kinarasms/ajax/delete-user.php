<?php
include_once('../connect.php');

$output = array(
	'status' => 'error',
	'message' => 'There was a problem deleting this user. Please try again later.'
);

if( isset($_GET['user_id']) ) {

	$user_id = $_GET['user_id'];
	
	$sql="DELETE FROM users WHERE user_id='$user_id'";
	$result=mysql_query($sql,$serverlink);
	
	$output['status'] = 'success';
	$output['message'] = 'User successfully deleted.';
	
}
	
	$json = json_encode($output);
	
	echo $json;
	
	die();

?>