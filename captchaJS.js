/*
Author: Achraf Almouloudi
Project: CaptchaJS
Version: 1.0
*/

// Read cookie function //
function readCookie(name)
{
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++)
    {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) { return c.substring(nameEQ.length,c.length); }
    }
}
// Invisible Form Captcha //
if (readCookie('captchaCookie')==null)
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
    // Set cookie details
    var captchaCookie = 'captchaCookie';
    var now = new Date();
    var time = now.getTime();
    time += 3600 * 1000;
    now.setTime(time);
    // Create captcha cookie
    document.cookie=captchaCookie+"="+randomString+"; expires=" + now.toUTCString() + "; path=/";
}
// Output the value of the cookie into the hidden captcha input
if (document.getElementById('submit')!==null)
{
    document.getElementById('submit').onclick = function()
    {
       var captchaCookie = readCookie('captchaCookie');
       document.getElementById('FormId').innerHTML += '<input name="captchaInput" type="text" style="display: none" value="'+captchaCookie+'">';
    }
}