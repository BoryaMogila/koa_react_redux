export default (dispatch, components, params, allParams) => {
    return Promise.all(
        components
            .filter(component => typeof component.fetchData === 'function')
            .map(component => component.fetchData(dispatch, params, allParams))
    );
}