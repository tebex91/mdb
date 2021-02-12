import React from 'react';
import { connect } from 'react-redux';

import { updateMarkedFilms } from '../../actions';

import './film-list-item.sass';
import defaultPoster from '../img/poster.jpg'


const FilmListItem = ({ film, markedFilms, updateMarkedFilms }) => {
    const { id, title, rating, poster, release } = film;
    const elem = markedFilms.find((film) => film.id === id);
    const clazz = 'favorite-label';
    const markedClazz = elem ? ' marked' : '';
    return (
        <div className="list-item">
            <div className="rating"><span>{rating}</span></div>
            <div className={clazz + markedClazz}
                onClick={() => updateMarkedFilms({title, rating, id})}>
                <i className="fa fa-bookmark" aria-hidden="true" /></div>
            <img src={poster || defaultPoster} alt="poster" /> {/*возможно вынести определение пути постера в сервис*/}
            <div className="info">
                <span className="title">{title}</span>
                <span className="release">{release}</span>
            </div>
        </div>
    )
}

const mapStateToProps = ({ markedFilms }) => {
    return { markedFilms }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateMarkedFilms: updateMarkedFilms(dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmListItem);