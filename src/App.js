import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Pusher from 'pusher-js';
import axios from "./axios";
import Login from "./Login";
import { useStateValue } from "./StateProvider";


function App() {
  const [{ user }, dispatch] = useStateValue();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("/messages/sync").then((response) => {
      setMessages(response.data);
    });
  }, []);

  useEffect(() => {
    const pusher = new Pusher('b077d2e164cf4a6f13c5', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('message');
    channel.bind('inserted', function (newMessage) {
      setMessages([...messages, newMessage])
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  console.log(messages);

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className='app__body'>
          <Router>
            <Sidebar />
            <Routes>
              <Route path="/rooms/:roomId" element={<Chat messages={messages} />} />
              <Route path="/" element={<Chat messages={messages} />} />
            </Routes>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
