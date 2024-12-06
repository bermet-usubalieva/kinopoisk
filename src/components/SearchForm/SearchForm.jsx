import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getByName } from '../../redux/reducers/homeReducer';
import s from './SearchForm.module.css'

const SearchForm = () => {
    const [film, setFilm] = useState('')
    const dispatch = useDispatch()

    const handleSearch = (e) => {
        e.preventDefault()
        if (film.trim().length) {
            dispatch(getByName(film))
            setFilm('')
        }
    }

    return (
        <form className={s.form} onSubmit={handleSearch}>
            <input className={s.inp} type="text" value={film}
                onChange={(e) => setFilm(e.target.value)} placeholder='Film name' />
            <button>Search film</button>
        </form>
    );
};

export default SearchForm;