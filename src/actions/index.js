import {GET_POSTS, SUCCESS, DELETE_POST, EDIT_POST} from './actionsTypes'
import superagentFactory from '../helpers/superagentFactory'
import {initialize, SubmissionError} from 'redux-form'
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
    const _error = id ? 'Статья не обновилась!': 'Статья не создалась!'
    return superagent
        .get('/editPost/')
        .query({id, title, text})
        .then(res => res.body)
        .then(({posts, status, id, errors}) => {
            if(posts.length){
                dispatch({
                    type: GET_POSTS + SUCCESS,
                    payload: posts
                })
            }
            if(status === 'error'){
                if (errors) {
                    throw new SubmissionError({...errors, _error})
                }
                throw new SubmissionError({_error});
            }
            if(status === 'ok'){
                dispatch(push(`/app/edit-post/${id}`))
            }

        })
}
