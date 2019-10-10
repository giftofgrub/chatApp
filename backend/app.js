
const app = require('express')();
const expressWs = require('express-ws')(app);


// allow for app.ws routes for websocket routes
app.get('/room', function(req, res, next) {
  res.json({ message: "You have reached nowhere. Please go to '/room/:roomName' to enter a room with a websocket."})
});

app.ws('/room/:roomName', function(ws, req) {
  console.log(`WS connected to room ${req.params.roomName}`);
})

app.get('/', function(req, res, next) {
  res.json({ message: "You have reached the homepage. Please go to '/room/:roomName' to enter a room with a websocket."})
});

module.exports = app;