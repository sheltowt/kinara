<?php
require_once('../connect.php');
require_once('../functions.php');
if( is_admin_user() ) {
	$headline = 'Add New User';
	$intro = 'Create users here to help manage your animal shelter.';
}
?>
<div class="myColorbox">
	<h1><?php echo $headline; ?></h1>
		
	<p class="align_center"><?php echo $intro; ?></p>
	
	<form id="submitUserForm" action="/ajax/create-user.php" method="post">
		
		<table id="submitFields">
		<tbody>
			<tr>
				<td><label for="fname">First Name:</label></td>
				<td><input type="text" name="fname" class="fname" value="Enter first name (required)" /></td>
			</tr>
			<tr>
				<td><label for="lname">Last Name:</label></td>
				<td><input type="text" name="lname" class="lname" value="Enter last name (required)" /></td>
			</tr>
			<tr>
				<td><label for="level">User Level:</label></td>
				<td>
					<select name="level">
						<option value="0">Administrator</option>
						<option value="1">User</option>
					</select>
				</td>
			</tr>
			<tr>
				<td><label for="pwd">Password:</label></td>
				<td><input type="password" name="pwd" class="pwd" /></td>
			</tr>
			<tr>
				<td><label for="email">Email:</label></td>
				<td><input type="text" name="email" class="email" value="Enter email (required)" /></td>
			</tr>
			<tr>
				<td><label for="telephone">Phone Number:</label></td>
				<td><input type="text" name="telephone" class="telephone" value="Format: 212-555-1234 (required)" /></td>
			</tr>
			<tr>
				<td><label for="sendpass">Send password?</label></td>
				<td><input type="checkbox" name="sendpass" value="true" /></td>
			</tr>
		</tbody>
		</table>
		
		<p class="align_center"><button type="submit" class="yt large"><span class="lsf visible">user</span>Create User</button></p>
		
		<div id="itemSendResults"></div>
		
	</form>

</div>