// contactValidation.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent form from submitting by default

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const comments = document.getElementById("comments").value.trim();

    // Clear previous errors
    document.getElementById("firstNameError").textContent = "";
    document.getElementById("lastNameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("commentsError").textContent = "";

    let isValid = true;

    if (!firstName) {
      document.getElementById("firstNameError").textContent = "First name cannot be empty.";
      isValid = false;
    } else if (containsURL(firstName)) {
      document.getElementById("firstNameError").textContent = "No URLs allowed.";
      isValid = false;
    }

    if (!lastName) {
      document.getElementById("lastNameError").textContent = "Last name cannot be empty.";
      isValid = false;
    } else if (containsURL(lastName)) {
      document.getElementById("lastNameError").textContent = "No URLs allowed.";
      isValid = false;
    }

    if (!email) {
      document.getElementById("emailError").textContent = "Email cannot be empty.";
      isValid = false;
    } else if (!isValidEmailAddress(email)) {
      document.getElementById("emailError").textContent = "Please enter a valid email.";
      isValid = false;
    }

    if (!comments) {
      document.getElementById("commentsError").textContent = "Comments cannot be empty.";
      isValid = false;
    } else if (containsURL(comments)) {
      document.getElementById("commentsError").textContent = "No URLs allowed.";
      isValid = false;
    }

    if (isValid) {
      form.submit();
    }
  });

  // Reuse your server-side helpers in client-side
  function containsURL(str) {
    var regExp = /\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i;
    return regExp.test(str);
  }

  function isValidEmailAddress(email) {
    var regExp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regExp.test(email);
  }
});