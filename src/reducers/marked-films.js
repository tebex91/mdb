const updateMarkedFilms = (state, action) => {
    if(state === undefined) {
        return [];
    }
    const { markedFilms } = state;
    const film = action.payload;

    switch(action.type) {
        case 'UPDATE_MARKED_FILMS':
            return updateList(markedFilms, film);
        default:
            return markedFilms;
    }
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