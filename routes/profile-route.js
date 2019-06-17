const router = require('express').Router();
var mysql = require('mysql');
const con = require('../db');

const authCheck = (req,res,next) => {
  if(!req.user){
    res.redirect("/auth/login");
  } else {
    next();
  }
};

router.get("/", (req, res) => {
  let q = "select * from userdetails";
  con.query(q, (err, result) => {
      res.render("users", { "users": result });
  });
});

router.post("/addNewUser", (req, res) => {
  let fname = req.body.fname;
  let lname = req.body.lname;
  let email = req.body.email;
  let city = req.body.city;
  let q = "select max(id) as id from userdetails";
  con.query(q, (err, result) => {
      let id;
      if(result[0].id === null)
          id = 1;
      else 
          id = result[0].id + 1;
      q = "insert into userdetails values (" + id + ", " + mysql.escape(fname) + ", " + mysql.escape(lname) + ", " + mysql.escape(email) + ", " + mysql.escape(city) + ");";
      con.query(q, (err, rows, fields) => {
          if(err) throw err;
          res.redirect("/profile/");
      });
  });
});

router.get("/deleteUser/:id", (req, res) => {
  let id = req.params.id;
  let q = "delete from userdetails where id = " + id;
  con.query(q, (err, result) => {
      if(err) throw err;
      res.redirect("/profile/");
  });
});

router.get("/editUserDetails/:id", (req, res) => {
  let id = req.params.id;
  let q = "select * from userdetails where id = " + id;
  con.query(q, (err, result) => {
      res.render("profile", { "user": result[0] });
  });
});

router.post("/updateUser/:id", (req, res) => {
  let id = req.params.id;
  let fname = req.body.fname;
  let lname = req.body.lname;
  let email = req.body.email;
  let city = req.body.city;
  let q = "update userdetails set fname = " + mysql.escape(fname) + ", lname = " + mysql.escape(lname) + ", email = " + mysql.escape(email) + ", city = " + mysql.escape(city) + " where id = " + id;
  con.query(q, (err, row, fields) => {
      if(err) throw err;
      res.redirect("/profile/");
  });
});

module.exports = router;
