import getScore from './getScores.js';

const displayDOM = async () => {
  let output = '';
  const scoreList = document.querySelector('.score-list');
  const scores = await getScore();
  scores.result.forEach((score, index) => {
    output += `
      <li class="score-line">
      <span id="username">${scores.result[index].user}</span>  
      <span id="userscore">${scores.result[index].score} wins </span>
      </li>
      `;
  });
  scoreList.innerHTML = output;
};

export default displayDOM;