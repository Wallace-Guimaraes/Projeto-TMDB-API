import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
    language: "pt-BR",
  },
});

export const getPopularMovies = (page = 1) => {
  return api.get("/movie/popular", {
    params: { page },
  });
};
