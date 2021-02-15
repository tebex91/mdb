import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import FilmListItem from '../film-list-item';
import Spinner from '../spinner';
import { fetchFilms, fetchTotalPages, deleteFilms } from '../../actions';
import { withMdbService } from '../hoc';
import { compose } from '../../utils';

import './film-list.sass';

const FilmList = ({ films, func, fetchFilms, pageNum,
                    updatePageNum, searchQuery, totalPages }) => {
    const items = films.map((film) => {
        const { id } = film;
        return (
            <li key={ id }>
                <Link to={`/movie/${id}`} className="link">
                    <FilmListItem film={film} />
                </Link>
            </li>
        )
    });

    const btn = (
        <button className="show-more-btn"
            onClick={() => {
            fetchFilms(func, pageNum, searchQuery);
            updatePageNum();
        }}>more</button>
    );

    return (
        <div className="film-list">
            <ul>
                { items }
            </ul>
            { totalPages[func] >= pageNum && items.length > 0 ? btn : null }
        </div>
    )
}

class FilmListContainer extends Component {
    state = {
        pageNum: 1
    }

    componentDidMount() {
        this.updateFilms();
    }

    componentDidUpdate(prevProps) {
        if (this.props.searchQuery !== prevProps.searchQuery) {
            this.setState({pageNum: 1});
            setTimeout(() => this.updateFilms());
        }
    }

    componentWillUnmount() {
        this.props.deleteFilms();
    }

    updateFilms = () => {
        const { func, fetchFilms, fetchTotalPages, searchQuery, deleteFilms } = this.props;
        fetchFilms(func, this.state.pageNum, searchQuery);
        fetchTotalPages(func, searchQuery);
        this.updatePageNum();
        deleteFilms();
    }

    updatePageNum = () => {
        this.setState(({ pageNum }) => {
            return { pageNum: pageNum + 1 }
        })
    }

    render () {
        const { loading, films, ...props } = this.props;
        const list = <FilmList {...props}
                               films={films}
                               pageNum={this.state.pageNum}
                               updatePageNum={this.updatePageNum} />;
        const listIsEmpty = list.props.films.length === 0;
        const spinner = loading && listIsEmpty ? <Spinner /> : null;
        const message = listIsEmpty && !spinner ?
                <p className="message">no results for your query</p> :
                null;
        return (
            <>
                {spinner}
                {message}
                {list}
            </>
        )
    }
}

const mapStateToProps = ({ filmList: {films, loading}, totalPages }) => {
    return {
        films,
        loading,
        totalPages
    }
};

const mapDispatchToProps = (dispatch, { mdbService }) => {
    return {
        fetchFilms: fetchFilms(mdbService, dispatch),
        fetchTotalPages: fetchTotalPages(mdbService, dispatch),
        deleteFilms: deleteFilms(dispatch)
    }
}

export default compose(
    withRouter,
    withMdbService(),
    connect(mapStateToProps, mapDispatchToProps)
)(FilmListContainer);