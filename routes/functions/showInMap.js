var mysql = require('mysql');
const con = require('../../db');

module.exports = (req, res) => {
    let trackId = req.params.trackId;
    let q = "select latitude, longitude from couriers where trackId = " + trackId;
    con.query(q, (err, result) => {
        if(result[0])
            res.render("track", { user: req.user, trackId: trackId, lat: result[0].latitude, lng: result[0].longitude });
    });
}