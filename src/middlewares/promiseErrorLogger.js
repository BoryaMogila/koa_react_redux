export default store => next => action => {
    const errorHandler = error => {
        console.error('\n\n', error, '\n\n');
    };

    if (action) {
        if (action.catch && typeof action.catch === 'function') {
            action.catch(errorHandler);
        }
        if (action.payload && action.payload.catch && typeof action.payload.catch === 'function') {
            action.payload.catch(errorHandler);
        }
    }

    return next(action);
}