"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { courses } from "../data/data";
import NavBar from "../components/NavBar";

export default function CoursesPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get unique categories
  const categories = ["All", ...new Set(courses.map((c) => c.category))];

  // Filtered courses
  const filteredCourses = courses.filter(
    (course) =>
      (selectedCategory === "All" || course.category === selectedCategory) &&
      course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="bg-gray-50 text-gray-900">
      <NavBar />
      <section className="relative h-[60vh] flex items-center justify-center text-center bg-gradient-to-b from-[#0a0a0a] via-[#141414] to-[#1c1c1c] text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/hero-bg.jpg"
            alt="Courses Hero"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Explore Our <span className="text-[#2661E9]">Courses</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300">
            Learn from industry experts and gain practical skills to shape your
            future.
          </p>
        </div>
      </section>

      {/* ================= COURSE FILTERS ================= */}
      <section className="container mx-auto px-6 lg:px-20 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          {/* Category filter buttons */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                  selectedCategory === cat
                    ? "bg-[#2661E9] text-white border-[#2661E9]"
                    : "bg-white text-gray-700 border-gray-200 hover:bg-[#2661E9] hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="flex items-center w-full md:w-[350px] bg-white rounded-full shadow-md border border-gray-200 px-4 py-2 focus-within:ring-2 focus-within:ring-[#2661E9]">
            <input
              type="text"
              placeholder="Search course..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 px-2"
            />
            <button className="bg-[#2661E9] hover:bg-[#1d4ed8] text-white px-4 py-2 rounded-full transition">
              Search
            </button>
          </div>
        </div>

        {/* ================= COURSE GRID ================= */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg transition-transform transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative w-full h-56">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="p-6">
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                  {course.category || "Course Category"}
                </p>
                <h3 className="text-lg md:text-xl font-semibold mb-3">
                  {course.title}
                </h3>

                <div className="flex items-center justify-between text-gray-500 text-sm mb-4">
                  <div className="flex items-center gap-2">
                    <Image
                      src={course.instructorImage}
                      alt={course.instructor}
                      width={28}
                      height={28}
                      className="rounded-full object-cover"
                    />
                    <span>{course.instructor}</span>
                  </div>
                  <span>{course.sessions} Sessions</span>
                </div>

                {/* Pricing & Join */}
                <div className="flex items-center justify-between mt-6">
                  <div>
                    <p className="text-lg font-semibold text-gray-900">
                      ${course.price.toFixed(2)}{" "}
                      <span className="text-gray-400 line-through text-sm ml-1">
                        ${course.oldPrice.toFixed(2)}
                      </span>
                    </p>
                  </div>

                  {/* Link to Contact Page */}
                  <Link href="/contact">
                    <button className="px-5 py-2 rounded-full text-sm font-semibold bg-[#2661E9] text-white hover:bg-[#1d4ed8] transition">
                      Join Course
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* If no results */}
        {filteredCourses.length === 0 && (
          <p className="text-center text-gray-500 mt-20 text-lg">
            No courses found. Try another keyword.
          </p>
        )}
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="bg-[#2661E9] text-white py-20 text-center">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Not sure which course to choose?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Our team will help you find the best course to match your goals.
          </p>
          <Link href="/contact">
            <button className="px-8 py-3 bg-white text-[#2661E9] font-semibold rounded-full hover:bg-gray-100 transition">
              Contact Us
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
