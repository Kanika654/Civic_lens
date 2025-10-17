// Smooth scroll for navigation links
const links = document.querySelectorAll('header nav ul li a');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Simple contact form alert (frontend only)
const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you! Your message has been sent.');
  form.reset();
});

// Get Started button scroll to features
const getStartedBtn = document.getElementById('getStarted');
getStartedBtn.addEventListener('click', () => {
  document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
});
