"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { courses } from "../data/data";
import NavBar from "../components/NavBar";
import { Button } from "../components/Button";
import { Pop, Float, SlideUp } from "@/app/style/animation";
import hero from "../../../public/assets/images/WhatsApp Image 2025-10-14 at 15.12.37.jpeg";

export default function CoursesPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(courses.map((c) => c.category))];

  const filteredCourses = courses.filter(
    (course) =>
      (selectedCategory === "All" || course.category === selectedCategory) &&
      course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="bg-gray-50 text-gray-900">
      <NavBar />
      {/* HERO SECTION */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center text-center bg-gradient-to-br from-[#0a0a0a] via-[#141414] to-[#1c1c1c] text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={hero}
            alt="Contact Hero"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div> {/* Reduced darkness overlay */}
        </div>

        <div className="relative z-10 px-4 max-w-4xl mx-auto">
          <Float>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
              Explore Our<span className="text-[#2661E9] bg-gradient-to-r from-[#2661E9] to-[#3b82f6] bg-clip-text text-transparent">Courses</span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-100 leading-relaxed"> {/* Changed to gray-100 for better contrast */}
              Learn from industry experts and gain practical skills to shape your
              future.
            </p>
          </Float>
        </div>
      </section>
      {/* course filter */}
      <section className="container mx-auto px-6 lg:px-20 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          {/* Category filter buttons */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${selectedCategory === cat
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

        {/* COURSE GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="relative text-black rounded-3xl overflow-hidden shadow-lg w-full transition-transform transform hover:-translate-y-2"
            >
              {/* Course Image */}
              <div className="relative">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={600}
                  height={400}
                  className="w-full h-56 object-cover"
                />
              </div>

              {/* Course Content */}
              <div className="p-6 space-y-4 relative z-10">
                <div>
                  <p className="text-xs uppercase text-black tracking-wider">
                    {course.category || "Course Category"}
                  </p>
                  <h2 className="text-xl font-semibold mt-1">
                    {course.title}
                  </h2>
                </div>

                <div className="flex items-center justify-between text-sm text-black-100">
                  <div className="flex items-center gap-2">
                    <Image
                      src={course.instructorImage}
                      alt={course.instructor}
                      width={32}
                      height={32}
                      className="rounded-full object-cover"
                    />
                    <span>{course.instructor}</span>
                  </div>
                  <span>{course.months}Months</span>
                </div>

                <div className="flex items-center justify-between pt-3">
                  <div>
                    <p className="text-lg font-semibold text-black-100">
                      N{course.price.toFixed(2)}
                    </p>
                    <p className="text-sm text-black-100 line-through">
                      ${course.oldPrice.toFixed(2)}
                    </p>
                  </div>

                  <Link href="/contact">
                    <Button className="bg-[#2661E9] ml-8 hover:bg-[#1a4bb8] text-white font-bold  transition-colors" >
                      Join Course
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Cutout Shape */}
              <div className="absolute bottom-0 right-0 w-[130px] h-[80px] bg-gray-300 rounded-tl-[50px]" />
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

      {/* CALL TO ACTION */}
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
