<div class="myColorbox">
	<h1><span class="lsf">user</span>Request Password Reset</h1>
		
	<p class="align_center">Please enter your email below.</p>
	
	<form id="passwordResetForm" action="/ajax/forgot-password.php" method="post">
		
		<table id="submitFields">
		<tbody>
			<tr>
				<td>Email:</td>
				<td><input name="useremail" type="text" value="Enter email (required)" /></td>
			</tr>
		</tbody>
		</table>
		
		<p class="align_center"><button type="submit" class="yt large"><span class="lsf visible">lock</span>Request Password</button></p>
		
		<div id="itemSendResults"></div>
		
	</form>

</div>