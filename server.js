// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);

var reservations = [];
var waitlist = [];

app.post("/api/reservations", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newReservation = req.body;
    if (reservations < 5){
        reservations.push(newReservation);
    }
    else
        waitlist.push(newReservation);

    console.log(newReservation);
    // We then display the JSON to the users
    res.json(newReservation);
  });

// Starts the server to begin listening
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});