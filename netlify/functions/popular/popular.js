// for a full working demo of Netlify Identity + Functions, see https://netlify-gotrue-in-react.netlify.com/
import fetch from "node-fetch";

export const handler = async () => {
  const API_KEY = process.env.API_KEY;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: API_KEY
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
