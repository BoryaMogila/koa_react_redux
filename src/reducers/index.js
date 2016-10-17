import { routerReducer } from 'react-router-redux'
import { reducer as form } from 'redux-form'

import posts from './postsReducer'
const rootReducer = {
    posts,
    form,
    routing: routerReducer
};

export default rootReducer;