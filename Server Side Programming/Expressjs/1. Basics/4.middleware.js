const express = require('express')
const app = express()

const reqFilter = (req, res, next) => {
    if (!req.query.age) {
        res.send("Please provide age")
    }
    else if (req.query.age < 18) {
        res.send("You are under 18, you cant acces this page")
    }
    else {
        next() // if >18 run next code
    }
}

app.use(reqFilter) // using middleware

app.get('', (_, res) => {
    res.send("Welcome to home page")
})

app.listen(4800);

// middlewares are used to filter request and response
// these are applied on routes

// the middleware used in this file is application
// level cuz applies on all routes
