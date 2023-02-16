import displayDOM from './displayDOM.js';
import getScore from './getScores.js';

const postScore = async (name, score) => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/HX42ejstWWGWDKZzkjqD/scores/', {
    method: 'POST',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify({ user: name, score }),
  });
  const data = await response.json();
  await getScore();
  await displayDOM();
  return data;
};

export default postScore;