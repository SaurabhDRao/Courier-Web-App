const router = require('express').Router();
var mysql = require('mysql');
const con = require('../db');
const showInMap = require("./functions/showInMap");

router.get("/getTrackId", (req, res) => { res.render("getTrackId", { user: req.user }); });

router.post("/sendTrackId", (req, res) => { res.redirect("/track/showInMap/" + req.body.trackId); });

router.get("/showInMap/:trackId", (req, res) => { showInMap(req, res); });

module.exports = router;