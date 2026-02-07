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


//this is to rotate through the photo albums on portfolio
const albums = {
  amig: { prefix: "images/amig_", count: 25 },
  clothing: { prefix: "images/clothing_", count: 6 },
  decor: { prefix: "images/decor_", count: 6 }
};

// Get all images
const rotatingImages = document.querySelectorAll(".rotating-img");

rotatingImages.forEach((img, i) => {
  const album = albums[img.dataset.album];
  if (!album) return;

  // Random starting image
  let index = Math.floor(Math.random() * album.count) + 1;

  // Set initial image immediately
  img.src = `${album.prefix}${String(index).padStart(3, "0")}.jpg`;
  img.style.opacity = 1;

  // Function to update the image with fade
  const updateImage = () => {
    img.style.opacity = 0;
    setTimeout(() => {
      index = (index % album.count) + 1;
      img.src = `${album.prefix}${String(index).padStart(3, "0")}.jpg`;
      img.style.opacity = 1;
    }, 300); // fade duration
  };

  // Stagger the start based on index of the card
  // e.g., first image 0ms, second image 1500ms, third 3000ms
  const staggerDelay = i * 1500; // adjust for desired stagger

  // Slower rotation: e.g., 5 seconds per image
  const intervalTime = 5000;

  setTimeout(() => {
    setInterval(updateImage, intervalTime);
  }, staggerDelay);
});

document.addEventListener("DOMContentLoaded", function () {
  fetch("footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    })
    .catch(error => console.error("Footer failed to load:", error));
});
