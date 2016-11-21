require("./app/app.js");

export default const seoAsyncAction = ({dispatch}) => {
   return superagent
           .get(`https://dom.ria.com/getSeo/`)
           .then((res) => {
              return dispatch({
                 type: "GET_SEO",
                 payload: res.body
              })
           })
}
