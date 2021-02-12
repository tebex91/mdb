const updateQueryButtons = (state, action) => {
    if(state === undefined) {
        return [
            {name: 'popular', path: '/popular', isChosen: false},
            {name: 'top rated', path: '/top_rated', isChosen: true},
            {name: 'upcoming', path: '/upcoming', isChosen: false}
        ]
    }

    const { queryButtons } = state;

    const oldItem = queryButtons.find(({ isChosen }) => isChosen === true );
    const oldIdx = queryButtons.indexOf(oldItem);
    const clearArr = updateButton(queryButtons, oldIdx);

    if(action.type === 'UPDATE_CURRENT_PATH') {
        const chosenItem = queryButtons.find(({ path }) => path === action.payload);
        const newIdx = queryButtons.indexOf(chosenItem);
        return updateButton(clearArr, newIdx);
    }

    return queryButtons;
}

const updateButton = (arr, idx) => {
    if(idx === -1) {
        return arr
    }
    return [
        ...arr.slice(0, idx),
        { ...arr[idx], isChosen: !arr[idx].isChosen },
        ...arr.slice(idx + 1)
    ]
}

export default updateQueryButtons;