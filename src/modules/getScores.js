const getScore = () => fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/HX42ejstWWGWDKZzkjqD/scores/')
  .then((response) => response.json())
  .then((data) => data);

export default getScore;