<?php
include_once('../connect.php');
include_once('../functions.php');

$output = array(
	'status' => 'error',
	'message' => 'There was a problem logging in. Please try again later.'
);

if( isset($_REQUEST['useremail']) ) {
	
	$email = $link->real_escape_string($_REQUEST['useremail']);
	$random = generateRandomString();
	$time = time();
	
	$sql="UPDATE users SET reset_auth_token='$random',reset_auth_time='$time' WHERE email='$email'";
	
	if( $result	=	$link->query($sql) ){
		
		$args = array(
			'email' => $email
		);
		$user = getUsers($link,1,$args);
 		
 		$output['status'] = 'success';
 		$output['message'] = 'A password reset link has been sent to your email.';
 		
 		// Construct email message via Swift Mailer
		require_once '../libraries/Swift/swift_required.php';
		
		// Create the Transport
		$transport = Swift_SmtpTransport::newInstance('smtp.webfaction.com', 25)
			->setUsername('animal_forms')
			->setPassword('nEphEBA4eZU6')
		;
		
		$subject		=	'Kinara Capital SMS Reminder App Password Reset';
		
		$messagebody	=	'<p>To reset your password, click on the link below:</p>';
		
		$messagebody	.=	'<p><a href="http://kinara.geniusurls.com/auth-check.php?auth='.$random.'">Reset Password</a></p>';
		
		$messagebody	.=	'<p>This message was sent on ' . date( 'r') . ' because you request to reset your password for the user with email address '.$email.'</p>';
		
		// Create the Mailer using your created Transport
		$mailer = Swift_Mailer::newInstance($transport);
		
		// Create a message
		$message = Swift_Message::newInstance($subject)
		  ->setFrom(array('no-reply@kinara.geniusurls.com' => 'Kinara Capital SMS Reminder App'))
		  ->setTo(array($email => $fname . ' ' . $lname))
		  ->setBcc(array( 'mark.delorey@gmail.com' => 'Mark Delorey' ))
		  ->setBody($messagebody, 'text/html')
		  ;
		
		// Send the message
		$result = $mailer->send($message);

 		
	} else {
		$output['message'] = "No user found with that email. Please try again.";
	}
}
	
	$json = json_encode($output);
	
	echo $json;
	
	die();

?>