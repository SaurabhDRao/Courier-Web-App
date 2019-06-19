const router = require('express').Router();

router.get("/", (req, res) => {
    console.log("das");
    res.render("error");
});

module.exports = router;