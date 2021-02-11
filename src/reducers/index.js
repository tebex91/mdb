import updateFilmList from './film-list';
import updateFilmDetails from './film-details';
import updateQueryButtons from './query-buttons';
import updateMarkedFilms from './marked-films';

const reducer = (state, action) => {
    return {
        filmList: updateFilmList(state, action),
        filmDetails: updateFilmDetails(state, action),
        queryButtons: updateQueryButtons(state, action),
        markedFilms: updateMarkedFilms(state, action)
    }
}

export default reducer;