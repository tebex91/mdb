import React from 'react';
import { connect } from 'react-redux';

import { removeAllMarkedFilms } from '../../actions';

import MarkedList from '../marked-list/marked-list';

import './marked-page.sass'

const MarkedPage = ({ markedFilms, removeAllMarkedFilms }) => {
    const message = <p className="message">there is no one selected film yet</p>
    const btn = (
        <button
            onClick={() => removeAllMarkedFilms() }>
            remove all</button>
    );
    const content = (
        <div className="content">
            <MarkedList markedFilms={markedFilms} />
            {markedFilms.length > 1 ? btn : null}
        </div>
    );

    return (
        <div className="marked-page">
            {markedFilms.length > 0 ? content : message}
        </div>
    );
}

const MapStateToProps = ({ markedFilms }) => {
    return { markedFilms };
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeAllMarkedFilms: removeAllMarkedFilms(dispatch)
    }
}

export default connect(MapStateToProps, mapDispatchToProps)(MarkedPage);