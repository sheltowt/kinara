<?php
require_once('../connect.php');
require_once('../functions.php');

$entity = getEntities($link,array('id'=>$_GET['entity']));

?>
<div class="myColorbox">
	<h1>Add a Loan for <?php echo $entity[0]['entity']; ?></h1>
		
	<p>Please enter the required information. A payment scheduled will be automatically generated based on the data you enter. After creating the loan, you may adjust payment dates and amounts as needed.</p>
	<p>Required fields are marked with an asterisk.</p>
	
	<form id="submitLoanForm" action="/ajax/new-loan.php" method="post">
		
		<table class="submitFields">
		<tbody>
			<tr>
				<td><label for="loan_id">*Loan ID:</label></td>
				<td><input type="text" name="loan_id" class="loan_id" value="Enter loan ID (required)" /></td>
			</tr>
			<tr>
				<td><label for="amount">*Total Amount:</label></td>
				<td><input type="text" name="amount" class="amount" value="Enter total amount (required)" /></td>
			</tr>
			<tr>
				<td><label for="date_distributed">*Distribution Date:</label></td>
				<td><input type="text" name="date_distributed" class="date_distributed" value="Enter distribution date (required)" /></td>
			</tr>
			<tr>
				<td><label for="number_payments">*Number of Payments:</label></td>
				<td><input type="text" name="number_payments" class="number_payments" value="12	" size="3" style="width: 45px;" /></td>
			</tr>
			<tr>
				<td><label for="payment_amount">*Payment Amount:</label></td>
				<td><input type="text" name="payment_amount" class="payment_amount" value="Enter payment amount (required)" /></td>
			</tr>
			<tr>
				<td><label for="date_first_payment">*First Payment Date:</label></td>
				<td><input type="text" name="date_first_payment" class="date_first_payment" value="Enter first payment date (required)" /></td>
			<tr>
				<td>SMS Reminders:</td>
				<td>
					<input type="checkbox" name="fiveday" class="fiveday" checked="checked" value="1" /> <label for="fiveday">5 day</label>
					<input type="checkbox" name="twoday" class="twoday" checked="checked" value="1" /> <label for="twoday">2 day</label>
					<input type="checkbox" name="oneday" class="oneday" checked="checked" value="1" /> <label for="oneday">1 day</label>
					<input type="checkbox" name="confday" class="confday" checked="checked" value="1" /> <label for="confday">Confirmation</label>
				</td>
			</tr>
		</tbody>
		</table>
		
		<p class="align_center"><button type="submit" class="yt large"><span class="lsf visible">globe</span>Add Loan</button></p>
		
		<input type="hidden" name="entity_id" value="<?php echo $entity[0]['id']; ?>" />
		
		<div id="itemSendResults"></div>
		
	</form>

</div>