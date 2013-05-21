<?php
include_once('connect.php');

if(isset($_POST['user']) and isset($_POST['pwd'])) {
  $user=$_POST['user'];
	$pwd=sha1($_POST['pwd']);
	$sql="INSERT INTO authenticate(name,pwd) VALUES('$user','$pwd')";
	mysql_query($sql,$link);
	//header('location:login.php');
}
?>
<html>
<title>Log In</title>
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
<form method='post' action=''>
<font color=black face=arial size=3><b><u>User Name: <input type='text' name='user'></br></font></b></u>
<font color=black face=arial size=3><b><u>Password : <input type='password' name='pwd'<br></br></font></b></u>

</form>
<form action="homepageafterlogin.html">
<input type='submit' value='Submit'>
</form>
</div>
</html>
