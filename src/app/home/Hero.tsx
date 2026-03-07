"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "../components/Button";
import { Oregano } from "next/font/google";

const oregano = Oregano({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const oreganoBoldItalic = Oregano({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
});
export default function HomePage() {
  return (
    <main className="relative overflow-hidden bg-white">
      <section className="relative h-[100vh] flex items-center justify-center md:justify-start">
        <div className="absolute inset-0 ">
          <Image
            src="/assets/images/tinywow_tinywow_ark_85209565_85209604.webp"
            alt="acelab students learning tech"
            fill
            className="object-cover object-center "
            priority
          />
          <div className="absolute inset-0 bg-black/60 md:bg-black/80" />
        </div>

        <div className="z-1 container mx-auto px-6 sm:px-8 md:px-12 lg:px-20 text-center md:text-left text-white">
          <div className="max-w-5xl mx-auto md:mx-0">

            <h1 className={`${oreganoBoldItalic.className}  text-2xl sm:text-4xl md:text-6xl font-bold mb-4 leading-snug md:leading-tight`}>
              Your Future in{" "}
              <span
                className={" text-[#2661E9] text-4xl sm:text-5xl md:text-7xl font-bold italic"}
              >
                Tech
              </span>{" "}
              <br />
              and{" "}
              <span
                className={"text-[#2661E9] text-4xl sm:text-5xl md:text-7xl font-bold italic"}
              >
                Marine Engineering
              </span>
              <br />
              Starts Here
            </h1>

            {/* Reduced width on mobile */}
            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 max-w-md mx-auto md:max-w-none md:mx-0">
              Gain in-demand skills, earn globally recognized certifications,
              and secure your future with hands-on training and expert-led
              courses at Acelab Academy.
            </p>

            {/* Center button on mobile */}
            <div className="flex justify-center md:justify-start">
              <Link href="/contact">
                <Button
                  className="bg-[#2661E9] hover:bg-[#1a4bb8] text-white font-bold transition-colors"
                  size="lg"
                >
                  ENROLL NOW
                </Button>
              </Link>
            </div>

          </div>
        </div>

        {/* Bottom SVG curve */}
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