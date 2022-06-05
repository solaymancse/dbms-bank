const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema ({
    name: {
        type: String,
        required: [true, 'Please Enter a Name']
    },
    email: {
        type: String,
        required: [true, 'Please Enter a Email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please Add a password'],
        minlength: 6
    },
    
    nidNumber: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model("User", userSchema);

