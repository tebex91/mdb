import React from 'react';
import { connect } from 'react-redux';

import { fetchPopularFilms, fetchTopRatedFilms, fetchUpcomingFilms } from '../../actions';
import { withMdbService } from '../hoc';
import { compose } from 'redux';


import './query-panel.sass';


const QueryPanel = ({ info, fetchPopularFilms, fetchTopRatedFilms, fetchUpcomingFilms }) => {
    console.log(info);
    return (
        <div className="query-panel">
            <button onClick={ () => fetchPopularFilms(1) } className="query-btn">popular</button>
            <button onClick={ () => fetchTopRatedFilms(1) } className="query-btn">top rated</button>
            <button onClick={ () => fetchUpcomingFilms(1) } className="query-btn">upcoming</button>
        </div>
    )
}

const mapStateToProps = ({ filmList }) => {
    return {
        info: filmList
    }
}

const mapDispatchToProps = (dispatch, { mdbService }) => {
    return {
        fetchPopularFilms: fetchPopularFilms(mdbService, dispatch),
        fetchTopRatedFilms: fetchTopRatedFilms(mdbService, dispatch),
        fetchUpcomingFilms: fetchUpcomingFilms(mdbService, dispatch)
    }
}

export default compose(
    withMdbService(),
    connect(mapStateToProps, mapDispatchToProps)
)(QueryPanel);