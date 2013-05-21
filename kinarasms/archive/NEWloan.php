<?php 
require_once('connect.php');
require_once('functions.php');
include 'header.php'; 
?>
	
	<div id="content">
	
		<div id="columnWrap">
			<h2 align=center>Loan Information</h2>
				<form name = "loaninfo" id ="loaninfo" method="post">
					<div name="checkboxes" align="center">
						<table style="margin-left:12px;">	
							<tr>
								<td style="width:60px;"><input type="checkbox" name="day5" value="1" checked> <span>5 Day</span></label></td>
								<td style="width:60px;"><input type="checkbox" name="day2" value="1" checked> <span>2 Day</span></label></td>
								<td style="width:60px;"><input type="checkbox" name="day1" value="1" checked> <span>1 Day</span></label></td>
								<td style="width:60px;"><input type="checkbox" name="after" value="1" checked> <span>After</span></label></td>
							</tr>
						</table>
					</div>
					<div>
						<table>
						<tbody>
							<tr>
								<td></td><td id="right">Loan ID:<input type="text" name="loanId"></td>
							</tr>
							<tr>
								<td></td><td id="right45"># of Payments: <input id = "numPayment" type="number" name="numberPayments" ></td>
								<td id="left">Date First Payment(YYYY-MM-DD):<input type="text" name="dateFirstPayment"></td>
							</tr>
							<tr>
								<td></td><td id="right">Loan Amount: <input type="text" name="loanAmount"></td>
								<td id="left">Frequency:<input type="text" name="frequency"></td>
							</tr>
							<tr>	
								
								<td><select name = "loanType">
									<option value="1">Loan Type</option>
									<option value="2">Long-Term</option>
									<option value="3">Short-Term</option>
									<option value="4">Bill Discount</option>
									</select>
								</td>
								<tr>
								<td>
								<script>
								display = function(aba){
								var theInput = document.getElementById('numPayment');
								console.log(theInput.value);
								}
								</script>
								<script>
								$(document).ready(function(){
									$('button').click(function () {
									console.log("hello");
									});
								});
							</script>
								<div id ="button">
									<button class="send">Generate Loan Table</button>
								</div>
								</td>
							</tr>	
								<br>
							<tr>
								<th> </th>
								<th>Date(YYYY-MM-DD)</th>
								<th>Amount</th>
							</tr>
							<div>
									<ul id="messages"></ul>
							</div>
							
							<tr>
								<td>1</td><td id="right"><input type="text" name="payment1date"></td>
								<td id="left"><input type="text" name="payment1amount"></td>
							</tr>
							<tr>
								<td>2</td><td id="right"><input type="text" name="payment2date"></td>
								<td id="left"><input type="text" name="payment2amount"></td>
							</tr>
							<tr>
								<td>3</td><td id="right"><input type="text" name="payment3date"></td>
								<td id="left"><input type="text" name="payment3amount"></td>
							</tr>
							<tr>
								<td></td><td><button id="submit">Submit</button></td>
							</tr>
						<table>
						<tbody>
					</div>	
				</form>
			
			<style>
	
			div {
					margin-left:auto;
					margin-right:auto;
					text-align: left;
					
			div input {
					width: 100%;
					clear: both;
				}
				form {
					margin-left:auto;
					margin-right:auto;
					width:700px;
					text-align: center;

				}
				
				form input {
					width: 100%;
					clear: both;
				}
				tr#right10, tr#right10 td{
					margin: 0;
					padding: 0;
				}
				tr#right10 td{
					display: inline-block;
				}
			
			</style>
			
			<?php 
			
			$loanId = $_POST['loanId'];
			$numberPayments = $_POST['numberPayments'];
			$dateFirstPayment = $_POST['dateFirstPayment'];
			$loanAmount = $_POST['loanAmount'];
			$frequency = $_POST['frequency'];
			$loanType = $_POST['loanType'];
			$day5 = $_POST['day5'];
			$day2 = $_POST['day2'];
			$day1 = $_POST['day1'];
			$after = $_POST['after'];
			$payment1date = $_POST['payment1date'];
			$payment1amount = $_POST['payment1amount'];
			$payment2date = $_POST['payment2date'];
			$payment2amount = $_POST['payment2amount'];
			$payment3amount = $_POST['payment3amount'];
			$payment3date = $_POST['payment3date'];
			
			$template = newLoanInformation($link, $loanId, $numberPayments, $dateFirstPayment, $loanAmount, $frequency, $loanType, $day5, $day2, $day1, $after, $payment1date, $payment1amount, $payment2date, $payment2amount, $payment3date, $payment3amount);
			
						
			$sql = "INSERT INTO loans (loanId, numberPayments, dateFirstPayment, loanAmount, frequency, loanType, day5, day2, day1, after, payment1date, payment1amount, payment2date, payment2amount, payment3date, payment3amount) VALUES ('$loanId', '$numberPayments', '$dateFirstPayment', '$loanAmount', '$frequency', '$loanType', '$day5', '$day2', '$day1', '$after', '$payment1date', '$payment1amount', '$payment2date', '$payment2amount', '$payment3date', '$payment3amount');";
	
	$result = $link->query($sql);
	
	if($result != null){
		$output = true;
	}
			
			if( $output == true ) {
				echo '<h2>Template created successfully</h2>';
			}
			
			
			?>
		
		</div>
	</div>
<?php include 'footer.php'; ?>		
	
	
