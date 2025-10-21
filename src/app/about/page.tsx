"use client";

import Image from "next/image";
import NavBar from "../components/NavBar";
import { Float } from "@/app/style/animation";
import hero from "../../../public/assets/images/Hero.jpeg";
import team from "../../../public/assets/images/About.jpeg";

export default function About() {
  return (
    <main className="bg-gray-50 text-gray-900">
      <NavBar />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-center bg-gradient-to-br from-[#0a0a0a] via-[#141414] to-[#1c1c1c] text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={hero}
            alt="About Hero"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 px-6 max-w-4xl mx-auto">
          <Float>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              About{" "}
              <span className="text-[#2661E9] bg-gradient-to-r from-[#2661E9] to-[#3b82f6] bg-clip-text text-transparent">
                AceLab TechHub
              </span>
            </h1>
            <p className="text-lg md:text-xl mt-4 text-gray-200 leading-relaxed">
              Building Africa’s future innovators through technology, creativity, and real-world engineering excellence.
            </p>
          </Float>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="container mx-auto px-6 lg:px-20 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <Image
            src={team}
            alt="AceLab TechHub Team"
            width={600}
            height={400}
            className="rounded-2xl object-cover shadow-lg"
          />
          <div className="absolute top-5 left-5 bg-gradient-to-br from-[#2661E9] to-[#3b82f6] text-white font-semibold px-4 py-2 rounded-lg text-sm shadow-xl">
            Empowering Tech Leaders
          </div>
        </div>

        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#2661E9] mb-6">
            Who We Are
          </h2>
          <p className="text-gray-600  text-2xl leading-relaxed mb-5">
            <strong className="text-gray-900">AceLab TechHub</strong> is a forward-thinking innovation and technology hub dedicated to empowering the next generation of digital creators, engineers, and tech leaders. 
            We provide cutting-edge training, product development support, and consultancy across key technology sectors — including software engineering, data analytics, cybersecurity, automation, energy systems, and maritime technology.
          </p>
          <p className="text-gray-600 leading-relaxed text-2xl ">
            Our multidisciplinary team combines over six decades of experience in engineering and digital transformation, united by a shared passion for building scalable solutions, fostering talent, and driving progress across Africa’s tech ecosystem.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-white py-20 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold text-[#2661E9] mb-4">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              AceLab TechHub envisions becoming Africa’s most trusted and innovative technology hub — cultivating world-class talent, advancing digital literacy, and delivering impactful tech-driven solutions that transform industries and empower communities.  
              We aim to be a transformative force, setting new standards for innovation and excellence.
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[#2661E9] mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              Our mission is to harness the power of technology to drive positive change in society.  
              We bridge the gap between education and real-world application through hands-on training, innovation, and mentorship — empowering individuals and organizations to thrive in the digital age.  
              Through excellence, collaboration, and creativity, we shape the future of tech in Africa and beyond.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-br from-[#0a0a0a] via-[#141414] to-[#1c1c1c] text-white py-20 px-6 lg:px-20 text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-10">
          Our Core Values
        </h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Innovation", text: "We constantly explore new ideas and embrace creativity to deliver cutting-edge solutions." },
            { title: "Excellence", text: "We uphold the highest global standards in our training and service delivery." },
            { title: "Empowerment", text: "We equip individuals with the skills and confidence to succeed in the digital era." },
            { title: "Integrity", text: "We build trust through transparency, accountability, and professionalism." },
            { title: "Collaboration", text: "We grow through teamwork, partnerships, and shared success." },
            { title: "Impact", text: "We create sustainable change through technology and innovation." },
          ].map((value, index) => (
            <div
              key={index}
              className="p-6 bg-white/10 rounded-xl border border-white/10 backdrop-blur-md hover:bg-white/20 transition-all"
            >
              <h4 className="text-xl font-semibold text-[#2661E9] mb-3">
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
