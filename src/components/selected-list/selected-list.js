import React from 'react';

import MarkedListItem from '../selected-list-item';

import './selected-list.sass';

const SelectedList = ({ selectedFilms }) => {
    const items = selectedFilms.map((film) => {
        return <li key={film.id}>
            <MarkedListItem film={film} />
        </li>
    })

    return (
        <ul className="selected-list">
            {items}
        </ul>
    )
}


export default SelectedList;