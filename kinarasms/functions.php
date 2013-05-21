<?php

/* 	is_logged_in() is used to check if a user is logged in.
 * 	Use it like this:
 *
 * 	if( is_logged_in() ) {
 *		// content or code for logged in users
 * 	} else {
 *		// content or code for visitors who are not logged in
 * 	}
 *
 */
 
function is_logged_in() {

	global $link;
	
	if( isset($_COOKIE['email']) && isset($_COOKIE['time']) && isset($_COOKIE['hash']) ) {
		
		if( getUsers($link,1,array('email'=>$_COOKIE['email']) ) ) {
		
			// Do the check
			$email = $_COOKIE['email'];
			$time = $_COOKIE['time'];
			$hash = $_COOKIE['hash'];
			$secret = 'jiepoec98fiU';
			
			$hashCalculated = sha1($email.$time.$secret);
			
			if( $hashCalculated == $hash ) {
				return true;
			} else {
				return false;
			}
			
		} else {
			return false;
		}
		
	} else {
		return false;
	}
		
}

/* 	is_standard_user() is used to check if a logged in user is a standard user (i.e. non-admin)
 * 	Use it like this:
 *
 * 	if( is_standard_user() ) {
 *		// content or code for logged in standard users
 * 	}
 *
 */

function is_standard_user(){

	global $link;
	
	if( is_logged_in() && isset($_COOKIE['ul']) && intval($_COOKIE['ul']) < 2 ) {
		return true;
	} else {
		return false;
	}
	
}

/* 	is_admin_user() is used to check if a logged in user is an administrator
 * 	Use it like this:
 *
 * 	if( is_admin_user() ) {
 *		// content or code for logged in admin users only
 * 	}
 *
 */

function is_admin_user() {

	global $link;

	if( is_logged_in() && isset($_COOKIE['ul']) && intval($_COOKIE['ul']) < 1 ) {
		return true;
	} else {
		return false;
	}
}

// Generate a random string for password reset

function generateRandomString($length = 10) {    
    return substr(str_shuffle("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"), 0, $length);
}

/* 	getUsers() is used to retreive users with specific criteria from the database
 * 	Use it like this:
 *
 *	$args = array(
 *		'email' => {email value},
 *		'pwd'	=> sha1({password value})
 *	);
 * 	$users = getUsers($link, $quantity, $args);
 *	$users = getUsers($link, $quantity);
 *	$users will be an array of user records who match the criteria
 *
 */
 
function getUsers( $link, $quantity, $args = null ) {
	//foreach( $args as $field => value ) {
	//	$value = unProcess( $value );
	//}
	
	$outputs = false;
	
	$sql = "SELECT * FROM users";
	
	$i = 0;
	
	if( $args != null ) {
		foreach( $args as $field => $value ) {
			switch($field) {
				default:
					if( $i == 0 ) {
						$sql .= " WHERE $field = '$value'";
					} else {
						$sql .= " AND $field = '$value'";
					}
					break;
			}
			$i++;
		}
	}
	
	if( $quantity != -1 ) {
		$sql .= " LIMIT 0,$quantity";
	}
	
	//echo $sql;
	
	$result = $link->query($sql);
	
	/*echo '<pre>';
	var_dump($result);
	echo '</pre>';*/
	
	if( $result->num_rows != 0 ) {
		$i = 0;
		while( $row = $result->fetch_assoc() ) {
			$outputs[]	= $row;
		}
		/*echo '<pre>';
		var_dump($outputs);
		echo '</pre>';*/
		for( $i = 0; $i < count( $outputs ); $i++ ) {
			$outputs[$i]['level'] = processedUserLevel($outputs[$i]['level']);
		}
	}
	
	return $outputs;
	
}

function processedUserLevel($level) {
	switch($level) {
		case '0':
			return 'Admin';
			break;
		case '1':
			return 'User';
			break;
	}
}


/*********
 MESSAGE TEMPLATES
 *********/
function newMessageTemplate($link,$name,$body){

	$output = 'error';
	
	$sql = "INSERT INTO message_templates (name,body) VALUES ('$name','$body');";
	
	if( $result = $link->query($sql) ){
		$output = 'success';
	}
	
	return $output;
	
}

function getMessageTemplate($link,$id){
	
	$outputs = false;
	
	$sql = "SELECT * FROM message_templates WHERE id='$id';";
	
	$result = $link->query($sql);
	
	if( $result->num_rows != 0 ) {
		$i = 0;
		while( $row = $result->fetch_assoc() ) {
			$outputs	= $row;
		}
	}
	
	return $outputs;
	
}

function updateMessageTemplate($link,$id,$name,$body){
	
	$outputs = false;
	
	$sql = "UPDATE message_templates SET name = '$name', body = '$body' WHERE id = '$id';";
	
	$result = $link->query($sql);
	
	if($result){
		$outputs = true;
	}
	
	return $result;
	
}

//create a fuction to update an entity- when entity

function newEntity($link,$entity,$contact1name,$contact1phone,$contact2name='',$contact2phone='') {
	
	$output = false;
	
	$sql = "INSERT INTO entities (entity, contact1name, contact1phone";
	if( $contact2name ){
		$sql .= ", contact2name";
	}
	if( $contact2phone ){
		$sql .= ", contact2phone";
	}
	$sql .= ") VALUES ('$entity', '$contact1name', '$contact1phone'";
	if( $contact2name != '' ){
		$sql .= ", '$contact2name'";
	}
	if( $contact2phone != ''){
		$sql .= ", '$contact2phone'";
	}
	$sql .= ");";
	
	$result = $link->query($sql);
	
	if($result){
		$output = $link->insert_id;
	}
	
	return $output;
	
}

function getEntities($link,$args = null){
	
	$outputs = false;
	
	$sql = 'SELECT * FROM entities';
	
	$i = 0;
	
	if( $args != null ) {
		foreach( $args as $field => $value ) {
			switch($field) {
				default:
					if( $i == 0 ) {
						$sql .= " WHERE $field = '$value'";
					} else {
						$sql .= " AND $field = '$value'";
					}
					break;
			}
			$i++;
		}
	}
	
	$sql .= " ORDER BY entity ASC;";
	
	$result = $link->query($sql);
	
	if( $result->num_rows != 0 ) {
		$i = 0;
		while( $row = $result->fetch_assoc() ) {
			$outputs[]	= $row;
		}
	}
	
	return $outputs;
	
}

function searchEntities($link,$s){
	
	$output = false;
	
	$sql = "SELECT * FROM entities WHERE";
	
	$sql .= " entity LIKE '%$s%' OR contact1name LIKE '%$s%' OR contact1phone LIKE '%$s%' OR contact2name LIKE '%$s%' OR contact2phone LIKE '%$s%' ORDER BY entity ASC;";
	
	$result = $link->query($sql);
	
	if( $result->num_rows != 0 ) {
		$i = 0;
		while( $row = $result->fetch_assoc() ) {
			$output[]	= $row;
		}
	}
	
	return $output;
	
}

function updateEntity($link,$id,$args){
	
	$output = false;
	
	$sql = "UPDATE entities SET";
	
	$i = 0;
	
	foreach($args as $key => $value){
		$sql .= " $key = '$value'";
		$i++;
		if($i < count($args)){
			$sql .= ',';
		}
	}
	
	$sql .= " WHERE id = '$id';";
	
	//echo $sql;
	
	$result = $link->query($sql);
	
	if($result){
		$output = true;
	}
	
	return $output;
}

function deleteEntities($link,$id) {
	
	$sql = "DELETE FROM entities WHERE id='$id';";
	$result = $link->query($sql);
	
	deleteLoans($link,'entity_id',$id);
	
}

/****
 LOANS
 ****/
 
function newLoan($link,$loan_id,$entity_id,$amount,$date_distributed,$number_payments,$payment_amount,$date_first_payment,$fiveday,$twoday,$oneday,$confday) {
	
	$output = false;
	
	$sql = "INSERT INTO loans (loan_id, entity_id, amount, date_distributed, number_payments, payment_amount, date_first_payment, fiveday, twoday, oneday, confday)";
	$sql .= "VALUES ('$loan_id', '$entity_id', '$amount', '$date_distributed', '$number_payments', '$payment_amount', '$date_first_payment', '$fiveday', '$twoday', '$oneday', '$confday');";
	
	$result = $link->query($sql);
	
	if($result){
		$output['loan_id'] = $link->insert_id;
	}
	
	if($number_payments > 0){
	
		$payments = array();
		
		$date_first_payment_month	= intval(date('n', $date_first_payment));
		$date_first_payment_day		= intval(date('j', $date_first_payment));
		$date_first_payment_year	= intval(date('Y', $date_first_payment));
		
		if($date_first_payment_day > 28) {
			$date_first_payment_day = 28;
		}
		
		for($i = 0; $i < $number_payments; $i++ ){
			
			if( $i > 0 ) {
				if($date_first_payment_month == 12){
					$date_first_payment_month = 1;
					$date_first_payment_year++;
				} else {
					$date_first_payment_month++;
				}
			}
			
			$due_date = strtotime(strval($date_first_payment_month) . '/' . strval($date_first_payment_day) . '/' . strval($date_first_payment_year));
			
			$payments[] = newPayment($link,$output['loan_id'],$payment_amount,$due_date);
			
		}
		
	}
	
	return $output;
	
}

function getLoans($link,$args = null){
	
	$outputs = false;
	
	$sql = 'SELECT * FROM loans';
	
	$i = 0;
	
	if( $args != null ) {
		foreach( $args as $field => $value ) {
			switch($field) {
				default:
					if( $i == 0 ) {
						$sql .= " WHERE $field = '$value'";
					} else {
						$sql .= " AND $field = '$value'";
					}
					break;
			}
			$i++;
		}
	}
	
	$sql .= " ORDER BY date_distributed ASC;";
	
	$result = $link->query($sql);
	
	if( $result->num_rows != 0 ) {
		$i = 0;
		while( $row = $result->fetch_assoc() ) {
			$outputs[]	= $row;
		}
		for($i = 0; $i < count($outputs); $i++) {
			$outputs[$i]['date_distributed'] = date('n/j/y',$outputs[$i]['date_distributed']);
			$outputs[$i]['date_first_payment'] = date('n/j/y',$outputs[$i]['date_first_payment']);
			$outputs[$i]['fiveday'] = processSMSPreference('fiveday',$outputs[$i]['fiveday']);
			$outputs[$i]['twoday'] = processSMSPreference('twoday',$outputs[$i]['twoday']);
			$outputs[$i]['oneday'] = processSMSPreference('oneday',$outputs[$i]['oneday']);
			$outputs[$i]['confday'] = processSMSPreference('confday',$outputs[$i]['confday']);
		}
	}
	
	
	
	return $outputs;
	
}

function processSMSPreference($name,$data,$disabled=true){
	
	if( $data == 1 ) {
		$checked = 'checked="checked"';
	}else {
		$checked = '';
	}
	
	if( $disabled == true ) {
		$disabled = 'disabled="disabled"';
	} else {
		$disabled = '';
	}
	
	$return = '<input type="checkbox" name="' . $name . '" class="' . $name . '" ' . $checked . ' ' . $disabled . ' />';
	
	return $return;
	
}

function deleteLoans($link,$key,$value) {

	$loans = getLoans($link,array($key=>$value));
	
	$loan_ids = array();
	
	foreach($loans as $loan){
		deletePayments($link,'loan_id',$loan['id']);
	}
	
	$sql = "DELETE FROM loans WHERE $key='$value';";
	$result = $link->query($sql);
	
}

function deleteLoan($link,$id){
	deletePayments($link,'loan_id',$id);
	$sql = "DELETE FROM loans WHERE id='$id';";
	
	$result = $link->query($sql);
}

function updateLoan($link,$id,$args){
	
	$output = false;
	
	$sql = "UPDATE loans SET";
	
	$i = 0;
	
	foreach($args as $key => $value){
		$sql .= " $key = '$value'";
		$i++;
		if($i < count($args)){
			$sql .= ',';
		}
	}
	
	$sql .= " WHERE id = '$id';";
	
	$result = $link->query($sql);
	
	if($result){
		$output = true;
	}
	
	return $output;
}

/******
 PAYMENTS
 ******/

function newPayment($link,$loan_id,$amount,$due_date,$received_date='',$status=0){
	
	$output = false;
	
	$sql = "INSERT INTO payments (loan_id, amount, due_date, received_date, status) ";
	$sql .= "VALUES ('$loan_id', '$amount', '$due_date', '$received_date', '$status');";
	
	$result = $link->query($sql);
	
	if($result){
		$output = $link->insert_id;
	}
	
	return $output;
	
}

function getPayments($link,$args=null,$order='ASC'){

	$outputs = false;
	
	$sql = 'SELECT * FROM payments';
	
	$i = 0;
	
	if( $args != null ) {
		foreach( $args as $field => $value ) {
			switch($field) {
				default:
					if( $i == 0 ) {
						$sql .= " WHERE $field = '$value'";
					} else {
						$sql .= " AND $field = '$value'";
					}
					break;
			}
			$i++;
		}
	}
	
	$sql .= " ORDER BY due_date $order;";
	
	$result = $link->query($sql);
	
	if( $result->num_rows != 0 ) {
		$i = 0;
		while( $row = $result->fetch_assoc() ) {
			$outputs[]	= $row;
		}
		for($i = 0; $i < count($outputs); $i++) {
			$outputs[$i]['due_date'] = date('n/j/y',$outputs[$i]['due_date']);
			if($outputs[$i]['received_date'] != 0){
				$outputs[$i]['received_date'] = date('n/j/y',$outputs[$i]['received_date']);
			} else {
				$outputs[$i]['received_date'] = '&nbsp;';
			}
			$outputs[$i]['status'] = processStatus($outputs[$i]['status']);
		}
	}
	
	return $outputs;
}

function processStatus($data){
	
	switch($data){
		case 0:
			$return = 'Pending';
			break;
		case 1:
			$return = 'Received';
			break;
		case 2:
			$return = 'On Hold';
			break;
		default:
			$return = 'Unknown';
	}
	
	return $return;
}


function deletePayments($link,$key,$value) {
	
	$sql = "DELETE FROM payments WHERE $key='$value';";
	$result = $link->query($sql);
	
}

function deletePayment($link,$id) {
	
	$sql = "DELETE FROM payments WHERE id='$id';";
	$result = $link->query($sql);
}

function updatePayment($link,$id,$args) {
	
	$output = false;
	
	$sql = "UPDATE payments SET";
	
	$i = 0;
	
	foreach($args as $key => $value){
		$sql .= " $key = '$value'";
		$i++;
		if($i < count($args)){
			$sql .= ',';
		}
	}
	
	$sql .= " WHERE id = '$id';";
	
	$result = $link->query($sql);
	
	if($result){
		$output = true;
	}
	
	return $output;
	
}

function searchPayments($link,$s,$sdate=false,$edate=false) {
	
	$outputs = false;
	
	$sql = "SELECT * FROM entities WHERE entity LIKE '%$s%' OR contact1name LIKE '%$s%' OR contact2name LIKE '%$s%';";
	
	$result = $link->query($sql);
	
	$loans = array();
	
	if( $result->num_rows != 0 ) {
		$entities = array();
		while( $row = $result->fetch_assoc() ) {
			$entities[]	= $row;
		}
		foreach($entities as $entity){
			$ent_loans = getLoans($link,array('entity_id'=>$entity['id']));
			if( $ent_loans && count($ent_loans) > 0 ) {
				foreach($ent_loans as $loan) {
					$loans[] = $loan;
				}
			}
		}
	}
	
	$sql = "SELECT * FROM loans WHERE loan_id LIKE '%$s%';";
	
	$result= $link->query($sql);
	if( $result->num_rows != 0 ) {
		$s_loans = array();
		while( $row = $result->fetch_assoc() ) {
			$s_loans[] = $row;
		}
		foreach( $s_loans as $loan ) {
			$loans[] = $loan;
		}
	}
	
	$sql = "SELECT * FROM payments";
	$count = 0;
	if( count($loans) > 0 ) {
		foreach($loans as $loan) {
		
			$id = $loan['id'];
			
			if( $count == 0 ){
				$sql .= " WHERE (loan_id=$id";
			} else {
				$sql .= " OR loan_id=$id";
			}
			
			$count++;
		}
		$sql .= ")";
	}
	
	if( $sdate && $sdate != '') {
		$sdate = strtotime($sdate);
	
		if( $count == 0 ) {
			$sql .= " WHERE due_date >= $sdate";
		} else {
			$sql .= " AND due_date >= $sdate";
		}
	}
	if( $edate && $edate != '' ) {
		$edate = strtotime($edate);
		$edate = $edate + 86300;
	
		if( $count == 0 ) {
			$sql .= " WHERE due_date <= $edate";
		} else {
			$sql .= " AND due_date <= $edate";
		}
	}
	
	$sql .= ' ORDER BY due_date ASC;';
	echo $sql;
	$result = $link->query($sql);
	if( $result->num_rows != 0 ) {
		while( $row = $result->fetch_assoc() ) {
			$outputs[] = $row;
		}
		for($i = 0; $i < count($outputs); $i++) {
			$outputs[$i]['due_date'] = date('n/j/y',$outputs[$i]['due_date']);
			if($outputs[$i]['received_date'] != 0){
				$outputs[$i]['received_date'] = date('n/j/y',$outputs[$i]['received_date']);
			} else {
				$outputs[$i]['received_date'] = '&nbsp;';
			}
			$outputs[$i]['status'] = processStatus($outputs[$i]['status']);
		}
	}
	
	return $outputs;
	
}

if( !is_logged_in() && $_SERVER['REQUEST_URI'] != '/' ) {

	header('Location: /');
	
}

?>