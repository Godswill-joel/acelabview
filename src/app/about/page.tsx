"use client";

import Image from "next/image";
import NavBar from "../components/NavBar";
import { Float } from "@/app/style/animation";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/app/firebase/firebase";
import Loading from "@/app/components/Loading";

interface AboutData {
  // Hero
  heroBackgroundImage: string;
  heroOverlayOpacity: number;
  heroHeadline: string;
  heroHeadlineHighlight: string;
  heroSubtext: string;
  // Who We Are
  teamPhoto: string;
  badgeText: string;
  whoWeAreParagraph1: string;
  whoWeAreParagraph2: string;
  // Vision & Mission
  vision: string;
  mission: string;
  accentColor: string;
  // Core Values
  values: { title: string; text: string }[];
}

function AboutError() {
  return (
    <main className="bg-gray-50 text-gray-900">
      <NavBar />
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-3 px-6">
          <p className="text-4xl">⚠️</p>
          <p className="text-lg font-semibold">Failed to load content</p>
          <p className="text-sm text-gray-400">Please check your connection and refresh the page.</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-5 py-2 text-sm font-semibold rounded-lg bg-gray-900 text-white hover:bg-gray-700 transition-colors"
          >
            Refresh
          </button>
        </div>
      </div>
    </main>
  );
}

export default function About() {
  const [about, setAbout] = useState<AboutData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchAbout() {
      try {
        const ref = doc(db, "config", "siteConfig");
        const snap = await getDoc(ref);
        if (snap.exists() && snap.data().about) {
          setAbout(snap.data().about as AboutData);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error("Failed to load about:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchAbout();
  }, []);

  if (loading) return <Loading />;
  if (error || !about) return <AboutError />;

  // Split headline: everything before the last word is plain, last word is highlighted
  const headlineParts = about.heroHeadline?.split(" ") ?? ["About"];
  const headlineMain = headlineParts.slice(0, -1).join(" ");
  const headlineHighlight = about.heroHeadlineHighlight || headlineParts.at(-1);

  return (
    <main className="bg-gray-50 text-gray-900">
      <NavBar />

      {/* ── Hero Section ── */}
      <section className="relative h-[60vh] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={about.heroBackgroundImage}
            alt="About Hero"
            fill
            className="object-cover"
            priority
          />
          <div
            className="absolute inset-0 bg-black"
            style={{ opacity: about.heroOverlayOpacity / 100 }}
          />
        </div>

        <div className="relative z-10 px-6 max-w-4xl mx-auto">
          <Float>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              {headlineMain}{" "}
              <span style={{ color: about.accentColor }}>
                {headlineHighlight}
              </span>

            </h1>
            <p className="text-lg md:text-xl mt-4 text-gray-200 leading-relaxed">
              {about.heroSubtext}
            </p>
          </Float>
        </div>
      </section>

      {/* ── Who We Are ── */}
      <section className="container mx-auto px-6 lg:px-20 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <Image
            src={about.teamPhoto}
            alt="AceLab TechHub Team"
            width={600}
            height={400}
            className="rounded-2xl object-cover shadow-lg"
          />
          <div
            className="absolute top-5 left-5 text-white font-semibold px-4 py-2 rounded-lg text-sm shadow-xl"
            style={{ background: `linear-gradient(to bottom right, ${about.accentColor}, ${about.accentColor}cc)` }}
          >
            {about.badgeText}
          </div>
        </div>

        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: about.accentColor }}>
            Who We Are
          </h2>
          <p className="text-gray-600 text-2xl leading-relaxed mb-5">
            <strong className="text-gray-900">AceLab Academy</strong>{" "}
            {about.whoWeAreParagraph1}
          </p>
          <p className="text-gray-600 leading-relaxed text-2xl">
            {about.whoWeAreParagraph2}
          </p>
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      <section className="bg-white py-20 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold mb-4" style={{ color: about.accentColor }}>Our Vision</h3>
            <p className="text-gray-700 leading-relaxed text-lg">{about.vision}</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-4" style={{ color: about.accentColor }}>Our Mission</h3>
            <p className="text-gray-700 leading-relaxed text-lg">{about.mission}</p>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="bg-gradient-to-br from-[#0a0a0a] via-[#141414] to-[#1c1c1c] text-white py-20 px-6 lg:px-20 text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-10">Our Core Values</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {about.values?.map((value, index) => (
            <div
              key={index}
              className="p-6 bg-white/10 rounded-xl border border-white/10 backdrop-blur-md hover:bg-white/20 transition-all"
            >
              <h4 className="text-xl font-semibold mb-3" style={{ color: about.accentColor }}>
                {value.title}
              </h4>
              <p className="text-gray-200 leading-relaxed text-lg">{value.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}