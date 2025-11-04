"use client";

import { useRouter } from "next/navigation";
import { courses } from "@/app/data/data";
import CourseModal from "../model/CourseOutlineModal";

export default function OutlinePage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const router = useRouter();
  const course = courses.find((c) => c.slug === slug);

  if (!course) return null;

  return (
    <CourseModal
      course={course}
      isOpen={true} 
      onClose={() => router.back()}
      onEnroll={() =>
        router.push(`/contact?course=${encodeURIComponent(course.title)}`)
      }
    />
  );
}
