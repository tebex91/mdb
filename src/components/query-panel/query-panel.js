import React from 'react';

import './query-panel.sass';

const QueryPanel = () => {
    return (
        <div className="query-panel">
            <button className="query-btn">popular</button>
            <button className="query-btn">top rated</button>
            <button className="query-btn">upcoming</button>
        </div>
    )
}

export default QueryPanel;