<?php 
require_once('connect.php');
require_once('functions.php'); 

$sql = "SELECT entity FROM borrowers";
$link->query($sql);


?>
<html>

	<head>
		<title>Borrower Input Test Page</title>

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
						<form action="entitysearch.php" method="get">
						<tr>
							<td>
							Entity:
							</td>
							<td>
							
							<input type="text" name="find_entity" class="textinput" size="50" value="Company Name" />
							
							<input type="submit" value="Find" class="button">

							

							<select name="location" size="1">
							</td>
						<tr>
					</table>
							
						</select>
						</form>
<table border='1'>
<tr>
<th>Entity</th>
<th>Contact Name</th>
<th>Contact Last Name</th>
<th>Telephone #</th>
<th>Contact Name2</th>
<th>Contact Last Name2</th>
<th>Telephone #2</th>
</tr>
<tr>
<td>$entity</td>
<td>row 1, cell2</td>
<td>row 1, cell3</td>
<td>row 1, cell4</td>
<td>row 1, cell5</td>
<td>row 1, cell6</td>
<td>row 1, cell7</td>
</table>
";

							
							
							<?php                         
								
								while ($row=mysql_fetch_array($link)) {

								$entity=$column['entity'];
								echo "<option>$entity</option>";
								$contact_fname1=$row['contact_fname1'];
								echo "<option>$contact_fname1</option>";
								$contact_lname1=$row['contact_lname1'];
								echo "<option>$$contact_lname1</option>";
								$contact_telephone1=$row['contact_telephone1'];
								echo "<option>$contact_telephone1</option>";
								$contact_fname2=$row['contact_fname2'];
								echo "<option>$contact_fname2</option>";
								$contact_lname2=$row['contact_lname2'];
								echo "<option>$$contact_lname2</option>";
								$contact_telephone2=$row['contact_telephone2'];
								echo "<option>$contact_telephone2</option>";
								}
							?>
							
							

							
							
				
		
</body>
</html>







<?php include 'footer.php'; ?>	