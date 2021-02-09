import React, { Component } from 'react';
import {Route, Switch } from 'react-router-dom';

import Header from '../header';
import { PopularPage, TopRatedPage, UpcomingPage, SearchPage } from '../mdb-pages';
//import ItemDetails from '../item-details';
//import ErrorIndicator from '../error-indicator';
//import Spinner from '../spinner';

import './app.sass';

export default class App extends Component {
    render() {
        return (
            <div className="app-block">
                <Header />
                <Switch>
                    <Route path='/popular' component={PopularPage} />
                    <Route path='/top_rated' component={TopRatedPage} />
                    <Route path='/upcoming' component={UpcomingPage} />
                    <Route path='/search' component={SearchPage} />
                </Switch>
            </div>
        )
    }
}