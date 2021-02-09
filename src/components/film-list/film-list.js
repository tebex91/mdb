import React, { Component } from 'react';
import { connect } from 'react-redux';

import FilmListItem from '../film-list-item';
import { withMdbService } from '../hoc';
import { compose } from '../../utils';
import { fetchFilms, clearFilms } from '../../actions';
import Spinner from '../spinner';

import './film-list.sass';


const FilmList = ({ films, func, fetchFilms, updatePageNum, pageNum}) => {
    console.log(pageNum)
    let i = 0;
    const items = films.map(({id, ...props}) => {
        return <li key={ i++ }><FilmListItem film={ props } /></li>
    })
    return (
        <div className="film-list">
            <ul>
                { items }
            </ul>
            <button onClick={() => {
                fetchFilms(func, pageNum);
                updatePageNum();
            }}>More</button>
        </div>
    )
}

class FilmListContainer extends Component {
    state = {
        pageNum: 1
    }

    updatePageNum = () => {
        this.setState(({ pageNum }) => {
            return { pageNum: pageNum + 1 }
        } )
    }

    componentDidMount() {
        const { func, fetchFilms} = this.props;
        fetchFilms(func, this.state.pageNum);
        this.updatePageNum();
    }

    componentWillUnmount() {
        this.props.clearFilms();
    }

    render () {
        const { loading, ...props } = this.props;
        const spinner = <Spinner />;
        const list = <FilmList {...props} updatePageNum={this.updatePageNum} pageNum={this.state.pageNum} />;
        return this.props.films.length === 0 ? spinner : list;
    }
}

const mapStateToProps = ({ filmList: {films, loading}, queryButtons }) => {
    return {
        films,
        loading,
        queryButtons,
    }
};

const mapDispatchToProps = (dispatch, { mdbService }) => {
    return {
        fetchFilms: fetchFilms(mdbService, dispatch),
        clearFilms: clearFilms(dispatch)
    }
}

export default compose(
    withMdbService(),
    connect(mapStateToProps, mapDispatchToProps)
)(FilmListContainer);