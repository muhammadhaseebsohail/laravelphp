var express = require("express")
, app = express()
, http = require("http").createServer(app)
, bodyParser = require("body-parser");

/* Server config */

//Server's IP address
app.set("ipaddr", "ec2-18-219-131-166.us-east-2.compute.amazonaws.com");

//Server's port number
app.set("port", 8080);

//Tells server to support JSON requests
app.use(bodyParser.json());

/* Server routing */

//Handle route "GET /", as in "http://localhost:8080/"
app.get("/", function(request, response) {

//Show a simple response message
response.send("Server is up and running");

});

//Start the http server at port and IP defined before
http.listen(app.get("port"), app.get("ipaddr"), function() {
console.log("Server up and running. Go to http://" + app.get("ipaddr") + ":" + app.get("port"));
});