import React from 'react';
import Route from 'react-router/lib/Route'
import IndexRoute from 'react-router/lib/IndexRoute'
import App from './components/App';

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
    ),
    addPost = (nextState, callback) => require.ensure(
        [],
        (require) => {
            callback(null, require("./containers/EditPost").default)
        }
    ),
    editPost = (nextState, callback) => require.ensure(
        [],
        (require) => {
            callback(null, require("./containers/EditPost").default)
        }
    );

function createRoutes() {
    return (
        <Route path="/app/" component={App}>
            <IndexRoute getComponent={getPosts}/>
            <Route path='post/:id' getComponent={getPost}/>
            <Route path='edit-post/:id' getComponent={editPost}/>
            <Route path='add-post/' getComponent={editPost}/>
        </Route>
    )
}

export default createRoutes
