var pdf = require('html-pdf');
var options = { format: 'Letter' };
const email = require('./email.controller');

exports.convertpdf = (req, res, err, html) => {
    pdf.create(html, options).toFile('./public/uploads/CustomTour.pdf', function (err, result) {
        if (err) return console.log(err);
        console.log(result); // result gives file name and path
        // Sending Email
        email.sendMail({
            from: "baydaartravels1@gmail.com", // sender address
            to: req.session.userEmail, // can also be a list of receivers
            subject: "Hello ✔ user", // Subject line
            text: "PDF file of your custom made order", // plain text body
            attachments: [
                {   // file on disk as an attachment  
                    filename: 'CustomTour.pdf',
                    path: './public/uploads/CustomTour.pdf' // stream this file
                }]
        });
        console.log('Email sent')
        res.redirect("/")
    });
}
