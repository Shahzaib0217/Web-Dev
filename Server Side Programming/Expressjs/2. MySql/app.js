const mysql = require("mysql");

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: ''
});

con.connect((err) => {
    if (err) {
        console.warn('error')
    }
    else {
        console.warn('connected')
    }
})
con.query("select*from users", (err, result) => {
    console.warn("result", result)
})