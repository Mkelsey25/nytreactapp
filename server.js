require('dotenv').config();
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
//const env = require("./.env");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

//connect to database
mongoose.connect(process.env.MONGODB_URI).then(() => {
console.log("Hey, I'm MongoDB. You're connected to me!");
});

app.listen(PORT, () => 
  console.log(`Server now listening on PORT ${PORT}!`)
);