import {
    fetchFilms,
    deleteFilms
} from './fetch-film-list';

import { fetchDetails } from './fetch-film-details';


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

export {
    fetchFilms,
    deleteFilms,
    fetchDetails,
    updateCurrentPath,
    updateMarkedFilms
}





