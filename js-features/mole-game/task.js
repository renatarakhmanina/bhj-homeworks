const deadMole = document.getElementById('dead');
const lostMole = document.getElementById('lost');
let winCount = 0;
let loseCount = 0;

function clearStat() {
  winCount = 0;
  deadMole.textContent = winCount;
  loseCount = 0;
  lostMole.textContent = loseCount;
}
getHole = index => document.getElementById(`hole${index}`);
for (index = 1; index <= 9; index++) {
  let hole = getHole(index);
  hole.addEventListener('click', function () {
    if (hole.classList.contains('hole_has-mole')) {
      winCount++;
      deadMole.textContent = winCount;
    } else {
      loseCount++;
      lostMole.textContent = loseCount;
    }
    if (winCount === 10) {
      alert('Победа!');
      clearStat();
      return;
    }
    if (loseCount === 5) {
      alert('Конец игры');
      clearStat();
      return;
    }
  });
}

