import React from 'react';
import { connect } from 'react-redux';

import { removeAllMarkedFilms } from '../../actions';

import MarkedList from '../marked-list/marked-list';

import './marked-page.sass'

const MarkedPage = ({ markedFilms, removeAllMarkedFilms }) => {
    const message = <p className="message">there is no one marked film yet</p>
    const content = (
        <div className="content">
            <MarkedList markedFilms={markedFilms} />
            <button
                onClick={() => removeAllMarkedFilms()}>
                remove all</button>
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