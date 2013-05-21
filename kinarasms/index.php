<?php 
require_once('connect.php');
require_once('functions.php');
include 'header.php'; 
?>
	
	<div id="content">
	
		<div id="columnWrap">
		
			
			<?php if( !is_logged_in() ) : ?>
		
			<div class="homepageLogin">
				<h1><span class="lsf">user</span>User Login</h1>
					
				<p class="align_center">Please enter your email and password below.</p>
				
				<form id="userLoginForm" action="/ajax/user-login.php" method="get">
					
					<table id="submitFields">
					<tbody>
						<tr>
							<td>Email:</td>
							<td><input tabindex="1" name="email" type="text" value="Enter email (required)" /></td>
						</tr>
						<tr>
							<td>Password:<br /><a href="/ajax/forgot-password-form.php" class="forgotPassword">Forgot?</a></td>
							<td><input tabindex="2" name="pwd" type="password" value="" /></td>
						</tr>
					</tbody>
					</table>
					
					<p class="align_center"><button type="submit" class="yt large"><span class="lsf visible">lock</span>Login</button></p>
					
					<div id="itemSendResults"></div>
					
				</form>
			
			</div>
			
			<?php else: ?>
			
			<h1>You are logged in.</h1>
			
			<?php endif; ?>
		
		</div>
	
	</div>
	
<?php include 'footer.php'; ?>