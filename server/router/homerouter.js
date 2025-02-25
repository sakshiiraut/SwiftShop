const express = require('express')
const router = express.Router();
const db = require('../utils/schema') 

router.route("/").get(async(req, res) => {

    //upon loading site

    const data = await db.find({});
    return res.status(200).json(data);

})

router.route("/").post(async(req, res) => {
    
    //making a dynamic search query
    const dynamic_query = {};
    const{brand,size,price} = req.body;
    let cost = undefined;
    if(price == "Upto 300") cost = 300;
    
    if(price == "Upto 500") cost = 500;
    if(price == "500+") cost = 1000;
    

    
   
    if(size) dynamic_query.size = size;
    if(cost)    dynamic_query.price = {$lte:cost};

    if(brand) dynamic_query.brand = brand;
   
    
    const dynamic_data = await db.find(dynamic_query);
    if(!dynamic_data){
        return res.status(200);
    }else{

        return res.status(200).json(dynamic_data);
    }
})
module.exports = router;