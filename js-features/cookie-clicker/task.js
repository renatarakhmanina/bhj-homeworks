const clicker = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');
function countClick() {
  clicker.textContent++;
  
  let cookieWidth = parseInt(cookie.getAttribute('width'));
  if (cookieWidth === 200) {
    cookie.setAttribute('width', '400');
  } else {
    cookie.setAttribute('width', '200');
  }
}

cookie.onclick = countClick;