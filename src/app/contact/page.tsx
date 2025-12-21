import Email from "./Email";
import { SocialLink } from "@/lib/SocialLinks";
import { RiMailLine, RiPhoneLine } from "react-icons/ri";
import Link from "next/link";
import { Metadata } from "next";
import { generateStaticMetadata } from "@/lib/generateStaticMetadata";
import SocialLinks from "@/Components/SocialLinks";
import { ShieldCheck, Cpu } from "lucide-react";

export const metadata: Metadata = generateStaticMetadata({
  title: "Contact",
  description: `CyberHunter is a leading company specializing in information security. We are dedicated to delivering up-to-date insights and analyses to keep our clients informed.`,
  url: "/contact",
});

export default function ContactPage() {
  const social = SocialLink;

  return (
    <main className="min-h-screen">
      {/* --- HEADER --- */}
      <header className="relative py-20 bg-slate-50 border-b border-slate-100 overflow-hidden">
        {/* Subtle Cyber Grid */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{ backgroundImage: `radial-gradient(#3b82f6 1px, transparent 1px)`, backgroundSize: '30px 30px' }} 
        />
        
        <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
          <div className="flex items-center justify-center gap-2 mb-4 font-mono text-[10px] tracking-[0.4em] text-blue-600 uppercase">
            <Cpu className="w-3 h-3" />
            <span>Endpoint_Communication_Portal</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
            Get in <span className="text-blue-600">Touch</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Have a question or need help with your security program? 
            Our technical team typically responds within one business day.
          </p>
        </div>
      </header>

      {/* --- CONTACT CONTENT --- */}
      <section className="container mx-auto lg:px-27 px-6 py-20">
        <div className="grid gap-12 max-w-7xl mx-auto md:grid-cols-2 items-start">
          
          {/* Form Side */}
          <div className="p-8 md:p-10 bg-white rounded-[2.5rem] border border-slate-200 shadow-2xl shadow-blue-500/5 relative">
             {/* Corner Accent */}
            <div className="absolute top-0 left-10 w-12 h-1 bg-linear-to-r from-blue-600 to-transparent" />
            
            <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              Send us a message
            </h2>
            <Email />
          </div>

          {/* Info Side */}
          <aside className="space-y-8">
            <div className="p-8 md:p-10 rounded-[2.5rem] bg-slate-900 text-white relative overflow-hidden shadow-2xl">
              {/* V4 Linear Accent Overlay */}
              <div className="absolute inset-0 bg-linear-to-br from-blue-600/20 to-transparent opacity-40" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex -space-x-1">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-tight">Other ways to reach us</h3>
                </div>

                <div className="space-y-4">
                  <Link
                    href={`mailto:${social.email}`}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-400/50 transition-all group"
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-linear-to-br from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/20">
                      <RiMailLine className="text-xl" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest">Email_Address</span>
                      <span className="text-sm md:text-base font-medium text-slate-200 group-hover:text-white transition-colors">{social.email}</span>
                    </div>
                  </Link>

                  <Link
                    href={`tel:${social.phone}`}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-400/50 transition-all group"
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-linear-to-br from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/20">
                      <RiPhoneLine className="text-xl" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest">Direct_Line</span>
                      <span className="text-sm md:text-base font-medium text-slate-200 group-hover:text-white transition-colors">{social.phone}</span>
                    </div>
                  </Link>
                </div>

                <div className="mt-10 pt-8 border-t border-white/10">
                  <h4 className="text-xs font-bold text-blue-400 mb-6 uppercase tracking-[0.2em]">
                    Social_Channels
                  </h4>
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/5 inline-block">
                    <SocialLinks />
                  </div>
                </div>
              </div>

              {/* Secure Footer Badge */}
              <div className="absolute bottom-6 right-8 flex items-center gap-2 opacity-20 group-hover:opacity-40 transition-opacity">
                <ShieldCheck className="w-4 h-4" />
                <span className="font-mono text-[8px] uppercase tracking-tighter">Secure_Handshake_v3</span>
              </div>
            </div>

            {/* Response Time Badge */}
            <div className="bg-blue-50 border border-blue-100 p-6 rounded-3xl flex items-center gap-4">
               <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                 <div className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
               </div>
               <p className="text-xs text-blue-800 font-medium uppercase tracking-tight leading-relaxed">
                 Avg_Response_Time: <span className="font-bold">2.4 Hours</span> <br/>
                 <span className="text-blue-500/60">Status: Active_Monitoring</span>
               </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}