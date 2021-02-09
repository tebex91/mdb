import updateFilmList from './film-list';
import updateSearchQuery from './search-query';
import updateSearchButton from './search-button';
import updateQueryButtons from './query-buttons';
import updateActiveButton from './active-button';
import updatePageNumber from './page-number';

const reducer = (state, action) => {
    return {
        filmList: updateFilmList(state, action),
        searchQuery: updateSearchQuery(state, action),
        searchButton: updateSearchButton(),
        queryButtons: updateQueryButtons(state, action),
        activeButton: updateActiveButton(state, action),
        pageNumber: updatePageNumber(state, action)
    }
}

export default reducer;