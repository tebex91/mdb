import React from 'react';
import { connect } from 'react-redux';

import { fetchFilms, updateChosenBtn } from '../../actions';
import { withMdbService } from '../hoc';
import { compose } from 'redux';


import './query-panel.sass';


const QueryPanel = ({ queryButtons, fetchFilms, updateChosenBtn }) => {
    const buttons = queryButtons.map(({ name, func, isChosen }) => {
        const clazz = isChosen ? 'query-btn chosen' : 'query-btn';
        return <li key={ name }>
            <button
                onClick={ () => {
                    updateChosenBtn(name);
                    fetchFilms(func, 1)
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

const mapStateToProps = ({ queryButtons }) => {
    return { queryButtons }
}

const mapDispatchToProps = (dispatch, { mdbService }) => {
    return {
        fetchFilms: fetchFilms(mdbService, dispatch),
        updateChosenBtn: updateChosenBtn(dispatch)
    }
}

export default compose(
    withMdbService(),
    connect(mapStateToProps, mapDispatchToProps)
)(QueryPanel);