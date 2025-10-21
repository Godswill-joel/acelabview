"use client";
import Image from "next/image";
import { useState } from "react";
import { techBlogs } from "../data/data";
import { Button } from "../components/Button";
import { Calendar, User, ArrowUpRight, Cpu } from "lucide-react";
import hero from "../../../public/assets/images/WhatsApp Image 2025-10-14 at 15.12.37.jpeg";

export default function BlogPage() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) return alert("Please enter your email address");
    alert(`Subscribed successfully with: ${email}`);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <section className="relative h-[60vh] flex flex-col items-center justify-center text-center bg-gradient-to-b from-[#0a0a0a] via-[#141414] to-[#1c1c1c] text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={hero}
            alt="Technology Hero"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        </div>

        <div className="relative z-10 px-4 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-[#2661E9]">Technology</span> in Everyday Life
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            Explore stories about innovation, learning, and the digital world that’s shaping how we live, work, and dream.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email for weekly insights"
              className="w-full bg-white md:w-2/3 px-4 py-3 rounded-lg text-gray-900 focus:outline-none border border-gray-300 focus:border-blue-500"
            />
            <Button
              onClick={handleSubscribe}
              className="bg-[#2661E9] hover:bg-[#1a4bb8] text-white font-bold transition"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* 🔹 Blog Section 2 - Technology Theme Enhanced */}
      <section className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-200">
        <div className="container mx-auto px-6 py-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Cpu className="w-6 h-6 text-blue-600" />
            <h2 className="text-4xl font-bold text-center text-gray-900">
              Technology & Modern Living
            </h2>
          </div>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Stay ahead with the latest trends in tech, innovation, and digital transformation
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Featured Tech Post */}
            {techBlogs
              .filter((b) => b.featured)
              .map((blog) => (
                <div
                  key={blog.id}
                  className="lg:col-span-2 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="relative">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={800}
                      height={400}
                      className="w-full h-[350px] md:h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                        🔥 TRENDING
                      </span>
                    </div>
                  </div>

                  <div className="p-8 md:p-10">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                        {blog.tag}
                      </span>
                      <div className="flex items-center text-sm text-gray-600">
                        <User className="w-4 h-4 mr-2 text-indigo-600" />
                        <span className="font-medium">{blog.author}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-2 text-indigo-600" /> {blog.date}
                      </div>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 leading-tight">
                      {blog.title}
                    </h2>

                    <p className="text-gray-700 text-lg mb-6 leading-relaxed line-clamp-3">
                      {blog.description}
                    </p>

                    <button className="group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-xl inline-flex items-center transition-all shadow-lg hover:shadow-xl">
                      Explore More
                      <ArrowUpRight className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}

            {/* Tech Sidebar */}
            <div className="flex flex-col gap-6">
              {techBlogs
                .filter((b) => !b.featured)
                .map((blog) => (
                  <div
                    key={blog.id}
                    className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="relative">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        width={400}
                        height={250}
                        className="w-full h-[200px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center text-sm text-gray-600">
                          <Calendar className="w-4 h-4 mr-2 text-indigo-600" />
                          <span className="font-medium">{blog.date}</span>
                        </div>
                        <span className="bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full">
                          {blog.tag}
                        </span>
                      </div>

                      <h3 className="font-bold text-lg mb-2 text-gray-900 line-clamp-2">
                        {blog.title}
                      </h3>

                      <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                        {blog.description}
                      </p>

                      <button className="group text-indigo-600 text-sm font-semibold inline-flex items-center hover:text-indigo-700 transition">
                        Learn More
                        <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}