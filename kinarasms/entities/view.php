<?php 
require_once('../connect.php');
require_once('../functions.php');
include '../header.php'; 
?>
	
	<div id="content">
	
		<div id="columnWrap">
			
			<div id="mainColumn">
			
			<?php if( isset($_GET['deleted'] ) ){ ?>
				<p class="notification success">The loan and payment schedule were successfully deleted.</p>
			<?php } ?>
		
			<?php
			
			if( isset($_GET['id']) ) :
			
			$entities = getEntities($link,array('id'=>$_GET['id'])); 
			
			if( $entities && count($entities) > 0 ) :
			
			foreach( $entities as $entity ){ ?>
			
			<form id="singleEntity" action="/ajax/edit-entity.php" method="post">
			
			<h2>
				<label for="entity" style="color: #222;">Entity Name:</label> 
				<span class="entity inline-input"><span class="value-toggle"><?php echo $entity['entity']; ?></span>
				<input type="text" name="entity" class="entity input-toggle header" value="<?php echo $entity['entity']; ?>" />
			</h2>
			
			<h3 style="color: #222;">Contact 1 Info</h3>
			<p class="contact1">
				<span class="contact1name inline-input">
					<label for="contact1name">Name:</label>
					<span class="value-toggle"><?php echo $entity['contact1name']; ?></span>
					<input type="text" name="contact1name" class="input-toggle" value="<?php echo $entity['contact1name']; ?>" />
				</span>
				<span class="contact1phone inline-input">
					<label for="contact1phone">Phone:</label>
					<span class="value-toggle"><?php echo $entity['contact1phone']; ?></span>
					<input type="text" name="contact1phone" class="input-toggle" value="<?php echo $entity['contact1phone']; ?>" />
				</span>
			</p>
			
			<h3 style="color: #222;">Contact 2 Info</h3>
			<p class="contact2">
				<span class="contact2name inline-input">
					<label for="contact2name">Name:</label>
					<span class="value-toggle"><?php echo $entity['contact2name']; ?></span>
					<input type="text" name="contact2name" class="input-toggle" value="<?php echo $entity['contact2name']; ?>" />
				</span>
				<span class="contact2phone inline-input">
					<label for="contact2phone">Phone:</label>
					<span class="value-toggle"><?php echo $entity['contact2phone']; ?></span>
					<input type="text" name="contact2phone" class="input-toggle" value="<?php echo $entity['contact2phone']; ?>" />
				</span>
			</p>
			
			<ul class="entityOptions">
				<li><a href="#" class="editEntity"><button class="yt"><span class="lsf">edit</span>Edit Entity</button></a></li>
				<li><a href="/ajax/delete-entity.php?id=<?php echo $entity['id']; ?>" class="deleteEntity"><button class="yt"><span class="lsf">trash</span>Delete Entity</button></a></li>
				<li><a href="#" class="cancelEdit"><button class="yt"><span class="lsf">close</span>Cancel</button></a></li>
				<li><a href="/ajax/update-entity.php" class="updateEntity"><button class="yt"><span class="lsf">cloud</span>Save</button></a></li>
				<li><img class="loading" src="/images/loading.gif" alt="Loading" /></li>
				<li><span class="lsf saved">lock</span></li>
			</ul>
			
			<input type="hidden" id="entity_id" name="id" value="<?php echo $entity['id']; ?>" />
			
			<div class="clear"></div>
			
			</form>
			
			<div class="clear"></div>
			
			<h2>Loans for <?php echo $entity['entity']; ?></h2>
			
			<ul class="loanOptions">
				<li><a href="/ajax/new-loan-form.php?entity=<?php echo $entity['id']; ?>" class="newLoan"><button class="yt"><span class="lsf">add</span>Add New Loan</button></a></li>
				<li><a href="/ajax/upload-new-loan-form.php?entity=<?php echo $entity['id']; ?>" class="uploadNewLoan"><button class="yt"><span class="lsf">cloud</span>Upload New Loan</button></a></li>
			
				<div class="clear"></div>
			</ul>
			
			<?php 
			$loans = getLoans($link,array('entity_id'=>$entity['id']));
			
				if( $loans && count($loans) > 0 ) { 
				?>
					
					<table class="loanTable">
					<thead>
						<tr>
							<th>ID</th>
							<th>Amount</th>
							<th>Distributed</th>
							<th>Payments</th>
							<th>5 Day</th>
							<th>2 Day</th>
							<th>1 Day</th>
							<th>Conf</th>
							<th>View</th>
						</tr>
					</thead>
					<tbody>
					
					<?php 
					foreach($loans as $loan){
					
						$output = '<tr>';
						$output .= '<td>' . $loan['loan_id'] . '</td>';
						$output .= '<td>' . $loan['amount'] . '</td>';
						$output .= '<td>' . $loan['date_distributed'] . '</td>';
						$output .= '<td>' . $loan['number_payments'] . '</td>';
						$output .= '<td>' . $loan['fiveday'] . '</td>';
						$output .= '<td>' . $loan['twoday'] . '</td>';
						$output .= '<td>' . $loan['oneday'] . '</td>';
						$output .= '<td>' . $loan['confday'] . '</td>';
						$output .= '<td><a href="/loans/view.php?id=' . $loan['id'] . '">View</a></td>';
						$output .= '</tr>';
						
						echo $output;
					
					} ?>
						
					</tbody>
					</table>
					<div id="columnsList"></div>
					
					<div class="clear"></div>
					
				<?php 
				
				} else { ?>
					
					<p>No loans found for <?php echo $entity['entity']; ?>. Add a new loan manually or upload a CSV.</p>
					
				<?php 
				}
			
			
			 ?>
			
			<?php } ?>
			
			<?php else: ?>
			
			<h1>No Entity Found</h1>
			<p>The entity ID entered is invalid. Please search for your entity again using <a href="/entities/search.php">Entity Search</a>.</p>
			
			<?php endif; ?>
			
			<?php else: ?>
			
			<h1>No Entity Found</h1>
			<p>You must specify an entity ID in order to view this page.</p>
			
			<?php endif; ?>
			
			</div>
			
			<?php include 'sidebar.php'; ?>
		
		</div>
		
		<div class="clear"></div>
	
	</div>
	
<script type="text/javascript">

$(document).ready(function(){

	function entitySubmit( formData, jqForm, options ) {
		$('#itemSendResults').removeClass('error').addClass('loading').animate({ 'opacity': 'show', 'height': 'show' }).html('Loading...');
		
		console.info('formData',formData);
		console.info('formData[3].name',formData[3].name)
		
		var valErrors = new Array();
		
		if( 
			jQuery('#submitEntityForm .entity').val() == '' || 
			jQuery('#submitEntityForm .entity').val() == 'Enter entity name (required)'
		) {
			valErrors.push('Entity Name');
			jQuery('#submitEntityForm .entity').addClass('error');
		}
		if( 
			jQuery('#submitEntityForm .contact1name').val() == '' || 
			jQuery('#submitEntityForm .contact1name').val() == 'Enter contact\'s name (required)'
		) {
			valErrors.push('Contact 1 Name');
			jQuery('#submitEntityForm .contact1name').addClass('error');
		}
		if( 
			jQuery('#submitEntityForm .contact1phone').val() == '' || 
			jQuery('#submitEntityForm .contact1phone').val() == 'Enter contact\'s phone (required)'
		) {
			valErrors.push('Contact 1 Phone');
			jQuery('#submitEntityForm .contact1phone').addClass('error');
		}
		if(formData[3].value == "Enter contact's name" ){
			formData[3].value = '';
		}
		if(formData[4].value == "Enter contact's phone" ){
			formData[4].value = '';
		}
		
		console.info('formData',formData);
		
		if( valErrors.length > 0 ) {
			var valMessage = 'Please fill out the following required fields: ';
			if( valErrors.length > 1 ) {
				for( i = 0; i < valErrors.length; i++ ) {
					if( i < ( valErrors.length - 1 ) ) {
						valMessage += valErrors[i] + ', ';
					} else {
						valMessage += 'and ' + valErrors[i] + '.';
					}
				}
			} else {
				valMessage += valErrors[0];
			}
			jQuery('#itemSendResults').removeClass('loading').addClass('error').html(valMessage);
			setTimeout("jQuery('#itemSendResults').fadeOut();",3500);
			
			return false;
		}
		
		
	}
	
	function entitySubmitted( data ) {
		console.log(data);
	
		if( data.status == 'success' ) {
		
			jQuery('#itemSendResults').removeClass('loading').addClass('success').html(data.message);
			
			setTimeout(function(){
				jQuery('#itemSendResults').animate({ 'height': 'hide', 'opacity': 'hide' }, 
					function(){
						jQuery(this).removeClass('success').html('Loading...');
					}
				);
				$.colorbox.close();
				location.reload();
			}, 1500);
			
		} else {
		
			var errorMessage = data.message;
			
			jQuery('#itemSendResults').removeClass('loading').addClass('error').html(errorMessage);
			setTimeout(function(){
				jQuery('#itemSendResults').animate({ 'height': 'hide', 'opacity': 'hide' }, 
					function(){
						jQuery(this).removeClass('error').html('Loading...');
					}
				);
			}, 3000);
		}
	
	}
	
	$('.editEntity').click(function(){
		$(this).addClass('disabled');
		$(this).children('button').addClass('disabled');
		$('.deleteEntity').addClass('disabled');
		$('.deleteEntity').children('button').addClass('disabled');
		
		$('.input-toggle').show();
		$('.value-toggle').hide();
		
		$('.cancelEdit').show();
		$('.updateEntity').show();
		
		var entity_prev = $('.entity .input-toggle').val();
		var con1name_prev = $('.contact1name .input-toggle').val();
		var con1phone_prev = $('.contact1phone .input-toggle').val();
		var con2name_prev = $('.contact2name .input-toggle').val();
		var con2phone_prev = $('.contact2phone .input-toggle').val();
		
		$('.entity .input-toggle').attr('data-prev',entity_prev);
		$('.contact1name .input-toggle').attr('data-prev',con1name_prev);
		$('.contact1phone .input-toggle').attr('data-prev',con1phone_prev);
		$('.contact2name .input-toggle').attr('data-prev',con2name_prev);
		$('.contact2phone .input-toggle').attr('data-prev',con2phone_prev);
		
		$('input.entity').focus();
		
		return false;
	});
	
	$('.cancelEdit').click(function(){
		$(this).hide();
		$('.updateEntity').hide();
		
		$('.editEntity').removeClass('disabled');
		$('.editEntity').children('button').removeClass('disabled');
		$('.deleteEntity').removeClass('disabled');
		$('.deleteEntity').children('button').removeClass('disabled');
		
		var entity_prev = $('.entity .input-toggle').attr('data-prev');
		var con1name_prev = $('.contact1name .input-toggle').attr('data-prev');
		var con1phone_prev = $('.contact1phone .input-toggle').attr('data-prev');
		var con2name_prev = $('.contact2name .input-toggle').attr('data-prev');
		var con2phone_prev = $('.contact2phone .input-toggle').attr('data-prev');
		
		$('.entity .input-toggle').val(entity_prev);
		$('.contact1name .input-toggle').val(con1name_prev);
		$('.contact1phone .input-toggle').val(con1phone_prev);
		$('.contact2name .input-toggle').val(con2name_prev);
		$('.contact2phone .input-toggle').val(con2phone_prev);
		
		$('.input-toggle').hide();
		$('.value-toggle').show();
		
		return false;
	});
	
	$('.deleteEntity').click(function(){
		
		var confirmed = confirm('This is permanent. Are you sure?');
		
		if( confirmed == true) {
			
			var clicked = $(this);
			
			$.get(
				clicked.attr('href'),
				function(resp){
					var resp_json = JSON.parse(resp);
					if(resp_json.status == 'success') {
						//console.info('resp_json',resp_json);
						location.replace('/entities/?deleted='+resp_json.deleted);
					}
				}
			);
		}
		
		return false;
		
	});
	
	function updateEntity(){
	
		$('.loading').show();
		$('.updateEntity').addClass('disabled');
		$('.cancelEdit').addClass('disabled');
		
		var id = $('input#entity_id').val();
		var entity = $('input.entity').val();
		var contact1name = $('.contact1name input').val();
		var contact1phone = $('.contact1phone input').val();
		var contact2name = $('.contact2name input').val();
		var contact2phone = $('.contact2phone input').val();
		
		
		$.post(
			'/ajax/update-entity.php',
			{
				id: id,
				entity: entity,
				contact1name: contact1name,
				contact1phone: contact1phone,
				contact2name: contact2name,
				contact2phone: contact2phone
			},
			function(resp){
				//console.info('resp',resp);
				var resp_json = JSON.parse(resp);
				if(resp_json.status == 'success') {
					$('.loading').hide();
					$('.saved').show();
					$('.cancelEdit').removeClass('disabled').hide();
					$('.updateEntity').removeClass('disbled').hide();
						
					$('.editEntity').removeClass('disabled');
					$('.editEntity').children('button').removeClass('disabled');
					$('.deleteEntity').removeClass('disabled');
					$('.deleteEntity').children('button').removeClass('disabled');
					
					$('.entity .value-toggle').html(entity);
					$('.contact1name .value-toggle').html(contact1name);
					$('.contact1phone .value-toggle').html(contact1phone);
					$('.contact2name .value-toggle').html(contact2name);
					$('.contact2phone .value-toggle').html(contact2phone);
		
					$('.input-toggle').hide();
					$('.value-toggle').show();
					
					$('.saved').fadeOut(1500);
					
				}
			}
		);
	}
	
	$('.updateEntity').click(function(){
	
		updateEntity();
		
		return false;
	});
	
	$('#singleEntity input').keyup(function(event){
		var keycode = (event.keyCode ? event.keyCode : event.which );
		if( keycode == '13'){
			updateEntity();
		}
	});
						
	$('.newEntity').colorbox({
		height: '600px',
		width: '600px',
		top: '150px',
		onComplete: function(){
			tableClass('#submitFields');
			
			var viewOptions = {
				dataType: 'json',
				beforeSubmit: entitySubmit,
				success: entitySubmitted
			}
			$('#submitEntityForm').ajaxForm(viewOptions);
			
			var itemDefs = [
				'Enter entity name (required)',
				'Enter contact\'s name (required)',
				'Enter contact\'s phone (required)',
				'Enter contact\'s name',
				'Enter contact\'s phone'
			];
			$('#submitEntityForm').deloClear({
				fieldDef: itemDefs
			});
		}
		
	});
						
	$('.newLoan').colorbox({
		height: '600px',
		width: '600px',
		top: '150px',
		onComplete: function(){
			tableClass('.submitFields');
			
			var viewOptions = {
				dataType: 'json',
				beforeSubmit: entitySubmit,
				success: entitySubmitted
			}
			$('#submitLoanForm').ajaxForm(viewOptions);
			
			var itemDefs = [
				'Enter loan ID (required)',
				'Enter total amount (required)',
				'Enter distribution date (required)',
				'Enter payment amount (required)',
				'Enter first payment date (required)'
			];
			$('#submitLoanForm').deloClear({
				fieldDef: itemDefs
			});
		}
		
	});
	
	$('.uploadNewLoan').colorbox({
		height: '300px',
		width: '400px',
		top: '150px',
		onComplete: function(){
			tableClass('.submitFields');
			
			var viewOptions = {
				dataType: 'json',
				beforeSubmit: entitySubmit,
				success: entitySubmitted
			}
			$('#uploadLoanForm').ajaxForm(viewOptions);
			
		}
		
	});
	
	var ticketgrid = $('.loanTable').wijgrid({
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
	
	<?php if(isset($_GET['edit']) && $_GET['edit'] == 'true') : ?>
		$('.editEntity').trigger('click');
	<?php endif; ?>
	
});
</script>
	
<?php include '../footer.php'; ?>