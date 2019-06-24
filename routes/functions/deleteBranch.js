var mysql = require('mysql');
const con = require('../../db');

module.exports = (req, res) => {
    let id = req.params.id;
    let q = "delete from branch where branchid = " + id;
    con.query(q, (err, result) => {
        if(err) throw err;
        res.redirect("/profile/branches");
    });
}