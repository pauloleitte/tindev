const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose")
const cors = require('cors')

const app = express();
const server = require('http').Server(app)
const io = require('socket.io')(server)

const connectUsers = {}
mongoose.connect("mongodb+srv://omnistack:omnistack@cluster0-9ifp6.mongodb.net/omnistack8test?retryWrites=true&w=majority", 
{useNewUrlParser : true})


io.on('connect', socket => {
    const { user } = socket.handshake.query
    connectUsers[user] = socket.id
})

app.use((req,res,next) =>{
    req.io = io;
    req.connectUsers = connectUsers;
    return next();
})


app.use(cors())
app.use(express.json());
app.use(routes);

server.listen(4000);