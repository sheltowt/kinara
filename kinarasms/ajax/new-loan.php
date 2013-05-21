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
$entity_id = $link->real_escape_string($_POST['entity_id']);
$amount = $link->real_escape_string($_POST['amount']);
$date_distributed = strtotime($link->real_escape_string($_POST['date_distributed']));
$number_payments = $link->real_escape_string($_POST['number_payments']);
$payment_amount = $link->real_escape_string($_POST['payment_amount']);
$date_first_payment = strtotime($link->real_escape_string($_POST['date_first_payment']));
$fiveday = $link->real_escape_string($_POST['fiveday']);
$twoday = $link->real_escape_string($_POST['twoday']);
$oneday = $link->real_escape_string($_POST['oneday']);
$confday = $link->real_escape_string($_POST['confday']);

$result = newLoan($link,$loan_id,$entity_id,$amount,$date_distributed,$number_payments,$payment_amount,$date_first_payment,$fiveday,$twoday,$oneday,$confday);

if($result){
	$output['status'] = 'success';
	$output['message'] = 'Your loan "' . stripslashes($loan_id) . '" was successfully created.';
}

$json = json_encode( $output );

echo $json;

$link->close();

?>