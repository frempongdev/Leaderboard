import getScore from './getScores.js';

const refresh = () => {
  const refBtn = document.querySelector('.refresh-scores');
  refBtn.addEventListener('click', () => {
    getScore();
  });
};

export default refresh;