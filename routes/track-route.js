const router = require('express').Router();
var mysql = require('mysql');
const con = require('../db');

router.get("/getTrackId", (req, res) => { res.render("getTrackId", { user: req.user }); });

module.exports = router;