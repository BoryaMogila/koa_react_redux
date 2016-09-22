import React from 'react';
import ReactDomServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { createMemoryHistory, match, RouterContext } from 'react-router';
import fetchComponentData from './../helpers/fetchComponentData';
import {syncHistoryWithStore} from 'react-router-redux'
import Html from '../../src/components/Html';
import createRoutes from '../../src/routes';
import {configureStore} from './../../src/storeCinfigurator'

export default async function(ctx) {
    const memoryHistory = createMemoryHistory(ctx.originalUrl);
    const routes = createRoutes();
    const store = configureStore(memoryHistory, {}, []);
    const history = syncHistoryWithStore(memoryHistory, store);
    const location = ctx.originalUrl;
    let renderWait, component;
    console.log(location)
    match({history, routes, location},  function (error, redirectLocation, renderProps){
        renderWait = fetchComponentData(
            store.dispatch,
            renderProps.components,
            renderProps.params,
            renderProps
        ).then(() => {
            component = (
                <Provider store={store}>
                        <RouterContext {...renderProps} />
                </Provider>
            );
        });


    });
    if (renderWait) {
        let html = await renderWait;
        ctx.body = '<!doctype html>\n' +
            ReactDomServer.renderToString(<Html component={component} store={store} />);
    }

}