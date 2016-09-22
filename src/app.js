import React from 'react';
//noinspection JSUnresolvedVariable
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import browserHistory from 'react-router/lib/browserHistory'
import match from 'react-router/lib/match'
import Router from 'react-router/lib/Router'
import { syncHistoryWithStore } from 'react-router-redux'
import { configureStore} from './storeCinfigurator'
import createRoutes from './routes';


// Chrome React Perf rely on a global variable called Perf
//noinspection JSUnresolvedVariable,ES6ModulesDependencies
if (process.env.NODE_ENV === 'development') {
    //noinspection JSUnresolvedFunction
    require('expose?Perf!react-addons-perf');
}

const store = configureStore(browserHistory, window.init, []);
const routes = createRoutes();
const history = syncHistoryWithStore(browserHistory, store);


// https://github.com/reactjs/react-router/blob/v2.4.1/docs/guides/ServerRendering.md#async-routes
match({routes, history}, (error, redirectLocation, renderProps) => {
    render(
        <Provider store={store}>
                <Router {...renderProps}/>
        </Provider>
        , document.getElementById('content')
    );
});


