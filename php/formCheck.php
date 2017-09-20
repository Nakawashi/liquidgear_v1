<!DOCTYPE html>
<!--
//***************************************************************
// Author:  	Lucie Genevey
// Date:    	2015.20.12
// summary:     data processing
-->

<html lang="fr">
	<head>
		<meta charset="utf-8">
		<title>Liquid Gear - traitement</title>
	</head>

	<body>

	<?php
		session_start();
	
		if(isset($_POST["sendButton"])){
		
			// declaration and initialization of variables
            $name = htmlentities($_POST["name"]);
            $email = $_POST["emailForm"];
            $message = ($_POST["messageArea"]);
            
            // email variables
            $to = 'admin@liquidgear.ch';
            $from="From: $name<$email>\r\nReturn-path: $email"; 
            $subject="Message sent using your contact form"; 
			
			// regular expression to parse the email
			$regexEmail = "!^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]{2,}\.[a-zA-Z]{2,4}$!";
            
            $regexName = "!^([a-zA-Z'àâéèêôùûçÀÂÉÈÔÙÛÇ[:blank:]-]{1,75})$!";

			// // check empty fields. Will contain the specific error message. If "" is empty, there is no error, all fileds are completed
			$errorMessages="";
				
			// control the email
			if ($email == ""){
                $errorMessages = $errorMessages . 'Pas d\'email entré <br />';
            }	
			else if (!preg_match($regexEmail, $email)){
                $errorMessages = $errorMessages . 'Votre e-mail n\'est pas valide. <br />';
            }
            
            if ($name == ""){
                $errorMessages = $errorMessages . 'Pas de nom entré <br />';
            }
            else if (!preg_match($regexName, $name)) {
                $errorMessages = $errorMessages . 'Nom invalide <br />';
            }
            
			// control the message area
			if ($message == ""){
                $errorMessages = $errorMessages . 'Vous n\'avez pas écris de message. <br />';
            }
            
            if ($errorMessages <> "") {
                
                print($errorMessages);
					echo "<br><br><a href='javascript:history.go(-1)'>Retour sur la page principale</a>";
            }
            // fields ok, send email
            else {
                mail($to, $subject, utf8_decode($message), $from); 
                
                echo '<span style="font-size:40px;font-family:sans-serif;">
                          Votre message a bien été envoyé !
                      </span> <br><br>';
                
                echo '<span style="font-size:30px;font-family:sans-serif;">
                          Nous vous réponderons par email dans les plus brefs délais.
                      </span> <br><br>';
                
                echo '<a href="../index.php" style="font-size:25px;text-decoration:none;">
                         Retourner sur liquidgear.ch
                     </a>';
            }
                
		}
	?>

	</body>
	
</html>
