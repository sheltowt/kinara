<?php
require_once('connect.php');
require('functions.php'); 

$fname = $link->real_escape_string($_REQUEST['fname']);
$lname = $link->real_escape_string($_REQUEST['lname']);
$telephone = $link->real_escape_string($_REQUEST['telephone']);
$email = $link->real_escape_string($_REQUEST['email']);
$level = $link->real_escape_string($_REQUEST['level']);
$pwd = $link->real_escape_string($_REQUEST['pwd']);

$sql="INSERT INTO users(fname, lname, telephone, email, level, pwd) VALUES('$fname', '$lname', '$telephone', '$email', '$level', '$pwd')";

$link->query($sql);

?>

<html>
<form method ="post" action="">
<table border="0">
<tr bgcolor="#cccccc">
</tr>
<tr>
	<td>First Name</td>
	<td align="center"><input type="text" name="fname" size="3"
		maxlength="3" /></td>
</tr>
<tr>
	<td>Last Name</td>
	<td align="center"><input type="text" name="lname" size="3"
		maxlength="3" /></td>
</tr>
<tr>
	<td>Telephone #</td>
	<td align="center"><input type="text" name="telephone" size="3"
		maxlength="3" /></td>
</tr>
<tr>
	<td>Email</td>
	<td align="center"><input type="text" name="email" size="3"
		maxlength="3" /></td>
</tr>
<tr>
	<td>Level</td>
	<td align="center"><input type="text" name="level" size="3"
		maxlength="3" /></td>
</tr>
<tr>
	<td>Password</td>
	<td align="center"><input type="text" name="pwd" size="3"
		maxlength="3" /></td>
</tr>
<tr>
	<td colspan="2" align="center"><input type="submit" value="Submit Order" /></td>
</tr>
</table>
</form>
</html>

			<?php echo

"$fname
$lname
$telephone
$email
$level
$pwd"
?>

<?php include 'footer.php'; ?>
