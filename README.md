# CaptchaJS

Simple JavaScript library to verify the user isn't a bot without using traditional captcha codes that annoy users.

# Introduction

Welcome to CaptchaJS, this simple JavaScript library allows you to automatically
insert a hidden captcha code, generated in the user's browser, which lets you
verify the form submitter is a real user and not an automated bot submitting
multiple requests to flood your server or spam your database table.

CaptchaJS is built around the idea that spam bots don't generally run JavaScript
code and spammers don't pay attention at the JavaScript code of a website,
therefore it is highly unlikely they'll notice anything because CaptchaJS
only injects the hidden captcha input once the form is submitted.

You can rely on CaptchaJS to protect you from generic spam bots available
around the web but if a spam attack specifically targets your website,
you should probably add more security measures to protect your forms.

# Usage

1: Include "captchaJS.js" and assign an "id" to your HTML form: `<form action="form.php" method="POST" id="formID">`

2: Change the "formID" variables in the "captchaJS.js" to your form ID as set in the HTML form code

3: Include the PHP file "captchaJS.php" in your processing page and call the captchaJS() function.

# Example

A working HTML form with PHP processing example of CaptchaJS usage is available in the "example.php" file.

# Credits

Author: Achraf Almouloudi

Project: CaptchaJS

Version: 1.2

# Feedback

Any comments, suggestions or bug reports are welcome.
