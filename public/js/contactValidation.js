document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contact-form");

  const firstNameInput = form.querySelector("#firstName");
  const lastNameInput = form.querySelector("#lastName");
  const emailInput = form.querySelector("#email");
  const commentsInput = form.querySelector("#comments");

  const firstNameError = form.querySelector("#firstNameError");
  const lastNameError = form.querySelector("#lastNameError");
  const emailError = form.querySelector("#emailError");
  const commentsError = form.querySelector("#commentsError");

  function isValidEmailAddress(email) {
    const regExp = /^([a-zA-Z0-9_\.\-])+@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regExp.test(email);
  }

  function containsURL(str) {
    const regExp = /\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i;
    return regExp.test(str);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // stop form from submitting

    // Clear previous error messages
    firstNameError.innerText = "";
    lastNameError.innerText = "";
    emailError.innerText = "";
    commentsError.innerText = "";
    firstNameInput.removeAttribute("aria-invalid");
    lastNameInput.removeAttribute("aria-invalid");
    emailInput.removeAttribute("aria-invalid");
    commentsInput.removeAttribute("aria-invalid");

    let isValid = true;
    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const email = emailInput.value.trim();
    const comments = commentsInput.value.trim();

    // First Name
    if (!firstName) {
      firstNameError.innerText = "Please enter your first name";
      firstNameInput.setAttribute("aria-invalid", "true");
      firstNameInput.focus();
      isValid = false;
    } else if (containsURL(firstName)) {
      firstNameError.innerText = "No URLs allowed in first name";
      isValid = false;
    }

    // Last Name
    if (!lastName) {
      lastNameError.innerText = "Please enter your last name";
      isValid = false;
    } else if (containsURL(lastName)) {
      lastNameError.innerText = "No URLs allowed in last name";
      isValid = false;
    }

    // Email
    if (!email) {
      emailError.innerText = "Please enter your email address";
      isValid = false;
    } else if (!isValidEmailAddress(email)) {
      emailError.innerText = "The email entered is not a valid email address";
      isValid = false;
    }

    // Comments
    if (!comments) {
      commentsError.innerText = "Please enter a comment";
      isValid = false;
    } else if (containsURL(comments)) {
      commentsError.innerText = "No URLs allowed in comments";
      isValid = false;
    }

    if (isValid) form.submit();
  });
});