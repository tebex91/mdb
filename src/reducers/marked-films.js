const updateMarkedFilms = (state, action) => {
    if(state === undefined) {
        return [];
    }
    const { markedFilms } = state;

    switch(action.type) {
        case 'UPDATE_MARKED_FILMS':
            return updateList(markedFilms, action.payload);
        case 'REMOVE_MARKED_FILM':
            return removeFilm(markedFilms, action.payload);
        case 'REMOVE_ALL_MARKED_FILMS':
            return [];
        default:
            return markedFilms;
    }
}

const removeFilm = (markedList, filmId) => {
    const film = markedList.find(({id}) => id === filmId);
    const idx = markedList.indexOf(film);
    return [
        ...markedList.slice(0, idx),
        ...markedList.slice(idx + 1)
    ]
}

const updateList = (markedList, markedFilm) => {
    const film = markedList.find(({id}) => id === markedFilm.id);
    const idx = markedList.indexOf(film);

    if (idx > -1) {
        return [
            ...markedList.slice(0, idx),
            ...markedList.slice(idx + 1)
        ]
    }

    return [...markedList, markedFilm]
}

export default updateMarkedFilms;