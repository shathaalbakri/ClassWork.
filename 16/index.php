<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<!-- enctype="multipart/form-data" -->
    <form method="post" >
        <input type="text" name="inputname" id=""><br><br>
        <input type="password" name="inputpassword" id=""><br><br>
        <!-- <input type="file" name="inputimg[]" id="" multiple><br><br> -->
        <input type="submit" name="submit" id="">
    </form>
</body>
</html>
<?php
    include('confing.php');
?>
<?php
// if(isset($_POST['submit']))
// {
//     $name=$_POST['inputname'];
//     $pass=$_POST['inputpassword'];
//     $sora=$_FILES['inputimg'];

//     for ($i=0; $i < count($sora['name']); $i++) 
//     { 
//         $path ='img/'. $sora['name'][$i];
//         $tmp =$sora['tmp_name'][$i];
//         $x="INSERT INTO `multiimge`(`Name`,`Password`,`imges`) VALUES ('$name','$pass','$path')";
//         $finalquary=mysqli_query($configuration,$x);
//         move_uploaded_file($tmp,$path);
//     }
// }


?> 