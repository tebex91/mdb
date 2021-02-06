import React from 'react';

import './list-item.sass';
import poster from '../img/poster.jpg'

const ListItem = () => {
    return (
        <div className="list-item">
            <div className="rating"><span>6.4</span></div>
            <div className="favorite-label"><i className="fa fa-bookmark" aria-hidden="true"></i></div>
            <img src={poster} alt="poster"/>
            <div className="info">
                <span className="title">Title</span>
                <span className="release">12 Dec 2020</span>
            </div>
        </div>
    )
}

export default ListItem;