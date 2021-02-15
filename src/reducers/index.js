import updateFilmList from './film-list';
import updateFilmDetails from './film-details';
import updateQueryButtons from './query-buttons';
import updateSelectedFilms from './selected-films';
import updateTotalPages from './total-pages';

const reducer = (state, action) => {
    return {
        filmList: updateFilmList(state, action),
        filmDetails: updateFilmDetails(state, action),
        queryButtons: updateQueryButtons(state, action),
        selectedFilms: updateSelectedFilms(state, action),
        totalPages: updateTotalPages(state, action)
    }
}

export default reducer;