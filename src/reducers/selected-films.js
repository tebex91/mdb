const updateSelectedFilms = (state, action) => {
    if(state === undefined) {
        return [];
    }
    const { selectedFilms } = state;

    switch(action.type) {
        case 'UPDATE_SELECTED_FILMS':
            return updateList(selectedFilms, action.payload);
        case 'REMOVE_SELECTED_FILM':
            return removeFilm(selectedFilms, action.payload);
        case 'REMOVE_ALL_SELECTED_FILMS':
            return [];
        default:
            return selectedFilms;
    }
}

const removeFilm = (selectedList, filmId) => {
    const film = selectedList.find(({id}) => id === filmId);
    const idx = selectedList.indexOf(film);
    return [
        ...selectedList.slice(0, idx),
        ...selectedList.slice(idx + 1)
    ]
}

const updateList = (selectedList, selectedFilm) => {
    const film = selectedList.find(({id}) => id === selectedFilm.id);
    const idx = selectedList.indexOf(film);

    if (idx > -1) {
        return [
            ...selectedList.slice(0, idx),
            ...selectedList.slice(idx + 1)
        ]
    }

    return [...selectedList, selectedFilm]
}

export default updateSelectedFilms;