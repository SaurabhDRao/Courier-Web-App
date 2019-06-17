const router = require('express').Router();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const strategies = require('../config/passport-setup');
var mysql = require('mysql');
const con = require('../db');

//auth login
router.get("/login", (req,res) => {
  res.render("login", {user: req.user});
});

//auth log out
router.get("/logout", (req,res) => {
  req.logout();
  res.redirect("/");
});

router.post('/check',
  passport.authenticate('loginCheck', {
    successRedirect: "/profile/",
    failureRedirect: '/auth/login'
   }));

module.exports = router;
