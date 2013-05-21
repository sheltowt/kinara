<html>
<title>Posted Information</title>
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
	    <li><a href="leadform.php">Lead Form</a></li> 
	    <li><a href="map.php">Google Maps</a></li>
	    <li><a href="login.php">Log Out</a></li>
  </ul> 
</div> 
</body>
<br/>
<br/>
<br/>
<html>

<?php
include_once('connect.php');


$result = mysql_query("SELECT * FROM leadform");
echo "<table border='1'>
<tr>
<th>date</th>
<th>Loan Officer #</th>
<th>First Name</th>
<th>Middle Name</th>
<th>Last Name</th>
<th>Birth Date</th>
<th>Nationality</th>
<th>Residential Status</th>
<th>Marital Status</th>
</tr>";
   
while($row = mysql_fetch_array($result))
	{   
	echo "<tr>";
	echo "<td>" . $row['date'] . "</td>";
	echo "<td>" . $row['loanOfficer'] . "</td>";
	echo "<td>" . $row['fName'] . "</td>";
	echo "<td>" . $row['mName'] . "</td>";
	echo "<td>" . $row['lName'] . "</td>";
	echo "<td>" . $row['bDate'] . "</td>";
	echo "<td>" . $row['nationality'] . "</td>";
	echo "<td>" . $row['rStatus'] . "</td>";
	echo "<td>" . $row['mStatus'] . "</td>";
	echo "</tr>";
	}
echo "</TABLE>";

?>
