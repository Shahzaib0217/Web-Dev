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

app.use(express.static(publicPath)) //static rendering (for accessing images, external linked files in public folder)

// body parser
app.use(bodyParser.urlencoded({ extended: false })); // For parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // For parsing application/json

app.use("/", indexRoutes);
app.use("/", userRoutes);

const port = 3300;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
