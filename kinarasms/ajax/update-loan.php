<?php
$output = array(
	'status' => 'error',
	'message' => 'There was a problem updating this loan. Please try again later.'
);

require ('../connect.php');
require ('../functions.php');

if( isset($_POST['id']) ) {

	$id = $_POST['id'];
	
	$args = array(
		'loan_id' => $link->real_escape_string($_POST['loan_id']),
		'amount' => $link->real_escape_string($_POST['amount']),
		'date_distributed' => strtotime($link->real_escape_string($_POST['date_distributed'])),
		'number_payments' => $link->real_escape_string($_POST['number_payments']),
		'date_first_payment' => strtotime($link->real_escape_string($_POST['date_first_payment'])),
		'fiveday' => $link->real_escape_string($_POST['fiveday']),
		'twoday' => $link->real_escape_string($_POST['twoday']),
		'oneday' => $link->real_escape_string($_POST['oneday']),
		'confday' => $link->real_escape_string($_POST['confday'])
	);
	
	$result = updateLoan($link,$id,$args);
	
	$output['status'] = 'success';
	$output['message'] = 'Loan successfully updated.';
	
}
	
$json = json_encode($output);

echo $json;

die();

$link->close();

?>