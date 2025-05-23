import { api_key } from "@/constants"
import { apiRequest } from "./axios"

const base_url = 'https://api.themoviedb.org/3'

const trendingMovie = `${base_url}/trending/movie/day?api_key=${api_key}`
const topRatedMovie = `${base_url}/movie/top_rated?api_key=${api_key}`
const popularMovie = `${base_url}/movie/popular?api_key=${api_key}`

export const fetchTopRatedMovie = () => {
    return apiRequest(topRatedMovie)
}
export const fetchTrendingMovie = () => {
    return apiRequest(trendingMovie)
}

export const fetchPopularMovie = () => {
    return apiRequest(popularMovie)
}

export const image500 = (posterPath: string) => {
    return posterPath ? `https://image.tmdb.org/t/p/w500${posterPath}` : null
}
export const image342 = (posterPath: string) => {
    return posterPath ? `https://image.tmdb.org/t/p/w342${posterPath}` : null
}
export const image185 = (posterPath: string) => {
    return posterPath ? `https://image.tmdb.org/t/p/w185${posterPath}` : null
}