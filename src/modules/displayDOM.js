import getScore from './getScores.js';

const displayDOM = async () => {
  let output = '';
  const scoreList = document.querySelector('.score-list');
  const scores = await getScore();
  const sortedScores = scores.result.sort((a, b) => b.score - a.score);
  sortedScores.forEach((score) => {
    output += `
      <li class="score-line">
      <span id="username">${score.user}</span>  
      <span id="userscore">${score.score} wins </span>
      </li>
      `;
  });
  scoreList.innerHTML = output;
};

export default displayDOM;
