/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {  useState } from "react";
import Link from "next/link";
import { Calendar, User, Clock, Cpu, ArrowRight, Star, Share2, Twitter, Facebook, Link as LinkIcon, } from "lucide-react";




export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  bannerImage: string;
  tags: string[];
  category: string;
  status: "draft" | "published";
  featured: boolean;
  readTime: number;
  seo: { metaTitle: string; metaDescription: string };
  createdAt: any;
  updatedAt: any;
  author: string;
}




export function formatDate(ts: any): string {
  if (!ts) return "";
  const d = ts.toDate ? ts.toDate() : new Date(ts);
  return d.toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" });
}

export function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm animate-pulse">
      <div className="h-52 bg-gray-200" />
      <div className="p-5 space-y-3">
        <div className="h-3 bg-gray-200 rounded w-1/3" />
        <div className="h-5 bg-gray-200 rounded w-3/4" />
        <div className="h-3 bg-gray-200 rounded w-full" />
        <div className="h-3 bg-gray-200 rounded w-2/3" />
      </div>
    </div>
  );
}

export function FeaturedCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block lg:col-span-2">
      <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-full">
        {/* Image */}
        <div className="relative h-[300px] md:h-[380px]">
          {post.bannerImage ? (
            <img
              src={post.bannerImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
              <Cpu className="w-16 h-16 text-blue-300" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
              🔥 FEATURED
            </span>
            {post.category && (
              <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-2 rounded-full">
                {post.category}
              </span>
            )}
          </div>
        </div>

        {/* Body */}
        <div className="p-8 md:p-10">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            {post.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="bg-[#2661E9] text-white text-xs font-semibold px-3 py-1 rounded-full">
                #{tag}
              </span>
            ))}
            <span className="flex items-center gap-1.5 text-sm text-gray-500">
              <User className="w-4 h-4 text-indigo-500" /> {post.author}
            </span>
            <span className="flex items-center gap-1.5 text-sm text-gray-500">
              <Calendar className="w-4 h-4 text-indigo-500" /> {formatDate(post.updatedAt || post.createdAt)}
            </span>
            <span className="flex items-center gap-1.5 text-sm text-gray-500">
              <Clock className="w-4 h-4 text-indigo-500" /> {post.readTime} min read
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900 leading-tight group-hover:text-[#2661E9] transition-colors">
            {post.title}
          </h2>

          {post.excerpt && (
            <p className="text-gray-600 text-base mb-6 leading-relaxed line-clamp-3">
              {post.excerpt}
            </p>
          )}

          <span className="inline-flex items-center gap-2 bg-[#2661E9] hover:bg-[#1a4bb8] text-white font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm">
            Read Article <ArrowRight size={15} />
          </span>
        </div>
      </div>
    </Link>
  );
}

export function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
        {/* Image */}
        <div className="relative h-52 flex-shrink-0">
          {post.bannerImage ? (
            <img
              src={post.bannerImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <Cpu className="w-10 h-10 text-gray-300" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          {post.featured && (
            <div className="absolute top-3 left-3">
              <span className="flex items-center gap-1 bg-[#2661E9]/90 text-white text-xs font-bold px-2.5 py-1 rounded-full backdrop-blur-sm">
                <Star size={10} fill="currentColor" /> Featured
              </span>
            </div>
          )}
          {post.category && (
            <div className="absolute bottom-3 left-3">
              <span className="bg-white/90 text-gray-800 text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm">
                {post.category}
              </span>
            </div>
          )}
        </div>

        {/* Body */}
        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-center justify-between mb-3">
            <span className="flex items-center gap-1.5 text-xs text-gray-500">
              <Calendar size={12} className="text-indigo-400" />
              {formatDate(post.updatedAt || post.createdAt)}
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-500">
              <Clock size={12} className="text-indigo-400" />
              {post.readTime} min read
            </span>
          </div>

          <h3 className="font-bold text-gray-900 text-base mb-2 line-clamp-2 group-hover:text-[#2661E9] transition-colors leading-snug">
            {post.title}
          </h3>

          {post.excerpt && (
            <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed mb-3 flex-1">
              {post.excerpt}
            </p>
          )}

          <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-gray-100">
            {post.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="text-[11px] text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full font-medium">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

export function RelatedCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <div className="h-44 relative">
          {post.bannerImage ? (
            <img src={post.bannerImage} alt={post.title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
        <div className="p-4 space-y-2">
          <p className="text-xs text-gray-400 flex items-center gap-1">
            <Clock size={11} /> {post.readTime} min read
          </p>
          <h4 className="font-semibold text-gray-900 text-sm line-clamp-2 group-hover:text-[#2661E9] transition-colors">
            {post.title}
          </h4>
        </div>
      </div>
    </Link>
  );
}

export function ShareButtons({ title, slug }: { title: string; slug: string }) {
  const url = typeof window !== "undefined"
    ? `${window.location.origin}/blog/${slug}`
    : `/blog/${slug}`;
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-500 font-medium flex items-center gap-1.5">
        <Share2 size={14} /> Share:
      </span>
      <a
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-lg bg-gray-100 hover:bg-blue-50 hover:text-blue-500 transition-colors text-gray-600"
        title="Share on Twitter"
      >
        <Twitter size={15} />
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-lg bg-gray-100 hover:bg-blue-50 hover:text-blue-600 transition-colors text-gray-600"
        title="Share on Facebook"
      >
        <Facebook size={15} />
      </a>
      <button
        onClick={copyLink}
        className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors text-gray-600 relative"
        title="Copy link"
      >
        <LinkIcon size={15} />
        {copied && (
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-gray-900 text-white px-2 py-1 rounded whitespace-nowrap">
            Copied!
          </span>
        )}
      </button>
    </div>
  );
}
