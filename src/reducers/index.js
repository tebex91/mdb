import updateFilmList from './film-list';

const reducer = (state, action) => {
    return {
        filmList: updateFilmList(state, action)
    }
}

export default reducer;