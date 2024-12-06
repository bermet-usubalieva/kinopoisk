
import { type } from "@testing-library/user-event/dist/type"
import { kinoAPI } from "../../API"



const initialState = {
    movie: []
}
const SET_MOVIES = 'SET_MOVIES'
const SET_MOVIE_BY_NAME = 'SET_MOVIE_BY_NAME'
const SET_PREMIER = 'SET_PREMIER'


const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOVIES:
            return {
                ...state,
                movie: action.payload
            }
        case SET_MOVIE_BY_NAME:
            return {
                ...state,
                movie: action.payload
            }
        default:
            return state
    }
}
const setMoviesAC = (movie) => ({ type: SET_MOVIES, payload: movie })
const setFilmByName = (movie) => ({ type: SET_MOVIE_BY_NAME, payload: movie })
const setPrimierMovie = (movie) => ({ type: SET_PREMIER, payload: movie })


export const getAllMovies = () => (dispatch) => {
    kinoAPI.getAllFilms()
        .then(res => dispatch(setMoviesAC(res.data.items)))
}

export const getByName = (name) => (dispatch) => {
    kinoAPI.getMovieByName(name)
        .then(res => dispatch(setFilmByName(res.data.films)))
}

export const getByPremier = (year, month) => (dispatch) => {
    kinoAPI.getPrimier(year, month)
        .then(res => dispatch(setMoviesAC(res.data.items)))
}

export default homeReducer