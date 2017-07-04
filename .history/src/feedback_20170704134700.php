<?php
if($_POST)
    {
        $to = "randgars@gmail.com"; //куда отправлять письмо
        $from = 'procrut@yahoo.com'; // от кого
        $subject = "Заявка с сайта pro-crut"; //тема
        $pattern = "#^\+[0-9]{12}+$#"; 

        if(!empty($_POST['name'] && $_POST['phoneNumber'])) {
	        if(preg_match($pattern, $_POST['phoneNumber'], $out) && !preg_match('|^[A-Z0-9]+$|i', $_POST['name'])){
		        $message = 'Имя: '.$_POST['name'].'; Телефон: '.$_POST['phoneNumber'].';';            
		        $headers = "Content-type: text/html; charset=UTF-8 \r\n";
		        $headers .= "From: <procrut@yahoo.com  >\r\n";
		        $result = mail($to, $subject, $message, $headers);
	        }
	        else {
	        	echo "Поля заполнены не корректно! Ввод имени необходимо вводить русскими буквами. Ввод телефона формата: +37529XXXXXXX";
	        	exit;
	        }
            
        }

        if ($result) {
            echo "Cообщение успешно отправленно. Пожалуйста, оставайтесь на связи";
        }
        else {
            echo "Все поля должны быть заполнены!";
        }
    }
?>