<?php

require_once('../connect.php');
require_once('../functions.php');

$output = array(
	'status' => 'error',
	'message' => 'There was a problem saving the template. Please try again later.'
);

if( isset($_POST['id']) ) {

	$id	= $link->real_escape_string($_POST['id']);
	$name	= $link->real_escape_string($_POST['name']);
	$body	= $link->real_escape_string($_POST['body']);
	
	$result = updateMessageTemplate($link,$id,$name,$body);
	
	if($result){
		
		$output['status'] = 'success';
		$output['message'] = 'Message template ' . $id . ' successfully updated to ' . $body . '.';
		
	}
	
}
	
$json = json_encode($output);

echo $json;

$link->close();
	
die();

?>