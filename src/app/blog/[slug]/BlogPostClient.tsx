"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { collection, getDocs, query, where, orderBy, limit } from "firebase/firestore";
import { db } from "@/app/firebase/firebase";
import { Calendar, Clock, User, Tag, ArrowLeft, ArrowRight} from "lucide-react";
import { BlogPost, formatDate, SkeletonCard, RelatedCard, ShareButtons  } from "../../helpers/functions";

type BlogPostClientProps = {
  slug: string;
};



export default function BlogPostPage({ slug }: BlogPostClientProps) {

  const [post, setPost] = useState<BlogPost | null>(null);
  const [related, setRelated] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;

    const fetchPost = async () => {
      setLoading(true);
      try {
        // Fetch the post by slug
        const q = query(
          collection(db, "blogs"),
          where("slug", "==", slug),
          where("status", "==", "published")
        );
        const snap = await getDocs(q);

        if (snap.empty) {
          setNotFound(true);
          setLoading(false);
          return;
        }

        const data = { id: snap.docs[0].id, ...snap.docs[0].data() } as BlogPost;
        setPost(data);

        // Fetch related posts (same category, exclude current)
        const relatedQuery = query(
          collection(db, "blogs"),
          where("status", "==", "published"),
          where("category", "==", data.category || ""),
          orderBy("updatedAt", "desc"),
          limit(4)
        );
        const relatedSnap = await getDocs(relatedQuery);
        const relatedPosts = relatedSnap.docs
          .map((d) => ({ id: d.id, ...d.data() } as BlogPost))
          .filter((p) => p.slug !== slug)
          .slice(0, 3);

        // If not enough related by category, fall back to latest posts
        if (relatedPosts.length < 3) {
          const fallbackQuery = query(
            collection(db, "blogs"),
            where("status", "==", "published"),
            orderBy("updatedAt", "desc"),
            limit(5)
          );
          const fallbackSnap = await getDocs(fallbackQuery);
          const fallback = fallbackSnap.docs
            .map((d) => ({ id: d.id, ...d.data() } as BlogPost))
            .filter((p) => p.slug !== slug)
            .slice(0, 3);
          setRelated(fallback);
        } else {
          setRelated(relatedPosts);
        }
      } catch (err) {
        console.error("Failed to fetch post:", err);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  // ── Loading ──
  if (loading) return (
    <div className="min-h-screen bg-white">
      <SkeletonCard />
    </div>
  );

  // ── Not Found ──
  if (notFound || !post) return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center gap-4 text-center px-4">
      <div className="text-6xl">📄</div>
      <h1 className="text-2xl font-bold text-gray-900">Post not found</h1>
      <p className="text-gray-500 max-w-sm">
        This article may have been removed or the link is incorrect.
      </p>
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 bg-[#2661E9] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#1a4bb8] transition-colors"
      >
        <ArrowLeft size={15} /> Back to Blog
      </Link>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero Banner ── */}
      <div className="relative h-[55vh] min-h-[340px]">
        {post.bannerImage ? (
          <img
            src={post.bannerImage}
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-indigo-100 to-blue-200" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* Back button */}
        <div className="absolute top-6 left-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-xl hover:bg-white/30 transition-colors"
          >
            <ArrowLeft size={15} /> All Articles
          </Link>
        </div>

        {/* Post meta overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {post.category && (
              <span className="bg-[#2661E9] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                {post.category}
              </span>
            )}
            {post.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full">
                #{tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
            <span className="flex items-center gap-1.5">
              <User size={14} className="text-blue-300" /> {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} className="text-blue-300" />
              {formatDate(post.updatedAt || post.createdAt)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} className="text-blue-300" /> {post.readTime} min read
            </span>
          </div>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="max-w-4xl mx-auto px-4 md:px-6">

        {/* Excerpt / lead */}
        {post.excerpt && (
          <p className="text-xl text-gray-500 leading-relaxed mt-10 mb-6 border-l-4 border-[#2661E9] pl-5 italic">
            {post.excerpt}
          </p>
        )}

        {/* Tiptap HTML content */}
        <article
          className="prose prose-lg max-w-none mt-6 mb-12
  text-gray-800
  prose-headings:font-bold prose-headings:text-gray-900 prose-headings:text-opacity-100
  prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
  prose-p:text-gray-800 prose-p:opacity-100 prose-p:leading-relaxed
  prose-li:text-gray-800
  prose-strong:text-gray-900
  prose-a:text-[#2661E9] prose-a:no-underline hover:prose-a:underline
  prose-img:rounded-xl prose-img:shadow-md prose-img:my-6
  prose-blockquote:border-[#2661E9] prose-blockquote:text-gray-700
  prose-code:text-[#2661E9] prose-code:bg-blue-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
  prose-pre:bg-gray-900 prose-pre:text-gray-100
  [&_iframe]:w-full [&_iframe]:rounded-xl [&_iframe]:my-6 [&_iframe]:aspect-video
  [&_*]:text-gray-800 [&_p]:!text-gray-800 [&_li]:!text-gray-800 [&_span]:!text-gray-800"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 mb-8 pb-8 border-b border-gray-200">
            <Tag size={14} className="text-gray-400" />
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full font-medium hover:bg-indigo-100 transition-colors cursor-default"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Share + Back nav */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-16">
          <ShareButtons title={post.title} slug={post.slug} />
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#2661E9] transition-colors font-medium"
          >
            <ArrowLeft size={14} /> Back to all articles
          </Link>
        </div>


        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Written by</p>
          <p className="font-bold text-gray-900 text-lg">{post.author}</p>
          {post.category && (
            <p className="text-sm text-gray-500">{post.category} contributor</p>
          )}
        </div>
      </div>

      {/* ── Related Posts ── */}
      {related.length > 0 && (
        <div className="bg-gray-50 border-t border-gray-200 py-16">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-900">Related Articles</h3>
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-sm text-[#2661E9] font-medium hover:underline"
              >
                View all <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {related.map((p) => (
                <RelatedCard key={p.id} post={p} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}