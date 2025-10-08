"use client";

import { Button } from "../components/Button";
import acelab from "../../../public/assets/images/ark.jpeg"
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden bg-white">
      <section className="relative h-[100vh] flex items-center justify-center md:justify-start">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/assets/images/ark.jpeg"
            alt="DataForte students learning tech"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/60 md:bg-black/50" />
        </div>
        <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-20 text-center md:text-left text-white">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-snug md:leading-tight">
              Your Future in Tech <br />
              <span className="text-[#9B4DFF]">Starts Here</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8">
              Gain in-demand skills, earn globally recognized certifications,
              and secure your future with hands-on training and expert-led
              courses at DataForte Academy.
            </p>

            <Button className="bg-[#9B4DFF] hover:bg-[#7a3cd9] text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg transition-all duration-300">
              ENROLL NOW
            </Button>
          </div>
        </div>

        {/* SVG Wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-[calc(100%+1.3px)] h-[80px] sm:h-[100px] md:h-[120px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66 92.83C906.67 72 823.78 32 743.84 18.21 661.44 3.87 577.93 17.48 495.71 31.3 413.18 45.17 330.26 59.42 248.05 57.04 165.81 54.65 82.79 35.06 0 0v120h1200V95.8c-70.93 13.54-141.86 27.09-214.34-2.97z"
              fill="#ffffff"
            ></path>
          </svg>
        </div>
      </section>
    </main>
  );
}
