/*
Author: Achraf Almouloudi
Project: CaptchaJS
Version: 1.2
*/

// Settings variables
var formID = 'formID';
var cookieName = 'captchaCookie';
var inputName = 'captchaInput';

// Read cookie function //
function readCookie(name)
{
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i < ca.length; i++)
	{
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) { return c.substring(nameEQ.length,c.length); }
	}
}
// Invisible Form Captcha //
if (readCookie(cookieName) == null)
{
	// Set function parameters
	var chars = "abcdefghiklmnopqrstuvwxyz0123456789";
	var string_length = 32;
	var randomString = '';
	// Generate a string
	for (var i=0; i<string_length; i++)
	{
		var rnum = Math.floor(Math.random() * chars.length);
		randomString += chars.substring(rnum,rnum+1);
	}
	// Create captcha cookie
	document.cookie=cookieName+"="+randomString+";expires=0;path=/";
}
// Select the form submit button
var inputs = document.getElementById(formID).getElementsByTagName('input');
for(var i = 0; i < inputs.length; i++)
{
	if(inputs[i].type.toLowerCase() == 'submit')
	{
		var submitButton = inputs[i];
	}
}
// Output the value of the cookie into the hidden captcha input
if (submitButton != null)
{
	submitButton.onclick = function()
	{
		// Create input element
		var element = document.createElement('input');
		element.name = inputName;
		element.type = 'text';
		element.style = 'display: none';
		element.value = readCookie(cookieName);
		// Injecvt captcha input
		submitButton.parentNode.insertBefore(element, submitButton);
	}
}