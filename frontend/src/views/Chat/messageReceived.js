export async function onMessageReceived(payload) {
    if (!payload || !payload.body) {
        console.error('Invalid payload or missing body');
        return;
    }

    try {
        await findAndDisplayConnectedUsers();

        const message = JSON.parse(payload.body);
        if (!message || !message.senderId) {
            console.error('Invalid message or missing senderId');
            return;
        }

        if (selectedUserId && selectedUserId === message.senderId) {
            displayMessage(message.senderId, message.content);
            if (chatArea) {
                chatArea.scrollTop = chatArea.scrollHeight;
            }
        }

        if (selectedUserId) {
            const selectedUserElement = document.querySelector(`#${selectedUserId}`);
            if (selectedUserElement) {
                selectedUserElement.classList.add('active');
            }
        } else if (messageForm) {
            messageForm.classList.add('hidden');
        }

        const notifiedUser = document.querySelector(`#${message.senderId}`);
        if (notifiedUser && !notifiedUser.classList.contains('active')) {
            const nbrMsg = notifiedUser.querySelector('.nbr-msg');
            if (nbrMsg) {
                nbrMsg.classList.remove('hidden');
                nbrMsg.textContent = '';
            }
        }
    } catch (error) {
        console.error('Error handling message:', error);
    }
}

export async function findAndDisplayConnectedUsers() {
    const connectedUsersResponse = await fetch('/users');
    let connectedUsers = await connectedUsersResponse.json();
    return connectedUsers = connectedUsers.filter(user => user.nickName !== nickname);
    

   
}