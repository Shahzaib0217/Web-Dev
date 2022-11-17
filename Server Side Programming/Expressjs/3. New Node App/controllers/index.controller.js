const validator = require("validator");
var con = require('../db');
const transporter = require("./email.controller");

// Function for sign in
exports.signin = (req, res) => {
    const { email, password, usertype } = req.body;

    if (email && password) {
        query = `SELECT * FROM ${usertype} WHERE userEmail = "${email}"`;

        con.query(query, (error, data) => {
            if (error) {
                console.log("error in running query")
                throw error;
            }
            else {
                if (data.length > 0) {
                    if (data[0].userPassword == password) {
                        req.session.userid = data[0].userID;
                        req.session.userEmail = data[0].userEmail;
                        res.redirect("/");
                    }
                    else {
                        res.send('Incorrect Password');
                    }
                }
                else {
                    res.send('Incorrect Email Address');
                }
            }
            res.end();
        });
    }
    else {
        res.send('Please Enter Email Address and Password Details');
        res.end();
    }
}
// Function for signup
exports.signup = (req, res) => {
    const { name, email, password, usertype } = req.body;
    console.log(email)
    let code = generateCode();
    // let insertQuery = `INSERT INTO users ( uname, email, pwd, VerificationCode) 
    // VALUES ('${name}','${email}',${password},${code})`;

    // con.query(insertQuery, (err, data, fields) => {
    //     if (!err) {
    // if (validator.isEmail(email)) {
    res.render("emailTemplate", { name, code, url: 'http://localhost:6700/verifyCode' }, function (err, html) {
        const mailOptions = {
            from: "baydaartravels1@gmail.com", // sender address
            to: email,
            subject: "Welcome ✔ user", // Subject line
            html: html,
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log(`Email sent to ${email}: ${info.response}`);
                res.redirect("/signin");
            }
        });
    });
    res.redirect("/signin");
    // } else res.send(err);
    //     } else res.send(err);
    // });
};

function generateCode() {
    var minm = 100000;
    var maxm = 999999;
    return Math.floor(Math.random() * (maxm - minm + 1)) + minm;
}

exports.verifyCode = (req, res) => {
    // let uname = req.session.user.uname;
    // , { uname }
    res.render("verifyCode");
};

exports.verifyInsertedCode = (req, res) => {
    res.redirect("/signin");
    // let code = req.body.vCode;
    // const query = `SELECT * FROM users WHERE id = '${req.session.user.id}'`;
    // con.query(query, (err, data, fields) => {
    //     if (!err) {
    //         if (Object.keys(data).length > 0) {
    //             const user = { ...data[0] };
    //             if (user.VerificationCode == code) {
    //                 const updateVerfiedQuery = `UPDATE  users SET Verified=1 
    //         WHERE id = '${req.session.user.id}'`;
    //                 mysqlConnection.query(updateVerfiedQuery, (err, data, fields) => {
    //                     if (!err) {
    //                         req.session.user.Verified = 1;
    //                         res.redirect("/");
    //                     }
    //                 });
    //             } else {
    //                 res.send("Wrong Verifcation Code");
    //             }
    //         } else res.send("User Do not exist");
    //     } else res.send(err);
    // });
};

exports.forgetPassword = (req, res) => {
    const { email } = req.body;
    query = `SELECT * FROM users WHERE userEmail = "${email}"`;

    con.query(query, (error, data) => {
        if (error) {
            console.log("error in running query")
            throw error;
        }
        else {
            if (data.length > 0) {
                const mailOptions = {
                    from: "baydaartravels1@gmail.com", // sender address
                    to: email,
                    subject: "Forget Password", // Subject line
                    text: "Your password is:" + data[0].userPassword,
                };
                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log(`Email sent to ${email}: ${info.response}`);
                        res.redirect("/signin");

                    }
                });
            }
            else {
                res.send("User does not exist")
            }
        }
        res.end();
    });
}