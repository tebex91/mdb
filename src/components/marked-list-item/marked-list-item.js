import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { removeMarkedFilm } from '../../actions';
import { compose } from '../../utils';

import './marked-list-item.sass';

const MarkedListItem = ({ history, film, removeMarkedFilm }) => {
    const { id, title, rating } = film;
    return (
        <div className="marked-list-item"
             onClick={(e) => {
                 if(!e.target.classList.contains('fa-trash-o')) {
                     history.push(`/movie_${id}`);
                 }
             }}>
            <span className="rating">{rating}</span>
            <span className="title">{title}</span>
            <span className="trash"><i className="fa fa-trash-o"
                                       aria-hidden="true"
                                       onClick={() => removeMarkedFilm(id)} /></span>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeMarkedFilm: removeMarkedFilm(dispatch)
    }
}

export default compose(
    withRouter,
    connect(null, mapDispatchToProps)
)(MarkedListItem);