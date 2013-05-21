<?php

require_once('../connect.php');
require_once('../functions.php');

$output = array(
	'status' => 'error',
	'message' => 'Your message could not be sent. Please try again later.'
);

if( isset($_POST['recipient']) ) {

	$recipient = $_POST['recipient'];
	$message = $_POST['message'];

	// Twilio SMS message constructor
	require_once '../libraries/Twilio/Twilio.php';
	
	// Set our AccountSid and AuthToken from twilio.com/user/account
	$AccountSid = 'ACd3622997cc01433f912cc71753549a4b';
	$AuthToken = 'de0eefe0e642eb0c328596cf31634794';
	
	// Instantiate a new Twilio Rest Client
	$client = new Services_Twilio($AccountSid, $AuthToken);
	
	// Your Twilio Number or Outgoing Caller ID
	$from = '8019215865';
	$messages = false;
	
	if( strlen($message) > 160 ) {
		$messages = str_split($message,160);
	}
	
    if( $messages ) {
    	foreach($messages as $message) {
		    $client->account->sms_messages->create($from, $recipient, $message);
	    }
    } else {
	    $client->account->sms_messages->create($from, $recipient, $message);
    }
    
    $output['status'] = 'success';
    $output['message'] = 'Test message sent successfully!';

}

$json = json_encode($output);

echo $json;

$link->close();
	
die();

?>