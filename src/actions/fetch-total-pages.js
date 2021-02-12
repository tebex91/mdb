const totalPagesLoaded = (pagesNum, func) => {
    return {
        type: 'FETCH_TOTAL_PAGES_SUCCESS',
        payload: {[func]: pagesNum}
    }
}

const totalPagesError = (func) => {
    return {
        type: 'FETCH_TOTAL_PAGES_FAILURE',
        payload: {[func]: null}
    }
}

const fetchTotalPages = (filmService, dispatch) => (func, query) => {
    filmService.getTotalPages(func, query)
        .then(data => {
            dispatch(totalPagesLoaded(data, func))
        })
        .catch(() => dispatch(totalPagesError(func)));
}

export {
    fetchTotalPages
}