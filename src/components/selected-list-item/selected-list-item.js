import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { removeSelectedFilm } from '../../actions';
import { compose } from '../../utils';

import './selected-list-item.sass';

const SelectedListItem = ({ history, film, removeSelectedFilm }) => {
    const { id, title, rating } = film;
    return (
        <div className="selected-list-item"
             onClick={(e) => {
                 if(!e.target.classList.contains('fa-trash-o')) {
                     history.push(`/movie/${id}`);
                 }
             }}>
            <div className="rating">{rating}</div>
            <div className="title">{title}</div>
            <div className="trash"><i className="fa fa-trash-o"
                                       aria-hidden="true"
                                       onClick={() => removeSelectedFilm(id)} /></div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeSelectedFilm: removeSelectedFilm(dispatch)
    }
}

export default compose(
    withRouter,
    connect(null, mapDispatchToProps)
)(SelectedListItem);