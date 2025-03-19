const mongoose = require('mongoose');
const debuglog = require("debug")("development:mongooseconfig");

mongoose.connect(
    "mongodb://localhost:27017/sample"

).then(function() {
    console.log("connected to db")
});

const db = mongoose.connection;

db.on("err", function(err){
    debuglog(err);
})

db.on("open", function() {
    debuglog("connected to the database");
})

module.exports = db;