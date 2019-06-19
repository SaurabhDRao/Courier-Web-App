const router = require('express').Router();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const strategies = require('../config/passport-setup');
var mysql = require('mysql');
const con = require('../db');

//auth login
router.get("/login", (req,res) => {
  res.render("login", { msg: null });
});

//auth log out
router.get("/logout", (req,res) => {
  req.logout();
  res.redirect("/home");
});

router.post('/check',
  passport.authenticate('loginCheck', {
    successRedirect: "/profile/",
    failureRedirect: '/auth/failedLogin'
   }));

router.get("/failedLogin", (req, res) => {
  res.render("login", { msg: "Incorrect username or password!" })
});

module.exports = router;
