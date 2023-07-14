import fetch from "node-fetch";

export const handler = async (event) => {
  const id = JSON.parse(event.body);

  const API_KEY = process.env.API_KEY;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`
    }
  };

  const headers = {
    "Access-Control-Allow-Origin": "*", // Set the appropriate origin here
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
    "Access-Control-Allow-Headers": "Content-Type"
  };

  const TMDB_API = `https://api.themoviedb.org/3/movie/${id}?language=en-US&append_to_response=videos`;

  const response = await fetch(TMDB_API, options);
  console.log("API Response: ", response);
  const data = await response.json();

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify(data)
  };
};
