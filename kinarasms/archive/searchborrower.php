<?php 
require_once('connect.php');
include 'header.php';  

?>
	
	<div id="content">
	
		<div id="columnWrap">
		
			<div id="mainColumn" class="mainColumnStyle">
			
			<?php if( is_admin_user() ) : ?>
			
			<h1>AWESOME Animal Shelter User Admin</h1>
			
			<?php 
				$users = getUsers($markslink,-1); 
				if( count($users) > 0 ) :
				$i = 0;
				?>
				<table id="users">
					<thead>
						<tr>
							<th>Level</th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Email</th>
							<th>Phone</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody>
					<?php foreach( $users as $user ) : $i++ ?>
						<tr id="<?php echo $user['user_id']; ?>">
							<td><?php echo $user['level']; ?></td>
							<td><?php echo $user['fname']; ?></td>
							<td><?php echo $user['lname']; ?></td>
							<td><?php echo $user['email']; ?></td>
							<td><?php echo $user['telephone']; ?></td>
							<td><a href="/ajax/delete-user.php?user_id=<?php echo $user['user_id']; ?>" class="deleteUser"><span class="lsf visible">trash</span>Delete</a></td>
						</tr>
					<?php endforeach; ?>
					</tbody>
				</table>
				
				<div id="columnsList"></div>
				
				<p><a href="/ajax/create-user-form.php" class="newUser"><button class="yt"><span class="lsf">add</span>Add New User</button></a></p>
				
				<script type="text/javascript">
					$(document).ready(function(){
						tableClass('#users');
						
						var ticketgrid = $('#users').wijgrid({
							allowSorting: true,
							allowColMoving: true,
							allowColSizing: true,
							allowPaging: true,
							pageSize: 10,
							readAttributesFromData: true
						}),
						columns = ticketgrid.wijgrid('option', 'columns'),
						listContainer = $('#columnsList'),
						checkbox, isChecked;
						
						$.each(columns, function(index, col) {
							isChecked = (col.visible)
								? 'checked = "checked"'
								: "";
								
								var checkLabel = col.headerText;
								
								checkBox = $('<label><input type="checkbox" ' + isChecked + ' /> ' + checkLabel + '   </label>');
								listContainer.append(checkBox);
								checkBox.click(function(e) {
									columns[index].visible = $(this).children('input')[0].checked;
									ticketgrid.wijgrid('doRefresh');
								})
						});
						
						$('.deleteUser').live('click',function(){
						
							var confirmed = confirm('This is permanent. Are you sure?');
							
							if( confirmed == true ) {
							
								var clicked = $(this);
								
								var parentrow = clicked.parents('tr');
							
								$.get(
									clicked.attr('href'),
									function(resp) {
										var resp_json = JSON.parse(resp);
										if(resp_json.status == 'success') {
											parentrow.fadeOut().remove();
										}
									}
								);
								
							}
							
							return false;
						});
						
					});
				</script>
				
				<?php else: ?>
				<h2>No users Found</h2>
				
				<?php endif; ?>
				
				<?php else: ?>
				
				<h1>You don't have permission to be here</h1>
				
				<p>Go look at some <a href="/animals.php">animals</a>.</p>
				
				<?php endif; ?>
			
			</div>
			
			<?php include 'sidebar.php'; ?>
			
			<div class="clear"></div>
			
		</div>
	
	</div>
	
<?php include 'footer.php'; ?>