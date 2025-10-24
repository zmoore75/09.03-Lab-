document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  if (password.length < 8) {
    message.textContent = "🦴 Password must be at least 8 characters!";
    message.style.color = "red";
  } else if (!/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
    message.textContent = "🪶 Password needs at least 1 capital letter and 1 number.";
    message.style.color = "red";
  } else {
    message.textContent = `Welcome back, Explorer ${username}! 🦕`;
    message.style.color = "green";

    // Optional: Add a simple animation after success
    document.querySelector(".login-dino").classList.add("shake");
  }
});
