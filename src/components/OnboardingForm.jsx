import React, { useState } from "react";

const OnboardingForm = () => {
  const [form, setForm] = useState({
    age: "",
    gender: "",
    height: "",
    weight: "",
    diet: "",
    goal: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Data:", form);
    alert("Your data has been saved! 🚀 (Now connect to backend API)");
  };

  return (
    <section
      className="py-20 bg-gradient-to-r bg-blue-200 to-black/50 transition-all duration-700 hover:scale-[1.01]"
      id="onboarding"
    >
      <div className="container mx-auto px-6 max-w-xl bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-blue-200/50 hover:-translate-y-2">
        <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition">
          Tell Us About Yourself
        </h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Age */}
          <div className="group">
            <label className="block mb-2 text-gray-700 font-medium group-hover:text-blue-600 transition">
              Age
            </label>
            <input
              type="number"
              name="age"
              value={form.age}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 transition-transform duration-300 group-hover:scale-[1.02]"
              required
            />
          </div>

          {/* Gender */}
          <div className="group">
            <label className="block mb-2 text-gray-700 font-medium group-hover:text-blue-600 transition">
              Gender
            </label>
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 transition-transform duration-300 group-hover:scale-[1.02]"
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Height */}
          <div className="group">
            <label className="block mb-2 text-gray-700 font-medium group-hover:text-blue-600 transition">
              Height (cm)
            </label>
            <input
              type="number"
              name="height"
              value={form.height}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 transition-transform duration-300 group-hover:scale-[1.02]"
              required
            />
          </div>

          {/* Weight */}
          <div className="group">
            <label className="block mb-2 text-gray-700 font-medium group-hover:text-blue-600 transition">
              Weight (kg)
            </label>
            <input
              type="number"
              name="weight"
              value={form.weight}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 transition-transform duration-300 group-hover:scale-[1.02]"
              required
            />
          </div>

          {/* Diet */}
          <div className="group">
            <label className="block mb-2 text-gray-700 font-medium group-hover:text-blue-600 transition">
              Diet Preference
            </label>
            <input
              type="text"
              name="diet"
              value={form.diet}
              onChange={handleChange}
              placeholder="e.g., Vegetarian, Keto..."
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 transition-transform duration-300 group-hover:scale-[1.02]"
              required
            />
          </div>

          {/* Goal */}
          <div className="group">
            <label className="block mb-2 text-gray-700 font-medium group-hover:text-blue-600 transition">
              Fitness Goal
            </label>
            <input
              type="text"
              name="goal"
              value={form.goal}
              onChange={handleChange}
              placeholder="e.g., Weight Loss, Muscle Gain..."
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 transition-transform duration-300 group-hover:scale-[1.02]"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg transition-all duration-500 hover:bg-white hover:text-blue-600 hover:shadow-lg hover:border hover:border-blue-600"
          >
            Generate My Plan 🚀
          </button>
        </form>
      </div>
    </section>
  );
};

export default OnboardingForm;
