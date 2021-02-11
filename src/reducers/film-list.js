//чисто
const updateFilmList = (state, action) => {
    const initialValue = {
        films: [],
        loading: true,
        error: null
    }

    if(state === undefined) {
        return initialValue;
    }

    const { films } = state.filmList;

    switch (action.type) {
        case 'FETCH_FILMS_REQUEST':
            return {
                films: [...films],
                loading: true,
                error: null
            }
        case 'FETCH_FILMS_SUCCESS':
            return {
                films: [...films, ...action.payload],
                loading: false,
                error: null
            }
        case 'FETCH_FILMS_FAILURE':
            return {
                films: [],
                loading: false,
                error: action.payload
            }
        case 'DELETE_FILMS':
            return initialValue;
        default:
            return state.filmList;
    }
}

export default updateFilmList;