import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import QueryPanel from '../query-panel';
import SearchPanel from '../search-panel';

import './header.sass';


const Header = ({ selectedFilms }) => {
    const fulfilledClass = selectedFilms.length > 0 ? ' fulfilled' : '';

    return (
        <div className="header">
            <div className="logo">
                <Link to='/' className="link" >movieDB</Link>
            </div>
            <QueryPanel />
            <Link to='/selected' className={`selected-label${fulfilledClass}`}>
                <i className="fa fa-bookmark" aria-hidden="true" />
            </Link>
            <SearchPanel />
        </div>
    )
}

const mapStateToProps = ({ selectedFilms }) => {
    return { selectedFilms }
}

export default connect(mapStateToProps)(Header);

