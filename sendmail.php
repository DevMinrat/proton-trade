<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->Charset = "UTF-8";
$mail->setLanguage("ru", "phpmailer/language/");
$mail->IsHtml(true);

$mail->setFrom("info@fls.guru", "Frilancer");
$mail->addAddress("code@fls.guru");
$mail->Subject = "Привет! Это письмо";

$body = "<h1>Встречайте супер письмо</h1>";

if(trim(!empty($_POST["name"]))){
    $body.="<p><strong>Имя:</strong> ".$_POST["name"]."</p>";
}

if(trim(!empty($_POST["email"]))){
    $body.="<p><strong>E-mail:</strong> ".$_POST["email"]."</p>";
}

if(trim(!empty($_POST["name"]))){
    $body.="<p><strong>Сообщение:</strong> ".$_POST["message"]."</p>";
}

$mail->Body = $body;

if (!$mail->send()) {
    $message = "Ошибка";
} else {
    $message = "Данные отправлены";
}

$response = ["message" => $message];

header("Content-type: application/json");
echo json_encode($response);
?>