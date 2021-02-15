import React, { useEffect } from 'react';
import {Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../header';
import ArrowUp from '../arrow-up';
import { MainPage, PopularPage, TopRatedPage, UpcomingPage, SearchPage, SelectedPage } from '../mdb-pages';
import FilmDetails from '../film-details';
import { compose } from '../../utils';
import { updateCurrentPath } from '../../actions';

import './app.sass';

const App = ({ location, updateCurrentPath }) => {
    useEffect(() => {
        updateCurrentPath(location.pathname);
    });

    return (
        <div className="app-block">
            <Header />
            <Switch>
                <Route path='/' exact component={MainPage} />
                <Route path='/popular' component={PopularPage} />
                <Route path='/top_rated' component={TopRatedPage} />
                <Route path='/upcoming' component={UpcomingPage} />
                <Route path='/selected' component={SelectedPage} />
                <Route path='/search&q=:id'
                       render={({match}) => {
                           const { id } = match.params;
                           return <SearchPage searchQuery={id} />
                       }} />
                <Route path="/movie/:id"
                       render={({match}) => {
                           const { id } = match.params;
                           return <FilmDetails id={id} />
                       }} />
                <Route render={() => <p className="message">page not found</p>} />
            </Switch>
            <ArrowUp />
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
    connect( null, mapDispatchToProps)
)(App);