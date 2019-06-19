var nodemailer = require('nodemailer');
const keys = require("../../config/keys");

module.exports = (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let mobile = req.body.mobile;
    let msg = req.body.msg;

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: keys.gmail.username,
          pass: keys.gmail.password
        }
    });
      
    var mailOptions = {
        from: keys.gmail.username,
        to: 'saurao2612@gmail.com',
        subject: 'Sending Email using Node.js',
        text: name + ", " + email + ", " + mobile + ", " + msg
    };
      
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
    });
}