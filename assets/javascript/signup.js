const signupForm = document.getElementById("signupForm");
const signupError = document.getElementById("signupError");
const newPassword = document.getElementById("newPassword");
const confirmPassword = document.getElementById("confirmPassword");
const showSignupPassword = document.getElementById("showSignupPassword");

signupForm.addEventListener("submit", function (e) {
  e.preventDefault();

  if (newPassword.value !== confirmPassword.value) {
    signupError.textContent = "Passwords do not match!";
    return;
  }

  // Simulate success (replace with backend logic later)
  alert("Account created successfully!");
  window.location.href = "index.html";
});

showSignupPassword.addEventListener("change", function () {
  const type = this.checked ? "text" : "password";
  newPassword.type = type;
  confirmPassword.type = type;
});
