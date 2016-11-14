require("./app/app.js");

export default const fetchComponentData = (dispatch, components, params, props) => {
   return Promise.all(
       components
           .filter(
                component => typeof component.fetchData === 'function'
           )
           .map(component => component.fetchData(
                {dispatch, params, props}
           )));
}
