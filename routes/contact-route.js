const router = require('express').Router();
const contact = require("./functions/contact");

router.post("/", (req, res) => { contact(req, res); })

module.exports = router;