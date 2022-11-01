const express = require("express")
const router = express.Router()
//--------------------------------------
// Sign Up or Registration
router.get("/signup", (req, res) => {
    res.render("signup"); // opens ejs file
})
router.post("/signup", (req, res) => {
    const id = req.body.id; // id is name of input tag
    const name = req.body.name;
    const password = req.body.password;

    const query = `INSERT INTO signup (id, name, password) 
    VALUES ("${id}", "${name}", "${password}")`;

    con.query(query, function (err, result) {
        if (err) {
            throw err;
        }
        else {
            res.redirect("/signin"); //change routes
        }
    })
})
//--------------------------------------
// Sign In
router.get("/signin", (req, res) => {
    res.render("signin");
})
router.post("/signin", (req, res) => {
    const id = req.body.id;
    const password = req.body.password;

    const query = `select * from signup where id = "${id}" and password = "${password}"`;

    con.query(query, function (err, result) {
        if (err) throw err;
        res.redirect("/");
    })
})
//--------------------------------------
// Home Page
router.get("/home", (req, res,) => {
    res.render('home');
});

module.exports = router;