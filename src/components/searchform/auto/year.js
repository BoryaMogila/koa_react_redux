import React, { Component } from 'react';

class SearchformAuto_Marka extends React.Component {
    constructor(props) {
        super(props);
    }
    handleClick() {
        console.log(this); // null
    }
    render() {
        return (
            <div onClick={this.handleClick}></div>
    );
    }
}

export default SearchformAuto_Marka;

// export  class SearchformAuto_Marka extends Component {
//     constructor(props) {
//         super(props);
//     }
//
//     onChange(e) {
//         console.log('dddd')
//     }
//     render() {
//         return (
//                 <div>
//             <select onChange={this.onChange}>
//                 <option>1</option>
//                <option>2</option>
//             </select>
//     );
//     }
//
// }

// export  class SearchformAuto_Model extends Component {
//     render() {
//         return (
//             <select></select>
//     );
//     }
// }
//
// export  class SearchformAuto_Year extends Component {
//     render() {
//         return (
//             <select></select>
//     );
//     }
// }
//
// export  class SearchformAuto_Body extends Component {
//     render() {
//         return (
//             <select></select>
//     );
//     }
// }

