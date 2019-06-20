const router = require('express').Router();
var mysql = require('mysql');
const con = require('../db');
const addNewEmployee = require("./functions/addEmployee");  
const updateEmployee = require("./functions/updateEmployee");
const deleteEmployee = require("./functions/deleteEmployee");
const addCourier = require("./functions/addCourier");
const contact = require("./functions/contact");
const updateCourier = require("./functions/updateCourier");

const authCheck = (req,res,next) => {
  if(!req.user){
    res.redirect("/auth/login");
  } else {
    next();
  }
};

router.get("/", authCheck, (req, res) => {
  let q = "select * from empdetails";
  con.query(q, (err, result) => {
      res.render("users", { "users": result });
  });
});

router.post("/addNewUser", authCheck, (req, res) => { addNewEmployee(req, res); });

router.get("/deleteUser/:id", authCheck, (req, res) => { deleteEmployee(req, res); });

router.get("/editUserDetails/:id", authCheck, (req, res) => {
  let id = req.params.id;
  let q = "select * from empdetails where id = " + id;
  con.query(q, (err, result) => {
      res.render("profile", { "user": result[0] });
  });
});

router.post("/updateUser/:id", authCheck, (req, res) => { updateEmployee(req, res); });

router.get("/addCourier", authCheck, (req, res) => { res.render("addCourier"); });

router.post("/addCourier", authCheck, (req, res) => { addCourier(req, res); });

router.post("/contact", (req, res) => { contact(req, res); });

router.get("/updateCourier", authCheck, (req, res) => { res.render("updateCourier"); });

router.post("/update", authCheck, (req, res) => { updateCourier(req, res); });

module.exports = router;
