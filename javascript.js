//this will change the text of the dark mode button
function updateButtonText() {
    const btn = document.getElementById("toggle-mode");
    if (!btn) return;

    btn.textContent = document.body.classList.contains("dark-mode")
    ? "Light Mode"
    : "Dark Mode";
}

//this is the function to toggle the dark mode
function myFunction() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("darkMode", "enabled");
    } else {
      localStorage.setItem("darkMode", "disabled");
    }

    updateButtonText();
}

//this will check if the user already clicked dark mode
window.onload = function () {
    if (localStorage.getItem("darkMode") === "enabled") {
      document.body.classList.add("dark-mode");
    }
    updateButtonText();
}

//This is the section to validate the email address
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const emailInput = document.getElementById("email");

  if (!form || !emailInput) return;

  form.addEventListener("submit", function (event) {
    const email = emailInput.value.trim();

    // Simple but solid email pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      event.preventDefault(); // stop form submission
      alert("Please enter a valid email address.");
      emailInput.focus();
    }
  });
});
