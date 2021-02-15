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

const fetchFilms = (filmService, dispatch) => (func, page, query) => {
    dispatch(filmsRequest());
    filmService[func](page, query)
        .then(data => dispatch(filmsLoaded(data)))
        .catch((err) => dispatch(filmsError(err)));
}

//очистить список фильмов после размонтирования компонента и перед новым запросом поиска
const deleteFilms = (dispatch) => () => {
    dispatch({type: 'DELETE_FILMS'});
}

export {
    fetchFilms,
    deleteFilms
}