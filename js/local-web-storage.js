const content = JSON.parse(window.localStorage.getItem('storage'));
function check() {
  if (localStorage.getItem('storage')) {
    form.elements.fullName.value = content.fullName;
    form.elements.email.value = content.email;
    form.elements.message.value = content.message;
  }
}
window.onload = check;
