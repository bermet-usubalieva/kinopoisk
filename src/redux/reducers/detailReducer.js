import { kinoAPI } from "../../API"


const initialState = {
    movie: {},
}
const SET_MOVIE = 'SET_MOVIE'

const detailReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOVIE:
            return {
                ...state,
                movie: action.payload
            }
        default:
            return state
    }
}
const setMoviesAC = (movie) => ({ type: SET_MOVIE, payload: movie })

export const getById = (id) => (dispatch) => {
    kinoAPI.getMovieById(id)
        .then(res => dispatch(setMoviesAC(res.data)))
}

export default detailReducer

