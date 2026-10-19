import axios from "axios";



// base URL : https://api.themoviedb.org/3

//https://api.themoviedb.org/3/movie/now_playing?api_key=ae8e6d15c080d287f9c58f4e6e643eed&language=pt-BR

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;