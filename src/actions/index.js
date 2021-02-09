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

//возможно рассмотреть совмещение updateChosenBtn и updateActiveBtn, но врядли, просто дать им нормальные имена
export const updateChosenBtn = (dispatch) => (btnName) => {
    dispatch({
        type: 'UPDATE_CHOSEN_BTN',
        payload: btnName
    })
}

export const updateActiveBtn = (dispatch) => (btnFunc) => {
    dispatch({
        type: 'UPDATE_ACTIVE_BTN',
        payload: btnFunc
    })
}

export const updatePageNumber = (dispatch) => (btnName) => {
    dispatch({
        type: 'UPDATE_PAGE_NUMBER'
    })
}



