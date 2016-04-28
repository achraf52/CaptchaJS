<?php

// Include this function in your functions file or whereever you process forms
function captchaJS($captchaCookie, $captchaInput)
{
	// Clean up the cookie and input contents
	$captchaCookie = htmlspecialchars($captchaCookie);
	$captchaInput = htmlspecialchars($captchaInput);

	/* We check that the variables aren't empty, null doesn't work because we
	   have used htmlspecialchars() to clean up the variables, then we check
	   that the values match and if so return true or else return false. */
	if ( ($captchaInput !== '' || $captchaCookie !== '') && $captchaCookie === $captchaInput)
	{
		// Correct match
		return true;
	}
	else
	{
		// Test failure
		return false;
	}
}

?>