var mysql = require('mysql');
const con = require('../../db');

module.exports = (req, res) => {
    res.render("updateCourier");
}