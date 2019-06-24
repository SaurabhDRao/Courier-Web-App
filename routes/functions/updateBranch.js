var mysql = require('mysql');
const con = require('../../db');

module.exports = (req, res) => {
    let id = req.params.id;
    let address = req.body.address;
    let city = req.body.city;
    let contact = req.body.contact;
    let landmark = req.body.landmark;
    let q = "update branch set address = " + mysql.escape(address) 
        + ", city = " + mysql.escape(city) 
        + ", contact = " + mysql.escape(contact) 
        + ", landmark = " + mysql.escape(landmark) 
        + " where branchid = " + id;
    con.query(q, (err, row, fields) => {
        if(err) throw err;
        res.redirect("/profile/branches");
    });
}