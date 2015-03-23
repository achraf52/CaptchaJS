<?php

// Include this function in your functions file or whereever you process forms
function captchaJS()
{
	// Retrieve the submitted captcha data
	$captchaCookie = $_COOKIE['captchaCookie'];
	$captchaInput = $_POST['captchaInput'];

	// Clean up the cookie and input contents
	$captchaCookie = htmlspecialchars($captchaCookie);
	$captchaInput = htmlspecialchars($captchaInput);

	/* We check that the variables aren't empty, null doesn't work because we
	   Have used htmlspecialchars() to clean up the contents, then we check
	   That the values match and if so return true or else return a false */
	if ($captchaInput!==''||$captchaCookie!==''&&$captchaCookie==$captchaInput)
	{
		return true;
	}
	else
	{
		return false;
	}
}

// Process your submitted form data
if (captchaJS())
{
	// Captcha is valid
}
else
{
	// Captcha is invalid
}

?>