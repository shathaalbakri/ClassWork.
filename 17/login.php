<?php
    include('dbconnection.php');
?>
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
			<input name="login" type="submit" value="Login"/>
</form>

</body>

</html>
<?php
	if(isset($_POST['login']))
	{
		$uname=$_POST['username'];
		$upass=$_POST['userpass'];

		$gett ="SELECT * from `user` where `username`='$uname'";
		$qdone=mysqli_query($data,$gett);
		$ok = mysqli_fetch_assoc($qdone);
		if(mysqli_num_rows($qdone)>0)
		{
			if($ok['password'] == $upass)
			{
				session_start();
				$_SESSION['username']=$uname;
				header("Location:index.php");
			}
			else
			{
				each("error");
			}
		} 
	}
?>

