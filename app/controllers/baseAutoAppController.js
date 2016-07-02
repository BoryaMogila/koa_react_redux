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
import {configureStore} from './../../src/store';
import autoModel from '../model/auto.js';


const baseAutoAppController = {};

baseAutoAppController.listAuto = async (ctx) => {


    const memoryHistory = createMemoryHistory(ctx.originalUrl);
    const store = configureStore(memoryHistory,{},[]);
    const location = ctx.originalUrl;

    let renderWait;
    let res = [];
    // let res =  await autoModel.getAuto('1').then(function(rows){
    //     return rows;
    // }, function(err){
    //     return false;
    // });

   // let res = await ctx.mysqlQuery('admin_user').get({});


    store.dispatch({
        type: 'STORE_FOR_APP',
        payload: 'test'
    })


    match({routes, location},  function (error, redirectLocation, renderProps){

        renderProps.params.items = res;
        renderProps.params.name = 'Andrey';
        renderProps.params.auto = {};
        renderProps.params.auto.marka = 4;


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

    let html = await renderWait;

    await ctx.render('index', {html, state: JSON.stringify(store.getState())});
};



export default baseAutoAppController;