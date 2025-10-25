import React from "react";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Hero from "./components/Hero"; // ✅ if the file is hero.jsx
import OnboardingForm from "./components/OnboardingForm";
import Contact from "./components/Contacts";



const App = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero /> 
      <Features />
      <OnboardingForm />  {/* ✅ new form here */}
      <Dashboard />
      <Contact /> 
      <Footer />
      
    </div>
  );
};

export default App;
