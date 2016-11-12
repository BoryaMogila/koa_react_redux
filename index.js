require("./app/app.js");

// ./MyComponent
import React, {Component} from 'react';
import {connect} from ‘react-redux’;
import someAsyncAction from ‘./someAsyncAction’


class MyComponent extends Component{


	static fetchData({dispatch, params, props}){
	const promiseArr = [
            	dispatch(someAsyncAction (/*параметри для екшена*/));
        	];
        	return Promise.all(promiseArr);
}
componentDidMount(){
	const {props} = this,
	{dispatch, params} = props;
	MyComponent.fetchData({dispatch, params, props});
}
