import {GET_POSTS_FULFILLED} from '../actions/actionsTypes';


export default function(state = [], action = {}){
    switch (action.type){
        case GET_POSTS_FULFILLED:
            return action.payload;
        default:
            return state;
    }

}