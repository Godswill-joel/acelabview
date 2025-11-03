"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CourseOutlineModal({ course, onClose }: any) {
  const router = useRouter();
  const [openMonths, setOpenMonths] = useState<Record<number, boolean>>({});

  const toggleMonth = (i: number) =>
    setOpenMonths((prev) => ({ ...prev, [i]: !prev[i] }));

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between p-6 border-b">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{course.title}</h2>
              <p className="text-sm text-gray-500 mt-1">
                {course.months} Months • {course.mode || "Physical/Online"}
              </p>
            </div>
            <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
              ✕
            </button>
          </div>

          <div className="p-6 space-y-4">
            {course.outline?.map((month: any, i: number) => (
              <div key={i} className="border border-gray-100 rounded-lg">
                <button
                  onClick={() => toggleMonth(i)}
                  className="w-full flex justify-between items-center px-4 py-3 bg-gray-50"
                >
                  <span className="font-medium">{month.month}</span>
                  <span className={`transform transition-transform ${openMonths[i] ? "rotate-180" : ""}`}>
                    ▼
                  </span>
                </button>

                <AnimatePresence>
                  {openMonths[i] && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="bg-white px-5 pb-4"
                    >
                      {month.weeks.map((week: any, j: number) => (
                        <div key={j} className="mt-3">
                          <h4 className="font-semibold text-gray-700">{week.week}</h4>
                          <ul className="list-disc list-inside text-sm text-gray-600">
                            {week.topics.map((topic: string, k: number) => (
                              <li key={k}>{topic}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="border-t p-6 text-right">
            <button
              onClick={() => router.push(`/contact?course=${encodeURIComponent(course.title)}`)}
              className="bg-[#2661E9] text-white px-6 py-2 rounded-full hover:bg-[#1a4bb8] transition"
            >
              Join Course
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
