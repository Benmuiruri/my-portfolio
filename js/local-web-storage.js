const contactForm = document.querySelector('#signup');
const content = JSON.parse(window.localStorage.getItem('storage'));
function check() {
  if (localStorage.getItem('storage')) {
    contactForm.elements.fullName.value = content.fullName;
    contactForm.elements.email.value = content.email;
    contactForm.elements.message.value = content.message;
  }
}
window.onload = check;

function populateStorage() {
  const fullName = contactForm.elements.fullName.value;
  const email = contactForm.elements.email.value;
  const message = contactForm.elements.message.value;
  const storage = {
    fullName,
    email,
    message,
  };
  window.localStorage.setItem('storage', JSON.stringify(storage));
}

contactForm.addEventListener('change', populateStorage);
