let express = require("express");
let routes = require("./routes");

let app = express();

app.get("/flip", routes.coinFlipRoute);

app.get("/:number1/:number2", routes.addNumberRoute);

module.exports.app = app;
