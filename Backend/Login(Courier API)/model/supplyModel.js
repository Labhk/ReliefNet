const mongoose = require('mongoose');
const supplySchema = new mongoose.Schema({
    name:String,
    email:String,
    city:String,
    foodCount:String,
    waterCount:String,
    kitCount:String,
    clothCount:String
})

mongoose.model('supply',supplySchema);
module.exports = mongoose.model('supply')