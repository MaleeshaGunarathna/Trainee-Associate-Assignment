<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Accept, Authorization, X-Requested-With, X-Auth-Token, Origin, Application");
header("Content-Type:application/json;charset=UTF-8");

//connect database
$con = mysqli_connect("localhost","root","");
mysqli_select_db($con,"exam");

$data = json_decode(file_get_contents("php://input"));

//print_r($data);
$email= $data->email;
$password = $data->password;

$result = mysqli_query($con,"SELECT * FROM `user` WHERE email = '".$email."' AND password = '".$password."'");

$nums = mysqli_num_rows($result);
$rs = mysqli_fetch_array($result);

if($nums >= 1){
    http_response_code(200);
    $outp ="";

    $outp .= '{"email":"'.$rs["email"].'"}';
    $outp .= '{"handle":"'.$rs["username"].'"}';
    $outp .= '{"username":"'.$rs["name"].'"}';
    $outp .= '{"ID":"'.$rs["id"].'"}';

    $outp .= '{"Status":"200"}';
    echo $outp;
}
else{
    http_response_code(202);
}

?>