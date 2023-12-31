import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import ChatwAI from './pages/ChatwAI';
import Blogs from './pages/Chillroom';
import FormComponent from './components/FormComponent';
import ProductCard from './components/ProductCard';
import TimeLine from './components/TimeLine';
import Chillroom from './pages/Chillroom';
function App() {
  // Check if the user is logged in from localStorage
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormComponent />} />
        {/* Display FormComponent if the user is not logged in */}
        {!isLoggedIn && <Route path="/" element={<FormComponent />} />}

        {/* Main Content under /main */}
        <Route path="/main" element={<Layout />}>
          <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="chatwAI" element={<ChatwAI />} />
            <Route path="chill" element={<Chillroom />}>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
