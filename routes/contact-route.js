const router = require('express').Router();
var mysql = require('mysql');
const con = require('../db');
const contact = require("./functions/contact");

const authCheck = (req,res,next) => {
    if(!req.user){
        res.redirect("/auth/login");
    } else {
        next();
    }
};

router.post("/", (req, res) => { contact(req, res); });

router.get("/support", authCheck, (req, res) => {
    let q = "select * from support";
    con.query(q, (err, result) => {
        res.render("support", { users: result, user: req.user });
    });
});

router.get("/deleteMsg/:id",authCheck, (req, res) => {
    let id = req.params.id;
    let q = "delete from support where id = " + id;
    con.query(q, (err, result) => {
        if(err) throw err;
        res.redirect("/contact/support");
    });
});

module.exports = router;