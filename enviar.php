<?php

// LLamando a los campos

$nombre = $_POST['nombre'];
$email = $_POST['email'];
$asunto = $_POST['asunto'];
$mensaje = $_POST['mensaje'];

// Datos para el correo

$destinatario = "zaratedu@gmail.com"

$carta = "De: $nombre \n";
$carta .= "Correo: $email \n"
$carta .= "Mensaje: $mensaje";

// Enviando mensaje

mail($destinatario, $asunto, $carta, $header)

header("Location:index.html");

?>