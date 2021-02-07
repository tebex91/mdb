import React, { Component } from 'react';
import { connect } from 'react-redux';

import FilmListItem from '../film-list-item';
import { withMdbService } from '../hoc';
import { compose } from '../../utils';
import { fetchPopularFilms } from '../../actions';
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
        this.props.fetchPopularFilms(1); //вынести первую загрузку в панель
    }

    render () {
        const { films, loading } = this.props;
        const spinner = <Spinner />;
        const list = <FilmList films={ films } />;
        return loading ? spinner : list;
    }
}

const mapStateToProps = ({ filmList: {films, loading} }) => {
    return {
        films,
        loading
    }
};

const mapDispatchToProps = (dispatch, { mdbService }) => {
    return {
        fetchPopularFilms: fetchPopularFilms(mdbService, dispatch)
    }
}

export default compose(
    withMdbService(),
    connect(mapStateToProps, mapDispatchToProps)
)(FilmListContainer);