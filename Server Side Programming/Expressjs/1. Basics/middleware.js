module.exports = reqFilter = (req, res, next) => {
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