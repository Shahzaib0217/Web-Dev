// template engines are used for creating dynamic pages

const express = require('express')
const path = require('path')

const app = express();
const publicPath = path.join(__dirname, 'public')

// setting view engine ejs
app.set('view engine', 'ejs')

app.get('/profile', (_, res) => {
    const user = {
        name: 'shahzaib',
        email: 'sk@email.com',
        city: 'faisalabad',
        skills: ['js', 'solidity', 'node']
    }
    res.render('profile', { user })
})

app.get('/login', (_, res) => {
    res.render('login')
})

app.get('*', (req, res) => { // * means if no url is matched
    res.send('<h1>Error! 404 page not found</h1>')
})

app.listen(5000)

