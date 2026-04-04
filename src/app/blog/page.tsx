"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { collection, getDocs, query, orderBy, where } from "firebase/firestore";
import { db } from "@/app/firebase/firebase";
import { Search, Cpu } from "lucide-react";
import hero from "../../../public/assets/images/WhatsApp Image 2025-10-14 at 15.12.37.jpeg";
import { SkeletonCard, FeaturedCard, PostCard, BlogPost } from "../helpers/functions";


export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Fetch only published posts
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const q = query(
          collection(db, "blogs"),
          where("status", "==", "published"),
          orderBy("updatedAt", "desc")
        );
        const snap = await getDocs(q);
        setPosts(snap.docs.map((d) => ({ id: d.id, ...d.data() } as BlogPost)));
      } catch (err) {
        console.error("Failed to load posts:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const handleSubscribe = () => {
    if (!email) return alert("Please enter your email address");
    alert(`Subscribed successfully with: ${email}`);
    setEmail("");
  };

  const categories = ["All", ...Array.from(new Set(posts.map((p) => p.category).filter(Boolean)))];

  // Filter logic
  const filtered = posts.filter((p) => {
    const matchSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some((t) => t.includes(searchQuery.toLowerCase()));
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    return matchSearch && matchCat;
  });

  const featuredPost = filtered.find((p) => p.featured);
  const regularPosts = filtered.filter((p) => !p.featured || p !== featuredPost);

  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* ── Hero ── */}
      <section className="relative h-[60vh] flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={hero}
            alt="Blog Hero"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>

        <div className="relative z-10 px-4 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            <span className="text-[#2661E9]">Technology</span> in Everyday Life
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            Explore stories about innovation, learning, and the digital world that&apos;s shaping how we live, work, and dream.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email for weekly insights"
              className="w-full md:w-2/3 bg-white px-4 py-3 rounded-lg text-gray-900 focus:outline-none border border-gray-300 focus:border-blue-500"
            />
            <button
              onClick={handleSubscribe}
              className="w-full md:w-auto bg-[#2661E9] hover:bg-[#1a4bb8] text-white font-bold px-6 py-3 rounded-lg transition-colors"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* ── Blog Section ── */}
      <section className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-200">
        <div className="container mx-auto px-6 py-16 max-w-screen-xl">

          {/* Section header */}
          <div className="flex items-center justify-center gap-3 mb-3">
            <Cpu className="w-6 h-6 text-[#2661E9]" />
            <h2 className="text-4xl font-bold text-center text-gray-900">
              Technology & Modern Living
            </h2>
          </div>
          <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto">
            Stay ahead with the latest trends in tech, innovation, and digital transformation
          </p>

          {/* Search + Category filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10 items-center justify-between">
            {/* Search */}
            <div className="relative w-full sm:max-w-sm">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles…"
                className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#2661E9]/20 focus:border-[#2661E9] transition-all"
              />
            </div>

            {/* Category pills */}
            <div className="flex flex-wrap gap-2 justify-center sm:justify-end">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 text-sm font-medium rounded-full border transition-all ${activeCategory === cat
                    ? "bg-[#2661E9] text-white border-[#2661E9]"
                    : "bg-white text-gray-600 border-gray-200 hover:border-[#2661E9]/40"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Loading skeletons */}
          {loading && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <SkeletonCard />
              </div>
              <div className="flex flex-col gap-6">
                <SkeletonCard />
                <SkeletonCard />
              </div>
            </div>
          )}

          {/* No posts */}
          {!loading && filtered.length === 0 && (
            <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center">
                <Cpu size={28} className="text-gray-300" />
              </div>
              <p className="text-gray-700 font-medium text-lg">
                {searchQuery ? "No articles found" : "No posts published yet"}
              </p>
              <p className="text-sm text-gray-400">
                {searchQuery ? "Try a different search term or category" : "Check back soon!"}
              </p>
              {searchQuery && (
                <button
                  onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
                  className="text-sm text-[#2661E9] hover:underline"
                >
                  Clear filters
                </button>
              )}
            </div>
          )}

          {/* Posts grid */}
          {!loading && filtered.length > 0 && (
            <>
              {/* Featured + first 2 sidebar */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
                {featuredPost ? (
                  <>
                    <FeaturedCard post={featuredPost} />
                    <div className="flex flex-col gap-6">
                      {regularPosts.slice(0, 2).map((post) => (
                        <PostCard key={post.id} post={post} />
                      ))}
                    </div>
                  </>
                ) : (
                  // No featured post — show first 3 as equal grid
                  regularPosts.slice(0, 3).map((post) => (
                    <PostCard key={post.id} post={post} />
                  ))
                )}
              </div>

              {/* Remaining posts */}
              {(() => {
                const remaining = featuredPost ? regularPosts.slice(2) : regularPosts.slice(3);
                return remaining.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {remaining.map((post) => (
                      <PostCard key={post.id} post={post} />
                    ))}
                  </div>
                ) : null;
              })()}
            </>
          )}
        </div>
      </section>
    </div>
  );
}