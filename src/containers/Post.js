import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router'
import Helmet from "react-helmet"
import {getPosts, deletePost} from '../actions'
import {push} from 'react-router-redux';

class Post extends Component {
    constructor(props) {
        super(props);
    }
    static fetchData(dispatch, uriParams, allProps = {}) {
        const promiseArr = [
            dispatch(getPosts()),
        ];
        return Promise.all(promiseArr);
    }
    deletePost = () => {
        let {dispatch, params: {id}} = this.props;
        dispatch(push('/app/'));
        dispatch(deletePost(id));

    };
    render(){
        let {post, dispatch} = this.props;
        return (
            <div className="jumbotron">
                <Helmet
                    title={post ? post.title : 'Статья удалена или не существовала!!!'}
                    meta={[
                        {"name": "description", "content": post ? post.text : 'Статья удалена или не существовала!!!'}
                    ]}
                    link={[
                        {"rel": "stylesheet", "href": "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.4/css/bootstrap.css"}
                    ]}
                />
                {post ? <div className="container">
                            <h1 className="display-3">{post.title}</h1>
                            <p>{post.text}</p>
                            <div>
                                <div className="btn-group">
                                    <Link className="btn btn-sm btn-primary" to="/app/" role="button">Вернутся</Link>
                                    <button
                                        onClick={this.deletePost}
                                        className="btn btn-sm btn-danger inline">Удалить</button>
                                    <Link className="btn btn-sm btn-primary" to={`/app/edit-post/${post.id}`}
                                        role="button">Редактировать</Link>
                                </div>
                            </div>
                        </div> :
                        <div className="container">
                            <h1 className="display-3">Статья удалена или не существовала!!!</h1>
                            <div>
                                <div className="btn-group">
                                    <Link className="btn btn-sm btn-primary" to="/app/" role="button">Вернутся</Link>
                                </div>
                            </div>
                        </div>}
            </div>
        );
    }
 }
function mapStateToProps(state, ownProps) {
    let post = state.posts.filter(post => post.id == ownProps.params.id);
    return {
        post: post.length ? post[0] : null
    };
}

export default connect(mapStateToProps)(Post);