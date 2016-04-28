<?php

include('captchaJS.php');

if ( count($_POST) !== 0 )
{
	$name = $_POST['name'];
	$captchaInput = $_POST['captchaInput'];
	$captchaCookie = $_COOKIE['captchaCookie'];

	// Process form data
	if ($name == NULL)
	{
		echo "No name sent";
	}
	elseif ( captchaJS($captchaCookie, $captchaInput) )
	{
		echo "Your name is: <b>$name</b>";
	}
	else
	{
		echo 'Captcha verification failed';
	}
}

?>

<form id="formID" action="example.php" method="post">
	Name: <input type="text" name="name">
	<input type="submit" value="Send">
</form>

<script src="captchaJS.js"></script>