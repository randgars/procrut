
<?
if (array_key_exists('phone', $_POST)) {
   $to = 'randgars@gmail.com';
   $subject = "Заявка с сайта pro-crut.by";
   $subject = "=?utf-8?b?". base64_encode($subject) ."?=";
   $message = "Имя: ".$_POST['name']."\nНомер телефона: ".$_POST['phone']."\nIP: ".$_SERVER['REMOTE_ADDR'];
   $headers = 'Content-type: text/plain; charset="utf-8"';
   mail($to, $subject, $message, $headers);
   echo $_POST['name'];
}
?>