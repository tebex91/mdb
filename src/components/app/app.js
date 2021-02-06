import React, { Component } from 'react';
import Header from '../header';
import QueryPanel from '../query-panel';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
//import ErrorIndicator from '../error-indicator';
//import Spinner from '../spinner';

import './app.sass';

export default class App extends Component {
    render() {
        return (
            <div className="app-block">
                <Header />
                <main>
                    <div className="main-page">
                        <QueryPanel />
                        <ItemList />
                    </div>
                    <ItemDetails />
                </main>

            </div>
        )
    }
}