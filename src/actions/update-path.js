const updateCurrentPath = (dispatch) => (path) => {
    dispatch({
        type: 'UPDATE_CURRENT_PATH',
        payload: path
    })
}

export {
    updateCurrentPath
}