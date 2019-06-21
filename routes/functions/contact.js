var mysql = require('mysql');
const con = require('../../db');

module.exports = (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let mobile = req.body.mobile;
    let msg = req.body.msg;

    
}