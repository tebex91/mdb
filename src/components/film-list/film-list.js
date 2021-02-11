import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import FilmListItem from '../film-list-item';
import { withMdbService } from '../hoc';
import { compose } from '../../utils';
import { fetchFilms, deleteFilms } from '../../actions';
import Spinner from '../spinner';

import './film-list.sass';


const FilmList = ({ history, films, func, fetchFilms, pageNum, updatePageNum, searchQuery }) => {
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

    return (
        <div className="film-list">
            <ul>
                { items }
            </ul>
            <button onClick={() => {
                fetchFilms(func, pageNum, searchQuery);
                updatePageNum();
            }}>More</button>
        </div>
    )
}

class FilmListContainer extends Component {
    state = {
        pageNum: 1
    }

    componentDidMount() {
        const { func, fetchFilms, searchQuery} = this.props;
        fetchFilms(func, this.state.pageNum, searchQuery);
        this.updatePageNum();
    }

    componentWillUnmount() {
        this.props.deleteFilms();
    }

    updatePageNum = () => {
        this.setState(({ pageNum }) => {
            return { pageNum: pageNum + 1 }
        } )
    }

    render () {
        const { loading, films, ...props } = this.props;
        const spinner = <Spinner />; //лишнее обьявление?
        const list = <FilmList {...props}
                               films={films}
                               pageNum={this.state.pageNum}
                               updatePageNum={this.updatePageNum} />;

        return films.length === 0 ? spinner : list;
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
        fetchFilms: fetchFilms(mdbService, dispatch),
        deleteFilms: deleteFilms(dispatch)
    }
}

export default compose(
    withRouter,
    withMdbService(),
    connect(mapStateToProps, mapDispatchToProps)
)(FilmListContainer);