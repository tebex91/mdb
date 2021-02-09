import React from 'react';

import QueryPanel from '../query-panel';
import SearchPanel from '../search-panel';

import './header.sass';


const Header = () => {
    return (
        <div className="header">
            <div className="logo">movieDB</div>
            <QueryPanel />
            <div className="header-block">
                <div className="favorite-link"><i className="fa fa-bookmark" aria-hidden="true" /></div>
                <SearchPanel /> {/*перенести стили в из хедера в панель*/}
            </div>
        </div>
    )
}

export default Header;

