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
        .then(data => {
            dispatch(filmsLoaded(data))
        })
        .catch((err) => dispatch(filmsError(err)));
}

const deleteFilms = (dispatch) => () => {
    dispatch({type: 'DELETE_FILMS'}); // не понятно что конкретно удаляет этот фетч и почему он находится именно здесь
}

export {
    fetchFilms,
    deleteFilms
}