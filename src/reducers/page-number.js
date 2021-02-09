const updatePageNumber = (state, action) => {
    if(state === undefined) {
        return 1;
    }

    const { pageNumber } = state;
    switch (action.type) {
        case 'UPDATE_PAGE_NUMBER':
            return pageNumber + 1;
        case 'UPDATE_ACTIVE_BTN':
            return 1;
        default:
            return pageNumber;
    }
}

export default updatePageNumber;