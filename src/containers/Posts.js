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
                <Link className="list-group-item" key={index} to={`/app/post/${index}`} >
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