const mongoose = require('mongoose');

//schema with mongoose schema constructor
const userSchema = mongoose.Schema({

    name: {
        type:String,
        maxlength:50
    },
    email: {
        type:String,
        trim:true,
        /*The trim method in JavaScript is a built-in string
        method that removes whitespace characters from the 
        beginning and end of a string*/
        unique: 1
    },
    password: {
        type:String,
        minlength: 5
    },
    lastname: {
        type:String,
        maxlength: 50
    },
    role: {
        type:Number,
        default: 0
    },
    token: {
        type:String
    },
    tokenExp: {
        type:Number
    }
})

const User = mongoose.model('User',userSchema)

module.exports = { User }