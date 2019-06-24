var mysql = require('mysql');
const keys = require('./config/keys');
var db;

function connectDatabase() {
    if (!db) {
        db = mysql.createConnection({
            host: "localhost",
            user: keys.database.username,
            password: keys.database.password,
            database: "courier"
          });

        db.connect(function(err){
            if(!err) {
                console.log('Database is connected!');
            } else {
                console.log('Error connecting database!');
            }
        });
    }
    return db;
}

module.exports = connectDatabase();
