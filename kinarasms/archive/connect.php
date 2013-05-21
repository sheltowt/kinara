<?php
$link=mysql_connect('localhost','utahidaho_kinara','7axamuCedasa');
if(!$link){
  die('database server connection failed');
}
$check=mysql_select_db('utahidaho_kinara',$link);
if(!$check){
	die('database couldnt be reached');
}
?>
