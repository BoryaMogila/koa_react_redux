
import React, { Component } from 'react';

import SearchformAuto_Marka from './auto/marka.js';

export default class SearchformAuto extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        let renderProps = this.props;

        return (
            <div id='container'>

            </div>
        );
        // return (
        //     <div id='container'>
        //         <SearchformAuto_Marka  {...renderProps} />
        //     </div>
        // );
    }
}