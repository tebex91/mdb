import React from 'react';
import { connect } from 'react-redux';

import { fetchFilmsBySearch, updateSearchQuery } from '../../actions';
import { withMdbService } from '../hoc';
import { compose } from '../../utils';

import './header.sass';

const Header = ({ searchQuery, fetchFilmsBySearch, updateSearchQuery }) => {
    return (
        <div className="header">
            <div className="logo">movieDB</div>
            <div className="search-input">
                <div className="favorite-link"><i className="fa fa-bookmark" aria-hidden="true" /></div>
                <input
                    type="text"
                    placeholder="enter movie title"
                    value={ searchQuery }
                    onChange={ (e) => updateSearchQuery(e) } />
                <button
                    type="button"
                    onClick={() => fetchFilmsBySearch(1, searchQuery) }>go!</button>
            </div>
        </div>
    )
}

const mapStateToProps = ({ searchQuery }) => {
    return { searchQuery }
}

const mapDispatchToProps = (dispatch, { mdbService }) => {
    console.log(updateSearchQuery());
    return {
        fetchFilmsBySearch: fetchFilmsBySearch(mdbService, dispatch),
        updateSearchQuery: updateSearchQuery(dispatch)
    }
}

export default compose(
    withMdbService(),
    connect(mapStateToProps, mapDispatchToProps)
)(Header);