import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router'
import {getPosts} from '../actions'

class Post extends Component {
    constructor(props) {
        super(props);
    }
    static fetchData(dispatch, uriParams, allProps = {}) {

        const promiseArr = [
            (allProps.posts ? allProps.posts : dispatch(getPosts())),
        ];
        return Promise.all(promiseArr);
    }
    render(){
        let {post} = this.props;
        return (
            <div>
                <div>{post.title}</div>
                <div>{post.text}</div>
            </div>
        );
    }
 }
function mapStateToProps(state, ownProps) {
    console.log(state);
    console.log(ownProps.params.id);
    return {
        post: state.posts[ownProps.params.id]
    };
}

export default connect(mapStateToProps)(Post);