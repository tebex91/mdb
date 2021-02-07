import React from 'react';
import { connect } from 'react-redux';

import { fetchFilmsBySearch } from '../../actions';
import { withMdbService } from '../hoc';
import { compose } from '../../utils';

import './header.sass';

const Header = ({ mapDispatchToProps }) => {
    return (
        <div className="header">
            <div className="logo">movieDB</div>
            <div className="search-input">
                <div className="favorite-link"><i className="fa fa-bookmark" aria-hidden="true" /></div>
                <input type="text" placeholder="enter movie title" />
                <button type="button">go!</button> {/*сюда mapDispatchToProps*/}
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch, { mdbService }) => {
    return {
        fetchFilmsBySearch: fetchFilmsBySearch(mdbService, dispatch)
    }
}

export default compose(
    withMdbService(),
    connect(undefined, mapDispatchToProps)
)(Header);