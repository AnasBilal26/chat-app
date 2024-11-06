/** @format */

// /** @format */

// // /** @format */

// // // app.js
// // const socket = io(); // Connect to the server

// // // DOM elements
// // const messageInput = document.getElementById('message-input');
// // const sendButton = document.getElementById('send-button');
// // const messagesContainer = document.getElementById('messages');

// // // Send a message to the server
// // sendButton.addEventListener('click', () => {
// //   const message = messageInput.value.trim();
// //   if (message) {
// //     socket.emit('chat message', message);
// //     messageInput.value = ''; // Clear the input field
// //   }
// // });

// // // Receive and display messages from the server
// // socket.on('chat message', (msg) => {
// //   const messageElement = document.createElement('p');
// //   messageElement.textContent = msg;
// //   messagesContainer.appendChild(messageElement);

// //   // Auto scroll to the bottom when new message is added
// //   messagesContainer.scrollTop = messagesContainer.scrollHeight;
// // });

// // // Optional: Handle Enter key to send message
// // messageInput.addEventListener('keydown', (event) => {
// //   if (event.key === 'Enter') {
// //     sendButton.click();
// //   }
// // });
// document.addEventListener('DOMContentLoaded', () => {
//   console.log('DOM fully loaded and parsed');

//   // Socket connection
//   const socket = io();

//   // DOM elements
//   const nameInput = document.getElementById('name-input');
//   const nameSubmitButton = document.getElementById('name-submit');
//   const messageInput = document.getElementById('message-input');
//   const sendButton = document.getElementById('send-button');
//   const messagesContainer = document.getElementById('messages');
//   const messageSection = document.getElementById('message-section');
//   const nameSection = document.getElementById('name-section');

//   // Variable to store the user's name
//   let userName = '';

//   // Set user name when they submit it
//   nameSubmitButton.addEventListener('click', () => {
//     const enteredName = nameInput.value.trim();
//     console.log('Name submitted:', enteredName);

//     if (enteredName) {
//       userName = enteredName;
//       nameSection.style.display = 'none'; // Hide name input section
//       messageSection.style.display = 'block'; // Show the message input section
//       socket.emit('set name', userName); // Notify server of user's name
//     } else {
//       alert('Please enter a valid name');
//     }
//   });

//   // Send a message to the server
//   sendButton.addEventListener('click', () => {
//     const message = messageInput.value.trim();
//     if (message && userName) {
//       socket.emit('chat message', { message, userName });
//       messageInput.value = ''; // Clear the input field
//     }
//   });

//   // Receive and display messages from the server
//   socket.on('chat message', (data) => {
//     const messageElement = document.createElement('p');
//     messageElement.textContent = `${data.userName}: ${data.message}`;
//     messagesContainer.appendChild(messageElement);

//     // Auto scroll to the bottom when new message is added
//     messagesContainer.scrollTop = messagesContainer.scrollHeight;
//   });

//   // Optional: Handle Enter key to send message
//   messageInput.addEventListener('keydown', (event) => {
//     if (event.key === 'Enter') {
//       sendButton.click();
//     }
//   });
// });
// Frontend JavaScript (app.js)
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');

  // Socket connection
  const socket = io(); // This will connect to the server on the same domain and port

  // DOM elements
  const nameInput = document.getElementById('name-input');
  const nameSubmitButton = document.getElementById('name-submit');
  const messageInput = document.getElementById('message-input');
  const sendButton = document.getElementById('send-button');
  const messagesContainer = document.getElementById('messages');
  const messageSection = document.getElementById('message-section');
  const nameSection = document.getElementById('name-section');

  // Variable to store the user's name
  let userName = '';

  // Set user name when they submit it
  nameSubmitButton.addEventListener('click', () => {
    const enteredName = nameInput.value.trim();
    console.log('Name submitted:', enteredName);

    if (enteredName) {
      userName = enteredName;
      nameSection.style.display = 'none'; // Hide name input section
      messageSection.style.display = 'block'; // Show the message input section
      socket.emit('set name', userName); // Notify server of user's name
    } else {
      alert('Please enter a valid name');
    }
  });

  // Send a message to the server
  sendButton.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message && userName) {
      socket.emit('chat message', { message, userName });
      messageInput.value = ''; // Clear the input field
    }
  });

  // Receive and display messages from the server
  socket.on('chat message', (data) => {
    const messageElement = document.createElement('p');
    messageElement.textContent = `${data.userName}: ${data.message}`;
    messagesContainer.appendChild(messageElement);

    // Auto scroll to the bottom when new message is added
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  });

  // Optional: Handle Enter key to send message
  messageInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      sendButton.click();
    }
  });
});
