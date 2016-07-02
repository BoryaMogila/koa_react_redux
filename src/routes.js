import React from 'react';
import { Route, IndexRoute} from 'react-router';

import Wrapper from './containers/Wrapper';
import baseAuto_listAuto from './containers/baseAuto/listAuto';

import Rend from './components/App';


export default(
    <Route path="/jsadmin/" component={Rend} >
        <IndexRoute component={Wrapper} />
        <Route path="/jsadmin/baseAuto/listAuto" component={baseAuto_listAuto}/>
    </Route>
);