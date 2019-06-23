var mysql = require('mysql');
const con = require('../../db');
const uniqid = require("uniqid");
const QRCode = require('qrcode');
const sendMail = require("./sendMail");

module.exports = (req, res) => {
    let type = req.body.type;
    let sender = req.body.srcname;
    let receiver = req.body.destname;
    let srcphone = req.body.srcphone;
    let destphone = req.body.destphone;
    let srcemail = req.body.srcemail;
    let srcaddress = req.body.srcaddress;
    let destaddress = req.body.destaddress;
    let srcpin = req.body.srcpin;
    let destpin = req.body.destpin;
    let weight = req.body.weight;
    let payment = req.body.payment;
    let size = req.body.size;
    let q = "select max(id) as id from couriers";
    con.query(q, (err, result) => {
        q = "select latitude, longitude from branch where branchid = " + req.user.branchid;
        let id;
        if(result[0].id === null)
            id = "1";
        else 
            id = result[0].id + 1;
        let currentDate = new Date();
        let trackId = (
            "" + currentDate.getDate() + currentDate.getMonth() + currentDate.getFullYear() 
            + currentDate.getMinutes() + currentDate.getSeconds()
            + uniqid().substr(Math.floor(Math.random() * 7), 3)
        ).padEnd(15, "x");

        con.query(q, (err, result1) => {
            QRCode.toDataURL(trackId, function (err, qrcode) {
                q = "insert into couriers values (" + id
                + ", " + mysql.escape(trackId)
                + ", " + mysql.escape(type)
                + ", " + mysql.escape(sender)
                + ", " + mysql.escape(receiver)
                + ", " + mysql.escape(srcphone)
                + ", " + mysql.escape(destphone)
                + ", " + mysql.escape(srcemail)
                + ", " + mysql.escape(payment)
                + ", " + mysql.escape(srcaddress)
                + ", " + srcpin
                + ", " + mysql.escape(destaddress)
                + ", " + destpin
                + ", " + mysql.escape(weight)
                + ", " + mysql.escape(size)
                + ", " + mysql.escape(qrcode)
                + ", " + req.user.branchid
                + ", " + mysql.escape(result1[0].latitude)
                + ", " + mysql.escape(result1[0].longitude)
                + ", " + mysql.escape(req.body.destlandmark)
                + ");";
                console.log(q);
                con.query(q, (err, row, fields) => {
                    if(err) res.send(err);
                    res.render("pdfGen", { courier: req.body, qrcode: qrcode, trackId: trackId, "user": req.user });
                });
            });
        });

        let emailBody = "Your order with tracking id " + trackId + " is being processed!\nYou will be receiving email updates regularly."
        let subject = "Your courier"
        sendMail(srcemail, subject, emailBody);
    });
}