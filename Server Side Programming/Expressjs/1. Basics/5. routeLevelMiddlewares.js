const express = require('express')
const reqFilter = require('./middleware')
const route = express.Router()
const app = express()

route.use(reqFilter);

// no middleware applied
app.get('', (_, res) => {
    res.send("Welcome to home page")
})

// adding middleware(routelevel)(method 1)
app.get('/user', reqFilter, (_, res) => {
    res.send("Welcome user")
})

// adding middleware (routelevel) using route (method 2)
route.get('/about', reqFilter, (_, res) => {
    res.send("Welcome to About")
})

route.get('/contact', reqFilter, (_, res) => {
    res.send("Welcome to contact")
})

app.use('/', route)

app.listen(4800);

