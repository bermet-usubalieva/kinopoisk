import React, { useEffect } from 'react';
import s from './Home.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getAllMovies } from '../../redux/reducers/homeReducer';
import MovieCard from '../../components/MovieCard/MovieCard';
import SearchForm from '../../components/SearchForm/SearchForm';
import Premier from '../../components/Premier/Premier';

const Home = () => {
    const { movie } = useSelector(state => state.home)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllMovies())
    }, [dispatch])

    const handleHomeClick = () => {
        dispatch(getAllMovies());
    };

    return (
        <div className={s.content}>
            <button className={s.btn} onClick={handleHomeClick}>All films</button>
            <SearchForm />
            <Premier />
            <div className={s.wrap}>
                {
                    movie.length > 0 ?
                        movie.map(el => <MovieCard
                            el={el}
                            key={el.kinopoiskId || el.filmId} />)
                        :
                        <h1>Not Found!</h1>
                }
            </div>
        </div>
    );
};

export default Home;