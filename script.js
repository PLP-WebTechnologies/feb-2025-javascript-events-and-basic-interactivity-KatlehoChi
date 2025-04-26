// Event Handling
const header = document.getElementById('header');
const colorButton = document.getElementById('colorButton');
const slideshowImage = document.getElementById('slideshowImage');
let slideshowIndex = 0;

header.addEventListener('click', () => {
  alert('Welcome to the Justice League Recruitment Portal!');
});

colorButton.addEventListener('click', () => {
  document.body.style.backgroundColor = '#2c2c2c';
});

header.addEventListener('dblclick', () => {
  alert('Secret double-click action unlocked!');
});

document.body.addEventListener('keypress', (event) => {
  console.log(`Key pressed: ${event.key}`);
});

// Image Slideshow Logic
setInterval(() => {
  slideshowIndex = (slideshowIndex + 1) % images.length;
  slideshowImage.src = images[slideshowIndex];
}, 3000); // Change image every 3 seconds

// Form Validation
const form = document.getElementById('heroForm');
const heroNameInput = document.getElementById('heroName');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const formError = document.getElementById('formError');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const heroName = heroNameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value;

  if (!heroName || !email || !password) {
    formError.textContent = 'All fields are required.';
    return;
  }
  if (!/\S+@\S+\.\S+/.test(email)) {
    formError.textContent = 'Please enter a valid email.';
    return;
  }
  if (password.length < 8) {
    formError.textContent = 'Password must be at least 8 characters long.';
    return;
  }

  formError.textContent = '';
  alert(`Welcome, ${heroName}, to the Justice League!`);
});

// Real-Time Feedback
passwordInput.addEventListener('input', () => {
  const passwordLength = passwordInput.value.length;
  formError.textContent = passwordLength < 8 ? 'Password is too short.' : '';
});
