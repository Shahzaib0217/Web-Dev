var express = require('express');
const session = require('express-session');
var router = express.Router();
const index = require("../controllers/index.controller")
const pdf = require("../controllers/pdf.controller")

/* GET home page. */
router.get('/', (req, res) => { res.render('home', { session: req.session }) });
// Login
router.get('/signin', (req, res) => { res.render('signin', { session: req.session, response: res }); });
router.post('/signin', (req, res) => { index.signin(req, res) });
router.get('/logout', (request, response) => {
    request.session.destroy();
    response.redirect("/");
});
// Register
router.get('/signup', (req, res) => { res.render('signup') });
router.post('/signup', (req, res) => { index.signup(req, res) });
// User View

// Admin View
router.get('/CustomTour', (req, res) => { res.render('CustomTour') });
router.post('/CustomTour', (req, res) => { res.render('CustomTourPDF', (err, html) => { pdf.convertpdf(req, res, err, html) }) });

module.exports = router;

