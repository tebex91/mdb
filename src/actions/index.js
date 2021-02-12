import {
    fetchFilms,
    deleteFilms
} from './fetch-film-list';

import { fetchDetails } from './fetch-film-details';

import { fetchTotalPages } from './fetch-total-pages';


const updateCurrentPath = (dispatch) => (path) => {
    dispatch({
        type: 'UPDATE_CURRENT_PATH',
        payload: path
    })
}

const updateMarkedFilms = (dispatch) => (film) => {
    dispatch({
        type: 'UPDATE_MARKED_FILMS',
        payload: film
    })
}

const removeAllMarkedFilms = (dispatch) => () => {
    dispatch({
        type: 'REMOVE_ALL_MARKED_FILMS'
    })
}

const removeMarkedFilm = (dispatch) => (id) => {
    dispatch({
        type: 'REMOVE_MARKED_FILM',
        payload: id
    })
}

export {
    fetchFilms,
    deleteFilms,
    fetchDetails,
    fetchTotalPages,
    updateCurrentPath,
    updateMarkedFilms,
    removeAllMarkedFilms,
    removeMarkedFilm
}





