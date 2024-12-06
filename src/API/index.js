import axios from "axios"


const key = 'e9e660ba-d18f-428b-9fe3-d9a2b6111207'
const instance = axios.create({
    baseURL: 'https://kinopoiskapiunofficial.tech/api/',
    headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': key,
    }
})


export const kinoAPI = {
    getAllFilms() {
        return instance.get(`v2.2/films`)
    },
    getMovieByName(name) {
        return instance.get(`v2.1/films/search-by-keyword?keyword=${name}`)
    },
    getMovieById(id) {
        return instance.get(`v2.2/films/${id}`)
    },
    getPrimier(year, month) {
        return instance.get(`v2.2/films/premieres?year=${year}&month=${month}`)
    },
}