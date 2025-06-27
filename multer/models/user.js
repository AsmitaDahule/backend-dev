const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/multerdbtest");

const userSchema = mongoose.Schema({
    name: String,
    image: Buffer
});
module.exports = mongoose.model("user", userSchema);