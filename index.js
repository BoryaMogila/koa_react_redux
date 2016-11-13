require("./app/app.js");

import Koa from'koa';
import errorHeandler from '.errorHeandler'
import reactApp from './reactApp'
const app = new Koa();

app.use(errorHeandler);

app.use(reactApp);

app.listen(3000);
