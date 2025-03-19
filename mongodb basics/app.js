const express = require('express');
const app = express();
const mongooseconnection = require("./config/mongoose");
const userModel = require("./models/user");
const debuglog = require("debug")("development:app");

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/", function(req, res) {
    res.send("hey");
})

// app.get("/create", async function(req, res) {
//     let createduser = await userModel.create({
//         username:"mekochan",
//         name:"meko",
//         email:"mekochan@gmail.com",
//         password:"pass123"
//     })

//     // debuglog("user created");
//     res.send(createduser);
// })



// app.get("/read", async function(req, res, next) {
//     let users = await userModel.find();
//     res.send(users);
// })


// app.get("/update", async function(req, res, next) {
//     let user =await userModel.findOneAndUpdate({username:"asmi"},{username:"dadu"},{new:true});
//     res.send(user);
// })

// app.get("/delete", async function(req, res) {
//     let user = await userModel.findOneAndUpdate({username:"mekoc"});
//     res.send(user);
// })



app.post("/create",async function(req, res) {
    let {name, username, email, password} = req.body;

    let createduser = await userModel.create({
        name,
        username,
        email,
        password
    })

    res.send(createduser);
})


app.get("/user/:username", async function(req, res, next) {
    let user = await userModel.findOne({username: req.params.username});
    res.send(user);
})

app.get("/update/:username",async function(req, res, next) {
    let {name, username, email, password} = req.body;
    let newuser = await userModel.findOneAndUpdate({username:req.params.username}, {username, name, email, password}, {new:true});
    res.send(newuser);
})

app.get("/delete/:username",async function(req, res, next) {
    let deleteuser = await userModel.findOneAndDelete({username: req.params.username});
    res.send(deleteuser);
})

app.listen(3000);