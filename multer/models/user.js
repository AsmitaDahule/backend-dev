const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/multerdbtest");

const userSchema = mongoose.Schema({
    name: String,
    username: String,
    image: String
});
mongoose.model("user", userSchema);