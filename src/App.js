import React, { useEffect, useState } from 'react';
import Home from './components/home/Home';
import News from './components/news/News';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { auth } from './firebase';

const App = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName('');
    });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home name={userName} />} />
        <Route path="/news" element={<News />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
