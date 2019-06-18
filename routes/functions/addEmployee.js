var mysql = require('mysql');
const con = require('../../db');
const uniqid = require("uniqid");

module.exports = (req, res) => {
    let name = req.body.name;
    let post = req.body.post;
    let mobile = req.body.mobile;
    let email = req.body.email;
    let address = req.body.address;
    let q = "select max(id) as id from userdetails";
    con.query(q, (err, result) => {
        let id;
        if(result[0].id === null)
            id = "2";
        else 
            id = result[0].id + 1 + "";
        id_ = id;
        for(let i = id_.length;i < 3; i++){
            id_ = "0" + id_;
        }
        let username = (new Date().getFullYear() % 100) + "L" +  id_;
        let password = uniqid().substr(0, 8);
        q = "insert into userdetails values (" + id + ", "
            + mysql.escape(name) + ", " 
            + mysql.escape(username) + ", "
            + mysql.escape(post) + ", "
            + mobile + ", "
            + mysql.escape(address) + ", "
            + mysql.escape(email) + ", " 
            + mysql.escape(password) + ");";
        console.log(q);
        con.query(q, (err, rows, fields) => {
            if(err) throw err;
            res.redirect("/profile/");
        });
    });
}