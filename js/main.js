// array of project objects

const project1 = {
  title: 'Keeping track of hundreds of components',
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
const openElems = Array.from(openEls);
const closeElems = Array.from(closeEls);
const isVisible = 'is-visible';
const navLinks = document.querySelectorAll('.web-header-link');

// Create main page work section html elements

// Create work detail modal html elements
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
  closeModalBtn.className = 'close-proj-modal';
  imageDiv.appendChild(closeModalBtn);
  // Create h1 inside div
  const headerDiv = document.createElement('div');
  headerDiv.className = 'project-title';
  const projectTitle = document.createElement('h3');
  projectTitle.textContent = `${projects[number].title}`;
  headerDiv.appendChild(projectTitle);
  // Create button div for desktop version
  // Create div for buttons
  const desktopProjectButtons = document.createElement('div');
  desktopProjectButtons.className = 'desktop-project-btn';
  // Create live and source buttons
  const deskLiveButton = document.createElement('button');
  const deskSourceButton = document.createElement('button');
  deskLiveButton.className = 'btn desk-live-btn';
  deskSourceButton.className = 'btn desk-source-btn';
  // Create a tag inside buttons
  const deskLiveLink = document.createElement('a');
  const deskSourceLink = document.createElement('a');
  const deskLinkText = document.createTextNode('See Live');
  const deskSourceText = document.createTextNode('See Source');
  deskLiveLink.appendChild(deskLinkText);
  deskSourceLink.appendChild(deskSourceText);
  deskLiveLink.href = `${projects[number].liveLink}`;
  deskSourceLink.href = `${projects[number].githubLink}`;
  deskLiveLink.setAttribute('target', '_blank');
  deskSourceLink.setAttribute('target', '_blank');
  deskLiveButton.append(deskLiveLink);
  deskSourceButton.append(deskSourceLink);
  // Create font-awesome icon inside button
  const deskLiveIcon = document.createElement('i');
  deskLiveIcon.className = 'fa-solid fa-arrow-up-right-from-square project-icon';
  const deskGitIcon = document.createElement('i');
  deskGitIcon.className = 'fa-brands fa-github project-icon';
  deskLiveButton.append(deskLiveIcon);
  deskSourceButton.append(deskGitIcon);
  desktopProjectButtons.appendChild(deskLiveButton);
  desktopProjectButtons.appendChild(deskSourceButton);
  headerDiv.appendChild(desktopProjectButtons);
  insideDiv.appendChild(headerDiv);
  // Create div to hold tags
  const technologyTags = document.createElement('div');
  technologyTags.className = 'work-tags modal-tags';
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
  const projectText = document.createTextNode(`${projects[number].description}`);
  projectTextDiv.className = 'project-text';
  projectTextDiv.appendChild(projectText);
  insideDiv.appendChild(projectTextDiv);
  // Create div for buttons
  const projectButtons = document.createElement('div');
  projectButtons.className = 'project-btn';
  // Create live and source buttons
  const liveButton = document.createElement('button');
  const sourceButton = document.createElement('button');
  liveButton.className = 'btn live-btn';
  sourceButton.className = 'btn source-btn';
  // Create a tag inside buttons
  const liveLink = document.createElement('a');
  const sourceLink = document.createElement('a');
  const linkText = document.createTextNode('See Live');
  const sourceText = document.createTextNode('See Source');
  liveLink.appendChild(linkText);
  sourceLink.appendChild(sourceText);
  liveLink.href = `${projects[number].liveLink}`;
  sourceLink.href = `${projects[number].githubLink}`;
  liveLink.setAttribute('target', '_blank');
  sourceLink.setAttribute('target', '_blank');
  liveButton.append(liveLink);
  sourceButton.append(sourceLink);
  // Create font-awesome icon inside button
  const liveIcon = document.createElement('i');
  liveIcon.className = 'fa-solid fa-arrow-up-right-from-square project-icon';
  const gitIcon = document.createElement('i');
  gitIcon.className = 'fa-brands fa-github project-icon';
  liveButton.append(liveIcon);
  sourceButton.append(gitIcon);
  projectButtons.appendChild(liveButton);
  projectButtons.appendChild(sourceButton);
  insideDiv.appendChild(projectButtons);
  // Add article to body
  document.body.appendChild(article);
  // Add close trigger to x button on project detail
  closeModalBtn.addEventListener('click', () => {
    if (document.querySelector('.modal.is-visible')) {
      document
        .querySelector('.modal.is-visible')
        .classList.remove('is-visible');
      document.body.style.overflow = 'auto';
    }
  });
}

openElems.forEach((el) => {
  el.addEventListener('click', function () {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
    document.body.style.overflow = 'hidden';
  });
});
// Close modal
closeElems.forEach((el) => {
  el.addEventListener('click', function () {
    this.parentElement.parentElement.classList.remove(isVisible);
    document.body.style.overflow = 'auto';
  });
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

modal();
