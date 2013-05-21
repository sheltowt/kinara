<?php
$output = array(
	'status' => 'error',
	'message' => 'There was a problem updating this loan. Please try again later.'
);

require ('../connect.php');
require ('../functions.php');

if( isset($_POST['payments']) ) {

$payments = $_POST['payments'];

foreach($payments as $payment) {

	$id = $payment[0];
	
	$args = array(
		'due_date' => strtotime($link->real_escape_string($payment[1])),
		'amount' => $link->real_escape_string($payment[2]),
		'status' => $link->real_escape_string($payment[3]),
		'received_date' => strtotime($link->real_escape_string($payment[4]))
	);
	
	$result = updatePayment($link,$id,$args);
	
}
	
	$output['status'] = 'success';
	$output['message'] = 'Loan successfully updated.';
	
}
	
$json = json_encode($output);

echo $json;

die();

$link->close();

?>