<?php
if(isset($_COOKIE['user']) and 
isset($_COOKIE['loginTime']) and isset($_COOKIE['hash'])){
  $user=$_COOKIE['user'];
	$time=$_COOKIE['loginTime'];
	$hash=$_COOKIE['hash'];
	$hashCalculated=
	sha1($user.$time."secret");
	if($hash!=$hashCalculated) {
		header('location:login.php');
	}
}else{
	header('location:login.php');
}
echo "Welcome ".$user."!<br>";
?>
