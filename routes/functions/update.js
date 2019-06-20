var mysql = require('mysql');
const con = require('../../db');

module.exports = (req, res) => {
    let trackId = req.body.trackId;
    let q = "select * from couriers";
    con.query(q, (err, result) => {
        res.send(result[0]);
    });
}