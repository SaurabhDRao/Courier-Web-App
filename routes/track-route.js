const router = require('express').Router();
var mysql = require('mysql');
const con = require('../db');
const showInMap = require("./functions/showInMap");

router.get("/getTrackId", (req, res) => { res.render("getTrackId", { user: req.user }); });

router.get("/checkValidity/:id", (req, res) => {
    let trackId = req.params.id;
    let q = "select * from couriers where trackId = " + mysql.escape(trackId);
    con.query(q, (err, result) => {
        if(result[0]) res.send(true);
        else res.send(false);
    });
});

router.get("/showInMap/:trackId", (req, res) => { showInMap(req, res); });

module.exports = router;