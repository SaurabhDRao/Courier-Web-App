var mysql = require('mysql');
const con = require('../../db');

module.exports = (req, res) => {
    let trackId = req.body.trackId;
    let q = "select latitude, longitude from branch where branchid = " + req.user.branchid;
    con.query(q, (err, result) => {
        q = "update couriers set latitude = " + result[0].latitude
            + ", longitude = " + result[0].longitude
            + " where trackId = " + trackId;
        console.log(q);
        con.query(q, (err, row, fields) => {
            if(err) res.send("Something went wrong! Try again please!");
            res.send("Done!");
        });
    });
}