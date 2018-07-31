var path = require("path");

module.exports = function(app) {

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../index.html"));
    });

    app.get("/reserve", function(req, res) {
        res.sendFile(path.join(__dirname, "../reserve.html"));
    });

    app.get("/tables", function(req, res) {
        res.sendFile(path.join(__dirname, "../tables.html"));
    });

}