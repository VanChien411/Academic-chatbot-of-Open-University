"use client"
// Client Side (React)
import React, { useState, useEffect } from 'react';

const TestComponent = () => {
    const [message, setMessage] = useState('');
    const [receivedMessages, setReceivedMessages] = useState<string[]>([]);
    const [user_id, setUser_id] = useState('');

    useEffect(() => {
        const user_id = '123'; // Thay đổi user_id cho mỗi client
        setUser_id(user_id);
        
        const socket = new WebSocket(`ws://localhost:8765?user_id=${user_id}`);

        socket.onopen = () => {
            console.log('Connected to WebSocket server');
        };

        socket.onmessage = (event) => {
            const message = event.data;
            setReceivedMessages(prevMessages => [...prevMessages, message]);
        };

        return () => {
            socket.close();
        };
    }, []);

    const sendMessage = () => {
        const socket = new WebSocket(`ws://localhost:8765?user_id=${user_id}`);
        socket.onopen = () => {
            socket.send(message);
        };
    };

    return (
        <div>
            <h1>Client: {user_id}</h1>
            <div>
                <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
                <button onClick={sendMessage}>Send</button>
            </div>
            <div>
                {receivedMessages.map((msg, index) => (
                    <p key={index}>{msg}</p>
                ))}
            </div>
        </div>
    );
};

export default TestComponent;