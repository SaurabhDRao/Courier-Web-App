const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
var mysql = require('mysql');
const con = require('../db');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  con.query("select * from admin where id=" + id, function (err, rows){
    done(err, rows[0]);
  });
});

passport.use("loginCheck", new LocalStrategy(
  function(username, password, done) {
    const usr = username;
    const psw = password;
    console.log(usr, psw);
    var sql = "SELECT * FROM admin where username=" + mysql.escape(usr) + " and password=" + mysql.escape(psw);
      con.query(sql, function (err, result, fields) {
        if (err){
          return done(err);
        }
        if (!result.length){
          return done(null, false);
        }
        return done(null, result[0]);
      });
  }
));

// passport.use("save", new LocalStrategy({   // 'login-signup' is optional here
//     usernameField : 'email',
//     passwordField : 'password',
//     passReqToCallback : true },
//   function(req, email, password, done) {
//     console.log(req.body);
//     con.query("select max(id) as id from user", function(err, result){
//       var id = result[0].id + 1;
//       var sql = "insert into user values(" + id + "," + mysql.escape(email) + "," + mysql.escape(password) + "," + mysql.escape(req.body.name) + "," + mysql.escape(req.body.DName) + "," + mysql.escape(req.body.Desgn) + ")";
//       con.query(sql, function(err, result1, fields){
//         sql = "SELECT * FROM user where email=" + mysql.escape(email) + " and password=" + mysql.escape(password);
//         con.query(sql, function(err, result2, fields){
//           console.log(result2[0]);
//           done(null, result2[0]);
//         });
//       });
//     });
//   }
// ));

module.exports = passport;
