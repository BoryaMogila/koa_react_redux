import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'


import somebody from './somebodyReducer'
const rootReducer = combineReducers({
    somebody,
    routing: routerReducer
});

export default rootReducer;