// for a full working demo of Netlify Identity + Functions, see https://netlify-gotrue-in-react.netlify.com/
const fetch = require("node-fetch");

export const handler = async () => {
  const API_KEY = process.env.API_KEY;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: API_KEY,
      "Access-Control-Allow-Origin": "*", // Set the appropriate origin here
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization" // Add any additional headers required
    }
  };

  const TMDB_API =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

  const response = await fetch(TMDB_API, options);
  console.log(response);
  data = await response.json();

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ data })
  };
};
