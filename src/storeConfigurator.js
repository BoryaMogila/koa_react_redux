import React from 'react'
import {render} from 'react-dom';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'

import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

import { routerReducer, routerMiddleware } from 'react-router-redux'
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise-middleware'
import promiseErrorLogger from './middlewares/promiseErrorLogger'
import thunkMiddleware from 'redux-thunk'
import reduxMulti from 'redux-multi'
import reducers from './reducers'

export function configureStore(history, initialState, middlewares) {

    //підключаємо dev tools
    let devTools = f => f, DevTools, devtoolsContainer;
    if (typeof window === 'object') {
        if (window.devToolsExtension)
            devTools = window.devToolsExtension();
        else {
            devtoolsContainer = document.getElementById('devtools');
            if (devtoolsContainer) {
                DevTools = createDevTools(
                    <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
                        <LogMonitor theme="tomorrow" preserveScrollTop={false}/>
                    </DockMonitor>
                );
                devTools = DevTools.instrument();
            }
        }
    }

    const store = createStore(
        combineReducers({
            ...reducers
        }),
        initialState,
        compose(
            applyMiddleware(
                routerMiddleware(history),
                thunkMiddleware,
                promiseErrorLogger,
                promiseMiddleware(),
                reduxMulti,
                ...middlewares
            ),
            devTools
        )
    );

    //якщо рендеринг відбувається в браузері і в браузері немає розширення devToolsExtension, то підключаєм стандартний devTools від React
    if (typeof window === 'object' && !window.devToolsExtension && document.getElementById('devtools')) {
        render(
            <Provider store={store}>
                <DevTools/>
            </Provider>,
            devtoolsContainer
        );
    }

    return store
}