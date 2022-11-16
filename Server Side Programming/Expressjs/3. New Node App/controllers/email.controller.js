"use strict";
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    service: "gmail",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: "baydaartravels1@gmail.com",
        pass: "byyp unke iazs oiib", // app password
    },
});

module.exports = transporter;