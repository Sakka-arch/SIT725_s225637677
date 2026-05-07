const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();

const server = http.createServer(app);

const io = new Server(server);

app.use(express.static('public'));

io.on('connection', (socket) => {

    console.log('A user connected');

    socket.on('joinStudyRoom', (username) => {

        io.emit(
            'studyRoomMessage',
            `📚 ${username} joined the study room`
        );
    });

    socket.on('sendStudyMessage', (data) => {

        io.emit(
            'studyRoomMessage',
            `${data.username}: ${data.message}`
        );
    });

    socket.on('typingStatus', (username) => {

        socket.broadcast.emit(
            'displayTyping',
            `${username} is typing...`
        );
    });

    socket.on('disconnect', () => {

        console.log('User disconnected');
    });
});

server.listen(3000, () => {

    console.log('Server running at http://localhost:3000');
});