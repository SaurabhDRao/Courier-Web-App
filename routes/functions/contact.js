const sendmail = require('sendmail')();

module.exports = (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let mobile = req.body.mobile;
    let msg = req.body.msg;

    sendmail({
            from: email,
            to: 'prashanthnayak920@gmail.com',
            subject: 'test sendmail',
            html: msg,
        }, function(err, reply) {
        console.log(err && err.stack);
        console.dir(reply);
        res.send("mail sent!");
    });
}