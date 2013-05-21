<?php
include_once('../connect.php');

$output = array(
	'status' => 'error',
	'message' => 'There was a problem logging in. Please try again later.'
);

if( isset($_REQUEST['email']) AND isset($_REQUEST['pwd']) ) {

	$email	=	$link->real_escape_string($_REQUEST['email']);
	//echo $_REQUEST['email'];
	//echo $email;
	//echo $_REQUEST['pwd'];
	$pwd	=	sha1($_REQUEST['pwd']);
	//echo $pwd;
	
	$sql	=	"SELECT user_id,level FROM users WHERE email='$email' AND pwd='$pwd'" ;
	//echo $sql;
	$result	=	$link->query( $sql );
	$count	=	$result->num_rows;
	
	if ($count>0){
		
		$secret	= 	'jiepoec98fiU';
		setcookie('email',$email,strtotime('+1day'),'/');
		$time	=	time();
		setcookie('time',$time,strtotime('+1day'),'/');
		$hash	=	sha1($email.$time.$secret);
		setcookie('hash',$hash,strtotime('+1day'),'/');
		setcookie('loggedin','true',strtotime('+1day'),'/');
		
		$row = $result->fetch_assoc();
		
		setcookie('ul',strval($row['level']),strtotime('+1day'),'/');
		setcookie('uid',strval($row['user_id']),strtotime('+1day'),'/');
 		
 		$output['status'] = 'success';
 		$output['message'] = 'Logging you in...';
 		
	} else {
		$output['message'] = "Oops! Email or password invalid!";
	}
}
	
	$json = json_encode($output);
	
	echo $json;
	
	die();

?>