const updateActiveButton = (state, action) => {
    if(state === undefined) {
        return 'getPopular';
    }

    if(action.type === 'UPDATE_ACTIVE_BTN') {
        return action.payload;
    }

    return state.activeButton
}

export default updateActiveButton;