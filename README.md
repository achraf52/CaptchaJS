# CaptchaJS

Simple JavaScript library to insert to verify the user isn't a bot without using traditional captcha codes.

# Introduction

Welcome to CaptchaJS, this simple JavaScript library allows you to automatically
insert a hidden captcha code, generated in the user's browser, which lets you
verify the form submitter is a real user and not an automated bot submitting
multiple requests to flood your server or spam your database contents.

CaptchaJS is built from the idea that spam bots generally don't run JavaScript
code and spammers don't take a look at the JavaScript files a website uses,
therefore it is highly unlikely they'll notice anything because
CaptchaJS only injects the hidden captcha input once the form is submitted.

You can rely on CaptchaJS to protect you from generic spam bots available
around the web but if a spam attack is specialized you should probably
add more security measures alongside CaptchaJS to protect your forms.

# Usage

1: Assign an "id" to your form in this fashion
`<form action="form.php" method="POST" id="FormId">`

2: Change the "FormID" value in the "document.getElementById" below to your chosen form ID above

3: Include the PHP function from the "captchaJS.php" file in your processing and check its return

# Credits

Author: Achraf Almouloudi

Project: CaptchaJS

Version: 1.0

# Feedback

Any comments, suggestions or bug reports are welcome.