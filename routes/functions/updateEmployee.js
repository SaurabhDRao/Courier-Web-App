var mysql = require('mysql');
const con = require('../../db');

module.exports = (req, res) => {
    let id = req.params.id;
    let fname = req.body.fname;
    let lname = req.body.lname;
    let email = req.body.email;
    let city = req.body.city;
    let q = "update userdetails set fname = " + mysql.escape(fname) + ", lname = " + mysql.escape(lname) + ", email = " + mysql.escape(email) + ", city = " + mysql.escape(city) + " where id = " + id;
    con.query(q, (err, row, fields) => {
        if(err) throw err;
        res.redirect("/profile/");
    });
}