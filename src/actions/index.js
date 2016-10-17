import {GET_POSTS, DELETE_POST, EDIT_POST} from './actionsTypes'
import superagentFactory from '../helpers/superagentFactory'
import {initialize} from 'redux-form'
import {push} from 'react-router-redux'

const superagent = superagentFactory({cacheTime: 1});

export function getPosts(){
    return {
        type: GET_POSTS,
        payload: superagent
            .get('/getPosts/')
            .then(res => res.body)
    }
}

export function deletePost(id){
    return {
        type: DELETE_POST,
        payload: superagent
            .get('/deletePost/')
            .query({id})
            .then(res => res.body)
    }
}
export function initialEditPost(id, dispatch){
    return superagent
        .get('/getPosts/')
        .then(res => res.body).then((posts) => {
        let post = posts.filter(post => post.id == id);
        return dispatch(initialize('post', post.length ? post[0] : {title: '', text: ''}))
    });

}
export function addOrEditPost({id, title, text, dispatch}){
    superagent
        .get('/editPost/')
        .query({id, title, text})
        .then(res => res.body)
        .then(({posts, status, id}) => {
            if(posts.length){
                dispatch({
                    type: GET_POSTS,
                    payload: posts
                })
            }
            if(status === 'ok'){
                dispatch(push(`/app/edit-post/${id}`))
            }

        })
}
