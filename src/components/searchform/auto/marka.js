import React, { Component } from 'react';



class SearchformAuto_Marka extends React.Component {
    constructor() {
        super();

        this.handleInitialChange = this.handleInitialChange.bind(this);
        this.handleConfirmedChange = this.handleConfirmedChange.bind(this);

        this.state = {
            initial: "",
            confirmed: ""
        }
    }

    render() {
        const { initial, confirmed } = this.state;

        return (
            <div>
            <div>
            <input type="password" value={initial} onChange={this.handleInitialChange} />
    </div>
        <div>
        <input type="password" value={confirmed} onChange={this.handleConfirmedChange} />
    </div>
        <div>Match? {String(this.doPasswordsMatch(initial, confirmed))}</div>
        </div>
    );
    }

    handleInitialChange(evt) {
        this.setState({initial: evt.target.value});
    }

    handleConfirmedChange(evt) {
        this.setState({confirmed: evt.target.value});
    }

    doPasswordsMatch(initial, confirmed) {
        return initial.length > 0 && initial === confirmed;
    }
}


//
// class SearchformAuto_Marka extends React.Component {
//     constructor(props) {
//         super(props);
//
//         this.state = { text: '112' };
//         this.change = this.change.bind(this);
//     }
//
//     change(ev) {
//         this.setState({ text: ev.target.value*2 });
//         this.setState({ id: 'dd' });
//         console.log('ddsa');
//     }
//
//     render() {
//         let {text} = this.state;
//         return (<input type="text" value={text} onChange={this.change} />);
//     }
// }
export default SearchformAuto_Marka;

//
// class SearchformAuto_Marka extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { inspectionTime: 0 };
//         this.handleChange = this.handleChange.bind(this);
//
//     }
//     handleChange = (event) => {
//         console.log('ss');
//     }
//
//     render() {
//
//         return (
//             <div>
//
//               {this.state.inspectionTime}
//
//                 <select id='avv' onChange={this.handleChange}>
//                 <option value="0">1</option>
//                 <option  value="1">2</option>
//                 <option value="2">4</option>
//                 <option value="4">6</option>
//                 </select>
//             </div>
//         );
//
//     }
// }
//
// export default SearchformAuto_Marka;

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

