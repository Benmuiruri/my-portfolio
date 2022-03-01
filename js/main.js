function activatePage() {
  const openModal = document.querySelector('#mobile-menu');
  const closeModal = document.querySelector('#close-menu');
  const isVisible = 'is-visible';
  const navLinks = document.querySelectorAll('.web-header-link');

  openModal.addEventListener('click', function () {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
    document.body.style.overflow = 'hidden';
  });

  closeModal.addEventListener('click', function () {
    this.parentElement.parentElement.classList.remove(isVisible);
  });

  document.addEventListener('click', (e) => {
    if (e.target === document.querySelector('.modal.is-visible')) {
      document.querySelector('.modal.is-visible').classList.remove(isVisible);
    }
  });

  document.addEventListener('keyup', (e) => {
    // if we press the ESC
    if (e.key === 'Escape' && document.querySelector('.modal.is-visible')) {
      document.querySelector('.modal.is-visible').classList.remove(isVisible);
    }
  });

  navLinks.forEach((elem) => {
    elem.addEventListener('click', () => {
      document.querySelector('.modal.is-visible').classList.remove(isVisible);
    });
  });
}

activatePage();
