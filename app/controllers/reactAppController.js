import React from 'react';
import ReactDomServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createMemoryHistory, match, RouterContext } from 'react-router';
import fetchComponentData from './../helpers/fetchComponentData';
import {syncHistoryWithStore} from 'react-router-redux'
import axios from 'axios'

import routes from '../../src/routes';
import reducers from '../../src/reducers';
import {configureStore} from './../../src/store'



export default async function (ctx) {

    const memoryHistory = createMemoryHistory(ctx.originalUrl);
    const store = configureStore(memoryHistory,{},[]);

    const history = syncHistoryWithStore(memoryHistory, store);
    const location = ctx.originalUrl;

    if(location == '/favicon.ico') return;

    let renderWait,
        getStoreForApp;
    match({history, routes, location },  function (error, redirectLocation, renderProps){
        getStoreForApp = axios.get('http://market.rest.local/news/tickets_for_action/36').then((res) =>{
            return store.dispatch({
                type: 'STORE_FOR_APP',
                payload: res
            })
        });

        renderWait = fetchComponentData(
            store.dispatch,
            renderProps.components,
            renderProps.params,
            renderProps.location.query
        ).then(() => {
            return ReactDomServer.renderToString(
                <Provider store={store}>
                    <RouterContext {...renderProps} />
                </Provider>
            );
        });

    });
    
         
    
    await getStoreForApp;
 
    let html = await renderWait;
      
    await ctx.render('index', {html, state: JSON.stringify(store.getState())});

}