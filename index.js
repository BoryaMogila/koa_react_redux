require("./app/app.js");

// ./superagentFactory
export default (params) => {
    params = params || {};
    superagent.use(superagentPrefix(params.baseUrl || config.baseURL));
    //Включаємо у браузері кешування аякс запитів, щоб не повторювати ті ж самі запити на витяжку данних
    if (isBrowser()) superagentWithCache(superagent, undefined, {expiration: params.cacheTime || undefined});
    if (params.withPromise !== false) {
        superagentPromisePlugin.Promise = Promise;
        superagentPromisePlugin.patch(superagent);
    }
    return superagent;
}
