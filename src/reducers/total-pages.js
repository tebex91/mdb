const updateTotalPages = (state, action) => {

    if(state === undefined) {
        return {
            getPopular: null,
            getTopRated: null,
            getUpcoming: null,
            getBySearch: null
        }
    }

    const { totalPages } = state;

    if(!action.type.includes('FETCH_TOTAL_PAGES')) {
        return totalPages
    }

    const key = Object.keys(action.payload)[0];
    const value = Object.values(action.payload)[0];

    return { ...totalPages, [key]: value }
}

export default updateTotalPages;