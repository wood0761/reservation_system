var path = require("path");

module.exports = function(app) {

    app.get("./api/tables", function(req, res) {
        return res.json(tables);
    });
    app.get("./api/reservations", function(req, res) {
        return res.json(reservations);
        });
    app.get("./api/waitlist", function(req, res) {
        return res.json(waitlist);
        });
}