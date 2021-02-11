const updateFilmDetails = (state, action) => {
    if(state === undefined) {
        return {
            film: [],
            loading: true,
            error: null
        }
    }

    switch (action.type) {
        case 'FETCH_DETAILS_REQUEST':
            return {
                film: [],
                loading: true,
                error: null
            }
        case 'FETCH_DETAILS_SUCCESS':
            return {
                film: action.payload,
                loading: false,
                error: null
            }
        case 'FETCH_FILMS_FAILURE':
            return {
                film: [],
                loading: false,
                error: action.payload
            }
        default:
            return state.filmDetails;
    }
}

export default updateFilmDetails;