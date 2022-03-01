// get elements from html

const openModal = document.querySelector('#mobile-menu');
const closeModal = document.querySelector('#close-menu');
const isVisible = 'is-visible';
const navLinks = document.querySelectorAll('.web-header-link');

// add event listener to the hamburger menu, add make modal visible on page and disable scroll
openModal.addEventListener('click', function () {
  const modalId = this.dataset.open;
  document.getElementById(modalId).classList.add(isVisible);
  document.body.style.overflow = 'hidden';
});

// add event listener on x button to close modal and enable scroll
closeModal.addEventListener('click', function () {
  this.parentElement.parentElement.classList.remove(isVisible);
  document.body.style.overflow = 'auto';
});

// add event listener on click outside modal to close modal and enable scroll
document.addEventListener('click', (e) => {
  if (e.target === document.querySelector('.modal.is-visible')) {
    document.querySelector('.modal.is-visible').classList.remove(isVisible);
    document.body.style.overflow = 'auto';
  }
});

// add event listener on esc key to close modal and enable scroll
document.addEventListener('keyup', (e) => {
  if (e.key === 'Escape' && document.querySelector('.modal.is-visible')) {
    document.querySelector('.modal.is-visible').classList.remove(isVisible);
    document.body.style.overflow = 'auto';
  }
});

// add event listener on a tags to close modal, enable scroll, and go to section ID
navLinks.forEach((elem) => {
  elem.addEventListener('click', () => {
    document.querySelector('.modal.is-visible').classList.remove(isVisible);
    document.body.style.overflow = 'auto';
  });
});
