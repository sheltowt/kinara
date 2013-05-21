<?php
require_once('../connect.php');
require_once('../functions.php');
?>
<div class="myColorbox">
	<h1>Create a New Entity</h1>
		
	<p class="align_center">Please enter the required information. Required fields are marked with an asterisk.</p>
	
	<form id="submitEntityForm" action="/ajax/new-entity.php" method="post">
		
		<table id="submitFields">
		<tbody>
			<tr>
				<td><label for="entity">*Entity Name:</label></td>
				<td><input type="text" name="entity" class="entity" value="Enter entity name (required)" /></td>
			</tr>
			<tr>
				<td><label for="contact1name">*Contact 1 Name:</label></td>
				<td><input type="text" name="contact1name" class="contact1name" value="Enter contact's name (required)" /></td>
			</tr>
			<tr>
				<td><label for="contact1phone">*Contact 1 Phone:</label></td>
				<td><input type="text" name="contact1phone" class="contact1phone" value="Enter contact's phone (required)" /></td>
			</tr>
			<tr>
				<td><label for="contact2name">Contact 2 Name:</label></td>
				<td><input type="text" name="contact2name" class="contact2name" value="Enter contact's name" /></td>
			</tr>
			<tr>
				<td><label for="contact2phone">Contact 2 Phone:</label></td>
				<td><input type="text" name="contact2phone" class="contact2phone" value="Enter contact's phone" /></td>
			</tr>
		</tbody>
		</table>
		
		<p class="align_center"><button type="submit" class="yt large"><span class="lsf visible">globe</span>Create Entity</button></p>
		
		<div id="itemSendResults"></div>
		
	</form>

</div>