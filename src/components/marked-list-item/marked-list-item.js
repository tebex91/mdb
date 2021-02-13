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
            <div className="rating">{rating}</div>
            <div className="title">{title}</div>
            <div className="trash"><i className="fa fa-trash-o"
                                       aria-hidden="true"
                                       onClick={() => removeMarkedFilm(id)} /></div>
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