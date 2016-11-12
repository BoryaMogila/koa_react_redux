require("./app/app.js");

import React, {Component} from 'react';
import SomeComponent from './SomeComponent';
import AnotherComponent from './AnotherComponent';


class MyComponent extends Component{
   render(){
      return(
	<div>
	   <SomeComponent />
           <AnotherComponent />
	</div>
      )
   }
}
export default MyComponent;
