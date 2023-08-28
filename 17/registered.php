<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
<meta content="en-us" http-equiv="Content-Language" />
<meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
<title>Untitled 3</title>
<style type="text/css">
.auto-style2 {
	border-style: solid;
	border-width: 1px;
}
</style>
</head>

<body>

<form action="" method="post">
			<div class="auto-style2" style="width: 297px">user Name
			<input name="username" type="text" /></div>
			<div class="auto-style2" style="width: 297px">Password
			<input name="userpass" type="text" /></div>
			<div class="auto-style2" style="width: 297px">Email
			<input name="useremail" type="text" /></div>
			<div class="auto-style2" style="width: 297px">Mobaile
			<input name="usermobile" type="text" /></div>
			<div class="auto-style2" style="width: 297px">Address
			<input name="useraddress" type="text"/></div>
			<input name="submit" type="submit" value="submit" />
</form>

</body>

</html>
<?php

	include('dbconnection.php');

	if(isset($_POST['submit']))
	{
		$uname=$_POST['username'];
		$upass=$_POST['userpass'];
		$uemail=$_POST['useremail'];
		$umobail=$_POST['usermobile'];
		$uaddress=$_POST['useraddress'];
		$quer ="INSERT INTO `user`(`username`,`Password`,`email`,`mobile`,`address`) VALUES ('$uname','$upass','$uemail','$umobail','$uaddress')";
		$final=mysqli_query ($data,$quer);
	}
		
?>
