<?php
include_once('connect.php');

//if(isset($_POST['landline']) and isset($_POST['mobilephone']) and isset($_POST['permanentaddress']) and isset($_POST['permAddressCity']) and isset($_POST['permAddressState']) and isset($_POST['permAddressDistrict']) and isset($_POST['permAddressPinCode']) and isset($_POST['presaddress']) and isset($_POST['presAddressCity']) and isset($_POST['presAddressState']) and isset($_POST['presAddressDistrict']) and isset($_POST['presAddressPinCode']) and isset($_POST['cType']) and isset($_POST['incomeType']) and isset($_POST['bLine']) and isset($_POST['constitution']) and isset($_POST['nEmployees']) and isset($_POST['sYear']) and isset($_POST['dRegistration']) and isset($_POST['rOffice']) and isset($_POST['rLocation']) and isset($_POST['website']) and isset($_POST['competition']) and isset($_POST['wPermit']) and isset($_POST['gIncome']) and isset($_POST['rExpense']) and isset($_POST['fIncome']) and isset($_POST['oExpense']) and isset($_POST['oIncome']) and isset($_POST['tAssets']) and isset($_POST['tLiabilities'])) {
  $landline=$_POST['landline'];
	$mobilephone=$_POST['mobilephone'];
	$permanentaddress=$_POST['permanentaddress'];
	$permAddressCity=$_POST['permAddressCity'];
	$permAddressState=$_POST['permAddressState'];
	$permAddressDistrict=$_POST['permAddressDistrict'];
	$permAddressPinCode=$_POST['permAddressPinCode'];
	$presaddress=$_POST['presaddress'];
	$presAddressCity=$_POST['presAddressCity'];
	$presAddressState=$_POST['presAddressState'];
	$presAddressDistrict=$_POST['presAddressDistrict'];
	$presAddressPinCode=$_POST['presAddressPinCode'];
	$cType=$_POST['cType'];
	$incomeType=$_POST['incomeType'];
	$bLine=$_POST['bLine'];
	$constitution=$_POST['constitution'];
	$nEmployees=$_POST['nEmployees'];
	$sYear=$_POST['sYear'];
	$dRegistration=$_POST['dRegistration'];
	$rOffice=$_POST['rOffice'];
	$rLocation=$_POST['rLocation'];
	$website=$_POST['website'];
	$competition=$_POST['competition'];
	$wPermit=$_POST['wPermit'];
	$gIncome=$_POST['gIncome'];
	$rExpense=$_POST['rExpense'];
	$fIncome=$_POST['fIncome'];
	$oExpense=$_POST['oExpense'];
	$oIncome=$_POST['oIncome'];
	$tAssets=$_POST['tAssets'];
	$tLiabilities=$_POST['tLiabilities'];
	$sql="INSERT INTO screenform(landline, mobilephone, permanentaddress, permAddressCity, permAddressState, permAddressDistrict, permAddressPinCode, presaddress, presAddressCity, presAddressState, presAddressDistrict, presAddressPinCode, cType, incomeType, bLine, constitution, nEmployees, sYear, dRegistration, rOffice, rLocation, website, competition, wPermit, gIncome, rExpense, fIncome, oExpense, oIncome, tAssets, tLiabilities) VALUES('$landline', '$mobilephone', '$permanentaddress', '$permAddressCity', '$permAddressState', '$permAddressDistrict', '$permAddressPinCode', '$presaddress', '$presAddressCity', '$presAddressState', '$presAddressDistrict', '$presAddressPinCode', '$cType', '$incomeType', '$bLine', '$constitution', '$nEmployees', '$sYear', '$dRegistration', '$rOffice', '$rLocation', '$website', '$competition', '$wPermit', '$gIncome', '$rExpense', '$fIncome', '$oExpense', '$oIncome', '$tAssets', '$tLiabilities')";
		mysql_query($sql,$link);
	
//}

?>

<html>
<title>Screen Form</title>
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
		<li><a href="homepageafterlogin.html">Homepage</a></li>
	    <li><a href="loanform.php">Loan Form</a></li> 
	    <li><a href="leadform.php">Lead Form</a></li> 
	    <li><u><a href="postedinfo.php">Click Here To See All Website Inputs</a></u><li>
	    <li><a href="map.php">Google Maps</a></li>
	    <li><a href="login.php">Log Out</a></li>  </ul> 
</div> 
</body>
<div style="background-color:silver;border:1px solid black;padding:10px;">
<form method="post" action="">
<font color=black face=arial size=5><b><u>CONTACT DETAILS:</br></b></u>
<font color=black face=arial size=3><b>Landline Phone: <input type="text" name="landline"></font></b>
<font color=black face=arial size=3><b>Mobile Phone: <input type="text" name="mobilephone"></font></b><br><hr>
<font color=black face=arial size=3><b>Permanent Address: <input type="text" name="permanentaddress"></font></b><br>
<font color=black face=arial size=3><b>City: <input type="text" name="permAddressCity"></font></b>
<font color=black face=arial size=3><b>State: <input type="text" name="permAddressState"></font></b><br>
<font color=black face=arial size=3><b>District: <input type="text" name="permAddressDistrict"></font></b>
<font color=black face=arial size=3><b>Pin Code: <input type="text" name="permAddressPinCode"></font></b><br><hr>
<font color=black face=arial size=3><b>Present Address: <input type="text" name="presAddress"></font></b><br>
<font color=black face=arial size=3><b>City: <input type="text" name="presAddressCity"></font></b>
<font color=black face=arial size=3><b>State: <input type="text" name="presAddressState"></font></b><br>
<font color=black face=arial size=3><b>District: <input type="text" name="presAddressDistrict"></font></b>
<font color=black face=arial size=3><b>Pin Code: <input type="text" name="presAddressPinCode"></font></b><br><hr>
<font color=black face=arial size=5><b><u>EMPLOYMENT:<br></b></u>
<font color=black face=arial size=3><b>Company Type: <input type="text" name="cType"></font></b>
<font color=black face=arial size=3><b>Income Type:<select name="incomeType"></font></b>
	<option value="1">Salary</option>
	<option value="2">Self-Employed</option>
</select><br>
Business Line:<select name="bLine">
	<option value="0">Manufacturing</option>
	<option value="1">Service Provider</option>
	<option value="2">Retailer</option>
	<option value="3">Trader</option>
</select><br>
Constitution: <input type="text" name="constitution" ><br>
Number of Employees: <input type="text" name="nEmployees" ><br>
Start Year: <input type="text" name="sYear" >
Date of Registration: <input type="text" name="dRegistration"><br>
Registration Office: <input type="text" name="rOffice">
Registered At: <input type="text" name="rLocation"><br>
Website: <input type="text" name="website"><br>
Competition:<select name="competition">
	<option value="0">High</option>
	<option value="1">Medium</option>
	<option value="2">Low</option>
</select><br>
Work Permit: <input type="text" name="wPermit"><br>
Gross Income: <input type="text" name="gIncome">
Rent Expense: <input type="text" name="rExpense"><br>
Family Income: <input type="text" name="fIncome"><br>
Other Expenses: <input type="text" name="oExpense">
Other Income: <input type="text" name="oIncome"><br>
Total Assets: <input type="text" name="tAssets">
Total Liabilities: <input type="text" name="tLiabilities"><br><hr>
<input type="submit" value="Submit" onClick="window.open('thanks.html','mywindow','width=400,height=200')"> 
</form>
