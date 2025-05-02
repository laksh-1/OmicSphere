$("#contact-form").on("submit", function (e) {
  e.preventDefault(); // prevent actual form submission

  const name = $('input[name="name"]').val();
  const email = $('input[name="email"]').val();
  const phone = $('input[name="phone"]').val();
  const message = $('input[name="message"]').val();

  const subject = encodeURIComponent(
    "New Contact Form Submission from " + name
  );
  const body = encodeURIComponent(
    "Name: " +
      name +
      "\n" +
      "Phone: " +
      phone +
      "\n" +
      "Email: " +
      email +
      "\n\n" +
      "Message:\n" +
      message
  );

  const mailtoLink = `mailto:your-email@example.com?subject=${subject}&body=${body}`;
  window.location.href = mailtoLink;
});

$("#subscribe-form").on("submit", function (e) {
  e.preventDefault(); // prevent actual form submission

  const email = $('input[name="email"]').val();

  const body = encodeURIComponent(
    "Email: " + email + "\n\n" + "I want to subscribe to OmicSphere's updates!"
  );

  const mailtoLink = `mailto:your-email@example.com?subject=Subscription%20Request&body=${body}`;
  window.location.href = mailtoLink;
});
