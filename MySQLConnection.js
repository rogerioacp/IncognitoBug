import * as mysql from 'mysql';

const connection = mysql.createConnection({host: 'targetDatabase', user: 'admin', password: 'password123456'});

connection.connect();

//Trigger the pr review
