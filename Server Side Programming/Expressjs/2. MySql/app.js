//Import all packages
const express = require("express")
const path = require('path')
const bodyParser = require("body-parser"); // for decoding data (encoded by post)

//Import all routes
const indexRoutes = require("./routes/index.routes");
const userRoutes = require("./routes/users.routes");

//Application configuration
const app = express();
app.set("view engine", "ejs"); // set the view engine to ejs
const publicPath = path.join(__dirname, 'public')
app.use(express.static(publicPath)) //static rendering (for accessing images, external linked files)
app.use(bodyParser.urlencoded({ extended: false })); // For parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // For parsing application/json
app.use("/", indexRoutes);
app.use("/", userRoutes);

const port = 3300;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

















// const printusers = (req, res) => {
//     let query = "select * from users"
//     con.query(query, (error, user_data) => {
//         if (error) {
//             throw error;
//         }
//         else {
//             res.render('displayTable', { data: user_data },
//                 function (err, html) {
//                     pdf
//                         .create(html, options)
//                         .tofile("uploads/displayTable.pdf", function (err, result) {
//                             if (err) {
//                                 return console.log(err);
//                             }
//                             else {
//                                 let allUsers = fs.readFileSync("uploads/displayTable.pdf")
//                                 res.header("content-type", "application/pdf")
//                                 res.send(allUsers)
//                             }
//                         })
//                 })
//         }
//     })
// }
// //--------------------------------------
// app.get("/print", printusers)
// //--------------------------------------
// app.get("/gender", (req, res) => {
//     const query = "Select * from users where gender=male"
//     con.query(query, (error, data) => {

//     })
// })