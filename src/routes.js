import React from 'react';
import Route from 'react-router/lib/Route'
import IndexRoute from 'react-router/lib/IndexRoute'
import App from './components/App';


if (typeof require.ensure !== 'function') require.ensure = (arg, cb) => cb(require);

const
    getPosts = (nextState, callback) => require.ensure(
        [],
        (require) => {
            callback(null, require("./containers/Posts").default)
        }
    ),
    getPost = (nextState, callback) => require.ensure(
        [],
        (require) => {
            callback(null, require("./containers/Post").default)
        }
    );

function createRoutes() {
    return (
        <Route path="/app/" component={App}>
            <IndexRoute getComponent={getPosts}/>
            <Route path='post/:id' getComponent={getPost}/>
        </Route>
    )
}

export default createRoutes