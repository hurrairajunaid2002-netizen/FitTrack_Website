import React from "react";

const Features = () => {
  const features = [
    { title: "Custom Meal Plans", desc: "Weekly meal suggestions based on your goals & diet." },
    { title: "Smart Workouts", desc: "Personalized exercise plans that adapt as you progress." },
    { title: "Progress Dashboard", desc: "Track calories, workouts, and weight changes visually." },
    { title: "Wearable Sync", desc: "Connect with your smartwatch for real-time tracking." },
    { title: "Gamification", desc: "Earn streaks, achievements, and stay motivated." },
  ];

  return (
    <section
      id="features"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center pt-24 transition duration-700 hover:scale-[1.01]"
      style={{ backgroundImage: "url('987.jpg')" }} // 🔥 Replace with your image path
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <h3 className="text-6xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Key Features
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="p-6 bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl 
              transform transition-all duration-500 hover:scale-105 hover:shadow-blue-300/60 hover:-translate-y-2
              hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100"
            >
              <h4 className="text-xl font-semibold text-blue-600">{f.title}</h4>
              <p className="text-gray-700 mt-3">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
