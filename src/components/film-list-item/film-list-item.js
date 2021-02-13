import React from 'react';
import { connect } from 'react-redux';

import { updateMarkedFilms } from '../../actions';

import './film-list-item.sass';
import defaultPoster from '../img/poster.jpg'


const FilmListItem = ({ film, markedFilms, updateMarkedFilms }) => {
    const { id, title, rating, poster, release } = film;
    const elem = markedFilms.find((film) => film.id === id);
    const selectedClass = elem ? ' marked' : '';
    let ratingClass;

    if(rating === 'NR') {
        ratingClass = ' gray';
    } else if(rating < 5) {
        ratingClass = ' red';
    } else if(rating >= 5 && rating < 7) {
        ratingClass = ' orange';
    } else {
        ratingClass = ' green';
    }

    return (
        <div className="list-item">
            <div className={`rating${ratingClass}`}><span>{rating}</span></div>
            <div className={`selected-label${selectedClass}`}
                onClick={(e) => {
                    e.preventDefault();
                    updateMarkedFilms({title, rating, id})
                }}>
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