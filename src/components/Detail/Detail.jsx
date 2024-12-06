import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getById } from '../../redux/reducers/detailReducer';
import { useParams } from 'react-router-dom';
import s from './Detail.module.css';

const Detail = () => {
    const { id } = useParams();
    const { movie } = useSelector((state) => state.detail);
    const dispatch = useDispatch();

    useEffect(() => {
        if (id) {
            dispatch(getById(id));
        }
    }, [id, dispatch]);

    return (
        <div className={s.card}>
            {movie && (
                <>
                    <img
                        src={movie?.posterUrl}
                        alt={movie?.nameOriginal || movie?.nameRu || 'Movie poster'}
                    />
                    <h2>
                        {movie?.nameOriginal
                            ? `Movie title: ${movie?.nameOriginal}`
                            : `Movie title: ${movie?.nameRu}`}
                    </h2>
                </>
            )}
        </div>
    );
};

export default Detail;
