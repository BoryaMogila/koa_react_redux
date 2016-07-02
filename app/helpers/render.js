import Render from 'koa-ejs';
import co from 'co';

export default function render(app, config) {

    Render(app, config.render);
    app.context.render = co.wrap(app.context.render);
};