/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../components/Button";
import CourseModal from "../course/model/CourseOutlineModal";
import Hero4 from "../../../public/assets/images/hero4.png";

import {
  marineCourseTopics,
  automationControl,
  troubleShooting
} from "../data/data";

export default function MarineCourses() {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCourse, setSelectedCourse] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    "All",
    "Marine Electrical Engineering Training",
    "Automation and Control",
    "Troubleshooting Industrial Control Systems",
  ];

  // Combine all courses
  const allCourses = [
    ...marineCourseTopics,
    ...automationControl,
    ...troubleShooting,
  ];

  const filteredCourses = allCourses.filter(
    (course) =>
      (selectedCategory === "All" || course.category === selectedCategory) &&
      course.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleViewCourse = (course: any) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  return (
    <main className="bg-gray-50 text-gray-900">

      {/* HERO */}
      <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
        <Image
          src={Hero4}
          alt="Marine Courses"
          fill
          className="object-cover transition-transform duration-500 hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Marine <span className="text-blue-400">Engineering Courses</span>
          </h1>
        </div>
      </section>

      {/* FILTER SECTION */}
      <section className="container mx-auto px-6 lg:px-20 py-16">

        <div className="flex flex-col md:flex-row justify-between mb-12 gap-6">

          {/* CATEGORY FILTER */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm border transition ${selectedCategory === cat
                  ? "bg-blue-600 text-white"
                  : "bg-white hover:bg-blue-600 hover:text-white"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* SEARCH */}
          <div className="flex items-center bg-white rounded-full border px-4 py-2">
            <input
              type="text"
              placeholder="Search course..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="outline-none px-2"
            />
          </div>

        </div>

        {/* COURSES GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {filteredCourses.map((course) => (

            <div
              key={course.id}
              className="rounded-3xl overflow-hidden shadow-lg bg-white"
            >

              <div className="relative h-56 w-full">
                <Image
                  src={course.images || Hero4}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 space-y-4">

                <p className="text-xs uppercase text-gray-500">
                  {course.category}
                </p>

                <h2 className="text-xl font-semibold">
                  {course.title}
                </h2>

                <p className="text-gray-600 text-sm line-clamp-3">
                  {course.description}
                </p>

                <div className="flex justify-between items-center">

                  <Button
                    className="bg-blue-600 text-white"
                    onClick={() => handleViewCourse(course)}
                  >
                    View Course
                  </Button>

                  <span className="text-sm text-gray-500">
                    {course.months} Months
                  </span>

                </div>

              </div>

            </div>

          ))}

        </div>
        <CourseModal
          course={selectedCourse}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onEnroll={() =>
            router.push(`/contact?course=${encodeURIComponent(selectedCourse?.title)}`)
          }
        />
      </section>

    </main>

  );
}