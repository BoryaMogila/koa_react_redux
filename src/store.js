import React from 'react'

import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

import { routerMiddleware } from 'react-router-redux'
import reducers from './reducers';
export const DevTools = createDevTools(
    <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
        <LogMonitor theme="tomorrow" preserveScrollTop={false} />
    </DockMonitor>
);

export function configureStore(history, initialState, middlewares) {

    let devTools = [];
    if (typeof document !== 'undefined') {
        devTools = [ DevTools.instrument() ]
    }

    const store = createStore(
        reducers,
        initialState,
        compose(
            applyMiddleware(
                routerMiddleware(history),
                ...middlewares

            ),
            ...devTools
        )
    );

    return store
}