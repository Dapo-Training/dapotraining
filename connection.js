const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'classroom_user',
    password: 'password1234',
    database: 'classroom'
});

connection.connect();

module.exports = connection;