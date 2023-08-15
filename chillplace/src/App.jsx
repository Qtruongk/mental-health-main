import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormComponent from './Message';
import TimeLine from './TimeLine';
import ProductCard from './ProductCard';
import PodCast from './PodCast';
import HomePage from './Homepage';
import Blog from './Blog';
import Addiction from '../../Blogs/addiction';
import ADHDChildhood from '../../Blogs/adhd-childhood';
import AdjustmentDisorder from '../../Blogs/adjustment-disorder';
import Antisocial from '../../Blogs/antisocial';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* Display FormComponent first */}
        <Route path="/" element={<FormComponent />} />
        {/* Main Content under /main */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/musics" element={<ProductCard />} />
        <Route path="/movies" element={<TimeLine />} />
        <Route path="/podcasts" element={<PodCast />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/addiction" element={<Addiction />} />
        <Route path="/blog/adhd-childhood" element={<ADHDChildhood />} />
        <Route path="/blog/adjustment-disorder" element={<AdjustmentDisorder />} />
        <Route path="/blog/antisocial-personality-disorder" element={<Antisocial />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
