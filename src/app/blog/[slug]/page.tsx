import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/app/firebase/firebase";
import BlogPostClient from "./BlogPostClient";

export const dynamicParams = false;

export async function generateStaticParams() {
  const q = query(collection(db, "blogs"), where("status", "==", "published"));
  const snap = await getDocs(q);
  return snap.docs.map((doc) => ({ slug: doc.data().slug as string }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <BlogPostClient slug={slug} />;
}