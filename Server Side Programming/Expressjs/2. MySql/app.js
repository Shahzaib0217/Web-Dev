const express = require("express")
const app = express()
const mysql = require("mysql");
const path = require('path')
const router = express.Router()
var pdf = require('html-pdf');
let options = { format: 'A4' };
const fs = require("fs")
// importing multer
const multer = require('multer');

const publicPath = path.join(__dirname, 'public')
app.use(express.static(publicPath)) //static rendering (for accessing images, external linked files)
app.set('view engine', 'ejs')  // set template engine ejs

// for data decoding (encoded by post)
const bodyParser = require("body-parser");
const { ok } = require("assert");
const { pbkdf2 } = require("crypto");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//--------------------------------------
// multer file upload
// returning storage engine that can upload files
var storage = multer.diskStorage({
    destination: function (req, file, callback) { callback(null, './public/images') }, // err,dest
    filename: function (req, file, callback) {
        callback(null, file.originalname)
    }
});

var upload = multer({ storage: storage });
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
const printusers = (req, res) => {
    let query = "select * from users"
    con.query(query, (error, user_data) => {
        if (error) {
            throw error;
        }
        else {
            res.render('displayTable', { data: user_data },
                function (err, html) {
                    pdf
                        .create(html, options)
                        .tofile("uploads/displayTable.pdf", function (err, result) {
                            if (err) {
                                return console.log(err);
                            }
                            else {
                                let allUsers = fs.readFileSync("uploads/displayTable.pdf")
                                res.header("content-type", "application/pdf")
                                res.send(allUsers)
                            }
                        })
                })
        }
    })
}
//--------------------------------------
app.get("/print", printusers)
//--------------------------------------
app.get("/signup", (req, res) => {
    res.render("signup");
})

app.post("/signup", (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const password = req.body.password;

    const query = `INSERT INTO signup (id, name, password) 
    VALUES ("${id}", "${name}", "${password}")`;

    con.query(query, function (err, result) {
        if (err) throw err;
        res.redirect("/signin");
    })

})


app.get("/signin", (req, res) => {
    res.render("signin");
})

app.post("/signin", (req, res) => {
    const id = req.body.id;
    const password = req.body.password;

    const query = `select * from signup where id = "${id}" and password = "${password}"`;

    con.query(query, function (err, result) {
        if (err) throw err;
        res.redirect("/");
    })
})
//--------------------------------------
// Fetching data from table and rendering page
app.get("/", (req, res) => {
    let CountQuery = `SELECT COUNT(*) FROM users`;
    con.query(CountQuery, (err, totalMovies, fields) => {
        let movieCount = totalMovies[0]["COUNT(*)"];
        let page = req.query.page ? req.query.page : 1;
        let moviesPerPage = req.query.moviesPerPage ? req.query.moviesPerPage : 4;
        let startLimit = (page - 1) * moviesPerPage;
        let totalPages = Math.ceil(movieCount / moviesPerPage);

        con.query(`SELECT * FROM users 
        LIMIT ${startLimit}, ${moviesPerPage}`, (error, user_data) => {
            if (error) {
                throw error;
            }
            else {
                res.render('displayTable', {
                    data: user_data,
                    movies: user_data,
                    title: "Movies",
                    movieCount,
                    page,
                    totalPages,
                    moviesPerPage,
                })
            }
        })
    })
})
//--------------------------------------
app.get("/listview", (req, res) => {
    let CountQuery = `SELECT COUNT(*) FROM users`;
    con.query(CountQuery, (err, totalMovies, fields) => {
        let movieCount = totalMovies[0]["COUNT(*)"];
        let page = req.query.page ? req.query.page : 1;
        let moviesPerPage = req.query.moviesPerPage ? req.query.moviesPerPage : 4;
        let startLimit = (page - 1) * moviesPerPage;
        let totalPages = Math.ceil(movieCount / moviesPerPage);

        con.query(`SELECT * FROM users 
        LIMIT ${startLimit}, ${moviesPerPage}`, (error, user_data) => {
            if (error) {
                throw error;
            }
            else {
                res.render('displayTable2', {
                    data: user_data,
                    movies: user_data,
                    title: "Movies",
                    movieCount,
                    page,
                    totalPages,
                    moviesPerPage,
                })
            }
        })
    })
})
//--------------------------------------
app.get("/input", (req, res,) => {
    res.render('inputTable');
});

app.get("/home", (req, res,) => {
    res.render('home');
});
//--------------------------------------
app.post("/inputData", upload.single("imageFile"), (req, res) => {
    if (!req.file) {
        console.log("file not uploaded!");
    }

    // simple insertion
    var id = req.body.userid;
    var name = req.body.name;
    var gender = req.body.gender;
    var image_path = req.file.originalname;

    var query = `INSERT INTO users (id, name, gender, image)
    VALUES("${id}", "${name}", "${gender}", "${image_path}")`;

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
        gender = "${gender}",
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
app.post('/search', function (request, response, next) {

    var id = request.body.search;

    var query = `
	SELECT * FROM users WHERE id= "${id}"
        `;

    con.query(query, function (error, user_data) {

        if (error) {
            throw error;
        }
        else {
            response.render('displayTable', { data: user_data, title: "Search", })
        }

    });
});

// module.exports = router;
app.listen(3300);