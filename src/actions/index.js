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

export const fetchFilms = (filmService, dispatch) => (func, page, query) => {
    dispatch(filmsRequest());
    filmService[func](page, query)
        .then(data => {
            dispatch(filmsLoaded(data))
        })
        .catch((err) => dispatch(filmsError(err)));
}

export const updateSearchQuery = (dispatch) => (e) => {
    dispatch({
        type: 'UPDATE_SEARCH_QUERY',
        payload: e.target.value
    });
}

export const updateChosenBtn = (dispatch) => (btnName) => {
    dispatch({
        type: 'UPDATE_CHOSEN_BTN',
        payload: btnName
    })
}

export const clearFilms = (dispatch) => () => {
    dispatch({type: 'CLEAR_FILMS'});
}



