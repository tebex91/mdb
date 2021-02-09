const updateFilmList = (state, action) => {
    if(state === undefined) {
        return {
            films: [],
            loading: true,
            error: null
        }
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
        case 'CLEAR_FILMS':
            return {
                films: [],
                loading: true,
                error: null
            };
        default:
            return state.filmList;
    }
}

export default updateFilmList;