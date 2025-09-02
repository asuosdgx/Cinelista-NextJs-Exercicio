import { Filme } from "@/types/types";
import tmdbAPI from "./axios";

type Data= {
    results: Filme[]
}

export const getPopularMovies = async () => {
    const response = await tmdbAPI.get<Data>("/trending/movie/week?language=pt-BR");
    return response.data.results;
};
export const getMovieDetails = async (id: number) : Promise<Filme | undefined> => {
    const response = await tmdbAPI.get<Filme>(`/movie/${id}?language=pt-BR`);
    return response.data;
};
export const getNowPlaying = async () => {
    const response = await tmdbAPI.get<Data>("/movie/now_playing?language=pt-BR");
    return response.data.results;
};
export const getNowPop = async () => {
    const response = await tmdbAPI.get<Data>("/movie/popular?language=pt-BR");
    return response.data.results;
};
export const getTop = async () => {
    const response = await tmdbAPI.get<Data>("/movie/top_rated?language=pt-BR");
    return response.data.results;
};
