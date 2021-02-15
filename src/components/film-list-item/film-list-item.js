import React from 'react';
import { connect } from 'react-redux';

import { updateSelectedFilms } from '../../actions';

import './film-list-item.sass';
import defaultPoster from '../../common-styles/default-poster.jpg'


const FilmListItem = ({ film, selectedFilms, updateSelectedFilms }) => {
    const { id, title, rating, poster, release } = film;
    const elem = selectedFilms.find((film) => film.id === id);
    const selectedClass = elem ? ' selected' : '';
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
                    updateSelectedFilms({title, rating, id})
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

const mapStateToProps = ({ selectedFilms }) => {
    return { selectedFilms }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateSelectedFilms: updateSelectedFilms(dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmListItem);