import updateFilmList from './film-list';
import updateSearchQuery from './search-query';
import updateQueryButtons from './query-buttons';

const reducer = (state, action) => {
    return {
        filmList: updateFilmList(state, action),
        searchQuery: updateSearchQuery(state, action),
        queryButtons: updateQueryButtons(state, action)
    }
}

export default reducer;