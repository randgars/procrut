
<?
if (array_key_exists('phone', $_POST)) {
   $to = 'randgars@gmail.com';
   $subject = "Заявка с сайта pro-crut";
   $subject = "=?utf-8?b?". base64_encode($subject) ."?=";
   $message = "Имя: ".$_POST['name']."\nPhone: ".$_POST['phone']."\nIP: ".$_SERVER['REMOTE_ADDR'];
   $headers = 'Content-type: text/plain; charset="utf-8"';
   $headers .= "From: <pro-crut.by  >\r\n";
   $headers .= "Date: ". date('D, d M Y h:i:s O') ."\r\n";
   mail($to, $subject, $message, $headers);
   echo $_POST['name'];
}
?>