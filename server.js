// THE SERVER
console.log("app is running");

let express = require('express');
let app = express();
let server = app.listen(3000);

// host everything in that public directory
app.use(express.static('public'));

let socket = require('socket.io');
let io = socket(server);

// first event, new connection
io.on('connection', newConnection);

// a new conncetions creates a socket
function newConnection(socket){
  console.log("new conncection: ", socket.id)

  // recieve from client
  socket.on('mouse', mouseMsg);
  // do something with the data
  function mouseMsg(data){
    // send the message back out! (so others can recieve it) (exluding me)
    socket.broadcast.emit('mouse', data)
    console.log(data);
  }
}