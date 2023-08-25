<?php
$name = $_POST["name"];
$visitor_email = $_POST["email"];
$subject = $_POST["subject"];
$massage = $_POST["massage"];


$email_form = 'safwanwr111@gmail.com';

$email_subject  = "New form submission";
$email_body = "User name :$name.\n".
               "User email : $visitor_email.\n ".
               "User name :$subject.\n".
               "User name :$massage.\n";
               
               
$to = "safwanwr111@gmail.com";
$headers = "Form:$email_form \r \n";
$headers . = "Reply to:$visitor_email \r \n";
mail($to,$email_subject,$email_body,$headers);
header("Location:contact.html");
?>