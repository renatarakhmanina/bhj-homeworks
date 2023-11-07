const timer = document.getElementById('timer');
let timeLeft = parseInt(timer.textContent);

function getFormattedTime() {
  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  timer.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

getFormattedTime();

const countDown = function() {
  timeLeft--;
  if (timeLeft === 0) {
    alert('Вы победили в конкурсе!');
    window.location.assign('https://developer.mozilla.org/en-US/docs/Web/API/Location/assign');
    timeLeft = 0;
    clearInterval(intervalID);
  }
  getFormattedTime();
}

const intervalID = setInterval(countDown, 1000);