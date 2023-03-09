import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";

const client = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_MOVIEDB_ACCESS_TOKEN}`,
    "Content-Type": "application/json",
  },
});

export async function getAllMovies() {
  try {
    const { data } = await client.get("discover/movie?sort_by=popularity.desc");
    return data;
  } catch (e) {
    console.error(e);
  }
}

export async function getMovieDetail(id) {
  try {
    const { data } = await client.get(`/movie/${id}`);
    return data;
  } catch (e) {
    console.error(e);
  }
}
