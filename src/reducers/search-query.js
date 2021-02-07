const updateSearchQuery = (state, action) => {
    if(action.type === 'UPDATE_SEARCH_QUERY') {
        return action.payload;
    }

    return '';
}

export default updateSearchQuery;