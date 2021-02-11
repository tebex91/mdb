const detailsRequest = () => {
    return {
        type: 'FETCH_DETAILS_REQUEST'
    }
}

const detailsLoaded = (newFilm) => {
    return {
        type: 'FETCH_DETAILS_SUCCESS',
        payload: newFilm
    }
}

const detailsError = (error) => {
    return {
        type: 'FETCH_DETAILS_FAILURE',
        payload: error
    }
}

const fetchDetails = (filmService, dispatch) => (id) => {
    dispatch(detailsRequest());
    filmService.getMovieDetails(id)
        .then(data => {
            dispatch(detailsLoaded(data))
        })
        .catch((err) => dispatch(detailsError(err)));
}

export {
    fetchDetails
}