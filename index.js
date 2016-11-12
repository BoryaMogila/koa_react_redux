require("./app/app.js");

// ./routes
import React from 'react';
import {Route, IndexRoute} from 'react-router'

const getSomeComponent = (nextState, callback) => require.ensure(
	[], (require) => {
		callback(null,require("./SomeComponent").default)
	}
      ),
      getAnotherComponent = (nextState, callback) => require.ensure(
        [], (require) => {
           	callback(null,require("./SomeComponent").default)
        }
      );
export default (
   <Route path="/" component={Layout}>
       <IndexRoute getComponent={getSomeComponent }/>
       <Route path=”/another” getComponent={getAnotherComponent }/>
   </Route>
)
