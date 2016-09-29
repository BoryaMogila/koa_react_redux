import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router'
import Helmet from "react-helmet"
import {getPosts} from '../actions'


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
        return this.props.posts.map((post, index) => {
            return (
                <Link key={index} to={`/app/post/${index}`} >
                    <div>{post.title}</div>
                </Link>
            );
        })
    };
    render(){
        return (
            <div>
                <Helmet
                    title="Posts about react"
                />
                {this.showPosts()}
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