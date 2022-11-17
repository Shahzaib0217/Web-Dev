var express = require('express');
var router = express.Router();
const index = require("../controllers/index.controller")
const pdf = require("../controllers/pdf.controller")
const { Auth, noAuth, Verified, notVerified, } = require("../middlewares/authCheck.middleware");

/* GET home page. */
router.get('/', (req, res) => { res.render('home', { session: req.session }) });
// Signin
router.get('/signin', (req, res) => { res.render('signin', { session: req.session, response: res }); });
router.post('/signin', (req, res) => { index.signin(req, res) });
router.get('/logout', (request, response) => {
    request.session.destroy();
    response.redirect("/");
});
// Signup
router.get('/signup', noAuth, (req, res) => { res.render('signup') });
router.post('/signup', (req, res) => { index.signup(req, res) });
//[Auth, notVerified],
router.get("/verifyCode", (req, res) => index.verifyCode(req, res));
router.post("/verifyCode", (req, res) => index.verifyInsertedCode(req, res));
//Forget password
router.get('/forgetPassword', noAuth, (req, res) => { res.render('forgetPassword') });
router.post('/forgetPassword', (req, res) => { index.forgetPassword(req, res) });
// User View

// Admin View
router.get('/CustomTour', (req, res) => { res.render('CustomTour') });
router.post('/CustomTour', (req, res) => { res.render('CustomTourPDF', (err, html) => { pdf.convertpdf(req, res, err, html) }) });

module.exports = router;

