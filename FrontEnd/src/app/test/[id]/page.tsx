"use client"
import React, { useState, useEffect } from 'react';

const TestComponent = (prop:any) => {
    const [message, setMessage] = useState('');
    const [receivedMessages, setReceivedMessages] = useState<any[]>([]);
    const [user_id, setUser_id] = useState('');
    const [friend_id, setFriend_id] = useState('');
    const [socket, setSocket] = useState<WebSocket | null>(null);

    useEffect(() => {
        const user_id = prop.params.id; // Thay prop.params.id bằng cách lấy user_id từ props của bạn
        setUser_id(user_id);

        const newSocket = new WebSocket(`ws://localhost:8765`);
        newSocket.onopen = () => {
            console.log('Connected to WebSocket server');
        };
        newSocket.onmessage = (event) => {
            console.log(event)
            const message = JSON.parse(event.data);;
            console.log(message)

            setReceivedMessages(prevMessages => [...prevMessages, message]);
        };

        setSocket(newSocket);

        // Không cần return một hàm từ useEffect
    }, [prop.params.id]);

    const sendMessage = () => {
        console.log('socket', socket);
        console.log("message", message.trim());
      
        if (socket && socket.readyState === WebSocket.OPEN) {
            const data = { user_id, message, friend_id };
            const jsonData = JSON.stringify(data);
            socket.send(jsonData);
            console.log("sf");
            setMessage('');
        }
    };

    return (
        <div>
            <h1>Client: {user_id}</h1>
            <div>
                <h3>friend_id</h3>
            <input type="text" value={friend_id} onChange={(e) => setFriend_id(e.target.value)} />
                <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
                
                <button onClick={sendMessage}>Send</button>
            </div>
            <div>
                {receivedMessages.map((msg, index) => (
                    <p key={index}>{msg.user_id}</p>
                ))}
            </div>
        </div>
    );
};

export default TestComponent;
