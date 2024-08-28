// Get the client
const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    port: '3308',
    user: 'root',
    password: '0915166497Bc#',
    database : 'pizza_order',
    waitForConnections: true,
    connectionLimit: 100,
    queueLimit : 0
})

module.exports = connection