//1. import mongoose library
var mongoose = require('mongoose');

//2. declare schema (table design/structure)
var StudentSchema = mongoose.Schema({
    name : String,
    birthday : Date,
    gender : String,
    email:  String,
    department : String,
    image: String
})

//3. declare model (collection management : CRUD, find, sort,...)
var StudentModel = mongoose.model("students", StudentSchema);  //students (plural form): collection name

//4. export model
module.exports = StudentModel;