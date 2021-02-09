import React from 'react';
import { Link } from 'react-router-dom';
//import { connect } from 'react-redux';

//import { updateChosenBtn } from '../../actions';

import './query-panel.sass';


const QueryPanel = () => {
    return (
        <div className="query-panel">
            <Link to='/popular'>
                <button>popular</button>
            </Link>
            <Link to='/top_rated'>
                <button>top rated</button>
            </Link>
            <Link to='/upcoming'>
                <button>upcoming</button>
            </Link>
        </div>
    )
}

/*
const mapStateToProps = ({ queryButtons }) => {
    return { queryButtons }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateChosenBtn: updateChosenBtn(dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QueryPanel);*/


export default QueryPanel;