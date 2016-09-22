import Koa from 'koa';
import config from 'config';
import serve from 'koa-static';

import bodyparser from './helpers/bodyParser';
import render from './helpers/render';
import convert from 'koa-convert';
import router from './helpers/router';


let app = new Koa();




bodyparser(app);
render(app, config);
app.use(convert(serve('/var/www/html/isomorphicSkeleton/public')));
router(app);

app.listen(config.server.port, function () {
    console.log('%s listening at port %d', config.app.name, config.server.port);
});