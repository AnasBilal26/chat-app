/** @format */

// /** @format */

// // /** @format */

// // // server.js
// // const express = require('express');
// // const http = require('http');
// // const socketIo = require('socket.io');

// // // Initialize express app and HTTP server
// // const app = express();
// // const server = http.createServer(app);
// // const io = socketIo(server);

// // // Serve static files
// // app.use(express.static('public'));

// // // When a client connects via socket
// // io.on('connection', (socket) => {
// //   console.log('New user connected');

// //   // Listen for incoming messages
// //   socket.on('chat message', (msg) => {
// //     io.emit('chat message', msg); // Broadcast the message to all clients
// //   });

// //   // Handle disconnection
// //   socket.on('disconnect', () => {
// //     console.log('User disconnected');
// //   });
// // });

// // // Start the server
// // const PORT = process.env.PORT || 3000;
// // server.listen(PORT, () => {
// //   console.log(`Server running on port ${PORT}`);
// // });
// const express = require('express');
// const http = require('http');
// const socketIo = require('socket.io');

// // Initialize express app and HTTP server
// const app = express();
// const server = http.createServer(app);
// const io = socketIo(server);

// // Store users and their names
// const users = {};

// // Serve static files
// app.use(express.static('public'));

// // When a client connects via socket
// io.on('connection', (socket) => {
//   console.log('New user connected');

//   // Set the user's name
//   socket.on('set name', (name) => {
//     users[socket.id] = name;
//   });

//   // Listen for incoming messages
//   socket.on('chat message', (data) => {
//     const { message, userName } = data;
//     io.emit('chat message', { message, userName }); // Broadcast the message with the username
//   });

//   // Handle disconnection
//   socket.on('disconnect', () => {
//     console.log('User disconnected');
//     delete users[socket.id]; // Remove the user from the list when they disconnect
//   });
// });

// // Start the server
// const PORT = process.env.PORT || 3000;
// server.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
// const express = require('express');
// const http = require('http');
// const socketIo = require('socket.io');

// const app = express();
// const server = http.createServer(app);
// const io = socketIo(server);

// let users = {};

// app.use(express.static('public'));

// // When a client connects via socket
// io.on('connection', (socket) => {
//   console.log('New user connected');

//   // Listen for the user's name
//   socket.on('set name', (name) => {
//     users[socket.id] = name;
//     console.log(`User's name is: ${name}`);
//   });

//   // Listen for incoming chat messages
//   socket.on('chat message', (data) => {
//     console.log(`${data.userName}: ${data.message}`);
//     io.emit('chat message', data); // Broadcast the message to all clients
//   });

//   // Handle disconnection
//   socket.on('disconnect', () => {
//     console.log('User disconnected');
//     delete users[socket.id];
//   });
// });

// const PORT = process.env.PORT || 3000;
// server.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
// server/server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

// Initialize Express app and HTTP server
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Store users by their socket ID
let users = {};

// Serve static files from the 'public' folder
app.use(express.static('public'));

// When a client connects via socket
io.on('connection', (socket) => {
  console.log('New user connected');

  // Listen for the user's name
  socket.on('set name', (name) => {
    users[socket.id] = name;
    console.log(`User's name is: ${name}`);
  });

  // Listen for incoming chat messages
  socket.on('chat message', (data) => {
    console.log(`${data.userName}: ${data.message}`);
    io.emit('chat message', data); // Broadcast the message to all clients
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('User disconnected');
    delete users[socket.id];
  });
});

// Start the server on a port (default 3000)
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
