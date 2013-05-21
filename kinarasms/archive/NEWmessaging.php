<?php 
require_once('connect.php');
require_once('functions.php');
include 'header.php'; 
?>
	
	<div id="content">
	
		<div id="columnWrap">
		
			
			<h2>Create a message template</h2>
			
			<?php 
			
			/*$name = 'One Day Reminder';
			$body = 'You will be charged in 1 day.';
			
			$template = newMessageTemplate($link,$name,$body);
			
			if( $template == 'success' ) {
				echo '<h2>Template created successfully</h2>';
			}*/
			
			$templates = getMessageTemplates($link);
			
			if($templates){ ?>
				
			<table>
				<tbody>
				<tr>
					<th>Message</th>
					<th>Content</th>
					<th></th>
				</tr>
			
			<?php foreach($templates as $template){
			
				$output = '<tr>';
				$output .= '<td>' . $template['name'] . '</td>';
				$output .= '<form class="templateUpdate" action="/ajax/update-template.php" method="post"><td><textarea name="body">' . $template['body'] . '</textarea></td>';
				$output .= '<td><input type="hidden" name="id" value="'.$template['id'].'" /><input type="submit" value="Save Changes" /></td></form>';
				$output .= '</tr>';
				
				echo $output;
			} ?>
				
				
				</tbody>
			</table>
				
			<?php }
			
			/*updateMessageTemplate($link,1,'TestUpdate2');
			
			echo $link->affected_rows;*/
			
			?>
		
		</div>
	
	</div>
	
<?php include 'footer.php'; ?>