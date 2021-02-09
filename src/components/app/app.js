import React, { Component } from 'react';
import Header from '../header';
import QueryPanel from '../query-panel';
import FilmList from '../film-list';
import Row from '../row';
//import ItemDetails from '../item-details';
//import ErrorIndicator from '../error-indicator';
//import Spinner from '../spinner';

import './app.sass';

export default class App extends Component {
    render() {
        return (
            <div className="app-block">
                <Header />
                <Row left={<QueryPanel />} right={<FilmList />} />
            </div>
        )
    }
}