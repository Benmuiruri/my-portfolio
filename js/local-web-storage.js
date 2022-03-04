const content = JSON.parse(window.localStorage.getItem('storage'));
function check() {
  if (localStorage.getItem('storage')) {
    form.elements.fullName.value = content.fullName;
    form.elements.email.value = content.email;
    form.elements.message.value = content.message;
  }
}
window.onload = check;

function populateStorage() {
  const fullName = form.elements.fullName.value;
  const email = form.elements.email.value;
  const message = form.elements.message.value;
  const storage = {
    fullName,
    email,
    message,
  };
  window.localStorage.setItem('storage', JSON.stringify(storage));
}

form.addEventListener('change', populateStorage);
