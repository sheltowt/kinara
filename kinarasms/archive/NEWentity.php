<?php 
require_once('connect.php');
require_once('functions.php');
include 'header.php'; 
?>
	
	<div id="content">
	
		<div id="columnWrap">
			<h2 align=center>Entity Information</h2>
			<form name = "entityinfo" id ="userdetails" method="post">
			<td id="right">Search Entity<input type="text" name="searchentity"></td>
			<table>
			<tbody>
			<tr>
				<td id="right">Entity<input type="text" name="entity"></td>
			</tr>
			<tr>
				<td id="right">Contact 1 Name <input type="text" name="contact1name"></td>
				<td id="left">Contact 1 Phone Number<input type="text" name="contact1phone"></td>
			</tr>
			<tr>
				<td id="right">Contact 2 Name <input type="text" name="contact2name"></td>
				<td id="left">Contact 2 Phone Number<input type="text" name="contact2phone"></td>
			</tr>
			<tr>
					<th>Loan ID</th>
					<th>Status</th>
					<th>Edit Loan Info</th>
					<th></th>
			</tr>
			<tr>
				<td id="right">Loan ID 1<input type="text" name="loan1id">
				</td>
				<td><select name ="loan1status">
						<option value="1">Loan Status</option>
						<option value="2">Active</option>
						<option value="3">Retired</option>
					</select>
				</td><br>
			</tr>
			<tr>
				<td id="right">Loan ID 2<input type="text" name="loan2id">
				</td>
				<td><select name ="loan2status">
						<option value="1">Loan Status</option>
						<option value="2">Active</option>
						<option value="3">Retired</option>
					</select>
				</td><br>
			</tr>
			<tr>
				<td id="right">Loan ID 3<input type="text" name="loan3id">
				</td>
				<td><select name ="loan3status">
						<option value="1">Loan Status</option>
						<option value="2">Active</option>
						<option value="3">Retired</option>
					</select>
				</td><br>	
			</tr>
			<tr>
			<td><button id="submit">Submit</button></td>
			</tr>
			<table>
			<tbody>
			</form>
		<div style="margin-top:200px;">	
			<form action="NEWloan.php">
				<tr>
					<td>
						<input type="button" name="loan1" value="Update Loan">
					</td><br>
				</tr>
			</form>	
			<form action="NEWloan.php">
				<tr>
					<td>
						<input type="button" name="loan2" value="Update Loan">
					</td><br>
				</tr>
			</form>	
			<form action="NEWloan.php">
				<tr>
					<td>
						<input type="button" name="loan3" value="Update Loan">
					</td><br>
				</tr>	
			</form>
		</div>	
			<style>
				form {
					margin-left:auto;
					margin-right:auto;
					width:550px;
					text-align: center;

				}
				
				form input {
					width: 100%;
					clear: both;
				}
			
			</style>
			<script>
				$(document).ready(function(){
					$(".submit").click(function(){
						
					})
					
				})
			
			</script>
			
			<?php 
			$searchentity = $_POST['searchentity'];
			
			$template = search1Entity($link,$searchentity);
			
			$sql = "SELECT * FROM entities WHERE entity LIKE '%$searchentity%'";
			
			$result = $link->query($sql);
			
			if($result != null){
		$output = true;
		}
		
		if( $output == true ) {
				echo '<h2>Need to get the database parts to load into the form</h2>';
				echo '<ul>hello</ul>';
		}

			
		
	
			
			?>
			
			<?php 
			
			$entity = $_POST['entity'];
			$contact1name = $_POST['contact1name'];
			$contact1phone = $_POST['contact1phone'];
			$contact2name = $_POST['contact2name'];
			$contact2phone = $_POST['contact2phone'];
			$loan1id = $_POST['loan1id'];
			$loan2id = $_POST['loan2id'];
			$loan3id = $_POST['loan3id'];
			$loan1status = $_POST['loan1status'];
			$loan2status = $_POST['loan2status'];
			$loan3status = $_POST['loan3status'];
			
			$template = newEntityInformation($link, $entity, $contact1name, $contact1phone, $contact2name, $contact2phone, $loan1id, $loan2id, $loan3id, $loan1status, $loan2status, $loan3status);
			
			$sql = "INSERT INTO entities (entity, contact1name, contact1phone, contact2name, contact2phone, loan1id, loan2id, loan3id, loan1status, loan2status, loan3status) VALUES ('$entity', '$contact1name', '$contact1phone', '$contact2name', '$contact2phone', '$loan1id', '$loan2id', '$loan3id', '$loan1status', '$loan2status', '$loan3status');";
	
	$result = $link->query($sql);
	
	$sql1 = "INSERT INTO loans (loanId, loanId, loanId, loanStatus, loanStatus, loanStatus) VALUES ('$loan1id', '$loan2id', '$loan3id', '$loan1status', '$loan2status', '$loan3status');";
	
	$result1 = $link->query($sql1);
	
	if($result != null){
		$output = true;
	}
			
			if( $output == true ) {
				echo '<h2>Values Input into Database</h2>';
				echo '<ul>
							<li>entity </li>
							<li>Values Updated</li>
							<li>Values Updated</li>
							<li>Values Updated</li>
							<li>Values Updated</li>
							<li>Values Updated</li>
							<li>Values Updated</li>
							<li>Values Updated</li>
							<li>Values Updated</li>
					 </ul>';
			}

			
			?>
		
			</div>
	
	</div>
	
<?php include 'footer.php'; ?>