<?php 
require_once('connect.php');
require_once('functions.php'); 

$sql = "SELECT entity FROM borrowers";
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
					Select Entities to Edit
					</div>
				<div class="font" style="margin-top:20px;">
					<table>
						<form action="edit_borrower_input.php" method="get">
						<tr>
							<td>
							Entity:
							</td>
							<td>
							
							<input type="text" name="find_entity" class="textinput" size="50" value="Test Company Name Here" />
							
							<input type="submit" value="Find" class="button">

							
							<!-- /*
							<select name="location" size="1">
							
							
							<?php                         
								
								while ($row=mysql_fetch_array($link)) {

								$location=$row['location'];

								echo "<option>$location</option>";
								}
							?>
							*/ -->
							
							

							</select>
							
						</td>
					</form>		
					</tr>
				</table>
					
					
				</div>
				
		
</body>
</html>	