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

$fname = $link->real_escape_string($_POST['fname']);
$lname = $link->real_escape_string($_POST['lname']);
$level = $link->real_escape_string($_POST['level']);
$raw = $link->real_escape_string($_POST['pwd']);
$pwd = sha1($raw);
$email = $link->real_escape_string($_POST['email']);
$phone = $link->real_escape_string($_POST['telephone']);
$sendpass = $_POST['sendpass'];

$emailchecksql="SELECT user_id FROM users WHERE email='$email';";
$result = $link->query($emailchecksql);

if($result->num_rows > 0){
	$output['status'] = 'error';
	$output['message'] = 'That email is already taken. Try another one, ok?';
} else {

	$sql	= "INSERT INTO users (fname, lname,  pwd, level, email, telephone) VALUES ('$fname', '$lname', '$pwd', '$level', '$email', '$phone');";
	
	echo $sql;
	
	if( $result = $link->query( $sql ) ) {
		$output['status'] = 'success';
		$output['message'] = 'User created successfully.';
		$output['id'] = $link->insert_id;
		
		if( $sendpass == 'true' ) {
		
			// Construct email message via Swift Mailer
			require_once '../libraries/Swift/swift_required.php';
			
			// Create the Transport
			$transport = Swift_SmtpTransport::newInstance('smtp.webfaction.com', 25)
				->setUsername('animal_forms')
				->setPassword('nEphEBA4eZU6')
			;
			
			$subject		=	'Kinara SMS App: New User';
			
			$messagebody	=	'<p>A user has been created for you on the <a href="http://kinara.geniusurls.com">Kinara SMS App website</a>. Please see the details below.</p>';
			
			$messagebody	.=	'<p>Email: ' . $email . '<br />';
			$messagebody	.=	'Password: ' . $raw . '<br />';
			$messagebody	.=	'User Level: ' . processedUserLevel($level) . '</p>';
			
			// Create the Mailer using your created Transport
			$mailer = Swift_Mailer::newInstance($transport);
			
			// Create a message
			$message = Swift_Message::newInstance($subject)
			  ->setFrom(array('no-reply@kinara.geniusurls.com' => 'Kinara SMS App'))
			  ->setTo(array($email => $fname . ' ' . $lname))
			  ->setBcc(array( 'mark.delorey@gmail.com' => 'Mark Delorey' ))
			  ->setBody($messagebody, 'text/html')
			  ;
			
			// Send the message
			$result = $mailer->send($message);
		}
	}
	
}

$json = json_encode( $output );

echo $json;

$link->close();

?>