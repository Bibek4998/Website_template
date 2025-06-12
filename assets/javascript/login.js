const form = document.getElementById("loginForm");
const errorMsg = document.getElementById("errorMsg");
const showPassword = document.getElementById("showPassword");
const passwordInput = document.getElementById("password");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = passwordInput.value.trim();

  if (username === "admin" && password === "admin123") {
    alert("Login successful! Welcome to Aashirbad Traders.");
    window.location.href = "dashboard.html"; // Change if needed
  } else {
    errorMsg.textContent = "Invalid username or password!";
  }
});

showPassword.addEventListener("change", function () {
  passwordInput.type = this.checked ? "text" : "password";
});
