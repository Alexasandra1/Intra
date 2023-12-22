const pgp = require('pg').Pool
const db = new pgp({
    user: 'postgres',
    password: 'your password',
    host: 'localhost',
    port: 5432,
    database: 'IntraDb'
});

module.exports = db
