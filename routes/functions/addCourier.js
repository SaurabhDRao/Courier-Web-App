var mysql = require('mysql');
const con = require('../../db');
const uniqid = require("uniqid");
const QRCode = require('qrcode');

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
        let id;
        if(result[0].id === null)
            id = "1";
        else 
            id = result[0].id + 1 + "";
        id_ = id;
        for(let i = id_.length;i < 4; i++){
            id_ = "0" + id_;
        }
        let currentDate = new Date();
        let date = currentDate.getDate();
        date = (date.length === 1) ? ("0" + date) : date;
        let month = "" + currentDate.getMonth();
        month = (month.length === 1) ? ("0" + month) : month;
        let trackId = date + month + currentDate.getFullYear() + id;

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
            + ");";
            console.log(q);
            con.query(q, (err, row, fields) => {
                if(err) res.send(err);
                res.render("pdfGen", { courier: req.body, qrcode: qrcode });
            });
        });
    });
}