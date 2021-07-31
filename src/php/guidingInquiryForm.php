<?php
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = $name;
    $email_subject = 'RRCG Guiding Form Inquiry - $name';
    $email_body = 'Inquiry from $name.\n$message';

    //mail(to,subject,message,headers)
    $to = 'redrockguides@gmail.com';
    $headers = 'From: $email_from \r\n';
    $headers .= 'Reply-To: $visitor_email \r\n';
    mail($to,$email_subject,$email_body,$headers);
?>