<?php
$output = array(
	'status' => 'error',
	'message' => 'There was a problem updating this entity. Please try again later.'
);

require ('../connect.php');
require ('../functions.php');

if( isset($_POST['id']) ) {

	$id = $_POST['id'];
	
	$args = array(
		'entity' => $link->real_escape_string($_POST['entity']),
		'contact1name' => $link->real_escape_string($_POST['contact1name']),
		'contact1phone' => $link->real_escape_string($_POST['contact1phone']),
		'contact2name' => $link->real_escape_string($_POST['contact2name']),
		'contact2phone' => $link->real_escape_string($_POST['contact2phone'])
	);
	
	$result = updateEntity($link,$id,$args);
	
	$output['status'] = 'success';
	$output['message'] = 'Entity successfully updated.';
	
}
	
$json = json_encode($output);

echo $json;

die();

$link->close();

?>