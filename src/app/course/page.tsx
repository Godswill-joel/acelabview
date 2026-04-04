/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import { useRouter } from "next/navigation";
import { Button } from "../components/Button";
import { Float } from "@/app/style/animation";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/app/firebase/firebase";
import Loading from "@/app/components/Loading";
import CourseModal from "./model/CourseOutlineModal";
import hero from "../../../../public/assets/images/Hero.jpeg";

export default function CoursesPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCourse, setSelectedCourse] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [courses, setCourses] = useState<any[]>([]);
  const [coursesHero, setCoursesHero] = useState<any>(null);
  const [pageLoading, setPageLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      try {
        const ref = doc(db, "config", "siteConfig");
        const snap = await getDoc(ref);
        if (snap.exists()) {
          setCourses(snap.data().courses ?? []);
          setCoursesHero(snap.data().coursesHero ?? null);
        }
      } catch (err) {
        console.error("Failed to load courses:", err);
      } finally {
        setPageLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleJoinCourse = (course: any) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const handleEnroll = () => {
    if (selectedCourse) {
      router.push(`/contact?course=${encodeURIComponent(selectedCourse.title)}`);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

  if (pageLoading) return <Loading />;

  const accent = coursesHero?.accentColor ?? "#2661E9";

  // All unique categories for filter buttons
  const categories = ["All", ...new Set(courses.map((c) => c.category).filter(Boolean))];

  const filteredCourses = courses.filter(
    (course) =>
      (selectedCategory === "All" || course.category === selectedCategory) &&
      course.title.toLowerCase().includes(search.toLowerCase())
  );

  // Group filtered courses by their group field for section headings
  const groups = [...new Set(filteredCourses.map((c) => c.group).filter(Boolean))];

  return (
    <main className="bg-gray-50 text-gray-900">
      <NavBar />

      <CourseModal
        course={selectedCourse}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onEnroll={handleEnroll}
      />

      {/* ── Hero ── */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={coursesHero?.backgroundImage || hero}
            alt="Course Hero"
            fill
            className="object-cover"
            priority
          />
          <div
            className="absolute inset-0 bg-black"
            style={{ opacity: (coursesHero?.overlayOpacity ?? 50) / 100 }}
          />
        </div>
        <div className="relative z-10 px-4 max-w-4xl mx-auto">
          <Float>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
              {coursesHero?.headline ?? "Explore Our"}
              <span style={{ color: accent }}>
                {" "}{coursesHero?.headlineHighlight ?? "Courses"}
              </span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-100 leading-relaxed">
              {coursesHero?.subtext ?? "Learn from industry experts and gain practical skills to shape your future."}
            </p>
          </Float>
        </div>
      </section>

      {/* ── Filter + Search ── */}
      <section className="container mx-auto px-6 lg:px-20 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className="px-4 py-2 rounded-full text-sm font-medium border transition-all"
                style={
                  selectedCategory === cat
                    ? { backgroundColor: accent, color: "#fff", borderColor: accent }
                    : { backgroundColor: "#fff", color: "#374151", borderColor: "#e5e7eb" }
                }
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center w-full md:w-[350px] bg-white rounded-full shadow-md border border-gray-200 px-4 py-2 focus-within:ring-2"
            style={{ ["--tw-ring-color" as any]: accent }}>
            <input
              type="text"
              placeholder="Search course..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 px-2"
            />
            <button
              className="text-white px-4 py-2 rounded-full transition"
              style={{ backgroundColor: accent }}
            >
              Search
            </button>
          </div>
        </div>

        {/* ── Grouped course cards ── */}
        {groups.length > 0 ? groups.map((group) => {
          const groupCourses = filteredCourses.filter((c) => c.group === group);
          return (
            <div key={group} className="mb-16">
              <h2 className="text-2xl font-bold mb-8 pb-3 border-b border-gray-200" style={{ color: accent }}>
                {group}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {groupCourses.map((course) => (
                  <div
                    key={course.id}
                    className="relative text-black rounded-3xl overflow-hidden shadow-lg w-full transition-transform transform hover:-translate-y-2"
                  >
                    <div className="relative">
                      {course.image ? (
                        <Image
                          src={course.image}
                          alt={course.title}
                          className="w-full h-56 object-cover"
                        />
                      ) : (
                        <div className="w-full h-56 bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-400 text-sm">No image</span>
                        </div>
                      )}
                    </div>
                    <div className="p-6 space-y-4 relative z-10">
                      <div>
                        <p className="text-xs uppercase text-black tracking-wider">
                          {course.category || "Course Category"}
                        </p>
                        <h2 className="text-xl font-semibold mt-1">{course.title}</h2>
                      </div>
                      <div className="flex items-center justify-between text-sm text-black">
                        <span>{course.months} Months</span>
                      </div>
                      <div className="flex items-center justify-between pt-3">
                        {course.price > 0 ? (
                          <p className="text-lg font-semibold">
                            ₦{course.price.toLocaleString("en-NG")}{" "}
                            {course.oldPrice > 0 && (
                              <span className="line-through text-sm ml-1 text-gray-400">
                                ₦{course.oldPrice.toLocaleString("en-NG")}
                              </span>
                            )}
                          </p>
                        ) : (
                          <span />
                        )}
                        <Button
                          className="ml-8 text-white font-bold transition-colors"
                          style={{ backgroundColor: accent }}
                          onClick={() => handleJoinCourse(course)}
                        >
                          Join Course
                        </Button>
                      </div>
                    </div>
                    <div className="absolute bottom-0 right-0 w-[170px] h-[80px] bg-gray-300 rounded-tl-[50px]" />
                  </div>
                ))}
              </div>
            </div>
          );
        }) : (
          <p className="text-center text-gray-500 mt-20 text-lg">
            No courses found. Try another keyword.
          </p>
        )}
      </section>

      {/* ── CTA ── */}
      <section className="text-white py-20 text-center" style={{ backgroundColor: accent }}>
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Not sure which course to choose?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Our team will help you find the best course to match your goals.
          </p>
          <Link href="/contact">
            <Button className="px-8 ml-auto mr-auto py-3 bg-white font-semibold rounded-full transition"
              style={{ color: accent }}>
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}