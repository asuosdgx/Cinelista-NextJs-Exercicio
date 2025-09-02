import axios from "axios"

const tmdbAPI = axios.create({
    baseURL: process.env.TMDB_API_URL,
    headers: {
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    "Content-Type": "application/json;charset=utf-8",
    },
});

export default tmdbAPI;
