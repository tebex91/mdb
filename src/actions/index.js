const filmsRequest = () => {
    return {
        type: 'FETCH_FILMS_REQUEST'
    }
}

const filmsLoaded = (newFilms) => {
    return {
        type: 'FETCH_FILMS_SUCCESS',
        payload: newFilms
    }
}

const filmsError = (error) => {
    return {
        type: 'FETCH_FILMS_FAILURE',
        payload: error
    }
}

export const fetchPopularFilms = (filmService, dispatch) => {
    dispatch(filmsRequest());
    filmService.getPopular()
        .then((data) => dispatch(filmsLoaded(data)))
        .catch((err) => dispatch(filmsError(err)))
}


