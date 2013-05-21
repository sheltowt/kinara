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

$loan_id = $link->real_escape_string($_POST['loan_id']);
$due_date = strtotime($link->real_escape_string($_POST['due_date']));
$amount = $link->real_escape_string($_POST['amount']);
$status = $link->real_escape_string($_POST['status']);
$received_date = strtotime($link->real_escape_string($_POST['received_date']));

$result = newPayment($link,$loan_id,$amount,$due_date,$received_date,$status);

if($result){
	$output['status'] = 'success';
	$output['message'] = 'Your payment was successfully created.';
}

$json = json_encode( $output );

echo $json;

$link->close();

?>