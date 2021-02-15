import React from 'react';
import { Link } from 'react-router-dom';

import './main-page.sass';
import collage from './collage.jpg';

const MainPage = () => {
    return (
        <div className="main-page">
            <h1>welcome to the world of cinema</h1>
            <Link to="/top_rated">
                <div className="collage">
                    <div className="shadow" />
                    <img src={collage} alt="collage" />
                </div>
            </Link>
        </div>
    )
}

export default MainPage;