const express = require('express')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config()
const queue = new Map();

//dummydata 





function findIndexInMap(map, targetKey) {
    let index = 0;
    for (let key of map.keys()) {
        if (key === targetKey) {
            return index;
        }
        index++;
    }
    return -1; 
}

async function tokendecoder(token){
    const decode =  jwt.verify(token,process.env.JWT_SECRET)
    return decode.email;
}


const handlesocket=(socket,io)=>{
    let email;

    socket.on('getqueue',async({token}) =>{
        email =await tokendecoder(token);
        

       socket.emit('getqueue',queue.size);
    })
    socket.on('getposition',async({token})=>{
        email =await tokendecoder(token);
        if(queue.has(email)){
            var index = findIndexInMap(queue,email);
            socket.emit('getposition',index+1);
        }else{
            socket.emit('getposition',-1);
        }
    })

    
    socket.on('booking',()=>{
        booking = true;
        queue.set(email,socket.id);
        
        io.emit('getqueue',queue.size);
        
        socket.emit('getposition',queue.size);
    })

    
    socket.on('cancelbooking',()=>{
        booking = false;
        queue.delete(email); 
        io.emit('getqueue',queue.size);
        var index = 1;
        for (let key of queue.keys()) {
           socket.to(queue.get(key)).emit('getposition',index);
            index++;
        }
        socket.emit('getposition',-1);
    })



    socket.on('disconnect',()=>{
        console.log('socket disconnected',socket.id);
        
    });
}
module.exports = handlesocket;