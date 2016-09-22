import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'


import posts from './postsReducer'
const rootReducer = {
    posts,
    routing: routerReducer
};

export default rootReducer;