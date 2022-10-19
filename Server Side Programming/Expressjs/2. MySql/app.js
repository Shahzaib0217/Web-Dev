const express = require("express")
const mysql = require("mysql");
const router = express.Router()
const app = express()
const path = require('path')

const publicPath = path.join(__dirname, 'public')
app.use(express.static(publicPath)) //static rendering (for accessing images, external linked files)
app.set('view engine', 'ejs')  // set template engine ejs

// for data decoding (encoded by post)
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
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
app.get("/input", (req, res,) => {
    res.render('inputTable');
});
//--------------------------------------
app.post("/inputData", (req, res) => {

    var id = req.body.userid;
    var name = req.body.name;
    var gender = req.body.gender;
    var image_path = req.body.image;

    var query = `INSERT INTO users (id, name, gender, image) 
    VALUES ("${id}", "${name}", "${gender}", "${image_path}")`;

    con.query(query, (error, data) => {

        if (error) {
            throw error;
        }
        else {
            // req.flash('success', 'User Data Inserted'); // popup message
            /* For working of flashes
            https://www.npmjs.com/package/connect-flash
            https://stackoverflow.com/questions/27202075/expressjs-res-redirect-not-working-as-expected
            */
            res.redirect('/');
        }

    });

});
//--------------------------------------
app.get('/delete/:id', function (request, response, next) {

    var id = request.params.id;

    var query = `
	DELETE FROM users WHERE id = "${id}"
	`;

    con.query(query, function (error, data) {

        if (error) {
            throw error;
        }
        else {
            response.redirect("/");
        }

    });

});
//--------------------------------------
app.get('/edit/:id', function (request, response, next) {

    var id = request.params.id;

    var query = `SELECT * FROM users WHERE id = "${id}"`;

    con.query(query, function (error, data) {

        response.render('updateTable', { userData: data[0] });
    });

});
//--------------------------------------
app.post('/edited/:id', function (request, response, next) {

    var id = request.params.id;
    var name = request.body.name;
    var gender = request.body.gender;
    var image_path = request.body.image;
    var query = `
	UPDATE users 
	SET name = "${name}",  
	gender = "${gender}" ,
    image = "${image_path}"
	WHERE id = "${id}"
	`;

    con.query(query, function (error, data) {

        if (error) {
            throw error;
        }
        else {
            response.redirect('/');
        }

    });

});
//--------------------------------------
// module.exports = router;
app.listen(3300);