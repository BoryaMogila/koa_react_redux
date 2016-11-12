require("./app/app.js");

// ./fetchComponentData
export default (dispatch, components, params, props) => {
    return Promise.all(
        components
            .filter(component => typeof component.fetchData === 'function')
            .map(component => component.fetchData({dispatch, params, props}))
    );
}
