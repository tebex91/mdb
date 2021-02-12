import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import FilmListItem from '../film-list-item';
import { withMdbService } from '../hoc';
import { compose } from '../../utils';
import { fetchFilms, fetchTotalPages, deleteFilms } from '../../actions';
import Spinner from '../spinner';

import './film-list.sass';


const FilmList = ({ history, films, func, fetchFilms, pageNum, updatePageNum, searchQuery, totalPages }) => {
    const items = films.map((film) => {
        const { id } = film;
        return <li key={ id }
                   onClick={(e) => {
                       if(!e.target.classList.contains('fa-bookmark')) {
                            history.push(`/movie_${id}`);
                       }
                   }}>
            <FilmListItem film={film} /></li>
    })

    const btn = (
        <button className="show-more-btn"
            onClick={() => {
            fetchFilms(func, pageNum, searchQuery);
            updatePageNum();
        }}>More</button>
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
            this.updateFilms();
        }
    }

    updateFilms = () => {
        const { func, fetchFilms, fetchTotalPages, searchQuery} = this.props;
        fetchFilms(func, this.state.pageNum, searchQuery);
        fetchTotalPages(func, searchQuery);
        this.updatePageNum();
        this.props.deleteFilms();
    }

    updatePageNum = () => {
        this.setState(({ pageNum }) => {
            return { pageNum: pageNum + 1 }
        } )
    }

    render () {
        const { loading, films, ...props } = this.props;
        const spinner = loading ? <Spinner /> : null;
        const list = <FilmList {...props}
                               films={films}
                               pageNum={this.state.pageNum}
                               updatePageNum={this.updatePageNum} />;

        const message = list.props.films.length > 0 || spinner ?
            null : <p className="message">Sorry can't fetch</p>;

        return (
            <>
                { spinner }
                { message }
                { list }
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