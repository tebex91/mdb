import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withMdbService } from '../hoc';
import { compose } from '../../utils';
import { fetchDetails, updateSelectedFilms } from '../../actions';
import Spinner from '../spinner';

import './film-details.sass';
import defaultPoster from "../../common-styles/default-poster.jpg"

const FilmDetails = ({ film, selectedFilms, updateSelectedFilms }) => {
    const { id, title, tagline, revenue, budget, runtime, overview, rating,
        genres, year, productionCountries, poster } = film;
    const elem = selectedFilms.find((film) => film.id === id);
    const clazz = 'selected-label';
    const selectedClazz = elem ? ' selected' : '';
    return (
        <div className="film-details">
            <div>
                <div className={clazz + selectedClazz}
                     onClick={() => updateSelectedFilms({id, title, rating})}>
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
        const { loading, error, ...props } = this.props;
        const spinner = loading ? <Spinner /> : null;
        const errorMessage = error ? <p>page not found</p> : null;
        const filmDetails = !loading && !error ? <FilmDetails {...props} /> : null;
        return (
            <>
                {spinner}
                {errorMessage}
                {filmDetails}
            </>
        )
    }
}

const mapStateToProps = ({ filmDetails: { loading, error, film}, selectedFilms }) => {
    return {
        loading,
        error,
        film,
        selectedFilms
    }
}

const mapDispatchToProps = (dispatch, { mdbService }) => {
    return {
        fetchDetails: fetchDetails(mdbService, dispatch),
        updateSelectedFilms: updateSelectedFilms(dispatch)
    }
}

export default compose(
    withMdbService(),
    connect(mapStateToProps, mapDispatchToProps)
)(FilmDetailsContainer);