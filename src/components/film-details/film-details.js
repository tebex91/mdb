import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withMdbService } from '../hoc';
import { compose } from '../../utils';
import { fetchDetails } from '../../actions';
import Spinner from '../spinner';

import './film-details.sass';
import defaultPoster from "../img/poster.jpg"

const FilmDetails = ({ film }) => {
    const { id, title, tagline, revenue, budget, runtime, overview, rating,
        genres, year, productionCountries, poster } = film;
    return (
        <div className="item-details">
            <div>
                <div className="favorite-label"><i className="fa fa-bookmark" aria-hidden="true" /></div>
                <div className="item-rating">{rating}</div>
                <img className="item-poster" src={poster || defaultPoster} alt="poster"/>
                <div className="item-info">
                    <h1 className="item-title">{title}</h1>
                    <div className="item-tagline">{tagline}</div>
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
                            <td>${budget}</td>
                        </tr>
                        <tr>
                            <td>box office</td>
                            <td>${revenue}</td>
                        </tr>
                        <tr>
                            <td>runtime</td>
                            <td>{runtime} minutes</td>
                        </tr>
                        </tbody>
                    </table>
                    <div className="item-overview">{overview}</div>
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
        const { loading, film } = this.props;
        const spinner = <Spinner />; //лишнее обьявление
        const filmDetails = <FilmDetails film={film} />
        return loading ? spinner : filmDetails;
    }
}

const mapStateToProps = ({ filmDetails: { loading, film} }) => {
    return {
        loading,
        film
    }
}

const mapDispatchToProps = (dispatch, { mdbService }) => {
    return {
        fetchDetails: fetchDetails(mdbService, dispatch)
    }
}

export default compose(
    withMdbService(),
    connect(mapStateToProps, mapDispatchToProps)
)(FilmDetailsContainer);