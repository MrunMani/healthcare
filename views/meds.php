<?php 
  
  if ( isset($_POST["submit"]) ){

    $id = $_POST["id"];

    

  }
  

 ?>


<!DOCTYPE html>
<html lang="en">
<head>

  <title>ReMediStore</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <link ref="stylesheet" href="css/logincss.css">
  <link href="https://fonts.googleapis.com/css?family=Libre+Barcode+128+Text" rel="stylesheet">

  <style>
   
.jumbotron h3{
    color:black;
    text-align:center;
    font-family: 'Open Sans', sans-serif;

}
.jumbotron{
    background-color:#92dce8;
    opacity: 0.5;
}
.jumbotron h1{
    color:black;
    text-align:center;
    font-family: 'Libre Barcode 128 Text', cursive;
    font-size:100px;
    opacity: 1;
}
.jumbotron img{
    width:100%;
    height:360px;
}
body{
    background-image:url("img/medicines sweet.jpg");
    background-repeat: no-repeat;
    background-size: 100%;
    height: 100%;
    
}
#inputs
{
    text-align:right;
    border-radius: 10px;
    
}
  </style>
</head>
<body>

<div class="jumbotron">
  <h1>ReMediStore </h1>      
  <p><h3>Gives the exact prescribed</h3></p>
  
    
</div>
<div class="container">
    <div id="inputs">
        <form action="" method="POST">
        <input name="id" type="text" placeholder="Patient_id" id="pid" ><br><br>
        <input name="submit" type="submit" value="Generate_OTP" id="oid"><br><br>
        <!-- <input name="otp" type="text" placeholder="ENTER THE OTP" id="otp"><br><br>
        <input name="submit" type="submit" placeholder="Submit" id="submit"><br>
 -->        </form>
    </div>    
</div>
  

</body>
</html>
