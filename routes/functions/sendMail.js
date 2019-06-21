var nodemailer = require('nodemailer');
const keys = require("../../config/keys");

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: keys.gmail.username,
      pass: keys.gmail.password
    }
});
  

module.exports = (email, subject, msg) => {
    var mailOptions = {
        from: keys.gmail.username,
        to: email,
        subject: subject,
        text: msg
    };
    console.log(email, subject, msg);      
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
    });
}