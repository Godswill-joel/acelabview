"use client";

import Image from "next/image";
import { Button } from "../components/Button";
import { courses } from "../data/data";

export default function CoursesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <p className="text-[#9B4DFF] font-semibold text-lg mb-4">Our Courses</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900 mb-6">
              Check out the courses we offer
              <br />
              at Ace.
            </h2>
            <p className="text-slate-500 max-w-md mb-8">
              Discover industry-focused courses at DataForte Academy, designed to equip you
              with the skills and certifications to excel in today's job market.
            </p>
            <Button variant="secondary" size="md">
              Learn More
            </Button>
          </div>

          {/* Right column - top two course cards */}
          <div className="lg:col-span-7">
            <div className="max-w-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              {courses.slice(0, 2).map((course) => (
                <article
                  key={course.id}
                  className="relative bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  <div className="relative h-55 md:h-80 w-full">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  <div className="p-6 pt-4 pb-14">
                    <h3 className="text-xl font-semibold text-center text-slate-900">
                      {course.title}
                    </h3>
                    <p className="mt-4 text-xl text-slate-500 leading-relaxed text-justify">
                      {course.description}
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 w-full h-3 bg-orange-400 rounded-b-2xl" />
                  <div className="absolute left-1/2 -translate-x-1/2 -bottom-2">
                    <button
                      aria-label={`Explore ${course.title}`}
                      className="w-10 h-10 bg-[#9B4DFF] text-white rounded-full shadow-md flex items-center justify-center hover:scale-105 transform transition-transform duration-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Remaining courses - full width */}
      <div className="w-screen bg-gray-50 px-8 lg:px-20 mt-16">
        <div className="max-w-auto mx-auto grid grid-cols-2 md:grid-cols-3 gap-8">
          {courses.slice(2).map((course) => (
            <article
              key={course.id}
              className="relative bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              {/* image */}
              <div className="relative h-44 md:h-62 w-full">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6 pt-4 pb-14">
                <h3 className="text-xl font-semibold text-center text-slate-900">
                  {course.title}
                </h3>
                <p className="mt-4 text-xl text-slate-500 leading-relaxed text-justify">
                  {course.description}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-3 bg-orange-400 rounded-b-2xl" />
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-2">
                <button
                  aria-label={`Explore ${course.title}`}
                  className="w-10 h-10 bg-[#2661E9] text-white rounded-full shadow-md flex items-center justify-center hover:scale-105 transform transition-transform duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
