const userMessageElement = document.getElementById('user-message');
const botMessageElement = document.getElementById('bot-message');
const userInputElement = document.getElementById('user-input');
const sendButtonElement = document.getElementById('send-button');

let conversation = [];

sendButtonElement.addEventListener('click', () => {
    const userInput = userInputElement.value.trim();
    if (userInput !== '') {
        conversation.push({ user: userInput });
        userInputElement.value = '';
        generateResponse();
    }
});

function generateResponse() {
    const userInput = conversation[conversation.length - 1].user;
    let response = '';

    // Simple AI logic using if-else statements
    if (userInput.includes('hello') || userInput.includes('hi')) {
        response = 'Hello! This is Abd--> How can I assist you today?';
    } else if (userInput.includes('what is your name')) {
        response = 'My name is Mohammad Abdullah, and i am a AbdBot, nice to meet you!';
    } else if (userInput.includes('how are you')) {
        response = 'I\'m doing great, thanks for asking!';
    } 
    else if(userInput.includes('are you teacher')){
        response = 'No sir.Im collage stdant! ';
    }
    else if(userInput.includes('who is aquib')){
        response = 'Aquib Gandu hai re !!😂😂😂😂😂! ';
    }
    else if(userInput.includes('who is hammad')){
        response = 'hammad bhadwa hai re !!😂😂😂😂😂! ';
    }
    else if(userInput.includes('who is yazdan')){
        response = 'yazdan to gay hai re !!😂😂😂😂😂! ';
    }
    else if(userInput.includes('who is abdullah')){
        response = 'Abdullah Owner hai re AI AbdBot ka!!😂😂😂😂😂! ';
    }
    else {
        response = 'I didn\'t understand that. Can you please rephrase?';
    }

    conversation.push({ bot: response });
    updateChatLog();
}

function updateChatLog() {
    userMessageElement.innerHTML = '';
    botMessageElement.innerHTML = '';

    conversation.forEach((message) => {
        if (message.user) {
            userMessageElement.innerHTML += `<p>You: ${message.user}</p>`;
        } else if (message.bot) {
            botMessageElement.innerHTML += `<p>Bot: ${message.bot}</p>`;
        }
    });
}