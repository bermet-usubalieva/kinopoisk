import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import Detail from '../Detail/Detail';
import s from './Main.module.css'

const Main = () => {
    return (
        <main className={s.main}>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/detail/:id' element={<Detail />} />
            </Routes>
        </main>
    );
};

export default Main;