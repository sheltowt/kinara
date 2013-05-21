<?php 
require_once('connect.php');
require_once('functions.php');
include 'header.php'; 
?>


<head>
<script type="text/javascript" charset="utf-8" src="/DataTables/media/js/jquery.js"></script>
<script type="text/javascript" charset="utf-8" src="/DataTables/media/js/jquery.dataTables.js"></script>
<style type="text/css" title="currentStyle">
    @import "/DataTables/media/css/demo_table.css";
</style>
</head>

<div id="content">
	
		<div id="columnWrap">
		<table>
		<tbody>
			<tr>
			<td>
				<input type="button" name="loan3" value="View By Payment">
				<input type="button" name="loan3" value="View By Message">
				Search Entity<input type="text" name="searchentity">
			</td>
			</tr>
			<tr>
			<td>Start Date
					<select name ="Start Date">
						<option>1 Month</option>
						<option>2 Weeks</option>
						<option>1 Week</option>
					</select>
					</td>
					<td>End Date
					<select name ="End Date" value="View By Payment">
						<option>1 Month</option>
						<option>2 Weeks</option>
						<option>1 Week</option>
					</select>
			</td>
			<td>
					<select name ="loan2status">
						<option>Loan Status</option>
						<option>Active</option>
						<option>Retired</option>
					</select>
			</td>
			</tr>
			</tbody>
		</table>
		
		<table id="table_id" class="display">        
		<thead>
          <tr>
            <th>Payment Date</th>
            <th>Entity</th>
            <th>Amount</th>
            <th>5 Day</th>
            <th>2 Day</th>
            <th>1 Day</th>
            <th>After</th>
          </tr>
        </thead>
        <tbody>
          <tr class="odd gradeX">
            <td>Trident</td>
            <td>Internet Explorer 4.0</td>
            <td>Win 95+</td>
            <td class="center"> 4</td>
            <td class="center">X</td>
          </tr>
         </tbody>
        <tfoot>
          <tr>
            <th>Rendering engine</th>
            <th>Browser</th>
            <th>Platform(s)</th>
            <th>Engine version</th>
            <th>CSS grade</th>
          </tr>
        </tfoot>
      </table>
		
		<script>
		$(document).ready(function(){
			$('#table_id').dataTable();{
				"sScrollY": "200px",
				"bPaginate": false
					} );
				});
		
		
		</script>
		
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
			<thead>
          <tr>
            <th>Payment Date</th>
            <th>Entity</th>
            <th>Amount</th>
            <th>5 Day</th>
            <th>2 Day</th>
            <th>1 Day</th>
            <th>After</th>
          </tr>
        </thead>
				<tbody>
				
			
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