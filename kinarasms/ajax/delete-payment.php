<?php
$output = array(
	'status' => 'error',
	'message' => 'There was a problem deleting this user. Please try again later.'
);

require ('../connect.php');
require ('../functions.php');

if( isset($_GET['id']) ) {

	$id = $_GET['id'];
	
	deletePayment($link,$id);
	
	$output['status'] = 'success';
	$output['message'] = 'Payment successfully deleted.';
	
}
	
$json = json_encode($output);

echo $json;

die();

$link->close();

?>