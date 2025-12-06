// Contact form basic feedback
const contactForm = document.querySelector('#contactForm');
const formStatus = document.querySelector('#formStatus');

contactForm?.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(contactForm);
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  if (!name || !email || !message) {
    formStatus.textContent = 'Please fill out all fields.';
    return;
  }

  formStatus.textContent = 'Sending...';

  setTimeout(() => {
    formStatus.textContent = 'Thanks! Your message has been sent.';
    contactForm.reset();
  }, 800);
});

// Footer year
document.querySelector('#year').textContent = new Date().getFullYear();


