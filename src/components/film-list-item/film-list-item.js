import React from 'react';

import './film-list-item.sass';
import defaultPoster from '../img/poster.jpg'

const FilmListItem = ({ film }) => {
    const { title, rating, poster, release } = film;
    const posterUrl = poster ? poster : defaultPoster;//возможно вынести определение пути постера в сервис
    return (
        <div className="list-item">
            <div className="rating"><span>{ rating }</span></div>
            <div className="favorite-label"><i className="fa fa-bookmark" aria-hidden="true" /></div>
            <img src={ posterUrl } alt="poster" />
            <div className="info">
                <span className="title">{ title }</span>
                <span className="release">{ release }</span>
            </div>
        </div>
    )
}

export default FilmListItem;