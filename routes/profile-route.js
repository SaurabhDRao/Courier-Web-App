const router = require('express').Router();
const bcrypt = require("bcryptjs");
var mysql = require('mysql');
const con = require('../db');
const addNewEmployee = require("./functions/addEmployee");  
const updateEmployee = require("./functions/updateEmployee");
const deleteEmployee = require("./functions/deleteEmployee");
const addCourier = require("./functions/addCourier");
const updateCourier = require("./functions/updateCourier");

const authCheck = (req,res,next) => {
	if(!req.user){
		res.redirect("/auth/login");
	} else {
		next();
	}
};

router.get("/", authCheck, (req, res) => {
	res.render("profile", { "user": req.user });
});

router.get("/employees", authCheck, (req, res) => {
	let q = "select * from empdetails";
	con.query(q, (err, result1) => {
		q = "select count(branchid) as branches from branch;"
		con.query(q, (err, result2) => {
			res.render("users", { "users": result1, user: req.user, branches: result2[0].branches });
		})
	});
});

router.post("/addNewUser", authCheck, async (req, res) => { addNewEmployee(req, res); });

router.get("/deleteUser/:id", authCheck, (req, res) => { deleteEmployee(req, res); });

router.get("/editUserDetails/:id", authCheck, (req, res) => {
	let id = req.params.id;
	let q = "select * from empdetails where id = " + id;
	con.query(q, (err, result) => {
		res.render("user", { "user": result[0] });
	});
});

router.post("/updateUser/:id", authCheck, (req, res) => { updateEmployee(req, res); });

router.get("/addCourier", authCheck, (req, res) => { res.render("addCourier", { "user": req.user }); });

router.post("/addCourier", authCheck, (req, res) => { addCourier(req, res); });

router.get("/updateCourier", authCheck, (req, res) => { res.render("updateCourier", { "user": req.user }); });

router.post("/update", authCheck, (req, res) => { updateCourier(req, res); });

router.post("/changePassword", authCheck, async (req, res) => {
	let newPassword = req.body.password;
	if(req.user.username !== "admin") {
		const salt = await bcrypt.genSalt(10);
		newPassword = await bcrypt.hash(newPassword, salt);
	}
	let q = "update empdetails set password = " +  mysql.escape(newPassword) + " where id = " + req.user.id;
	con.query(q, (err, row, fields) => {
		if(err) throw err;
		res.send("Password updated successfully!");
	});
});

module.exports = router;
