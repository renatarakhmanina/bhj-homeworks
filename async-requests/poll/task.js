const pollTitle = document.querySelector('.poll__title');
const pollAnswers = document.querySelector('.poll__answers');
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    const obj = JSON.parse(xhr.responseText);
    pollTitle.textContent = obj.data.title;
    pollAnswers.innerHTML = '';
    obj.data.answers.forEach(answer => {
      pollAnswers.insertAdjacentHTML('beforeend', `<button class="poll__answer">${answer}</button><span> </span>`);
    });
    const buttons = pollAnswers.querySelectorAll('.poll__answer');
    buttons.forEach(button => button.addEventListener('click', () => {
      alert('Спасибо, ваш голос засчитан!');
      const answerIndex = button.getAttribute('data-answer-index');
      vote(obj.id, answerIndex);
    }));
  }
});

function vote(pollId, answerIndex) {
  const voteXHR = new XMLHttpRequest();
  voteXHR.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
  voteXHR.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  voteXHR.addEventListener('load', () => {
    const result = JSON.parse(voteXHR.responseText);
    displayResults(result.stat);
  });
  voteXHR.send(`vote=${pollId}&answer=${answerIndex}`);
}

function displayResults(results) {
  pollAnswers.innerHTML = '';
  const totalVotes = results.reduce((total, result) => total + result.votes, 0);
  results.forEach(result => {
    const percent = (result.votes / totalVotes) * 100;
    pollAnswers.insertAdjacentHTML('beforeend', `<div>${result.answer}: ${percent.toFixed(2)}%</div>`);
  });
}
xhr.send();

