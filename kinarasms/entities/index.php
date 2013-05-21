<?php 
require_once('../connect.php');
require_once('../functions.php');
include '../header.php'; 
?>
	
	<div id="content">
	
		
	
		<div id="columnWrap">
			
			<div id="mainColumn">
			
			<?php if( isset($_GET['deleted'] ) ){ ?>
				<p class="notification success">The entity was successfully deleted.</p>
			<?php } ?>
			
			<h1>Entities Index and Search</h1>
			<p>Entities are businesses or organizations to which Kinara Capital has issued or may issue a loan.</p>
			<p>You may search using entity name, contact name, or contact phone number. You may also sort and re-order search results by clicking on the column headers.</p>
			
			<form id="searchForm" action="" method="get">
				<p><label for="s">Search:</label> <input type="text" name="s" class="search" value="<?php echo (isset($_GET['s'])?$_GET['s']:'Enter search term'); ?>" /> <button type="submit" class="yt"><span class="lsf">search</span>Submit Search</button><?php if(isset($_GET['s'])):?><button href="/entities/" class="yt clearSearch"><span class="lsf">undo</span>Clear Search</button><?php endif; ?></p>
			</form>
		
			<?php
			if( isset($_GET['s']) ) :
			
			if( $_GET['s'] == '' ) : ?>
			
			<h2>You must enter a search term.</h2>
			
			<?php else: 
			
			$entities = searchEntities($link,$_GET['s']); 
			
				if( $entities && count($entities) > 0 ) : ?>
				
				<h2><?php echo count($entities); ?> Results Found for "<?php echo $_GET['s']; ?>"</h2>
				
				<table id="entityTable">
				<thead>
					<tr>
						<th>Entity</th>
						<th>Contact 1</th>
						<th>Phone</th>
						<th>Contact 2</th>
						<th>Phone</th>
						<th>Edit</th>
						<th>View</th>
					</tr>
				</thead>
				<tbody>
			
			<?php
			$count = 0;
			foreach( $entities as $entity ){
				$count++;
						
					$output = '<tr class="entity">';
					$output .= '<td class="entityName"><a href="/entities/view.php?id=' . $entity['id'] . '">' . $entity['entity'] .  '</a></td>';
					$output .= '<td class="contact1name">' . $entity['contact1name'] . '</td>';
					$output .= '<td class="contact1phone">' . $entity['contact1phone'] . '</td>';
					$output .= '<td class="contact2name">' . $entity['contact2name'] . '</td>';
					$output .= '<td class="contact2phone">' . $entity['contact2phone'] . '</td>';
					$output .= '<td class="editEntity"><a href="/ajax/edit-entity.php?id=' . $entity['id'] . '">Edit</a></td>';
					$output .= '<td class="viewEntity"><a href="/entities/view.php?id=' . $entity['id'] . '">View</a></td>';
					$output .= '</tr>';
					
					echo $output;
			} ?>
				</tbody>
			</table>
				<div id="columnsList"></div>
				
				<?php else: ?>
				
				<h2>No Entities Found</h2>
				<p>Your search for "<strong><?php echo $_GET['s']; ?></strong>" returned <strong>0 results</strong>. Please check your spelling or try searching for another term.</p>
				
				<?php endif; ?>
			
			<?php endif; ?>
			
			<?php else: 
			
			$entities = getEntities($link); 
			
			if( $entities && count($entities) > 0 ){ ?>
			
			<h1>Currently Showing All Entities</h1>
			<p>Use the search box above to filter results by entity name or contact name.</p>
			
			<table id="entityTable">
				<thead>
					<tr>
						<th>Entity</th>
						<th>Contact 1</th>
						<th>Phone</th>
						<th>Contact 2</th>
						<th>Phone</th>
						<th>Edit</th>
						<th>View</th>
					</tr>
				</thead>
				<tbody>
			
			<?php
			$count = 0;
			foreach( $entities as $entity ){
				$count++;
						
					$output = '<tr class="entity">';
					$output .= '<td class="entityName"><a href="/entities/view.php?id=' . $entity['id'] . '">' . $entity['entity'] .  '</a></td>';
					$output .= '<td class="contact1name">' . $entity['contact1name'] . '</td>';
					$output .= '<td class="contact1phone">' . $entity['contact1phone'] . '</td>';
					$output .= '<td class="contact2name">' . $entity['contact2name'] . '</td>';
					$output .= '<td class="contact2phone">' . $entity['contact2phone'] . '</td>';
					$output .= '<td class="editEntity"><a href="/entities/view.php?id=' . $entity['id'] . '&edit=true">Edit</a></td>';
					$output .= '<td class="viewEntity"><a href="/entities/view.php?id=' . $entity['id'] . '">View</a></td>';
					$output .= '</tr>';
					
					echo $output;
			} ?>
				</tbody>
			</table>
			<div id="columnsList"></div>
			<?php } ?>

				
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
				location.replace('/entities/');
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

	var ticketgrid = $('#entityTable').wijgrid({
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
	
	$('.clearSearch').click(function(){
		location.replace($(this).attr('href'));
		return false;
	});
	
	var searchDefs = [
		'Enter search term'
	];
	
	$('#searchForm').deloClear({fieldDef: searchDefs});
	
});
</script>
	
<?php include '../footer.php'; ?>