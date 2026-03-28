"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "../../components/Button";
import { Oregano } from "next/font/google";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/app/firebase/firebase";
import  Loading  from '@/app/components/Loading'

const oregano = Oregano({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

interface HeroData {
  backgroundImage: string;
  overlayOpacity: number;
  headlineStart: string;
  headlineHighlight1: string;
  headlineMiddle: string;
  headlineHighlight2: string;
  headlineEnd: string;
  subtext: string;
  buttonText: string;
  buttonLink: string;
  accentColor: string;
}


// ─── Error State ───────────────────────────────────────────────────────────
function HeroError() {
  return (
    <main className="relative overflow-hidden bg-white">
      <section className="relative h-[100vh] flex items-center justify-center bg-gray-950">
        <div className="text-center text-white space-y-3 px-6">
          <p className="text-4xl">⚠️</p>
          <p className="text-lg font-semibold">Failed to load content</p>
          <p className="text-sm text-gray-400">
            Please check your connection and refresh the page.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-5 py-2 text-sm font-semibold rounded-lg bg-white/10 hover:bg-white/20 transition-colors border border-white/20"
          >
            Refresh
          </button>
        </div>

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
            />
          </svg>
        </div>
      </section>
    </main>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────
export default function HomePage() {
  const [hero, setHero] = useState<HeroData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchHero() {
      try {
        const ref = doc(db, "config", "siteConfig");
        const snap = await getDoc(ref);
        if (snap.exists() && snap.data().hero) {
          setHero(snap.data().hero as HeroData);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error("Failed to load hero:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchHero();
  }, []);

  if (loading) return <Loading />;
  if (error || !hero) return <HeroError />;

  return (
    <main className="relative overflow-hidden bg-white">
      <section className="relative h-[100vh] flex items-center justify-center md:justify-start">

        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={hero.backgroundImage}
            alt="acelab students learning tech"
            fill
            className="object-cover object-center"
            priority
          />
          <div
            className="absolute inset-0 bg-black"
            style={{ opacity: hero.overlayOpacity / 100 }}
          />
        </div>

        {/* Content */}
        <div className="z-10 container mx-auto px-6 sm:px-8 md:px-12 lg:px-20 text-center md:text-left text-white">
          <div className="max-w-5xl mx-auto md:mx-0">

            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 leading-snug md:leading-tight">
              {hero.headlineStart}{" "}
              <span
                className={`${oregano.className} text-4xl sm:text-5xl md:text-7xl font-bold`}
                style={{ color: hero.accentColor }}
              >
                {hero.headlineHighlight1}
              </span>{" "}
              <br />
              {hero.headlineMiddle}{" "}
              <span
                className={`${oregano.className} text-4xl sm:text-5xl md:text-7xl font-bold`}
                style={{ color: hero.accentColor }}
              >
                {hero.headlineHighlight2}
              </span>
              <br />
              {hero.headlineEnd}
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 max-w-md mx-auto md:max-w-none md:mx-0">
              {hero.subtext}
            </p>

            <div className="flex justify-center md:justify-start">
              <Link href={hero.buttonLink}>
                <Button
                  className="font-bold transition-colors text-white"
                  style={{ backgroundColor: hero.accentColor }}
                  size="lg"
                >
                  {hero.buttonText}
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
            />
          </svg>
        </div>
      </section>
    </main>
  );
}