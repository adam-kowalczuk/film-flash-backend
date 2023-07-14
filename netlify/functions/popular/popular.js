import fetch from "node-fetch";

export const handler = async () => {
  const API_KEY = process.env.API_KEY;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`
    }
  };

  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE"
  };

  const TMDB_API =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

  const response = await fetch(TMDB_API, options);
  console.log("Response: ", response);
  data = await response.json();

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify(data)
  };
};
