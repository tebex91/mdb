import React from 'react';
import { connect } from 'react-redux';

import { fetchFilms, updateSearchQuery } from '../../actions';
import { withMdbService } from '../hoc';
import { compose } from '../../utils';

import './header.sass';

const Header = ({ searchQuery, fetchFilms, updateSearchQuery }) => {
    return (
        <div className="header">
            <div className="logo">movieDB</div>
            <div className="header-block">
                <div className="favorite-link"><i className="fa fa-bookmark" aria-hidden="true" /></div>
                <form onSubmit={ (e) => {
                    e.preventDefault();
                    fetchFilms('getBySearch', 1, searchQuery)}}>
                    <input
                        type="text"
                        placeholder="enter movie title"
                        value={ searchQuery }
                        onChange={ (e) => updateSearchQuery(e) } />
                    <button type="submit">go!</button>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = ({ searchQuery }) => {
    return { searchQuery }
}

const mapDispatchToProps = (dispatch, { mdbService }) => {
    return {
        fetchFilms: fetchFilms(mdbService, dispatch),
        updateSearchQuery: updateSearchQuery(dispatch)
    }
}

export default compose(
    withMdbService(),
    connect(mapStateToProps, mapDispatchToProps)
)(Header);