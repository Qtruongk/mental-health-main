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
import DrugAddiction from '../../Blogs/D/drug-addiction';
import DepressionChildhood from '../../Blogs/D/depression-childhood';
import DelayedSleepSyndrome from '../../Blogs/D/delayed-sleep-phase-syndrome';
import EatingDisorder from '../../Blogs/E/eating-disorders';
import PeerPressure from '../../Blogs/G/genZ-&-peer-pressure';
import GenderDysphoria from '../../Blogs/G/gender-dysphoria';
import Intellectual from '../../Blogs/I/intellactual-disability';
import Loneliness from '../../Blogs/L/loneliness';
import MixedPersonality from '../../Blogs/M/mixed-personality-disorder';
import MoodDisorder from '../../Blogs/M/mood-disorder';
import NightEating from '../../Blogs/N/night-eating-syndrome';
import SleepWake from '../../Blogs/N/non-24-hour-sleep-wake-disorder';
import ObessiveCompulsive from '../../Blogs/O/obessive-compulsive-disorder';
import OnlineTherapy from '../../Blogs/O/online-therapy';
import PanicDisorder from '../../Blogs/P/panic-disorder';
import ParaphilicDisorder from '../../Blogs/P/paraphilic-disorders';
import QuitSmoking from '../../Blogs/Q/quit-somking';
import SexAddiction from '../../Blogs/S/sex-addiction';
import SleepDisorder from '../../Blogs/S/sleep-disorders';
import ShoppingAddiction from '../../Blogs/S/shopping-addiction';
import SocialAnxietty from '../../Blogs/S/social-anxiety-disorder';
import TechnologyAddiction from '../../Blogs/T/technology-addiction';
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
        <Route path="/blog/drug-addiction" element={<DrugAddiction />} />
        <Route path="/blog/depression-childhood" element={< DepressionChildhood/>} />
        <Route path="/blog/delayed-sleep-phase-syndrome" element={<DelayedSleepSyndrome/>} />
        <Route path="/blog/eating-disorders" element={<EatingDisorder />} />
        <Route path="/blog/genZ-&-peer-pressure" element={<PeerPressure />} />
        <Route path="/blog/gender-dysphoria" element={<GenderDysphoria />} />
        <Route path="/blog/intellectual-disability" element={<Intellectual />} />
        <Route path="/blog/loneliness" element={<Loneliness />} />
        <Route path="/blog/mixed-personality-disorder" element={<MixedPersonality />} />
        <Route path="/blog/mood-disorders" element={<MoodDisorder />} />
        <Route path="/blog/night-eating-syndrome" element={<NightEating />} />
        <Route path="/blog/non-24-hour-sleep-wake-disorder" element={<SleepWake/>} />
        <Route path="/blog/obessive-compulsive-disorder" element={<ObessiveCompulsive />} />
        <Route path="/blog/online-therapy" element={<OnlineTherapy />} />
        <Route path="/blog/panic-disorder" element={<PanicDisorder />} />
        <Route path="/blog/paraphilic-disorders" element={<ParaphilicDisorder />} />
        <Route path="/blog/quit-smoking" element={<QuitSmoking />} />
        <Route path="/blog/sex-addiction" element={<SexAddiction />} />
        <Route path="/blog/sleep-disorders" element={<SleepDisorder />} />
        <Route path="/blog/shopping-addiction" element={<ShoppingAddiction />} />
        <Route path="/blog/social-anxiety-disorder" element={<SocialAnxietty />} />
        <Route path="/blog/technology-addiction" element={<TechnologyAddiction />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

