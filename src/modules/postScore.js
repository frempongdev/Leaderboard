import displayDOM from './displayDOM.js';
import getScore from './getScores.js';

const postScore = async (name, score) => {
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/HX42ejstWWGWDKZzkjqD/scores/', {
    method: 'POST',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify({ user: name, score }),
  })
    .then((response) => response.json())
    .then(() => getScore())
    .then(() => displayDOM());

  return getScore();
};

export default postScore;