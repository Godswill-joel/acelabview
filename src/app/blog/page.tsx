"use client";
import Image from "next/image";
import { useState } from "react";
import { blogs } from "../data/data";
import { Button } from "../components/Button";
import { Calendar, User, ArrowUpRight } from "lucide-react";
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
      {/* 🔹 Subscribe Section */}
      <section className="relative h-[60vh] flex flex-col items-center justify-center text-center bg-gradient-to-b from-[#0a0a0a] via-[#141414] to-[#1c1c1c] text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={hero}
            alt="Contact Hero"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div> {/* Reduced darkness overlay */}
        </div>
        {/* Content */}
        <div className="relative z-10 px-4 max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Stay Updated with Our <span className="text-[#2661E9]">Latest Posts</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Join our mailing list to get fresh insights and learning tips every week.
          </p>

          {/* Subscription Form */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full bg-white md:w-2/3 px-4 py-3 rounded-lg text-gray-900 focus:outline-none border border-gray-300 focus:border-blue-500"
            />
            <Button
              onClick={handleSubscribe}
              className="bg-[#2661E9] hover:bg-[#1a4bb8] text-white font-bold transition-colors"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </section>


      {/* 🔹 Blog Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Post */}
          {blogs
            .filter((b) => b.featured)
            .map((blog) => (
              <div
                key={blog.id}
                className="lg:col-span-2 bg-blue-50 rounded-3xl overflow-hidden shadow hover:shadow-lg transition"
              >
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={800}
                  height={500}
                  className="w-full h-[280px] md:h-[340px] object-cover" // ✅ shortened image height
                />
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                      {blog.tag}
                    </span>
                    <div className="flex items-center text-sm text-gray-600">
                      <User className="w-4 h-4 mr-1" /> {blog.author}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-1" /> {blog.date}
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold mb-3">{blog.title}</h2>
                  <p className="text-gray-700 mb-4 line-clamp-3">
                    {blog.description}
                  </p>
                  <button className="text-blue-600 font-semibold inline-flex items-center hover:underline">
                    Read More <ArrowUpRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}

          {/* Sidebar Cards */}
          <div className="flex flex-col gap-8 mt-4"> {/* ✅ added top margin to separate from featured */}
            {blogs
              .filter((b) => !b.featured)
              .map((blog) => (
                <div
                  key={blog.id}
                  className="bg-blue-50 rounded-2xl overflow-hidden shadow hover:shadow-md transition"
                >
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={400}
                    height={250}
                    className="w-full h-[200px] object-cover"
                  />
                  <div className="p-5">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-4 h-4 mr-1 text-blue-600" /> {blog.date}
                      </div>
                      <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
                        {blog.tag}
                      </span>
                    </div>
                    <h3 className="font-semibold mb-1">{blog.title}</h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {blog.description}
                    </p>
                    <button className="text-blue-600 text-sm font-medium inline-flex items-center hover:underline">
                      Read More <ArrowUpRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
// "use client";
// import Image from "next/image";
// import { useState } from "react";
// import { blogs } from "../data/data";
// import { Mail, Calendar, User, ArrowUpRight } from "lucide-react";
// import { Button } from "../components/Button";


// export default function BlogPage() {
//     const [email, setEmail] = useState("");

//     const handleSubscribe = () => {
//         if (!email) return alert("Please enter your email address");
//         alert(`Subscribed successfully with: ${email}`);
//         setEmail("");
//     };

//     return (
//         <div className="min-h-screen bg-white text-gray-800">
//             {/* 🔹 Subscribe Section */}
//             <section className=" text-black py-12 px-6 text-center">
//                 <h1 className="text-3xl md:text-4xl font-bold mb-4">
//                     Stay Updated with Our Latest Blog Posts
//                 </h1>
//                 <p className="text-black-100 mb-6">
//                     Join our mailing list to get fresh insights and learning tips every week.
//                 </p>
//                 <div className="flex flex-col md:flex-row justify-center items-center gap-3 max-w-lg mx-auto">
//                     <input
//                         type="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         placeholder="Enter your email address"
//                         className="w-full md:w-2/3 px-4 py-3 rounded-lg text-gray-900 focus:outline-none border border-gray-300 focus:border-blue-500"
//                     />
//                     <Button
//                         onClick={handleSubscribe}
//                         className="bg-[#2661E9] hover:bg-[#1a4bb8] text-white font-bold  transition-colors"
//                     >
//                         Subscribe
//                     </Button>
//                 </div>
//             </section>

//             {/* 🔹 Blog Section */}
//             <section className="container mx-auto px-6 py-16">
//                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//                     {/* Featured Post */}
//                     {blogs
//                         .filter((b) => b.featured)
//                         .map((blog) => (
//                             <div
//                                 key={blog.id}
//                                 className="lg:col-span-2 bg-blue-50 rounded-3xl overflow-hidden shadow hover:shadow-lg transition"
//                             >
//                                 <Image
//                                     src={blog.image}
//                                     alt={blog.title}
//                                     width={800}
//                                     height={500}
//                                     className="w-full h-[350px] object-cover"
//                                 />
//                                 <div className="p-6 md:p-8">
//                                     <div className="flex flex-wrap items-center gap-3 mb-">
//                                         <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
//                                             {blog.tag}
//                                         </span>
//                                         <div className="flex items-center text-sm text-gray-600">
//                                             <User className="w-4 h-4 mr-1" /> {blog.author}
//                                         </div>
//                                         <div className="flex items-center text-sm text-gray-600">
//                                             <Calendar className="w-4 h-4 mr-1" /> {blog.date}
//                                         </div>
//                                     </div>
//                                     <h2 className="text-2xl font-bold mb-3">{blog.title}</h2>
//                                     <p className="text-gray-700 mb-4">{blog.description}</p>
//                                     <button className="text-blue-600 font-semibold inline-flex items-center hover:underline">
//                                         Read More <ArrowUpRight className="w-4 h-4 ml-1" />
//                                     </button>
//                                 </div>
//                             </div>
//                         ))}

//                     {/* Sidebar Cards */}
//                     <div className="flex flex-col gap-6">
//                         {blogs
//                             .filter((b) => !b.featured)
//                             .map((blog) => (
//                                 <div
//                                     key={blog.id}
//                                     className="bg-blue-50 rounded-2xl overflow-hidden shadow hover:shadow-md transition"
//                                 >
//                                     <Image
//                                         src={blog.image}
//                                         alt={blog.title}
//                                         width={400}
//                                         height={250}
//                                         className="w-full h-[200px] object-cover"
//                                     />
//                                     <div className="p-5">
//                                         <div className="flex items-center justify-between text-sm mb-2">
//                                             <div className="flex items-center text-gray-600">
//                                                 <Calendar className="w-4 h-4 mr-1 text-blue-600" />{" "}
//                                                 {blog.date}
//                                             </div>
//                                             <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
//                                                 {blog.tag}
//                                             </span>
//                                         </div>
//                                         <h3 className="font-semibold mb-1">{blog.title}</h3>
//                                         <p className="text-sm text-gray-600 mb-3 line-clamp-2">
//                                             {blog.description}
//                                         </p>
//                                         <button className="text-blue-600 text-sm font-medium inline-flex items-center hover:underline">
//                                             Read More <ArrowUpRight className="w-4 h-4 ml-1" />
//                                         </button>
//                                     </div>
//                                 </div>
//                             ))}
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }
