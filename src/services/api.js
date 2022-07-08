
import axios from "axios";
//Base da URL: https://api.themoviedb.org/3/
//URL DA API: /movie/now_playing?api_key=97b9e318644163369da2fc5d3419e6a7

const api = axios.create({
    baseURL:'https://api.themoviedb.org/3/'
});

export default api;