const getScore = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/HX42ejstWWGWDKZzkjqD/scores/');
  const data = await response.json();
  return data;
};

export default getScore;
