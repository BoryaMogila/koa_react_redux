module.exports = {
    render: {
        root: "app/views",
        layout: "layout",
        viewExt: "ejs",
        cache: false,
        debug: true
    },
    server: {
        port: 3001
    },
    app: {
        name: "Isomorphic Koa 2"
    },
    database: {
        'master': {
            host: 'ovirt.ria.com',
            user: 'andrey',
            password: 'matyash1987',
            port: '3326',
            database: 'treba',
            connectionLimit: 10
        },
        'slave': {
            host: 'ovirt.ria.com',
            user: 'andrey',
            password: 'matyash1987',
            port: '3326',
            database: 'treba',
            connectionLimit: 10
        }
    }
};