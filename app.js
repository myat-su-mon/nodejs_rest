const express = require("express");
const bodyParser = require("body-parser");
const feedRoutes = require("./routes/feed");

const app = express();

// app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json());

app.use("/feed", feedRoutes);

app.listen(8080);
