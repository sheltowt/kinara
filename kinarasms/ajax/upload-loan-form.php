<?php
require_once('../connect.php');
require_once('../functions.php');

$entity = getEntities($link,array('id'=>$_GET['entity']));

?>
<div class="myColorbox">
	<h1>Upload a Loan for <?php echo $entity[0]['entity']; ?></h1>
		
	<p>Upload a CSV file below. Download a sample CSV here.</p>
	
	<form id="uploadLoanForm" action="/ajax/upload-loan.php" method="post">
		
		<table class="submitFields">
		<tbody>
			<tr>
				<td><label for="loan_id">*Upload File:</label></td>
				<td><input type="upload" name="loan_csv" class="loan_csv"  /></td>
			</tr>
		</tbody>
		</table>
		
		<p class="align_center"><button type="submit" class="yt large"><span class="lsf visible">globe</span>Add Loan</button></p>
		
		<input type="hidden" name="entity_id" value="<?php echo $entity[0]['id']; ?>" />
		
		<div id="itemSendResults"></div>
		
	</form>

</div>