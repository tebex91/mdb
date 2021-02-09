import React from 'react';
import { connect } from 'react-redux';

import { fetchFilms, updateChosenBtn, updateActiveBtn, updatePageNumber } from '../../actions';
import { withMdbService } from '../hoc';
import { compose } from 'redux';


import './query-panel.sass';


const QueryPanel = ({ queryButtons, fetchFilms, updateChosenBtn, updateActiveBtn, updatePageNumber, pageNumber }) => {
    const buttons = queryButtons.map(({ name, func, isChosen }) => {
        const clazz = isChosen ? 'query-btn chosen' : 'query-btn';
        return <li key={ name }>
            <button
                onClick={ () => {
                    updatePageNumber()
                    updateChosenBtn(name);
                    updateActiveBtn(func);
                    fetchFilms(func, pageNumber)
                }}
                className={clazz}>
                { name }</button>
        </li>
    })
    return (
        <ul className="query-panel">
            { buttons }
        </ul>
    )
}

const mapStateToProps = ({ queryButtons, pageNumber }) => {
    return { queryButtons, pageNumber }
}

const mapDispatchToProps = (dispatch, { mdbService }) => {
    return {
        fetchFilms: fetchFilms(mdbService, dispatch),
        updateChosenBtn: updateChosenBtn(dispatch),
        updateActiveBtn: updateActiveBtn(dispatch),
        updatePageNumber: updatePageNumber(dispatch)
    }
}

export default compose(
    withMdbService(),
    connect(mapStateToProps, mapDispatchToProps)
)(QueryPanel);