const express = require('express')
const app = express()

// get is used to load a page
app.get('', (req, res) => {
    console.log('data sent by browser: ', req.query.name) //it wll fetch name from browser url query
    res.send('Welcome' + req.query.name) // res is response sent against a request(/?name=ali)
})

app.get('/sendhtml', (req, res) => {
    res.send(`
    <h1>we can also wite hrml in backticks</h1>
    <p>This is another way</p>
    <p>we can also write it simply in "" or ''</p>

    `)
})

// sending json data
app.get('/sendjson', (req, res) => {
    res.send({
        name: 'shahzaib',
        email: 'sk@email.com',
    }); // cant send html and json in same response
})

app.get('/sendjsonArray', (req, res) => {
    res.send([
        {
            name: 'shahzaib',
            email: 'sk@email.com',
        },
        {
            name: 'nofil',
            email: 'nk@email.com',
        }
    ]);
})

app.listen(4700);