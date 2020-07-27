<?php

    // Get the form fields, removes html tags and whitespace.
    $name = strip_tags(trim($_POST["name"]));
    $name = str_replace(array("\r","\n"),array(" "," "),$name);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    // Check the data.
    if (empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header("Location: http://localhost/test/index.php?success=-1#form");
        exit;
    }

    // Set the recipient email address. Update this to YOUR desired email address.
    $recipient = "<vicentijevicjelena@yahoo.com>";
	
    // Set the email subject.
    $subject = "New contact from $name";
	$subject2 = "Omnifood - received message";
	
    // Build the email content.
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

	$email_content2 = "Hello $name,\n";
	$email_content2 .= "Your message:\n *** $message ***\n";
	$email_content2 .= "is received.\n"; 
	$email_content2 .= "We will contact you as soon as possible.\n";
	$email_content2 .= "Thank you once again for your interest in Omnifood!";
    // Build the email headers.
    $email_headers = "From: $name <$email>";
	$email_headers2 = "From: Omnifood";

    // Send the email.
    mail($recipient, $subject, $email_content, $email_headers);
	mail($email, $subject2, $email_content2, $email_headers2);


    // Redirect to the index.html page with success code
    header("Location: http://localhost/test/index.php?success=1#form");

?>