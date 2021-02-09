import React, { Component } from 'react';
import { connect } from 'react-redux';

import FilmListItem from '../film-list-item';
import { withMdbService } from '../hoc';
import { compose } from '../../utils';
import { fetchFilms, updatePageNumber } from '../../actions';
import Spinner from '../spinner';

import './film-list.sass';


const FilmList = ({ films, fetchFilms, activeButton, pageNumber, updatePageNumber }) => {
    const items = films.map(({id, ...props}) => {
        return <li key={ id }><FilmListItem film={ props } /></li>
    })
    return (
        <div className="film-list">
            <ul>
                { items }
            </ul>
            <button onClick={() => {
                fetchFilms(activeButton, pageNumber);
                updatePageNumber();
            }}>More</button>
        </div>
    )
}

class FilmListContainer extends Component {
    componentDidMount() {
        const { queryButtons, pageNumber, fetchFilms, updatePageNumber} = this.props;
        const chosenBtn = queryButtons.find(({ isChosen }) => isChosen === true);
        const idx = queryButtons.indexOf(chosenBtn);
        const func = queryButtons[idx].func
        fetchFilms(func, pageNumber);
        updatePageNumber();
    }

    render () {
        const { loading, ...props } = this.props;
        const spinner = <Spinner />;
        const list = <FilmList {...props} />;
        return loading ? spinner : list;
    }
}

const mapStateToProps = ({ filmList: {films, loading}, queryButtons, pageNumber, activeButton }) => {
    return {
        films,
        loading,
        queryButtons,
        pageNumber,
        activeButton
    }
};

const mapDispatchToProps = (dispatch, { mdbService }) => {
    return {
        fetchFilms: fetchFilms(mdbService, dispatch),
        updatePageNumber: updatePageNumber(dispatch),
    }
}

export default compose(
    withMdbService(),
    connect(mapStateToProps, mapDispatchToProps)
)(FilmListContainer);