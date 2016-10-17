import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router'
import Helmet from "react-helmet"
import {getPosts, deletePost} from '../actions'



class Posts extends Component {
    constructor(props) {
        super(props);
    }
    static fetchData(dispatch, uriParams, allProps = {}) {
        const promiseArr = [
            dispatch(getPosts()),
        ];
        return Promise.all(promiseArr);
    }
    showPosts = () => {
        const {posts, dispatch} = this.props;
        return posts.map((post, index) => {
            return (
                <div className="list-group-item" key={index}>
                    <Link className="inline" to={`/app/post/${post.id}`} >
                        <div>{post.title}</div>
                    </Link>
                    <div className="btn-group">
                        <Link to={`/app/edit-post/${post.id}`}
                                className="btn btn-sm btn-primary inline">Редактировать</Link>
                        <button onClick={() => dispatch(deletePost(post.id))}
                            className="btn btn-sm btn-danger inline">Удалить</button>
                    </div>
                </div>
            );
        })
    };
    render(){
        return (
            <div>
                <Helmet
                    title="Posts about react"
                    meta={[
                        {"name": "description", "content": "Description inserted by helmet"}
                    ]}
                    link={[
                        {"rel": "stylesheet", "href": "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.1.1/css/bootstrap-rtl.css"}
                    ]}
                />
                <div className="list-group">
                    {this.showPosts()}
                </div>
                <Link to="/app/add-post/" className="btn btn-primary btn-sm">Создать статью</Link>
            </div>
        );
    }
}
function mapStateToProps(state, ownProps) {
    return {
        posts: state.posts
    };
}

export default connect(mapStateToProps)(Posts);