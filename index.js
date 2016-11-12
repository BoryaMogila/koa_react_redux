require("./app/app.js");

import {renderToString} from 'react-dom/server';
import MyComponent from './MyComponent';

async function reactApp(ctx){
	ctx.body = renderToString(MyComponent);
}

export default reactApp;
