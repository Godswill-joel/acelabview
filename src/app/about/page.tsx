"use client";

import Image from "next/image";
import NavBar from "../components/NavBar";

export default function About() {
  return (
    <section className="min-h-screen  text-white">
      <NavBar />
      <div className="relative h-[50vh] flex flex-col justify-center items-center bg-gradient-to-b from-[#3c0078] via-[#4b008f] to-[#0b0614] text-center">
        <h1 className="text-5xl md:text-6xl font-bold tracking-wider">About</h1>
      </div>

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
            200K+ INSTRUCTORS
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
    </section>
  );
}
