const mysql = require("mysql");
//--------------------------------------
// Data base connection code
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
});

con.connect((error) => {
    if (error) {
        console.warn('error' + JSON.stringify(error, undefined, 2))
    }
    else {
        console.warn('Database connected')
    }
})

module.exports = con;