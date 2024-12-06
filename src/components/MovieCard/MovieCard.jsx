import React from 'react';
import s from './MovieCard.module.css'
import { Link } from 'react-router-dom';

const MovieCard = ({ el }) => {

    return (
        <div className={s.cardWrap}>
            <Link to={`/detail/${el.kinopoiskId || el.filmId}`} className={s.card}>
                <img src={el.posterUrl} alt={el.nameOriginal || el.nameEn ? `Movie title: ${el.nameOriginal || el.nameEn}` : `Movie title: ${el.nameRu || el.nameRu}`} />
                <h2 className={s.h2}>{el.nameOriginal || el.nameEn ? `Movie title: ${el.nameOriginal || el.nameEn}` : `Movie title: ${el.nameRu || el.nameRu}`}</h2>
            </Link>
        </div>
    );
};

export default MovieCard;