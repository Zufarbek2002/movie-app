import { api_key } from "@/constants"
import { apiRequest } from "./axios"

const base_url = 'https://api.themoviedb.org/3'

const trendingMovie = `${base_url}/trending/movie/day?api_key=${api_key}`
const topRatedMovie = `${base_url}/movie/top_rated?api_key=${api_key}`
const popularMovie = `${base_url}/movie/popular?api_key=${api_key}`

const movieDetail = (id: number) => `${base_url}/movie/${id}?api_key=${api_key}`
const movieCredits = (id: number) => `${base_url}/movie/${id}/credits?api_key=${api_key}`
const similarMovie = (id: number) => `${base_url}/movie/${id}/similar?api_key=${api_key}`

const personDetail = (id: number) => `${base_url}/person/${id}?api_key=${api_key}`
const personMovies = (id: number) => `${base_url}/person/${id}/movie_credits?api_key=${api_key}`

export const fetchTopRatedMovie = () => {
    return apiRequest(topRatedMovie)
}
export const fetchTrendingMovie = () => {
    return apiRequest(trendingMovie)
}

export const fetchPopularMovie = () => {
    return apiRequest(popularMovie)
}

export const fetchMovieDetail = (id: number) => {
    return apiRequest(movieDetail(id))
}
export const fetchMovieCredits = (id: number) => {
    return apiRequest(movieCredits(id))
}
export const fetchSimilarMovie = (id: number) => {
    return apiRequest(similarMovie(id))
}

export const fetchPersonDetail = (id: number) => {
    return apiRequest(personDetail(id))
}
export const fetchPersonMovies = (id: number) => {
    return apiRequest(personMovies(id))
}

export const image500 = (posterPath?: string) => {
    return posterPath ? `https://image.tmdb.org/t/p/w500${posterPath}` : null
}
export const image342 = (posterPath?: string) => {
    return posterPath ? `https://image.tmdb.org/t/p/w342${posterPath}` : null
}
export const image185 = (posterPath?: string) => {
    return posterPath ? `https://image.tmdb.org/t/p/w185${posterPath}` : null
}