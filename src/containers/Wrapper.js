import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router'

class Wrapper extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hello: 'Hello'
        };
    }

    render(){
        let {name} = this.props.params;
        return (
            <div>{this.state.hello} {name} <Link to="/jsadmin/baseAuto/listAuto/">Тест</Link></div>
        );
    }
}


export default Wrapper;