import React from "react";

const Hero = () => {
  return (
    <section
      id="home"   // ✅ Put it here
      className="relative min-h-screen flex items-center justify-center text-center px-6 pt-20 bg-cover bg-center"
      style={{ backgroundImage: "url('123.jpg')" }} // ✅ Your image here
    >
      {/* Overlay (optional, for readability) */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Personalized Fitness & Diet Tracker
        </h2>
        <p className="text-lg text-gray-200 mb-6">
          AI-driven meal plans, workouts, and progress tracking — all tailored for you.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700">
          Start Your Journey
        </button>
      </div>
    </section>
  );
};

export default Hero;
