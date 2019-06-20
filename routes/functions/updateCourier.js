var mysql = require('mysql');
const con = require('../../db');

module.exports = (req, res) => {
    console.log(req.body);
    let trackId = req.body.trackId;
    let q = "select latitude, longitude from branch where branchid = " + req.user.branchid;
    con.query(q, (err, result) => {
        q = "update couriers set latitude = " + mysql.escape(result[0].latitude)
            + ", longitude = " + mysql.escape(result[0].longitude)
            + " where trackId = " + mysql.escape(trackId);
        console.log(q);
        con.query(q, (err, row, fields) => {
            if(err) res.send("Something went wrong! Try again please!");
            if(row.affectedRows)
                res.send(trackId + " done!");
            else
                res.send("Invalid Package ID!");
        });
    });
}