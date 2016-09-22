import bodyParser from 'koa-bodyparser';
import convert from 'koa-convert';

export default function bodyparser(app) {

    app.use(convert(bodyParser()));
};