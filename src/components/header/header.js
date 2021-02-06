import React from 'react';

import './header.sass';

const Header = () => {
    return (
        <div className="header">
            <div className="logo">movieDB</div>
            <div className="search-input">
                <div className="favorite-link"><i className="fa fa-bookmark" aria-hidden="true"></i></div>
                <input type="text" placeholder="enter movie title" />
                <button type="button">go!</button>
            </div>
        </div>
    )
}

export default Header;