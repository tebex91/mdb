const updateFilmDetails = (state, action) => {
    const initialValue = {
        film: null,
        loading: true,
        error: null
    }

    if(state === undefined) {
        return initialValue;
    }

    switch (action.type) {
        case 'FETCH_DETAILS_REQUEST':
            return initialValue;
        case 'FETCH_DETAILS_SUCCESS':
            return {
                film: action.payload,
                loading: false,
                error: null
            }
        case 'FETCH_DETAILS_FAILURE':
            return {
                film: null,
                loading: false,
                error: action.payload
            }
        default:
            return state.filmDetails;
    }
}

export default updateFilmDetails;