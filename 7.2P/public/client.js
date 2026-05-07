const socket = io();

const usernameInput =
    document.getElementById('username');

const messageInput =
    document.getElementById('messageInput');

const messages =
    document.getElementById('messages');

const typingText =
    document.getElementById('typing');

let joined = false;


/*
-----------------------------------
Typing Indicator
-----------------------------------
*/

messageInput.addEventListener('input', () => {

    const username = usernameInput.value;

    if (username !== '') {

        socket.emit(
            'typingStatus',
            username
        );
    }
});


socket.on('displayTyping', (data) => {

    typingText.innerText = data;

    setTimeout(() => {

        typingText.innerText = '';

    }, 1000);
});


/*
-----------------------------------
Send Normal Message
-----------------------------------
*/

function sendMessage() {

    const username = usernameInput.value;

    const message = messageInput.value;

    if (username === '' || message === '') {

        alert('Please enter username and message');

        return;
    }

    if (!joined) {

        socket.emit(
            'joinStudyRoom',
            username
        );

        joined = true;
    }

    socket.emit(
        'sendStudyMessage',
        {
            username,
            message
        }
    );

    messageInput.value = '';
}


/*
-----------------------------------
Send Status Message
-----------------------------------
*/

function sendStatus(status) {

    const username = usernameInput.value;

    if (username === '') {

        alert('Please enter username');

        return;
    }

    if (!joined) {

        socket.emit(
            'joinStudyRoom',
            username
        );

        joined = true;
    }

    socket.emit(
        'sendStudyMessage',
        {
            username,
            message: `📌 STATUS: ${status}`
        }
    );
}




socket.on('studyRoomMessage', (data) => {

    const paragraph =
        document.createElement('p');

    const currentTime =
        new Date().toLocaleTimeString();

    paragraph.innerText =
        `[${currentTime}] ${data}`;

    messages.appendChild(paragraph);

    messages.scrollTop =
        messages.scrollHeight;
});