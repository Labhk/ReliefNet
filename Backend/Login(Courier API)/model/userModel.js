const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    email:String,
    password:String,
    role:String,
})

mongoose.model('users',userSchema);
module.exports = mongoose.model('users')