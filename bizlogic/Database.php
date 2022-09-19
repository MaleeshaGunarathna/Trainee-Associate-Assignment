<!-- making database connection -->
<?php
  $server="localhost";
  $user="root";
  $password="";
  $database="exam";
  
  $connection=new mysqli($server,$user,$password,$database);

  if ($conn->connect_error) {
    die("Connection failed: " . $connection->connect_error);
  }
?>
