import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'
import { configureStore, DevTools } from './store'
import getStateForApp from './middlewares/getStateForApp'

import routes from './routes';
const store = configureStore(browserHistory, window.init, [getStateForApp]);
const history = syncHistoryWithStore(browserHistory, store);

render(
<Provider store={store}>
    <Router history={history} routes={routes} />
    </Provider>
    , document.querySelector('#conteiner')
);

render(
    <Provider store={store}>
        <DevTools/>
    </Provider>,
    document.getElementById('devtools')
);