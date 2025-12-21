import { generateStaticMetadata } from '@/lib/generateStaticMetadata';
import { Metadata } from 'next';
import { ShieldCheck, Lock, EyeOff, FileText, Globe, Database } from 'lucide-react';

export const metadata: Metadata = generateStaticMetadata({
  title: "Privacy Policy",
  description: "Learn how CyberHunter protects your data. Our privacy policy outlines our commitment to data security and transparency in the MENA region.",
  url: "/privacy-policy",
});

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: <Database className="w-5 h-5" />,
      title: "Data Collection",
      content: "We collect only the information necessary to provide our security services, including contact details provided during registration and technical logs required for lab environments."
    },
    {
      icon: <Lock className="w-5 h-5" />,
      title: "Information Security",
      content: "As a security-first firm, we implement AES-256 encryption for data at rest and TLS 1.3 for data in transit. Your personal information is stored in isolated environments with strict access controls."
    },
    {
      icon: <EyeOff className="w-5 h-5" />,
      title: "Third-Party Disclosure",
      content: "CyberHunter does not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This excludes trusted partners who assist us in operating our academy platform."
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Regional Compliance",
      content: "Our operations comply with local data protection regulations within the MENA region, ensuring that regional data residency requirements are respected where applicable."
    }
  ];

  return (
    <main className="min-h-screen">
      {/* --- HEADER --- */}
      <header className="relative pt-24 pb-16 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-blue-100/50 rounded-md border border-blue-200 font-mono text-[10px] tracking-widest text-blue-700 uppercase">
            <ShieldCheck className="w-3 h-3" />
            <span>Privacy_Protocol_v2.1</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tighter">
            Privacy <span className="text-blue-600">Policy</span>
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            At CyberHunter, we prioritize the confidentiality of our clients and students. 
            This document outlines how we handle, protect, and process your data.
          </p>
        </div>
      </header>

      {/* --- CONTENT SECTION --- */}
      <section className="container mx-auto py-20 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {sections.map((item, idx) => (
            <div key={idx} className="p-8 rounded-4xl border border-slate-100 bg-white hover:border-blue-200 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h2>
              <p className="text-slate-500 text-sm leading-relaxed">{item.content}</p>
            </div>
          ))}
        </div>

        {/* --- DETAILED TEXT AREA --- */}
        <div className="prose prose-slate max-w-none bg-slate-100 p-10 md:p-16 rounded-[3rem] border border-slate-100">
          <div className="flex items-center gap-2 mb-8 font-mono text-[10px] text-slate-400 uppercase tracking-widest">
            <FileText className="w-4 h-4" />
            <span>Detailed_Legal_Framework</span>
          </div>
          
          <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Cookies & Tracking</h3>
          <p className="text-slate-600 mb-8">
            Our website uses essential cookies to manage user sessions and platform security. We do not use intrusive tracking scripts that profile your behavior across the web. Analytics are anonymized to protect individual identity.
          </p>

          <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Your Rights</h3>
          <p className="text-slate-600 mb-8">
            You have the right to request a copy of the data we hold about you, or to request its deletion. For any privacy-related inquiries, please contact our Data Protection Officer at 
            <span className="text-blue-600 font-semibold"> privacy@cyberhunter.com</span>.
          </p>

          <div className="pt-8 border-t border-slate-200 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-slate-400 font-mono italic">Last Modified: October 2025</p>
            <div className="px-4 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase tracking-widest border border-emerald-100">
              Status: Compliance_Verified
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}