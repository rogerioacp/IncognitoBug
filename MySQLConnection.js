import * as mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'targetDatabase',
    user: 'admin',
    password: '123456789',
});

connection.connect();

//Trigger the pr review
