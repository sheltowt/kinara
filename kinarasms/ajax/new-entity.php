<?php

$output = array (
	'status' => 'error',
	'message' => 'There was an error processing your request. Please try again later.'
);

require ('../connect.php');
require ('../functions.php');

if(!$link) {
	echo 'Not connected';
}

$entity = $link->real_escape_string($_POST['entity']);
$contact1name = $link->real_escape_string($_POST['contact1name']);
$contact1phone = $link->real_escape_string($_POST['contact1phone']);
$contact2name = $link->real_escape_string($_POST['contact2name']);
$contact2phone = $link->real_escape_string($_POST['contact2phone']);

$result = newEntity($link,$entity,$contact1name,$contact1phone,$contact2name,$contact2phone);

if($result){
	$output['status'] = 'success';
	$output['message'] = 'Your entity "' . stripslashes($entity) . '" was successfully created.';
	$output['id'] = $result;
	$output['entity'] = stripslashes($entity);
	$output['contact1name'] = stripslashes($contact1name);
	$output['contact1phone'] = stripslashes($contact1phone);
	$output['contact2name'] = stripslashes($contact2name);
	$output['contact2phone'] = stripslashes($contact2phone);
}

$json = json_encode( $output );

echo $json;

$link->close();

?>