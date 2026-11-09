// Laydi Candles: Form validation and page updates.
function showMessage(element, message, type) {
  element.textContent = message;
  element.className = "form-message " + type;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function handleLogin(event) {
  event.preventDefault();

  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;
  const message = document.getElementById("loginMessage");

  if (email === "" || password === "") {
    showMessage(message, "Please fill in both fields.", "error");
  } else if (!isValidEmail(email)) {
    showMessage(message, "Please enter a valid email address.", "error");
  } else {
    showMessage(message, "Input check complete. This demo does not sign in to a real account.", "success");
  }
}

function handleSignup(event) {
  event.preventDefault();

  const name = document.getElementById("fullName").value.trim();
  const email = document.getElementById("signupEmail").value.trim();
  const password = document.getElementById("signupPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const message = document.getElementById("signupMessage");

  if (name === "" || email === "" || password === "" || confirmPassword === "") {
    showMessage(message, "Please complete all fields.", "error");
  } else if (!isValidEmail(email)) {
    showMessage(message, "Please enter a valid email address.", "error");
  } else if (password.length < 8) {
    showMessage(message, "Password must contain at least 8 characters.", "error");
  } else if (password !== confirmPassword) {
    showMessage(message, "Passwords do not match. Please try again.", "error");
  } else {
    showMessage(message, "Your information passed the demo validation. No account was created or saved.", "success");
    document.getElementById("signupForm").reset();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");

  if (loginForm) {
    loginForm.addEventListener("submit", handleLogin);
  }

  if (signupForm) {
    signupForm.addEventListener("submit", handleSignup);
  }
});
