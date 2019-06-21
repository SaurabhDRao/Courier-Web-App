var mysql = require('mysql');
const con = require('../../db');

module.exports = (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let mobile = req.body.mobile;
    let msg = req.body.msg;
    let q = "select max(id) as id from support";
    con.query(q, (err, result) => {
        let id;
        if(result[0].id === null)
            id = "1";
        else 
            id = result[0].id + 1;
        console.log(req.body);
        q = "insert into support values (" + id
            + ", " + mysql.escape(name)
            + ", " + mobile
            + ", " + mysql.escape(email)
            + ", " + mysql.escape(msg)
            + ");";
        con.query(q, (err, row, fields) => {
            if(err) throw err;
            res.send("Mesage sent!");
        });
    });
}