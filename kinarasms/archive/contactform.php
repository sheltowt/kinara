<?php
include_once('connect.php');

//if(isset($_POST['fname']) and isset($_POST['mname']) and isset($_POST['lname']) and isset($_POST['emailaddress']) and isset($_POST['workphone']) and isset($_POST['oname']) and isset($_POST['otype'])) {
  $fname=$_POST['fname'];
	$mname=$_POST['mname'];
	$lname=$_POST['lname'];
	$emailaddress=$_POST['emailaddress'];
	$workphone=$_POST['workphone'];
	$organizationname=$_POST['oname'];
	$organizationtype=$_POST['otype'];
	$sql="INSERT INTO contactform(fname, mname, lname, emailaddress, workphone, oname, otype) VALUES('$fname', '$mname', '$lname', '$emailaddress', '$workphone', '$oname', '$otype')";
		mysql_query($sql,$link);
	//}

$to = "matthewd112@gmail.com";
$subject = "Kinara Contact Form";
$message = "Hello! Please see your new contact information below! \n\nfirstname: ".$fname."\nmiddlename: ".$mname."\nlastname: ".$lname."\nemailaddress: ".$emailaddress."\nworkphone: ".$workphone."\norganizationname: ".$organizationname."\norganizationtype: ".$organizationtype;
$from = "ContactForm";
$headers = "From: KinaraAdmin". $from;
mail($to,$subject,$message,$headers);
?>

<html>
<title>Contact Form</title>
<img src="http://66.39.69.119/wp-content/uploads/2012/08/Kinara-IV-300x76.png" alt="Kinara" width="360" height="60" allign="middle"> <br />
<style type="text/css"> 
<!-- 

 #navbar ul { 
        margin: 0; 
        padding: 5px; 
        list-style-type: none; 
        text-align: center; 
        background-color: silver; 
        } 

#navbar ul li {  
        display: inline; 
        } 

#navbar ul li a { 
        text-decoration: none; 
        padding: .2em 1em; 
        color: black; 
        background-color: silver; 
        } 

#navbar ul li a:hover { 
        color: green; 
        background-color: #fff; 
        } 

--> 
</style> 
</head> 
<body> 
<div id="navbar"> 
  <ul> 
		<li><a href="homepagebeforelogin.html">Home Page</a></li>  
  </ul> 
</div> 
</body> 
</html>
<div style="background-color:silver;border:1px solid black;padding:10px;">
<form method="post" action="">
<font color=black face=arial size=5><b><u>First Name: <input type="text" name="fname" ></br></b></u><hr>
<font color=black face=arial size=5><b><u>Middle Name: <input type="text" name="mname" ></br></b></u><hr>
<font color=black face=arial size=5><b><u>Last Name: <input type="text" name="lname"></br></b></u><hr>
<font color=black face=arial size=5><b><u>Email Address: <input type="text" name="emailaddress"></br></b></u><hr>
<font color=black face=arial size=5><b><u>Work Phone: <input type="text" name="workphone"></br></b></u><hr>
<font color=black face=arial size=5><b><u>Organization Name: <input type="text" name="oname"></br></b></u><hr>
<font color=black face=arial size=5><b><u>Organization Type:<select name="otype">
	<option value="0">Microfinance</option>
	<option value="1">SME Bank</option>
	<option value="2">Energy Finance</option>
	<option value="3">Housing Finance</option>
</select><br>
<input type="submit" value="Submit" onClick="window.open('thanks.html','mywindow','width=400,height=200')"> 
</html>
</form>
