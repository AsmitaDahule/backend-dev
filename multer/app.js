const express = require("express");
const app = express();
const userModel = require("./models/user");
const upload = require("./multer-setup.js");

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("index");
});

app.post("/upload", upload.single('image'), async function(req, res) {
    let image = await userModel.create({
        name:"bag",
        image:req.file.buffer,
    });

    res.send("file created");
});


app.get("/show", async function(req, res) {
    let files = await userModel.find();
    res.render("show", { files });
});

app.listen(3000);