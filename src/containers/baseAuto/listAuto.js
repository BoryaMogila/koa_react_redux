import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router'

import SearchformAuto from '../../components/searchform/auto'

class baseAuto_listAuto extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hello: 'Hello'
        };
    }

    render(){

        let name = this.props.name ? this.props.name : this.props.params.name;

        let rows = [];

        let renderProps = this.props;

        return (
            <div onClick={this._handleClick}>
                <SearchformAuto {...renderProps} />
                {this.state.hello} {name} <Link to="/jsadmin/">Главная</Link>
                <table className="table">
                    <tbody>
                    {rows}
                    </tbody>
                </table>
            </div>
        );

    }
    _handleClick() {
        console.log('ddd');
    }
}
function mapStateToProps(state){
    return { name: state.somebody.name}

}

export default connect(mapStateToProps)(baseAuto_listAuto);
