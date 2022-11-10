const express = require("express")
const router = express.Router()
const multer = require('multer');
const users = require("../controllers/users.controller");
//--------------------------------------
// multer file upload
// returning storage engine that can upload files
var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './public/images')
    }, // err,dest
    filename: function (req, file, callback) {
        callback(null, file.originalname)
    }
});
var upload = multer({ storage: storage });
//--------------------------------------
// Fetching data from table and rendering page views
router.get("/", (req, res) => {
    users.Display(req, res, 'displayTable', 'Select * from users')
})
router.get("/listview", (req, res) => { users.Display(req, res, 'displayTable2', 'Select * from users', 'listview') })
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
//--------------------------------------
// Filter Routes
router.post("/gender", (req, res) => { users.Gender(req, res, 'displayTable') })
router.get("/Asc", (req, res) => { users.Display(req, res, 'displayTable', 'SELECT * FROM users ORDER BY id', 'Asc') })
router.get("/Des", (req, res) => { users.Display(req, res, 'displayTable', 'SELECT * FROM users ORDER BY id DESC', 'Des') })
router.get("/1to10", (req, res) => { users.Display(req, res, 'displayTable', 'SELECT * FROM users where id<11', '1to10') })
router.get("/11to20", (req, res) => { users.Display(req, res, 'displayTable', 'SELECT * FROM users where id between 10 and 21 ', '11to20') })
// Filter Routes
router.post("/genderlist", (req, res) => { users.Gender(req, res, 'displayTable2') })
router.get("/Asclist", (req, res) => { users.Display(req, res, 'displayTable2', 'SELECT * FROM users ORDER BY id', 'Asclist') })
router.get("/Deslist", (req, res) => { users.Display(req, res, 'displayTable2', 'SELECT * FROM users ORDER BY id DESC', 'Deslist') })
router.get("/1to10list", (req, res) => { users.Display(req, res, 'displayTable2', 'SELECT * FROM users where id<11', '1to10list') })
router.get("/11to20list", (req, res) => { users.Display(req, res, 'displayTable2', 'SELECT * FROM users where id between 10 and 21 ', '11to20list') })

module.exports = router;