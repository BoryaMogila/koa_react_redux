import router from '../routes';

export default function (app){
    app
        .use(router.routes())
        .use(router.allowedMethods());
};