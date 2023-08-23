<?php
    include('configuration.php')
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="post">
        <input type="text" name="inpusername" placeholder="Enter Your User Name">
        <input type="password" name="inppassword" placeholder="Enter Your password">
        <input type="text" name="inpusermobile" placeholder="Enter Your Mobile">
        <input type="submit" value="submit" name="btn">
<?php
if(isset($_POST['btn']))
{
    $Uname=$_POST['inpusername'];
    $Upass=$_POST['inppassword'];
    $Umobile=$_POST['inpusermobile'];

    $x="INSERT INTO `userdata`(`userName`,`userPassword`,`userMobile`) VALUES ('$Uname','$Upass','$Umobile')";
    $finalquary=mysqli_query($configuration,$x);
}
// for($i=0; $i<=50; $i++)
// {
//     echo($i."<br>");
// }

// $arr=['Ahmed'=>1, 'Omar'=>2, 'Shatha'=>3];
// print_r($arr['Shatha'])


// $student=['Student1'=>'Razan', 'Student2'=>'Omar'];
// print_r($student['Student1']);

// $name=['Shatha','Razan','Ahmed','Mohamed'];
// for($i=0; $i<count($name); $i++)
// {
//     print_r($name[$i]."<br>"); -->
 // } -->
?>
    </form>
</body>
</html>
<?php
function evaluatePostfix($expression) {
  $stack = [];
 
  for ($i = 0; $i < strlen($expression); $i++) {
    $char = $expression[$i];
 
    if (!is_numeric($char)) {
      $num2 = array_pop($stack);
      $num1 = array_pop($stack);
 
      switch ($char) {
        case '+':
          array_push($stack, $num1 + $num2);
          break;
        case '-':
          array_push($stack, $num1 - $num2);
          break;
        case '*':
          array_push($stack, $num1 * $num2);
          break;
        case '/':
          array_push($stack, $num1 / $num2);
          break;
      }
    } else {
      array_push($stack, (int)$char);
    }
  }
 
  return array_pop($stack);
 }
 
 $expression = "231*+9-";
 $result = evaluatePostfix($expression);
 echo $result;
?>