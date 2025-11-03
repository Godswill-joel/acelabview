"use client";

import { useRouter } from "next/navigation";
import { courses } from "@/app/data/data";
import CourseOutlineModal from "./CourseOutlineModal";

export default function OutlinePage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const router = useRouter();
  const course = courses.find((c) => c.slug === slug);

  if (!course) return null;

  return <CourseOutlineModal course={course} onClose={() => router.back()} />;
}
