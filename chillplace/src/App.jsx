import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormComponent from './Message';
import TimeLine from './TimeLine';
import ProductCard from './ProductCard';
import PodCast from './PodCast';
import HomePage from './Homepage';
import Blog from './Blog';
import Addiction from '../../Blogs/A/addiction';
import ADHDChildhood from '../../Blogs/A/adhd-childhood';
import AdjustmentDisorder from '../../Blogs/A/adjustment-disorder';
import Antisocial from '../../Blogs/A/antisocial';
import Anxiety from '../../Blogs/A/anxiety';
import BipolarDisorder from '../../Blogs/B/bipolar-disorder';
import Bulimia from '../../Blogs/B/bulimia';
import BodyDysmorphicDisorder from '../../Blogs/B/body-dysmorphic-disorder';
import CaffeineAddiction from '../../Blogs/C/caffeine-addiction';
import ClinicalPsy from '../../Blogs/C/clinical-psychology';
import CognitiveBehavioral from '../../Blogs/C/cognitive-behavioral-therpay';
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
        <Route path="/blog/anxiety" element={<Anxiety />} />
        <Route path="/blog/bulimia" element={<Bulimia />} />
        <Route path="/blog/body-dysmorphic-disorder" element={<BodyDysmorphicDisorder />} />
        <Route path="/blog/bipolar-disorder" element={<BipolarDisorder />} />
        <Route path="/blog/caffeine-addiction" element={<CaffeineAddiction />} />
        <Route path="/blog/clinical-psychology" element={<ClinicalPsy />} />
        <Route path="/blog/cognitive-behavioral-therapy" element={<CognitiveBehavioral />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
