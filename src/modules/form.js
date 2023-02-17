import displayDOM from './displayDOM.js';
import postScore from './postScore.js';

const formSubmit = () => {
  const form = document.querySelector('.score-form');
  const nameInput = document.getElementById('name');
  const scoreInput = document.getElementById('score');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = nameInput.value;
    const score = scoreInput.value;
    postScore(name, score);
    form.reset();
    displayDOM();
  });
};

export default formSubmit;