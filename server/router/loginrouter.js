const express = require('express');
const loginrouter = express.Router();
const dotenv = require('dotenv');


//jsonwebtoken
const jwt = require('jsonwebtoken');


dotenv.config();

loginrouter.route("/").post((req, res) => {
    
    
    const { name , email,password }= req.body;

    if(name==='' || email==='' || password===''){
        return res.status(400).json({msg: 'Please fill all fields'});
    }
    //Check if user exists in database

    //If user exists, send jwt token else send error message
    res.status(200).json({token: jwt.sign({ email: email }, process.env.JWT_SECRET, { expiresIn: "2d" })});

})


module.exports = loginrouter;
