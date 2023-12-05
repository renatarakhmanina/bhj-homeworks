const modal = document.getElementById('subscribe-modal');
const closeBtb = modal.querySelector('.modal__close');
modal.classList.add('modal_active');

const getCookie = (name) => {
  const value = "; " + document.cookie;
  let parts = value.split("; " + name + "=");
  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  }
}
if (getCookie('modalIsClosed')) {
  modal.classList.remove('modal_active');
}

closeBtb.addEventListener('click', () => {
  modal.classList.remove('modal_active');
  document.cookie = 'modalIsClosed=' + 'true';
});


// Удаление куки тест
// document.cookie = 'modalIsClosed=; Expires=Thu, 01 Jan 1970 00:00:00 GMT';