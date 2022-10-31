const { query } = require("express");
const express = require("express")
const mysql = require("mysql");
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
        console.warn('error' + JSON.stringify(err, undefined, 2))
    }
    else {
        console.warn('Database connected')
    }
})
//--------------------------------------
// Display Views
exports.Display = (req, res, displayFile, pquery, pview) => {
    let CountQuery = `SELECT COUNT(*) FROM users`;
    con.query(CountQuery, (err, totalMovies, fields) => {
        let movieCount = totalMovies[0]["COUNT(*)"];
        let page = req.query.page ? req.query.page : 1;
        let moviesPerPage = req.query.moviesPerPage ? req.query.moviesPerPage : 4;
        let startLimit = (page - 1) * moviesPerPage;
        let totalPages = Math.ceil(movieCount / moviesPerPage);

        fquery = `${pquery} LIMIT ${startLimit}, ${moviesPerPage}`

        con.query(fquery, (error, user_data) => {
            if (error) {
                throw error;
            }
            else {
                res.render(displayFile, {
                    data: user_data,
                    movies: user_data,
                    title: "Movies",
                    movieCount,
                    page,
                    totalPages,
                    moviesPerPage,
                    view: pview,
                })
            }
        })
    })
}
//--------------------------------------
// Input User Data
exports.Input = (req, res) => {
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

}
//--------------------------------------
exports.Delete = (request, response) => {

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

}
//--------------------------------------
exports.Edit = (request, response) => {
    var id = request.params.id;
    var query = `SELECT * FROM users WHERE id = "${id}"`;
    con.query(query, function (error, data) {
        response.render('updateTable', { userData: data[0] });
    });
}
//--------------------------------------
exports.edited = (request, response) => {

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

}
//--------------------------------------
// pagination is not required so didnot use Display()
exports.search = (request, response, next) => {

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
}
exports.Gender = (request, response, file) => {
    var gender = request.body.gender;
    console.log(gender);
    var query = `SELECT * FROM users WHERE gender = "${gender}"`;
    this.Display(request, response, file, query)
}