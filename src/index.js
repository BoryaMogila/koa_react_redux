import React from 'react';
//noinspection JSUnresolvedVariable
import reactDom from 'react-dom'
import reactRedux from 'react-redux'
import Router from 'react-router'
import reactRouterRedux from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'
import reduxMulti from 'redux-multi'
import redux from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import BabelFish from 'babelfish'
import superagentWithCache from 'superagent-cache'
import superagentPrefix from 'superagent-prefix'
import superagent from 'superagent-use'
import superagentPromisePlugin from 'superagent-promise-plugin'



require.ensure(
    [],
    (require) => {
        require('./app.js')
    }
);