var mysql = require('mysql');
const con = require('../../db');

module.exports = (req, res) => {
    let fname = req.body.fname;
    let lname = req.body.lname;
    let email = req.body.email;
    let city = req.body.city;
    let q = "select max(id) as id from userdetails";
    con.query(q, (err, result) => {
        let id;
        if(result[0].id === null)
            id = 1;
        else 
            id = result[0].id + 1;
        q = "insert into userdetails values (" + id + ", " + mysql.escape(fname) + ", " + mysql.escape(lname) + ", " + mysql.escape(email) + ", " + mysql.escape(city) + ");";
        con.query(q, (err, rows, fields) => {
            if(err) throw err;
            res.redirect("/profile/");
        });
    });
}