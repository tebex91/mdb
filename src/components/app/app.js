import React, { useEffect } from 'react';
import {Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../header';
import { PopularPage, TopRatedPage, UpcomingPage, SearchPage, MarkedPage } from '../mdb-pages';
import FilmDetails from '../film-details';
import { compose } from '../../utils';
import { updateCurrentPath } from '../../actions';
//import ErrorIndicator from '../error-indicator';
//import Spinner from '../spinner';

import './app.sass';

const App = ({ location, updateCurrentPath }) => {
    useEffect(() => {
        updateCurrentPath(location.pathname);
    });

    return (
        <div className="app-block">
            <Header />
            <Switch>
                <Route path='/popular' component={PopularPage} />
                <Route path='/top_rated' component={TopRatedPage} />
                <Route path='/upcoming' component={UpcomingPage} />
                <Route path='/marked' component={MarkedPage} />
                <Route path='/search&q=:id'
                       render={({match}) => {
                           const { id } = match.params;
                           return <SearchPage searchQuery={id} />
                       }} />
                <Route path='/movie_:id'
                       render={({match}) => {
                           const { id } = match.params;
                           return <FilmDetails id={id} />
                       }} />
            </Switch>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateCurrentPath: updateCurrentPath(dispatch)
    }
}

export default compose(
    withRouter,
    connect( undefined, mapDispatchToProps)
)(App);