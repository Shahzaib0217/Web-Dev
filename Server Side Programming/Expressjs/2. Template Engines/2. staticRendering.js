const express = require('express')
const path = require('path')

const app = express();
const publicPath = path.join(__dirname, 'public')

// .use is a middleware
// .static loads static pages (with css, images and linked external files)
// path nodejs sy ho k ata ha is liye css directly apply nai hoti, so we use .static
app.use(express.static(publicPath))

app.get('/', (req, res) => {
    // sendFile is used to load a file in get
    res.sendFile(path.join(publicPath, '/home.html'))
})

app.get('/contact', (req, res) => {
    res.sendFile(`${publicPath}/contact.html`)
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/aboutus.html'))
})

app.get('*', (req, res) => { // * means if no url is matched
    res.send('<h1>Error! 404 page not found</h1>')
})

app.listen(5000)

