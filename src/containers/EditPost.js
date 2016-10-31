import React from 'react';
import { Component } from 'react';
import Helmet from "react-helmet"
import {connect} from 'react-redux'
import PostForm from './PostForm'
import {Link} from 'react-router';
import {push} from 'react-router-redux';
import {getPosts, initialEditPost, addOrEditPost, deletePost} from '../actions'

class EditPost extends Component{
    constructor(props) {
        super(props);
    }
    static fetchData(dispatch, uriParams, allProps = {}) {
        const {id} = allProps.params;
        const promiseArr = [
            dispatch(getPosts()),
            initialEditPost(id, dispatch)
        ];
        return Promise.all(promiseArr);
    }
    componentDidMount(){
        let {dispatch, params: {id}, post} = this.props;
        if(id && !post){ dispatch(push('/app/add-post/'))}
        initialEditPost(id, dispatch)

    }
    componentWillReceiveProps(newProps){
        let {dispatch, params: {id}} = this.props;
        let {id: newId} = newProps.params;
        if(id != newId){
            initialEditPost(newId, dispatch);
        }
    }
    deleteSelectedPost = () => {
        const {dispatch, post} = this.props;
        dispatch(deletePost(post.id));
        dispatch(push('/app/'));
    };
    handleSubmit = (values) => {
        const {dispatch} = this.props;
        return addOrEditPost({...values, dispatch});
        // Do something with the form values

    };
    render() {
        let {post, dispatch} = this.props;
        return (
            <div>
                <Helmet
                    title={`${post ? 'Edit' : 'Add'} post`}
                    meta={[
                        {"name": "description", "content": `Page for ${post ? 'edit' : 'add'} post`}
                    ]}
                    link={[
                        {"rel": "stylesheet", "href": "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.1.1/css/bootstrap-rtl.css"}
                    ]}
                />
                <PostForm
                    dispatch={dispatch}
                    submitText={post? 'Обновить статью' : 'Создать статью'}
                    deletePost={post ? this.deleteSelectedPost : null}
                    onSubmit={this.handleSubmit} />
                <Link to="/app/">Вернутся</Link>
            </div>
        );
    }
}
function mapStateToProps(state, ownProps){
    let post = state.posts.filter(post => post.id == ownProps.params.id);
    return {
        post: post.length ? post[0] : null
    };
}
export default connect(mapStateToProps)(EditPost);