import React, { Component } from 'react';
import { connect } from 'react-redux';

import FilmListItem from '../film-list-item';
import { withMdbService } from '../hoc';
import { compose } from '../../utils';
import { fetchFilms } from '../../actions';
import Spinner from '../spinner';

import './film-list.sass';


const FilmList = ({ films }) => {
    const items = films.map(({id, ...props}) => {
        return <li key={ id }><FilmListItem film={ props } /></li>
    })
    return (
        <ul className="item-list">
            { items }
        </ul>
    )
}

class FilmListContainer extends Component {
    componentDidMount() {
        const { queryButtons } = this.props;
        const chosenBtn = queryButtons.find(({ isChosen }) => isChosen === true);
        const idx = queryButtons.indexOf(chosenBtn);
        const func = queryButtons[idx].func
        this.props.fetchFilms(func, 1);
    }

    render () {
        const { films, loading } = this.props;
        const spinner = <Spinner />;
        const list = <FilmList films={ films } />;
        return loading ? spinner : list;
    }
}

const mapStateToProps = ({ filmList: {films, loading}, queryButtons }) => {
    return {
        films,
        loading,
        queryButtons
    }
};

const mapDispatchToProps = (dispatch, { mdbService }) => {
    return {
        fetchFilms: fetchFilms(mdbService, dispatch)
    }
}

export default compose(
    withMdbService(),
    connect(mapStateToProps, mapDispatchToProps)
)(FilmListContainer);