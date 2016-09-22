const config = {
    render    : {
        root: "app/views",
        layout: "layout",
        viewExt: "ejs",
        cache: false,
        debug: true
    },
    server    : {
        port: 4000
    },
    baseURL: "http://localhost:4000",
    app       : {
        name: "Isomorphic Koa 2"
    },
    js_domain : `//localhost:4000`,
};
// for cut server-side config
if (typeof cutCode === 'undefined') {
    Object.assign(config, {
        someSensitiveData: 'someSensitiveData'//can delete this, just example
    });
}

module.exports = config;