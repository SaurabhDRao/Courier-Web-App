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

router.get("/", authCheck, (req, res) => {
  let q = "select * from userdetails";
  con.query(q, (err, result) => {
      res.render("users", { "users": result });
  });
});

router.post("/addNewUser", authCheck, (req, res) => {
  addNewEmployee(req, res);
});

router.get("/deleteUser/:id", authCheck, (req, res) => {
  deleteEmployee(req, res);
});

router.get("/editUserDetails/:id", authCheck, (req, res) => {
  let id = req.params.id;
  let q = "select * from userdetails where id = " + id;
  con.query(q, (err, result) => {
      res.render("profile", { "user": result[0] });
  });
});

router.post("/updateUser/:id", authCheck, (req, res) => {
  updateEmployee(req, res);
});

router.get("/addCourier", authCheck, (req, res) => {
  res.render("addCourier");
});

module.exports = router;
