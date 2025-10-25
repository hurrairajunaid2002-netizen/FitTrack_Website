import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-black/80 shadow-md backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-400">FitTrack</h1>

        {/* Menu Links */}
        <ul className="hidden md:flex gap-6">
          <li>
            <a
              href="#home"
              className={`transition hover:underline underline-offset-4 decoration-2 ${
                scrolled ? "text-white hover:text-blue-400" : "text-white"
              }`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#features"
              className={`transition hover:underline underline-offset-4 decoration-2 ${
                scrolled ? "text-white hover:text-blue-400" : "text-white"
              }`}
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#onboarding"
              className={`transition hover:underline underline-offset-4 decoration-2 ${
                scrolled ? "text-white hover:text-blue-400" : "text-white"
              }`}
            >
              Tell Us About Yourself
            </a>
          </li>
          <li>
            <a
              href="#dashboard"
              className={`transition hover:underline underline-offset-4 decoration-2 ${
                scrolled ? "text-white hover:text-blue-400" : "text-white"
              }`}
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`transition hover:underline underline-offset-4 decoration-2 ${
                scrolled ? "text-white hover:text-blue-400" : "text-white"
              }`}
            >
              Contact
            </a>
          </li>
        </ul>

        {/* CTA Button */}
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
