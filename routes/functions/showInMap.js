var mysql = require('mysql');
const con = require('../../db');

module.exports = (req, res) => {
    let trackId = req.params.trackId;
    let q = "select latitude, longitude, destlandmark from couriers where trackId = " + mysql.escape(trackId);
    console.log(q);
    con.query(q, (err, result) => {
        console.log(result[0].destlandmark);
        if(result[0])
            res.render("track", { user: req.user, trackId: trackId, lat: result[0].latitude, lng: result[0].longitude, destlandmark: result[0].destlandmark });
    });
}