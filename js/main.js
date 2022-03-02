// array of project objects

const project1 = {
  title: 'Project One',
  id: 1,
  imageSrc:
    'https://res.cloudinary.com/optprime/image/upload/v1588664010/christopher-gower-m_HRfLhgABo-unsplash_wrglqj.jpg',
  technologies: ['html', 'css', 'Ruby on Rails'],
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s",
  liveLink: 'https://benmuiruri.github.io/my-portfolio/',
  githubLink: 'https://github.com/Benmuiruri/my-portfolio',
};
const project2 = {
  title: 'Project Two',
  id: 2,
  imageSrc:
    'https://res.cloudinary.com/optprime/image/upload/v1588664010/christopher-gower-m_HRfLhgABo-unsplash_wrglqj.jpg',
  technologies: ['html', 'css', 'Ruby on Rails'],
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s",
  liveLink: 'https://benmuiruri.github.io/my-portfolio/',
  githubLink: 'https://github.com/Benmuiruri/my-portfolio',
};
const project3 = {
  title: 'Project Three',
  id: 3,
  imageSrc:
    'https://res.cloudinary.com/optprime/image/upload/v1588664010/christopher-gower-m_HRfLhgABo-unsplash_wrglqj.jpg',
  technologies: ['html', 'css', 'Ruby on Rails'],
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s",
  liveLink: 'https://benmuiruri.github.io/my-portfolio/',
  githubLink: 'https://github.com/Benmuiruri/my-portfolio',
};
const project4 = {
  title: 'Project Four',
  id: 4,
  imageSrc:
    'https://res.cloudinary.com/optprime/image/upload/v1588664010/christopher-gower-m_HRfLhgABo-unsplash_wrglqj.jpg',
  technologies: ['html', 'css', 'Ruby on Rails'],
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s",
  liveLink: 'https://benmuiruri.github.io/my-portfolio/',
  githubLink: 'https://github.com/Benmuiruri/my-portfolio',
};
const project5 = {
  title: 'Project Five',
  id: 5,
  imageSrc:
    'https://res.cloudinary.com/optprime/image/upload/v1588664010/christopher-gower-m_HRfLhgABo-unsplash_wrglqj.jpg',
  technologies: ['html', 'css', 'Ruby on Rails'],
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s",
  liveLink: 'https://benmuiruri.github.io/my-portfolio/',
  githubLink: 'https://github.com/Benmuiruri/my-portfolio',
};
const project6 = {
  title: 'Project Six',
  id: 6,
  imageSrc:
    'https://res.cloudinary.com/optprime/image/upload/v1588664010/christopher-gower-m_HRfLhgABo-unsplash_wrglqj.jpg',
  technologies: ['html', 'css', 'Ruby on Rails'],
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s",
  liveLink: 'https://benmuiruri.github.io/my-portfolio/',
  githubLink: 'https://github.com/Benmuiruri/my-portfolio',
};
const projects = [project1, project2, project3, project4, project5, project6];

// Target open and close triggers in html

const openEls = document.querySelectorAll('[data-open]');
const closeEls = document.querySelectorAll('[data-close]');
const isVisible = 'is-visible';
const navLinks = document.querySelectorAll('.web-header-link');
// const closeProjectModal = document.querySelector('#close-project-modal');

// Create work detail html elements
function modal(number) {
  // Create article modal
  const article = document.createElement('article');
  article.id = `project${projects[number].id}`;
  article.className = 'modal';
  // Create div inside article modal
  const insideDiv = document.createElement('div');
  insideDiv.className = 'modal-dialog';
  article.appendChild(insideDiv);
  // Create image inside div
  const projectImg = document.createElement('img');
  const imageDiv = document.createElement('div');
  imageDiv.className = 'work-image';
  projectImg.src = `${projects[number].imageSrc}`;
  insideDiv.appendChild(imageDiv);
  imageDiv.appendChild(projectImg);
  // Create x to close modal
  const closeModalBtn = document.createElement('button');
  closeModalBtn.innerHTML = 'X';
  closeModalBtn.id = 'close-project-modal';
  imageDiv.appendChild(closeModalBtn);
  // Create h1 inside div
  const headerDiv = document.createElement('div');
  headerDiv.className = 'work-title';
  const projectTitle = document.createElement('h3');
  projectTitle.textContent = `My title is ${projects[number].title}`;
  headerDiv.appendChild(projectTitle);
  insideDiv.appendChild(headerDiv);
  // Create div to hold tags
  const technologyTags = document.createElement('div');
  technologyTags.className = 'work-tags';
  insideDiv.appendChild(technologyTags);
  // Create ul for tags inside div
  const techologyList = document.createElement('ul');
  technologyTags.appendChild(techologyList);
  // Creat list items that go inside ul
  projects[number].technologies.forEach((listItem) => {
    const li = document.createElement('li');
    li.className = 'social';
    const a = document.createElement('a');
    const link = document.createTextNode(`${listItem}`);
    a.appendChild(link);
    a.href = '#';
    li.appendChild(a);
    techologyList.appendChild(li);
  });
  // Create paragraph div
  const projectTextDiv = document.createElement('div');
  const projectText = document.createTextNode(
    `${projects[number].description}`
  );
  projectTextDiv.appendChild(projectText);
  insideDiv.appendChild(projectTextDiv);
  // Create div for buttons
  const projectButtons = document.createElement('div');
  const liveButton = document.createElement('button');
  const sourceButton = document.createElement('button');
  liveButton.className = 'btn';
  sourceButton.className = 'btn';
  liveButton.innerHTML = 'See Live';
  sourceButton.innerHTML = 'See Source';
  const liveIcon = document.createElement('i');
  liveIcon.className = 'fa-solid fa-arrow-up-right-from-square';
  const gitIcon = document.createElement('i');
  gitIcon.className = 'fa-brands fa-github';
  liveButton.append(liveIcon);
  sourceButton.append(gitIcon);
  projectButtons.appendChild(liveButton);
  projectButtons.appendChild(sourceButton);
  insideDiv.appendChild(projectButtons);
  // Add article to body
  document.body.appendChild(article);
}

// Open modal
for (const el of openEls) {
  el.addEventListener('click', function () {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
    document.body.style.overflow = 'hidden';
  });
}

// Close modal
for (const el of closeEls) {
  el.addEventListener('click', function () {
    this.parentElement.parentElement.classList.remove(isVisible);
    document.body.style.overflow = 'auto';
  });
}
// Close project modal
// closeProjectModal.addEventListener('click', function () {
//   this.parentElement.classList.remove(isVisible);
//   document.body.style.overflow = 'auto';
// });
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
