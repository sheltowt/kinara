<?php
include_once('connect.php');

//if(isset($_POST['date']) and isset($_POST['loanOfficer']) and isset($_POST['firstName']) and isset($_POST['middleName']) and isset($_POST['lastName']) and isset($_POST['birthDate']) and isset($_POST['nationality']) and isset($_POST['rStatus']) and isset($_POST['mStatus']) and isset($_POST['gender']) and isset($_POST['IDproof']) and isset($_POST['aProof'])) {
  $date=$_POST['date'];
	$loanOfficer=$_POST['loanOfficer'];
	$fName=$_POST['fName'];
	$mName=$_POST['mName'];
	$lName=$_POST['lName'];
	$bDate=$_POST['bDate'];
	$nationality=$_POST['nationality'];
	$rStatus=$_POST['rStatus'];
	$mStatus=$_POST['mStatus'];
	$gender=$_POST['gender'];
	$IDproof=$_POST['IDproof'];
	$aProof=$_POST['aProof'];
	$sql="INSERT INTO leadform(date, loanOfficer, fName, mName, lName, bDate, nationality, rStatus, mStatus, gender, IDproof, aproof) VALUES('$date', $loanOfficer, '$fName', '$mName', '$lName', '$bDate', '$nationality', '$rStatus', '$mStatus', '$gender', '$IDproof', '$aProof')";
	mysql_query($sql,$link);
	
	//header('location:login.php');
//}
?>


<html>
<title>Lead Form</title>
<img src="http://66.39.69.119/wp-content/uploads/2012/08/Kinara-IV-300x76.png" alt="Kinara" width="360" height="60" allign="center"> <br />
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
		<li><a href="homepageafterlogin.html">Homepage</a></li>
	    <li><a href="screenform.php">Screen Form</a></li>  
	    <li><a href="loanform.php">Loan Form</a></li> 
	    <li><u><a href="postedinfo.php">Click Here To See All Website Inputs</a></u><li>
	    <li><a href="map.php">Google Maps</a></li>
	    <li><a href="login.php">Log Out</a></li>
</div> 
</body>
<div style="background-color:silver;border:1px solid black;padding:10px;">
<form method="post" action="">
<font color=black face=arial size=3><b><u>Date: <input type="text" name="date"><br></font></b></u>
<font color=black face=arial size=3><b><u>Loan Officer:</font><select name="loanOfficer"></b></u>
	<option value="1">Hardika</option>
	<option value="2">Thiru</option>
	<option value="3">Other</option>
</select><br>
<font color=black face=arial size=3><b><u>First Name:</font> <input type="text" name="fName" ><br></b></u>
<font color=black face=arial size=3><b><u>Middle Name:</font> <input type="text" name="mName" ><br></b></u>
<font color=black face=arial size=3><b><u>Last Name:</font> <input type="text" name="lName"><br></b></u>
<font color=black face=arial size=3><b><u>Birth Date:</font> <input type="text" name="bDate"><br></b></u>
<font color=black face=arial size=3><b><u>Nationality:</font> <input type="text" name="nationality"><br></b></u>
<font color=black face=arial size=3><b><u>Resident Status:</font> <input type="text" name="rStatus"><br></b></u>
<br><hr>
<font color=black face=arial size=5><b><u>Marital Status:</font></br></b></u>
<font color=black face=arial size=3>Married<input type="radio" name="mStatus" value="M"></font> &nbsp;
<font color=black face=arial size=3>Single <input type=radio name="mStatus" value="S"></font><br>
<br><hr>
<font color=black face=arial size=5>Gender:<br/></font>
<font color=black face=arial size=3>Male <input type="radio" name="gender" value="M"></font> &nbsp;
<font color=black face=arial size=3>Female<input type=radio name="gender" value="F"></font><br>
<br><hr>
<font color=black face=arial size=5>ID Proof:<br></font>
<font color=black face=arial size=3>PAN Card<input type="checkbox" name='IDProof' value="PANCard"></font> &nbsp;
<font color=black face=arial size=3>Voter ID<input type="checkbox" name="IDProof" value="VoterID"></font>&nbsp;
<font color=black face=arial size=3>Driving License<input type="checkbox" name="IDProof" value="Passport" ></font>&nbsp;
<font color=black face=arial size=3>Passport<input type="checkbox" name="IDProof" value="DrivingLicense"></font><br>
<br><hr>
<font color=black face=arial size=5>Address Proof:<br></font>
<font color=black face=arial size=3>Ration Card<input type="checkbox" name='aProof' value="PANCard"></font> &nbsp;
<font color=black face=arial size=3>Voter ID<input type="checkbox" name="aProof" value="VoterID"></font>&nbsp;
<font color=black face=arial size=3>Driving License<input type="checkbox" name="aProof" value="DrivingLicense"></font>&nbsp;
<font color=black face=arial size=3>Other<input type="checkbox" name="aProof" value="Other"></font>&nbsp;
<font color=black face=arial size=3>Passport<input type="checkbox" name="aProof" value="Passport"></font><br><hr>
<input type="submit" value="Submit" onClick="window.open('thanks.html','mywindow','width=400,height=200')"> 
</form>
</div>
</html>
