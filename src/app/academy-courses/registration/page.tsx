import { generateStaticMetadata } from "@/lib/generateStaticMetadata";
import { Metadata } from "next";
import Email from "./Email";
import { ClipboardCheck, Shield } from "lucide-react";
import { GuaranteeBannerSide } from "@/Components/Client/GuaranteeBannerSide";

export const metadata: Metadata = generateStaticMetadata({
  title: "Academy Registration",
  description:
    "Register for CyberHunter Academy Courses. Fill out the secure registration form to begin your cybersecurity training journey.",
  url: "/academy-courses/registration",
});

export default function page() {
  return (
    <main className="min-h-screen">
      {/* --- MINIMALIST HEADER --- */}
      <header className="relative py-16 bg-slate-50 border-b border-slate-100 overflow-hidden">
        {/* Subtle Tech Accents */}
        <div className="absolute top-0 right-0 p-20 opacity-[0.03] rotate-12 pointer-events-none">
          <Shield size={400} />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 max-w-5xl">
          <div className="flex items-center gap-2 mb-4 font-mono text-[10px] tracking-[0.4em] text-blue-600 uppercase">
            <ClipboardCheck className="w-3 h-3" />
            <span>Enrollment_Session_Started</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Academy <span className="text-blue-600">Registration</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
            Please provide your professional details below. Our admissions team will 
            review your profile and issue enrollment credentials via email.
          </p>
        </div>
      </header>

      {/* --- REGISTRATION SECTION --- */}
      <section className="container mx-auto lg:px-27 md:px-6 px-6 py-20">
        <div className="grid lg:grid-cols-12 grid-cols-1 gap-6 items-start">
          
          {/* Main Form Area */}
          <div className="lg:col-span-8">
            <div className="p-8 md:p-12 bg-white rounded-[2.5rem] border border-slate-200 shadow-2xl shadow-blue-500/5 relative">
              {/* Process Steps Indicator */}
              {/* <div className="flex items-center gap-4 mb-10 pb-6 border-b border-slate-50">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold">1</span>
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">Details</span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-300" />
                <div className="flex items-center gap-2 opacity-30">
                  <span className="w-6 h-6 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center text-[10px] font-bold">2</span>
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">Review</span>
                </div>
              </div> */}

              <Email />
              
              <div className="mt-8 pt-6 border-t border-slate-50">
                <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest text-center">
                  Data_Encryption: AES_256_ACTIVE // Privacy_Protocol: ENABLED
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar Area */}
          <aside className="lg:col-span-4 space-y-4 lg:sticky lg:top-20">
            <div className="">
              <GuaranteeBannerSide />
            </div>
            
            {/* Quick Info Card */}
            <div className="p-8 bg-slate-900 rounded-4xl text-white overflow-hidden relative">
              <div className="absolute inset-0 bg-linear-to-br from-blue-600/20 to-transparent opacity-50" />
              <div className="relative z-10">
                <h3 className="font-bold text-xl mb-4 uppercase tracking-tight">Next Steps</h3>
                <ul className="space-y-4">
                  {[
                    "Profile review by admissions team",
                    "Course availability verification",
                    "Payment link & Credentials issued",
                    "Onboarding into Lab Environment"
                  ].map((step, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

        </div>
      </section>
    </main>
  );
}