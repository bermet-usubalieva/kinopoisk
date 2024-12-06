import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getByPremier } from '../../redux/reducers/homeReducer';
import s from './Premier.module.css';

const Premier = () => {
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('January');
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        e.preventDefault();
        if (year.trim().length && month.trim().length) {
            dispatch(getByPremier(year, month));
            setMonth('January');
            setYear('');
        }
    };

    const handleYearChange = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            setYear(value);
        }
    };

    return (
        <form className={s.form} onSubmit={handleSearch}>
            <input
                className={s.inp}
                onChange={handleYearChange}
                type="search"
                placeholder="Year"
                value={year}
            />
            <select value={month} onChange={(e) => setMonth(e.target.value)}>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
            </select>
            <button>Premieres List</button>
        </form>
    );
};

export default Premier;
