import updateFilmList from './film-list';
import updateSearchQuery from './search-query';

const reducer = (state, action) => {
    return {
        filmList: updateFilmList(state, action),
        searchQuery: updateSearchQuery(state, action)
    }
}

export default reducer;