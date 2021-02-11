import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './query-panel.sass';


const QueryPanel = ({ queryButtons }) => {
    const buttons = queryButtons.map(({ name, path, isChosen }) => {
        const clazz = isChosen ? 'query-btn chosen' : 'query-btn';
        return <li key={path}>
            <Link to={path}>
                <button className={clazz}>{name}</button>
            </Link>
        </li>
    })
    return (
        <ul className="query-panel">
            {buttons}
        </ul>
    )
}

const mapStateToProps = ({ queryButtons }) => {
    return { queryButtons }
}

export default connect(mapStateToProps)(QueryPanel);