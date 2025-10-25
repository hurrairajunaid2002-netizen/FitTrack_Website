import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:yourgmail@gmail.com?subject=Message from ${form.name}&body=${form.message} (Reply to: ${form.email})`;
    window.location.href = mailtoLink;
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center transition duration-700 hover:scale-[1.01]"
      style={{ backgroundImage: "url('546.jpg')" }} // 🔥 Replace with your image path
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Contact Card */}
      <div className="relative z-10 container mx-auto px-6 max-w-2xl 
        bg-white/100 backdrop-blur-lg rounded-2xl shadow-xl p-10 
        transform transition-all duration-500 
        hover:scale-105 hover:shadow-blue-300/60 hover:-translate-y-2 
        hover:bg-gradient-to-r hover:from-white-50 hover:to-blue-100"
      >
        <h3 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Contact Us
        </h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div className="group">
            <label className="block mb-2 text-gray-700 font-medium group-hover:text-blue-600 transition">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 
              transition-transform duration-300 group-hover:scale-[1.02]"
              required
            />
          </div>

          {/* Email */}
          <div className="group">
            <label className="block mb-2 text-gray-700 font-medium group-hover:text-blue-600 transition">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 
              transition-transform duration-300 group-hover:scale-[1.02]"
              required
            />
          </div>

          {/* Message */}
          <div className="group">
            <label className="block mb-2 text-gray-700 font-medium group-hover:text-blue-600 transition">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 
              transition-transform duration-300 group-hover:scale-[1.02]"
              required
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg 
            transition-all duration-500 hover:bg-white hover:text-blue-600 
            hover:shadow-lg hover:border hover:border-blue-600"
          >
            Send Message ✉️
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
