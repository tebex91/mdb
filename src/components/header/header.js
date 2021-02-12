import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import QueryPanel from '../query-panel';
import SearchPanel from '../search-panel';

import './header.sass';


const Header = ({ markedFilms }) => {
    const clazz = markedFilms.length > 0 ? 'favorite-mark fulfilled' : 'favorite-mark';
    return (
        <div className="header">
            <div className="logo">
                <Link to='/top_rated' className="link" >movieDB</Link>
            </div>
            <QueryPanel />
            <Link to='/marked' className={clazz}><i className="fa fa-bookmark" aria-hidden="true" /></Link>
            <SearchPanel />
        </div>
    )
}

const mapStateToProps = ({ markedFilms }) => {
    return { markedFilms }
}

export default connect(mapStateToProps)(Header);

