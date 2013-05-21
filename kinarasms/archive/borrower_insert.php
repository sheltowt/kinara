<?php 
require_once('connect.php');
require ('functions.php');



$entity = $link->real_escape_string($_REQUEST['entity']);
$contact_fname1 = $link->real_escape_string($_REQUEST['contact_fname1']);
$contact_lname1 = $link->real_escape_string($_REQUEST['contact_lname1']);
$contact_telephone1 = $link->real_escape_string($_REQUEST['contact_telephone1']);
$contact_fname2 = $link->real_escape_string($_REQUEST['contact_fname2']);
$contact_lname2 = $link->real_escape_string($_REQUEST['contact_lname2']);
$contact_telephone2 = $link->real_escape_string($_REQUEST['contact_telephone2']);
$loan_id1 = $link->real_escape_string($_REQUEST['loan_id1']);
$status1 = $link->real_escape_string($_REQUEST['status1']);
$loan_id2 = $link->real_escape_string($_REQUEST['loan_id2']);
$status2 = $link->real_escape_string($_REQUEST['status2']);
$loan_id3 = $link->real_escape_string($_REQUEST['loan_id3']);
$status3 = $link->real_escape_string($_REQUEST['status3']);
$loan_id4 = $link->real_escape_string($_REQUEST['loan_id4']);
$status4 = $link->real_escape_string($_REQUEST['status4']);
$loan_id5 = $link->real_escape_string($_REQUEST['loan_id5']);
$status5 = $link->real_escape_string($_REQUEST['status5']);


$sql = "INSERT INTO borrowers (entity,contact_fname1,contact_lname1,contact_telephone1,contact_fname2,contact_lname2,contact_telephone2,loan_id1,status1,loan_id2,status2,loan_id3,status3,loan_id4,status4,loan_id5,status5) VALUES('$entity','$contact_fname1','$contact_lname1','$contact_telephone1','$contact_fname2','$contact_lname2','$contact_telephone2','$loan_id1','$status1','$loan_id2','$status2','$loan_id3','$status3','$loan_id4','$status4','$loan_id5','$status5')";

/*
echo $sql;
*/

$link->query($sql);


?>

<html>

	<head>
		<title>Borrower Input Test Page</title>
		<style type="text/css">
		.font {font-size: 18px Helvetica,Arial,sans-serif;}
		.textinput{background-color: #FFFFE0;font-style: Helvetica,Arial;font-size: 14px;}
		.textinput:focus {border: 2px solid #FF0000;background-color: #FFFF11;}	
		.textinput:hover{background-color: #FFFF11;}
		.radiotext{font-size:10px;text-transform:uppercase;}
		.button {margin:20px;border:#4D4D4D solid;color:#4D4D4D;font-weight:bold;font-size:15px;"}
		.button:hover{background-color:#FFFF11;}
		.contact {font-weight:bold;}
		.tablespace {margin-top:30px;}
		body {background-color: #90EE90;margin-left:10%;margin-right:10%;}
		</style>
	</head>

<body>

<div  style="font:50px Helvetica,Arial,sans-seriff;margin-left:10px;">
					Kinara Capital
					</div>
					<div  style="font:30px Helvetica,Arial,sans-seriff;margin-left:10px;">
					Submission Successful!
					</div>
					<div>
		
					<?php echo
					
					 
"$entity
$contact_fname1
$contact_lname1
$contact_telephone1
$contact_fname2
$contact_lname2
$contact_telephone2
$loan_id1
$status1
$loan_id2
$status2 
$loan_id3 
$status3 
$loan_id4 
$status4
$loan_id5 
$status5" 
?>

			</div>


</body>
</html>	