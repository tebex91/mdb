const updateQueryButtons = (state, action) => {
    if(state === undefined) {
        return [
            {name: 'popular', func: 'getPopular', isChosen: true},
            {name: 'top rated', func: 'getTopRated', isChosen: false},
            {name: 'upcoming', func: 'getUpcoming', isChosen: false}
        ]
    }

    const { queryButtons } = state;

    const oldItem = queryButtons.find(({ isChosen }) => isChosen === true );
    const oldIdx = queryButtons.indexOf(oldItem);
    const clearArr = updateButton(queryButtons, oldIdx);

    if(action.type === 'UPDATE_CHOSEN_BTN') {
        const chosenItem = queryButtons.find(({ name }) => name === action.payload);
        const newIdx = queryButtons.indexOf(chosenItem);
        return updateButton(clearArr, newIdx);
    }

    if(action.payload === state.searchButton.func) {
        return clearArr;
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