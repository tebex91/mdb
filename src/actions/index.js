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

const fetchFilms = (func, filmService, page, dispatch, query) => {
    dispatch(filmsRequest());
    filmService[func](page, query)
        .then(data => {
            dispatch(filmsLoaded(data))
        })
        .catch((err) => dispatch(filmsError(err)));
}

export const fetchPopularFilms = (filmService, dispatch) => (page) => {
    fetchFilms('getPopular', filmService, page, dispatch)
}

export const fetchTopRatedFilms = (filmService, dispatch) => (page) => {
    fetchFilms('getTopRated', filmService, page, dispatch)
}

export const fetchUpcomingFilms = (filmService, dispatch) => (page) => {
    fetchFilms('getUpcoming', filmService, page, dispatch)
}

export const fetchFilmsBySearch = (filmService, dispatch) => (page, query) => {
    fetchFilms('getBySearch', filmService, page, dispatch, query)
}




