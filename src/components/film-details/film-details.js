import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withMdbService } from '../hoc';
import { compose } from '../../utils';
import { fetchDetails, updateMarkedFilms } from '../../actions';
import Spinner from '../spinner';

import './film-details.sass';
import defaultPoster from "../img/poster.jpg"

const FilmDetails = ({ film, markedFilms, updateMarkedFilms }) => {
    const { id, title, tagline, revenue, budget, runtime, overview, rating,
        genres, year, productionCountries, poster } = film;
    const elem = markedFilms.find((film) => film.id === id);
    const clazz = 'favorite-label';
    const markedClazz = elem ? ' marked' : '';
    return (
        <div className="film-details">
            <div>
                <div className={clazz + markedClazz}
                     onClick={() => updateMarkedFilms({id, title, rating})}>
                    <i className="fa fa-bookmark" aria-hidden="true" /></div>
                <div className="film-rating">{rating}</div>
                <img className="film-poster" src={poster || defaultPoster} alt="poster"/>
                <div className="film-info">
                    <h1 className="film-title">{title}</h1>
                    <div className="film-tagline">{tagline}</div>
                    <table>
                        <tbody>
                        <tr>
                            <td>year</td>
                            <td>{year}</td>
                        </tr>
                        <tr>
                            <td>country</td>
                            <td>{productionCountries}</td>
                        </tr>
                        <tr>
                            <td>genre</td>
                            <td>{genres}</td>
                        </tr>
                        <tr>
                            <td>budget</td>
                            <td>{budget}</td>
                        </tr>
                        <tr>
                            <td>box office</td>
                            <td>{revenue}</td>
                        </tr>
                        <tr>
                            <td>runtime</td>
                            <td>{runtime}</td>
                        </tr>
                        </tbody>
                    </table>
                    <div className="film-overview">{overview}</div>
                </div>
            </div>
        </div>
    )
}

class FilmDetailsContainer extends Component {
    componentDidMount() {
        const { fetchDetails, id } = this.props;
        fetchDetails(id);
    }

    render() {
        const { loading, ...props } = this.props;
        const spinner = <Spinner />; //лишнее обьявление
        const filmDetails = <FilmDetails {...props} />
        return loading ? spinner : filmDetails;
    }
}

const mapStateToProps = ({ filmDetails: { loading, film}, markedFilms }) => {
    return {
        loading,
        film,
        markedFilms
    }
}

const mapDispatchToProps = (dispatch, { mdbService }) => {
    return {
        fetchDetails: fetchDetails(mdbService, dispatch),
        updateMarkedFilms: updateMarkedFilms(dispatch)
    }
}

export default compose(
    withMdbService(),
    connect(mapStateToProps, mapDispatchToProps)
)(FilmDetailsContainer);