const updateSelectedFilms = (dispatch) => (film) => {
    dispatch({
        type: 'UPDATE_SELECTED_FILMS',
        payload: film
    })
}

const removeAllSelectedFilms = (dispatch) => () => {
    dispatch({
        type: 'REMOVE_ALL_SELECTED_FILMS'
    })
}

const removeSelectedFilm = (dispatch) => (id) => {
    dispatch({
        type: 'REMOVE_SELECTED_FILM',
        payload: id
    })
}

export {
    updateSelectedFilms,
    removeAllSelectedFilms,
    removeSelectedFilm,
}