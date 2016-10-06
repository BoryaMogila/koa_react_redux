import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router'
import Helmet from "react-helmet"
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
            <div className="jumbotron">
                <Helmet
                    title={post.title}
                    meta={[
                        {"name": "description", "content": post.text}
                    ]}
                    link={[
                        {"rel": "stylesheet", "href": "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.4/css/bootstrap.css"}
                    ]}
                />
                <div className="container">
                    <h1 className="display-3">{post.title}</h1>
                    <p>{post.text}</p>
                    <p>
                        <Link className="btn btn-primary btn-lg" href="/app/" role="button">Return</Link>
                    </p>
                </div>
            </div>
        );
    }
 }
function mapStateToProps(state, ownProps) {
    return {
        post: state.posts[ownProps.params.id]
    };
}

export default connect(mapStateToProps)(Post);