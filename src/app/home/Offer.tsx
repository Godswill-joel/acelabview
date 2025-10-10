"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { features } from "../data/data";
import { Button } from "../components/Button";
import studentImg from "../../../public/assets/images/Student.png" 



export default function ExpectSection() {
  return (
    <section className="w-screen bg-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-12">
        {/* Left Content */}
        <div className="w-screen md:w-1/2">
          {/* Section Header */}
          <p className="text-[#2661E9] font-semibold mb-4 text-2xl">
            What We Offer to Our Students
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            <span className="block">Here’s what you can</span>
            <span className="block">expect when you join us:</span>
          </h2>
          <p className="text-gray-600 mt-6 max-w-xl leading-relaxed">
            Whether you're starting your journey or looking to advance your
            career, DataForte Academy is here to guide you every step of the way.
          </p>
          <ul className="mt-8 space-y-4">
            {features.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="flex-shrink-0 mt-1">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#2661E9]">
                    <Check className="w-4 h-4 text-white" />
                  </span>
                </span>
                <span className="text-gray-800">{item}</span>
              </li>
            ))}
          </ul>
          <Button variant="secondary" size="md" className="mt-8">
            Learn More
          </Button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-full max-w-[520px] md:max-w-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={studentImg}
              alt="Student working at desk"
              className="w-full h-auto object-cover rounded-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
