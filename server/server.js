const express = require('express');
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());




//socket

const { createServer } = require('http');
const { Server } = require('socket.io');
const server = createServer(app);
const handlesocket = require('./utils/socketio.js');
const io = new Server(server, {
  cors: {
    origin: '*', 
  }
});

io.on('connection', (socket)=>{
  handlesocket(socket,io);
});


//dotenv configuration
const dotenv = require('dotenv');
dotenv.config();

//cors configuration

const cors = require('cors');
app.use(cors());

//home routing
const router = require('./router/homerouter')

//login handling and token handling
const loginrouter = require('./router/loginrouter.js');

app.use("/home/v1/api",router);
app.use("/login/api",loginrouter)

//mongodb server
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL,{
    dbName: "Sparkathon",
})
.then(()=>{console.log('connected to mongodb');})
.catch(()=>{console.log('error connecting to mongodb')})






//app listening
const port = process.env.PORT;
server.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
