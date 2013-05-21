<?php 
require_once('connect.php');
require_once('functions.php');
include 'header.php'; 
?>
	
	<div id="content">
	
		<div id="columnWrap">
		
			<div id="mainColumn" class="mainColumnStyle">
			
				<?php 
				if( isset($_GET['auth']) ) : 
				$args = array(
					'reset_auth_token' => $link->real_escape_string($_GET['auth'])
				);
				$user = getUsers($link,1,$args);
				$time = strtotime('-1day');
				if( intval($user[0]['reset_auth_time']) < $time ) { ?>
				
					<h2>Reset Auth Token Expired/Used</h2>
					<p>Sorry, Charlie. You took too long. Try again.</p>
					
				<?php } else { ?>
					
					<h2>Identity Verified</h2>
					<p>You may now reset your password using the field below.</p>
					<form id="authorizedReset" action="/reset-password.php" method="post">
						
						<p>Enter new password:<br /><input name="newpassword" type="password" /></p>
					
						<input type="hidden" name="auth_token" value="<?php echo $_GET['auth']; ?>" />
						<p><button type="submit" class="yt"><span class="lsf">exchange</span>Reset Password</button></p>
					</form>
					
				<?php } ?>
				
				<?php else: ?>
				<h2>No Auth Token Specified</h2>
				
				<p>No auth token? Get lost homeboy.</p>
				
				<script type="text/javascript">
					window.location.replace('/');
				</script>
				
				<?php endif; ?>
			
			</div>
			
			<div id="sidebar" class="sidebarStyle">
			
			</div>
			
			<div class="clear"></div>
			
		</div>
	
	</div>
	
<?php include 'footer.php'; ?>