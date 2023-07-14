// for a full working demo of Netlify Identity + Functions, see https://netlify-gotrue-in-react.netlify.com/
import fetch from "node-fetch";

export const handler = async (event) => {
  const { movieId } = event.queryStringParameters;

  const API_KEY = process.env.API_KEY;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE"
    }
  };

  const headers = {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE"
  };

  const TMDB_API = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&append_to_response=videos`;

  const response = await fetch(TMDB_API, options);
  console.log("Response: ", response);
  data = await response.json();

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify(data)
  };
};
