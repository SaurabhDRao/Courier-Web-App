var mysql = require('mysql');
const con = require('../../db');
const sendMail = require("./sendMail");

module.exports = (req, res) => {
    console.log(req.body);
    let trackId = req.body.trackId;
    let q = "select srcemail, b.landmark, b.city from branch b, couriers c "
        + "where b.branchid = " + req.user.branchid
        + " and trackId = " + mysql.escape(trackId);
    console.log(q);
    con.query(q, (err, result) => {
        q = "update couriers set currentlandmark = " + mysql.escape(result[0].landmark + " " + result[0].city)
            + " where trackId = " + mysql.escape(trackId);
        console.log(q);
        con.query(q, (err, row, fields) => {
            if(err) res.send("Something went wrong! Try again please!");
            if(row.affectedRows){
                let emailBody = "Your package is at " + result[0].landmark + ", " + result[0].city;
                let subject = "Your courier"
                let email = result[0].srcemail;
                sendMail(email, subject, emailBody);
                res.send(trackId + " updation done!");
            } else
                res.send("Invalid Package ID!");
        });
    });
}