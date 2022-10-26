const express = require("express")
const router = express.Router()
const multer = require('multer');
const users = require("../controllers/users.controller");
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
// Fetching data from table and rendering page views
router.get("/", (req, res) => { users.Display(req, res, 'displayTable') })
router.get("/listview", (req, res) => { users.Display(req, res, 'displayTable2') })
//--------------------------------------
//Input Data Routes
router.get("/input", (req, res,) => {
    res.render('inputTable');
});
router.post("/inputData", upload.single("imageFile"), (req, res) => { users.Input(req, res) });
//--------------------------------------
// Delete User route
router.get('/delete/:id', (req, res) => { users.Delete(req, res) });
//--------------------------------------
// Update Routes
router.get('/edit/:id', (req, res) => { users.Edit(req, res) });
router.post('/edited/:id', (req, res) => { users.edited(req, res) });
//--------------------------------------
// Search Route
router.post('/search', (req, res) => { users.search(req, res) });

module.exports = router;