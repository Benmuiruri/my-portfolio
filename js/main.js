// get elements from html

const openEls = document.querySelectorAll('[data-open]');
const closeEls = document.querySelectorAll('[data-close]');
const isVisible = 'is-visible';
const navLinks = document.querySelectorAll('.web-header-link');

const div = document.createElement('div');
div.id = 'projectOne';
div.className = 'modal';
const insideDiv = document.createElement('div');
insideDiv.className = 'modal-dialog';
div.appendChild(insideDiv);
const h2 = document.createElement('h2');
h2.textContent = 'Add h2 element to the div';
insideDiv.appendChild(h2);
document.body.appendChild(div);

for (const el of openEls) {
  el.addEventListener('click', function () {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
    document.body.style.overflow = 'hidden';
  });
}

for (const el of closeEls) {
  el.addEventListener('click', function () {
    this.parentElement.parentElement.classList.remove(isVisible);
    document.body.style.overflow = 'auto';
  });
}
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
