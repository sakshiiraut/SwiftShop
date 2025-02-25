const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    phone:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    position:{
        type:Number,
        default:-1
    }
});

const users = mongoose.model('user',userSchema);

module.exports = users;