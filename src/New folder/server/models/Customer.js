const mongoose = require("mongoose");



const CustomerSchema = new mongoose.Schema({
  
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        length: 6
    },
    accountNumber: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phone:{
        type: Number,
        required: true,
    },
    initDeposit: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("customer", CustomerSchema);