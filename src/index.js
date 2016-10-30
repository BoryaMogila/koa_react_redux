import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import browserHistory from 'react-router/lib/browserHistory'
import match from 'react-router/lib/match'
import Router from 'react-router/lib/Router'
import { syncHistoryWithStore } from 'react-router-redux'
import { configureStore} from './storeConfigurator'
import createRoutes from './routes';

if (process.env.NODE_ENV === 'development') {
    require('expose?Perf!react-addons-perf');
}

const store = configureStore(browserHistory, window.init, []);
const routes = createRoutes();
const history = syncHistoryWithStore(browserHistory, store);

match({routes, history}, (error, redirectLocation, renderProps) => {
    render(
        <Provider store={store}>
                <Router {...renderProps}/>
        </Provider>
        , document.getElementById('content')
    );
});


