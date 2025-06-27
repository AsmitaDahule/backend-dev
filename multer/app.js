const express = require("express");
const app = express();
const userModel = require("./models/user");
const upload = require("./multer-setup.js");

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("index");
});

app.post("/upload", upload.single('image'), function(req, res) {
    console.log(req.file);
    res.send("file uploaded successfully");
});

app.listen(3000);