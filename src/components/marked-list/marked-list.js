import React from 'react';

import MarkedListItem from '../marked-list-item';

import './marked-list.sass';

const MarkedList = ({ markedFilms }) => {
    const items = markedFilms.map((film) => {
        return <li key={film.id}>
            <MarkedListItem film={film} />
        </li>
    })
    return (
        <ul className="marked-list">
            {items}
        </ul>
    )
}


export default MarkedList;