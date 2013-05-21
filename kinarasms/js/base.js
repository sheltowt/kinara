String.prototype.replaceAll = function(search, replace)
{
    //if replace is null, return original string otherwise it will
    //replace search string with 'undefined'.
    if(!replace) 
        return this;

    return this.replace(new RegExp('[' + search + ']', 'g'), replace);
};

function tableClass(table_id){
	$('tbody tr:first-child', table_id).addClass('firstRow');
	$('tbody tr:last-child', table_id).addClass('lastRow');
	$('tbody tr:even', table_id).addClass('even');
	$('tbody tr:odd', table_id).addClass('odd');
	$('td:first-child', table_id).addClass('firstCol');
	$('td:last-child', table_id).addClass('lastCol');
	$('td', table_id).each(function(){
		var the_pos = $(this).getNonColSpanIndex();
		the_pos	= the_pos + 1;
		var the_class = 'colpos' + the_pos;
		
		$(this).addClass(the_class);
	});
	$('tr', table_id).each(function(){
		var the_pos = $(this).parent('tbody').children().index($(this));
		if( the_pos != -1 ) {
			the_pos	= the_pos + 1;
			var the_class = 'rowpos' + the_pos;
			
			$(this).addClass(the_class);
		}
	});
}

var today = new Date();
var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

function userLogin( formData, jqForm, options ) {
	$('#itemSendResults').removeClass('error').addClass('loading').animate({ 'opacity': 'show', 'height': 'show' }).html('Logging in...');
}

function userLogined( data ) {
	console.log(data);

	if( data.status == 'success' ) {
	
		jQuery('#itemSendResults').removeClass('loading').addClass('success').html(data.message);
		setTimeout(function(){
			jQuery('#itemSendResults').animate({ 'height': 'hide', 'opacity': 'hide' }, 
				function(){
					jQuery(this).removeClass('success').html('Loading...');
				}
			);
		}, 2250);
		setTimeout(function(){
			window.location.replace('/entities/');
		}, 2500);
		
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
function passReset( formData, jqForm, options ) {
	$('#itemSendResults').removeClass('error').addClass('loading').animate({ 'opacity': 'show', 'height': 'show' }).html('Logging in...');
}

function passReseted( data ) {
	console.log(data);

	if( data.status == 'success' ) {
	
		jQuery('#itemSendResults').removeClass('loading').addClass('success').html(data.message);
		setTimeout(function(){
			jQuery('#itemSendResults').animate({ 'height': 'hide', 'opacity': 'hide' }, 
				function(){
					jQuery(this).removeClass('success').html('Loading...');
				}
			);
		}, 2250);
		setTimeout(function(){
			window.location.reload(true);
		}, 2500);
		
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
function userSubmit( formData, jqForm, options ) {

	console.info('formData',formData);

	$('#itemSendResults').removeClass('error').addClass('loading').animate({ 'opacity': 'show', 'height': 'show' }).html('Loading...');
	
	var valErrors = new Array();
	
	if( 
		jQuery('#submitUserForm .fname').val() == '' || 
		jQuery('#submitUserForm .fname').val() == 'Enter first name (required)' ||
		jQuery('#submitUserForm .lname').val() == '' || 
		jQuery('#submitUserForm .lname').val() == 'Enter last name (required)'
	) {
		valErrors.push('First and Last Name');
		jQuery('#submitUserForm .fname').addClass('error');
		jQuery('#submitUserForm .lname').addClass('error');
	}
	if( 
		jQuery('#submitUserForm .pwd').val() == '' || 
		jQuery('#submitUserForm .pwd').val().length < 8
	) {
		valErrors.push('Password (8 character minimum)');
		jQuery('#submitUserForm .pwd').addClass('error');
	}
	if( jQuery('#submitUserForm .email').val() == '' || 
		jQuery('#submitUserForm .email').val() == 'Enter email (required)'
	) {
		valErrors.push('Email Address');
		jQuery('#submitUserForm .email').addClass('error');
	}
	var emailAddress = jQuery('#submitUserForm .email').val();
	if( !emailReg.test(emailAddress) ) {
		valErrors.push('Email Address (Appears Invalid)');
		jQuery('#submitUserForm .email').addClass('error');
	}
	
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

function userSubmitted( data ) {
	console.log(data);

	if( data.status == 'success' ) {
	
		jQuery('#itemSendResults').removeClass('loading').addClass('success').html(data.message);
		setTimeout(function(){
			jQuery('#itemSendResults').animate({ 'height': 'hide', 'opacity': 'hide' }, 
				function(){
					jQuery(this).removeClass('success').html('Loading...');
				}
			);
		}, 3000);
		setTimeout(function(){
			window.location.reload(true);
		}, 3250);
		
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

$(document).ready(function(){

	
	tableClass('#submitFields');
			
	var viewOptions = {
		dataType: 'json',
		beforeSubmit: userLogin,
		success: userLogined
	}
	$('#userLoginForm').ajaxForm(viewOptions);
			
	var itemDefs = [
		'Enter email (required)'
	];
	$('#userLoginForm').deloClear({
		fieldDef: itemDefs
	});
	$('.forgotPassword').colorbox({
		height: '300px',
		width: '600px',
		top: '150px',
		onComplete: function(){
			tableClass('#submitFields');
			
			var viewOptions = {
				dataType: 'json',
				beforeSubmit: passReset,
				success: passReseted
			}
			$('#passwordResetForm').ajaxForm(viewOptions);
			
			var itemDefs = [
				'Enter email (required)'
			];
			$('#passwordResetForm').deloClear({
				fieldDef: itemDefs
			});
		}
	});
	
	$('.newUser').colorbox({
		height: '600px',
		width: '600px',
		top: '150px',
		onComplete: function(){
			tableClass('#submitFields');
			
			var viewOptions = {
				dataType: 'json',
				beforeSubmit: userSubmit,
				success: userSubmitted
			}
			//$('#submitUserForm').ajaxForm(viewOptions);
			
			var itemDefs = [
				'Enter first name (required)',
				'Enter last name (required)',
				'Create username (required)',
				'Enter email (required)',
				'Format: 212-555-1234 (required)',
				'Format: mm/dd/yyyy'
			];
			$('#submitUserForm').deloClear({
				fieldDef: itemDefs
			});
		}
		
	});
	$('input,textarea').focus(function(){
		$(this).addClass('focused');
	});
	
	$('input,textarea').focusout(function(){
		$(this).removeClass('focused');
		if( $(this).hasClass('error') ) {
			$(this).removeClass('error');
		};
	});

});

$(window).load(function(){
	$('.lsf:not(.saved)').show();
});