/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogCard from "@/Components/Blog/BlogCard";
import { generateStaticMetadata } from "@/lib/generateStaticMetadata";
import { Metadata } from "next";
import { fetchPosts } from "@/lib/Data/notionBlogData";
import { BlogPost } from "@/types/notionBlog";
import { Activity, SearchX } from "lucide-react";
import Subscribe from "./Subscribe";

export const metadata: Metadata = generateStaticMetadata({
  title: "Intelligence Feed",
  description: `Stay ahead of the curve with CyberHunter's comprehensive cyber-attack reports and expert analysis focused on the MENA region.`,
  url: "/blog",
});

// Revalidate this page every 1 second (High-frequency updates for news)
export const revalidate = 1;

export default async function BlogPage() {
  const posts = await fetchPosts();
  
  // Normalize posts from Notion response
  const postsList: BlogPost[] = Array.isArray(posts)
    ? posts
    : Array.isArray((posts as any)?.results)
    ? (posts as any).results
    : [];

  return (
    <main className="min-h-screen bg-white">
      {/* --- INTELLIGENCE HEADER --- */}
      <header className="relative pt-24 pb-16 bg-slate-50 border-b border-slate-100 overflow-hidden">
        {/* Decorative Grid background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `radial-gradient(#3b82f6 1px, transparent 1px)`, backgroundSize: '32px 32px' }} />
        
        <div className="container mx-auto md:px-24 px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 font-mono text-[10px] tracking-[0.3em] text-blue-600 uppercase">
              <Activity className="w-3 h-3" />
              <span>Live_Intelligence_Feed</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tighter uppercase">
              Cyber <span className="text-blue-600">Reports</span>
            </h1>
            
            <p className="text-xl text-slate-500 leading-relaxed max-w-2xl">
              In-depth analysis of emerging threats and APT movements across the 
              evolving MENA region security landscape.
            </p>
          </div>
        </div>
      </header>

      {/* --- FEED SECTION --- */}
      <section className="container mx-auto md:px-24 px-6 py-20">
        {postsList.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center border-2 border-dashed border-slate-100 rounded-[3rem]">
            <div className="w-20 h-20 rounded-3xl bg-slate-50 flex items-center justify-center text-slate-300 mb-6">
              <SearchX size={40} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight">No Reports Indexed</h2>
            <p className="text-slate-500 max-w-xs mx-auto">
              Our intelligence analysts are currently processing new threat data. Please re-synchronize later.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {postsList.map((blog: BlogPost, i: number) => (
              <div 
                key={i} 
                className="group relative transition-all duration-500"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <BlogCard articles={blog} />
                
                {/* Visual indicator for a 'Report' style */}
                <div className="absolute top-4 right-4 z-20">
                    <div className="px-3 py-1 bg-white/90 backdrop-blur rounded-lg shadow-sm border border-slate-100 text-[9px] font-mono text-slate-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                      Read_Report
                    </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <Subscribe />
    </main>
  );
}