function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (!name) {
    alert("Name is empty");
    return false;
  } else if (!email) {
    alert("Email is empty");
    return false;
  } else if (!message) {
    alert("Message is empty");
    return false;
  }

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  alert(
    `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n\nForm submitted successfully!`
  );

  return true;
}
