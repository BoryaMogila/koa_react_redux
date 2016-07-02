import Koa from 'koa';
import koa2Mysql from "koa2-mysql";
import config from 'config';
import serve from 'koa-static';

import bodyparser from './helpers/bodyParser';
import render from './helpers/render';
import router from './helpers/router';


let app = new Koa();




bodyparser(app);
render(app, config);
app.use(serve(__dirname + '/../public'));
console.log(koa2Mysql);
app.use(koa2Mysql)

router(app);

app.listen(config.server.port, function () {
    console.log('%s listening at port %d', config.app.name, config.server.port);
});