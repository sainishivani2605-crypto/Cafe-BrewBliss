const mongoose = require("mongoose");
const express = require("express");
const { number } = require("framer-motion");
const menuSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required: true
    }
});
module.exports = mongoose.model('Menu',menuSchema);