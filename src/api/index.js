import axios from "../axios-movies";
const API_KEY = "0cb3caadec606d095d41c40ce27ab85e";

const params = `?api_key=${API_KEY}&language=en-US`;

export const fetchMoviesAPI = (url) => {
  return axios.get(`${url}${params}`);
};

export const fetchSearchMoviesAPI = (input) => {
  return axios.get(`/search/movie${params}&query=${input}`);
};
