<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="post" enctype="multipart/form-data">
        <input type="text" name="inputname" id=""><br><br>
        <input type="password" name="inputpassword" id=""><br><br>
        <input type="file" name="inputimg" id=""><br><br>
        <input type="submit" name="submit" id="">
    </form>
</body>
</html>
<?php
    include('configuration.php');
?>
<?php
if(isset($_POST['submit']))
{
    $name=$_POST['inputname'];
    $pass=$_POST['inputpassword'];
    $imge=$_FILES['inputimg'];
    $path ='img/'. $imge['name'];
    print_r($path);
    $x="INSERT INTO `imags`(`Name`,`Password`,`img`) VALUES ('$name','$pass','$path')";
    $finalquary=mysqli_query($configuration,$x);
}
?>

<?php
if(isset($_POST['submit']))
{
    
}
?>