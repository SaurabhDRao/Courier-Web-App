var mysql = require('mysql');
const con = require('../../db');
const uniqid = require("uniqid");
const bcrypt = require("bcryptjs");
const sendMail = require("./sendMail");

module.exports = async (req, res) => {
    let name = req.body.name;
    let post = req.body.post;
    let mobile = req.body.mobile;
    let email = req.body.email;
    let address = req.body.address;
    let password = uniqid().substr(0, 8);
    console.log(password);
    // hash passwords
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    let q = "select max(id) as id from empdetails";
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

        q = "insert into empdetails values (" + id + ", "
            + mysql.escape(name) + ", " 
            + mysql.escape(username) + ", "
            + mysql.escape(post) + ", "
            + mobile + ", "
            + mysql.escape(address) + ", "
            + mysql.escape(email) + ", " 
            + mysql.escape(hashedPassword) + ", "
            + req.user.branchid + ");"
        console.log(q);
        con.query(q, (err, rows, fields) => {
            if(err) throw err;
            res.redirect("/profile/employees");
        });
        // let emailBody = "Welcome " + name 
        //     + "!\nYou have joined L-Courier and have been assigned the post of " + post
        //     + ".\nYour username is " + username
        //     + ".\nYour password is " + password
        //     + ".\nPlease be sure to change your password when you login next time."
        // let subject = "Welcome"
        // sendMail(email, subject, emailBody);
    });
}