var mysql = require('mysql');
const con = require('../../db');

module.exports = (req, res) => {
    let id = req.params.id;
    let name = req.body.name;
    let post = req.body.post;
    let mobile = req.body.mobile;
    let email = req.body.email;
    let address = req.body.address;
    let q = "update empdetails set name = " + mysql.escape(name) 
        + ", post = " + mysql.escape(post) 
        + ", email = " + mysql.escape(email) 
        + ", mobile = " + mobile
        + ", address = " + mysql.escape(address) 
        + " where id = " + id;
    con.query(q, (err, row, fields) => {
        if(err) throw err;
        res.redirect("/profile/");
    });
}