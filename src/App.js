import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TherapistSection from "./components/TherapistSection";
import KeyStats from "./components/stats";
import FeaturesSection from "./components/features";
import HowItWorks from "./components/howitworks";
import Testimonials from "./components/testimonials";
import CallToAction from "./components/cta";
import Footer from "./components/footer";

import TherapistProfiles from "./components/TherapistmatchingUI/TherapistProfiles";
import TherapistMatching from "./components/TherapistmatchingUI/TherapistMatching";
import { ThemeContext } from "./components/TherapistmatchingUI/ThemeContext";
function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <TherapistSection />
              <KeyStats />
              <FeaturesSection />
              <HowItWorks />
              <Testimonials />
              <CallToAction />
            </>
          }
        />
        
        <Route path="/therapists" element={<TherapistMatching />} />
        <Route path="/theme" element={<ThemeContext/>}/>
       
        <Route path="/therapist-profiles" element={<TherapistProfiles />} /> {/* Updated path to match component naming */}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;