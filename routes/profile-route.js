const router = require('express').Router();
var mysql = require('mysql');
const con = require('../db');
const addNewEmployee = require("./functions/addEmployee");  
const updateEmployee = require("./functions/updateEmployee");
const deleteEmployee = require("./functions/deleteEmployee");

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
  addNewEmployee(req, res);
});

router.get("/deleteUser/:id", (req, res) => {
  deleteEmployee(req, res);
});

router.get("/editUserDetails/:id", (req, res) => {
  let id = req.params.id;
  let q = "select * from userdetails where id = " + id;
  con.query(q, (err, result) => {
      res.render("profile", { "user": result[0] });
  });
});

router.post("/updateUser/:id", (req, res) => {
  updateEmployee(req, res);
});

module.exports = router;
