const express = require("express")
const mysql = require("mysql");
const router = express.Router()
const app = express()
const path = require('path')

app.set('view engine', 'ejs')
const publicPath = path.join(__dirname, 'public')
app.use(express.static(publicPath))
//--------------------------------------
// Data base connection code
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'webprogramming'
});

con.connect((error) => {
    if (error) {
        console.warn('error')
    }
    else {
        console.warn('Database connected')
    }
})
//--------------------------------------
// Fetching data from table and rendering page
app.get("/", (req, res) => {
    con.query("select * from users", (error, user_data) => {
        if (error) {
            throw error;
        }
        else {
            res.render('displayTable', { data: user_data })
        }
    })
})
//--------------------------------------
module.exports = router

app.listen(3000);