<?php 
require_once('connect.php');
require_once('functions.php'); 


$find_entity = $link->real_escape_string($_REQUEST['find_entity']);
$sql= "SELECT * FROM borrowers WHERE entity=$find_entity";
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
		.button {margin:20px;border:#4D4D4D solid;color:#4D4D4D;font-weight:bold;font-size:15px;}
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
					Add Borrowers
					</div>
				<div class="font" style="margin-top:20px;">
					<table>
						<form action="edit_borrower_insert.php" method="post">
						<tr>
							<td>
							Entity:
							</td>
							<td>
							<input type="text" name="entity" size="40" class="textinput" value="<?php echo $entity; ?>">
							</td>
						</tr>
					</table>
					<table class="tablespace">
						<tr>
							<td class="contact">
							CONTACT 1
							</td>
						</tr>	
						<tr>
							<td>
							First Name:
							</td>
							<td>
							<input type="text" name="contact_fname1" class="textinput" size="15" value="<?php echo $contact_fname1; ?>">
							</td>
							<td>
							Last Name:
							</td>
							<td>
							<input type="text" name="contact_lname1" class="textinput" size="20" value="<?php echo $contact_lname1; ?>">
							</td>
							<td>
							Phone Number:
							</td>
							<td>
							<input type="text" name="phone_number1" class="textinput" size="20" value="<?php echo $phone_number1; ?>">
							</td>
						</tr>
					</table>
					<table class="tablespace">		
						<tr>
							<td class="contact">
							CONTACT 2
							</td>
						</tr>	
						<tr>
							<td>
							First Name:
							</td>
							<td>
							<input type="text" name="contact_fname2" class="textinput" size="15" value="<?php echo $contact_fname2; ?>">
							</td>
							<td>
							Last Name:
							</td>
							<td>
							<input type="text" name="contact_lname2" class="textinput" size="20" value="<?php echo $contact_lname2; ?>">
							</td>
							<td>
							Phone Number:
							</td>
							<td>
							<input type="text" name="phone_number2" class="textinput" size="20" value="<?php echo $phone_number2; ?>">
							</td>
						</tr>
					</table>
					<table class="tablespace">		
						<tr>
							<td>
							Loan ID 1:
							</td>
							<td>
							<input type="text" name="loan_id1" class="textinput" size="15" value="<?php echo $loan_id1; ?>">
							</td>
							<td>
							Status:
							</td>
							<td>
								<input name="status1" value="Active" size="1" type="radio" class="radioinput"><span class="radiotext">Active</span> <br/>
								<input name="status1" value="Closed" size="1" type="radio" class="radioinput"><span class="radiotext">Closed</span> <br/>
							</td>
						</tr>
						<tr>
							<td>
							Loan ID 2:
							</td>
							<td>
								<input type="text" name="loan_id2" class="textinput" size="15" value="<?php echo $loan_id2; ?>">
							</td>
							<td>
								Status:
							</td>
							<td>
								<input name="status2" value="Active" size="1" type="radio" class="radioinput"><span class="radiotext">Active</span> <br/>
								<input name="status2" value="Closed" size="1" type="radio" class="radioinput"><span class="radiotext">Closed</span> <br/>
							</td>
						</tr>
						<tr>
							<td>
								Loan ID 3:
							</td>
							<td>
								<input type="text" name="loan_id3" class="textinput" size="15" value="<?php echo $loan_id3; ?>">
							</td>
							<td>
								Status:
							</td>
							<td>
								<input name="status3" value="Active" size="1" type="radio" class="radioinput"><span class="radiotext">Active</span> <br/>
								<input name="status3" value="Closed" size="1" type="radio" class="radioinput"><span class="radiotext">Closed</span> <br/>
							</td>
						</tr>
						<tr>
							<td>
								Loan ID 4:
							</td>
							<td>
								<input type="text" name="loan_id4" class="textinput" size="15" value="<?php echo $loan_id4; ?>">
							</td>
							<td>
								Status:
							</td>
							<td>
								<input name="status4" value="Active" size="1" type="radio" class="radioinput"><span class="radiotext">Active</span> <br/>
								<input name="status4" value="Closed" size="1" type="radio" class="radioinput"><span class="radiotext">Closed</span> <br/>	
							</td>
						</tr>
							<tr>
							<td>
								Loan ID 5:
							</td>
							<td>
								<input type="ext" name="loan_id5" class="textinput" size="15" value="<?php echo $loan_id5; ?>">
							</td>
							<td>
								Status:
							</td>
							<td>
								<input name="status5" value="Active" size="1" type="radio" class="radioinput"><span class="radiotext">Active</span> <br/>
								<input name="status5" value="Closed" size="1" type="radio" class="radioinput"><span class="radiotext">Closed</span> <br/>
							</td>
						</tr>
					</table>
					<table>		
						<tr>
							<td>
								<p>
								<input type="submit" value="Submit" class="button">
								</p>
							</td>
						</tr>
						</form>
					
					</table>
				</div>
				
		
</body>
</html>	
