const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/advancedb");

const userSchema = mongoose.Schema({
    username: String,
    name: String,
    password: String,
    age: String,
    isMarried: Boolean,
    email: String
})

module.exports = mongoose.model('user', userSchema);