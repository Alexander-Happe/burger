var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Thetree94%',
    database: 'burger_db'
});

connection.connect(function(err){
    if(err){
        console.error('Error connecting: ' + err.stack);
    }
    console.log('Connected as id ' + connection.threadId);
});

module.exports = connection;