const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
var mysql = require('mysql');
const con = require('../db');
const bcrypt = require("bcryptjs");

passport.serializeUser((user, done) => {
  	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	con.query("select * from empdetails where id=" + id, function (err, rows){
		done(err, rows[0]);
	});
});

passport.use("loginCheck", new LocalStrategy(
  async function(username, password, done) {
    const usr = username;
    const psw = password;
	console.log(usr, psw);
	if(username === "admin") {
		var sql = "SELECT * FROM empdetails where username = 'admin' and password = " + mysql.escape(password);
		con.query(sql, async function (err, result, fields) {
			if (err){
				return done(err);
			}
			if (!result.length){
				return done(null, false);
			}
			return done(null, result[0]);
		});
	} else {
		var sql = "SELECT * FROM empdetails where username=" + mysql.escape(usr);
		con.query(sql, async function (err, result, fields) {
			if (err){
				return done(err);
			}
			if (!result.length){
				return done(null, false);
			}
			const validPassword = await bcrypt.compare(password, result[0].password);
			if(!validPassword) return done(null, false);
			return done(null, result[0]);
		});
	}
  }
));

module.exports = passport;
