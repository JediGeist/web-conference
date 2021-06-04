const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const fetch = require("node-fetch");

app.set('view engine', 'ejs')
app.use(express.static('public'))


app.get('/:room', (req, res) => {
  checkRoomId(req.params.room, req, res)
})

io.on('connection', socket => {
  socket.on('join-room', (roomId, userId) => {
    socket.join(roomId)
    socket.to(roomId).broadcast.emit('user-connected', userId)

    socket.on('disconnect', () => {
      socket.to(roomId).broadcast.emit('user-disconnected', userId)
    })
  })
})

function getBaseUrl() {
  return 'https://web-conference-hse.herokuapp.com/api/';
}

async function checkRoomId(room_id, req, res) {
  let roomId = {
    room_id: room_id
  };

  let url = 'room/getById';

  let response = await fetch(new URL(url, getBaseUrl()), { 
    method: 'POST', 
    headers: {'Content-Type': 'application/json;charset=utf-8'},
    body: JSON.stringify(roomId)
  });
  let result = await response.json();
  
  let checkStatus = typeof result.statusCode === 'undefined';

  res.render('conference', { roomId: req.params.room, checkStatus: checkStatus})
}

server.listen(parseInt(process.env.PORT, 10) || 8000, '0.0.0.0');