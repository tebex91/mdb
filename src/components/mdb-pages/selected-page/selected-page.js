import React from 'react';
import { connect } from 'react-redux';

import { removeAllSelectedFilms } from '../../../actions';

import SelectedList from '../../selected-list/selected-list';

import './selected-page.sass'

const SelectedPage = ({ selectedFilms, removeAllSelectedFilms }) => {
    const message = <p className="message">there is no one selected film yet</p>
    const btn = (
        <button
            onClick={() => removeAllSelectedFilms() }>
            remove all</button>
    );
    const content = (
        <div className="content">
            <SelectedList selectedFilms={selectedFilms} />
            {selectedFilms.length > 1 ? btn : null}
        </div>
    );

    return (
        <div className="selected-page">
            {selectedFilms.length > 0 ? content : message}
        </div>
    );
}

const MapStateToProps = ({ selectedFilms }) => {
    return { selectedFilms };
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeAllSelectedFilms: removeAllSelectedFilms(dispatch)
    }
}

export default connect(MapStateToProps, mapDispatchToProps)(SelectedPage);