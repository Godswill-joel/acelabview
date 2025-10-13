"use client";

import Image from "next/image";
import NavBar from "../components/NavBar";

export default function About() {
  return (
    <main className="bg-gray-50 text-gray-900">
      <NavBar />
      <section className="relative h-[60vh] flex items-center justify-center text-center bg-gradient-to-b from-[#0a0a0a] via-[#141414] to-[#1c1c1c] text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/hero-bg.jpg"
            alt="about Hero"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            All About <span className="text-[#2661E9]">Us</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300">
            Know everthing about our institute and our achievements 
          </p>
        </div>
      </section>

      {/* About Content */}
      <div className="container mx-auto px-6 lg:px-20 py-20 grid md:grid-cols-2 gap-10 items-center">
        {/* Left - Image */}
        <div className="relative">
          <Image
            src="/assets/images/student-ai.jpg"
            alt="AI Learning"
            width={600}
            height={400}
            className="rounded-2xl object-cover"
          />
          <div className="absolute top-4 left-4 bg-gradient-to-br from-purple-600 to-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg">
            5-+ INSTRUCTORS
          </div>
        </div>

        {/* Right - Text */}
        <div>
          <p className="text-sm font-semibold text-[#9eff00] uppercase mb-3">
            About Cerdas
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-6">
            AI-Powered Learning for the Next Generation
          </h2>
          <p className="text-gray-300 leading-relaxed">
            At Cerdas, we’re revolutionizing education through artificial
            intelligence. Our platform empowers students and instructors with
            smart, adaptive learning experiences designed to inspire curiosity
            and accelerate success. Join over 200,000 instructors and countless
            learners shaping the future of learning.
          </p>
        </div>
      </div>
    </main>
  );
}
