"use client";

import Image from "next/image";
import { useState } from "react";
import { courses } from "../data/data";

export default function CoursesSection() {
  const [search, setSearch] = useState("");

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="bg-gray-50 text-gray-900 py-20">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <div>
            <span className="bg-gray-200 text-gray-700 px-4 py-1 rounded-full text-sm font-semibold tracking-wide">
              OUR COURSES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Explore our Best <span className="text-[#2661E9]">Courses</span>
            </h2>
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

        {/* Courses Grid */}
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
                  <button className="px-5 py-2 rounded-full text-sm font-semibold bg-[#2661E9] text-white hover:bg-[#1d4ed8] transition">
                    Join Course
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
