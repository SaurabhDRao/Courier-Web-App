var nodemailer = require('nodemailer');
const keys = require("../../config/keys");

module.exports = (name, email, msg) => {
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
        text: name + ", " + email + ", " + msg
    };
      
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
    });
}