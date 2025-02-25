const express = require('express');
const mongoose = require('mongoose');

const schema = mongoose.Schema({
    url:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    size:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    Location:{
        type:Number,
        required:true
    },
    featured:{
        type:Boolean,
        required:true
    },
});

const db = mongoose.model('sparkathon',schema);

module.exports = db;