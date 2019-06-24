var mysql = require('mysql');
const con = require('../../db');

module.exports = async (req, res) => {
    let address = req.body.address;
    let city = req.body.city;
    let contact = req.body.contact;
    let landmark = req.body.landmark;
    let q = "select max(branchid) as id from branch";
    con.query(q, (err, result) => {
        let id;
        if(result[0].id === null)
            id = "1";
        else 
            id = result[0].id + 1;

        q = "insert into branch values (" + id + ", "
            + mysql.escape(city) + ", "
            + mysql.escape(address) + ", " 
            + mysql.escape(contact) + ", "
            + mysql.escape(landmark) + ");"
        console.log(q);
        con.query(q, (err, rows, fields) => {
            if(err) throw err;
            res.redirect("/profile/branches");
        });
    });
}