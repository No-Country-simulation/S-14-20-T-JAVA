import { useState, useEffect } from 'react';
import {onMessageReceived, findAndDisplayConnectedUsers} from './messageReceived'
const LoginChat = () => {
  const [stompClient,setStompClient]= useState(null);
  const [form,setForm] = useState({
    nickname: '',
    fullname: ''
  })
  
  async function connectToChat() {
    try {
      const socket = await new SockJS('http://localhost:9003/ws');
      let stompClient = await Stomp.over(socket);
      await stompClient.connect({}, onConnected, onError);
      setConnected(true);
    } catch (err) {
      console.error('Error connecting to socket:', err);
    }
  }
  
async function connect(form) {
  if (!form || !form.nickname || !form.fullname) {
    console.error('Form or nickname or fullname is missing.');
    return;
  }

  try {
    const socket = await new SockJS('http://localhost:9003/ws');
    let stompClient = await Stomp.over(socket);
   await stompClient.connect({}, onConnected, onError);
  } catch (err) {
    console.error('Error connecting to socket:', err);
  }
}
  
const onConnected = () => {
  const socket = new SockJS('http://localhost:9003/ws');

  const stompClient = Stomp.over(socket);
  setStompClient(stompClient);

  stompClient.connect({}, () => {
    stompClient.subscribe(`/user/${form.nickname}/queue/messages`, onMessageReceived);
    stompClient.subscribe(`/user/public`, onMessageReceived);
    stompClient.send("/app/user.addUser", {}, JSON.stringify({ nickName: form.nickname, fullName: form.fullname, status: 'ONLINE' }));

    findAndDisplayConnectedUsers().then();
  }, onError);
};

const onError = (error) => {
  console.error('Error connecting to socket:', error);
};
  return (
    <div className="h" id="username-page">
      <h2>Enter Chatroom</h2>
      <form id="usernameForm" className='flex flex-col pt-10 align-middle justify-center text-center' onSubmit={(e) => {
        e.preventDefault();
        connect(form);
      }}>
        <label htmlFor="nickname">Nickname:</label>
        <input type="text" id="nickname" name="nickname" required
               value={form.nickname} onChange={(e) => setForm({...form, nickname: e.target.value})}/>

        <label htmlFor="fullname">Real Name:</label>
        <input type="text" id="fullname" name="realname" required
               value={form.fullname} onChange={(e) => setForm({...form, fullname: e.target.value})}/>

        <button type="submit">Enter Chatroom</button>
      </form>
    </div>
  );
};

export default LoginChat



// import {io} from 'socket.io-client'
// const LoginChat = () => {
// const socket = io('http://localhost:9003/ws')
// const [isConnected,setIsConnected] = useState(false)

// useEffect(async() => {
//   await socket.on('connect', () => {
//     setIsConnected(true)
//   })

  
// }, [isConnected])

//   return (
//     <div>LoginChat</div>
//   )
// }

// export default LoginChat