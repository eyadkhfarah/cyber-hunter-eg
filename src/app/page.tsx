
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">

      {/* Hero - full viewport, modern gradient, centered */}
        <section className="relative h-screen flex items-center bg-linear-to-b from-[#0f172a] via-[#0b1220] to-[#071027] text-white">
          {/* Animated background blobs (decorative) */}
          <div className="hero-bg pointer-events-none" aria-hidden="true">
            <div className="blob b1" />
            <div className="blob b2" />
            <div className="blob b3" />
          </div>
          
          <div className="mx-auto text-center max-w-4xl px-6 z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight hero-title">
            <span className="bg-clip-text text-transparent bg-linear-to-r from-cyan-300 via-blue-400 to-indigo-500">Cyber Hunter</span>
            <span className="block text-xl md:text-2xl font-medium text-gray-300 mt-3">Your path to cybersecurity</span>
          </h1>

          <p className="text-lg text-gray-300 mb-8 hero-sub">
            Enterprise-grade cybersecurity: penetration testing, 24/7 detection & response, cloud hardening, and security training — tailored for your organization.
          </p>

          <div className="flex items-center justify-center gap-4 hero-ctas">
            <a href="/contact" className="inline-flex items-center gap-3 bg-linear-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg transform hover:-translate-y-0.5 transition hero-cta-pulse"> 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.314-2.686 6-6 6v-6a6 6 0 0112 0v6c-3.314 0-6-2.686-6-6z" />
              </svg>
              Get Started
            </a>

            <a href="#services" className="px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/20 transition">Our Services</a>
          </div>

          {/* Key benefits */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left text-sm md:text-base">
            <div className="p-4 bg-white/5 rounded-lg">
              <strong className="block text-white">Fast results</strong>
              <span className="text-gray-300">Actionable findings within days.</span>
            </div>
            <div className="p-4 bg-white/5 rounded-lg">
              <strong className="block text-white">24/7 Monitoring</strong>
              <span className="text-gray-300">Threat detection and response.</span>
            </div>
            <div className="p-4 bg-white/5 rounded-lg">
              <strong className="block text-white">Trusted experts</strong>
              <span className="text-gray-300">Certified and experienced team.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services - modern cards */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c.667-1.333 2-2 3.333-2S18.667 6.667 19.333 8C20 9.333 20 11 20 12s0 2.667-.667 4c-.667 1.333-2 2-3.333 2s-2.667-.667-3.333-2C9.333 14.667 8 14 6.667 14S4 14.667 3.333 16C2.667 17.333 2.667 19 3.333 20" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Penetration Testing</h3>
              <p className="text-gray-600 mb-4">Red-team & black-box testing to identify and fix critical vulnerabilities before attackers exploit them.</p>
              <a href="/services/penetration-testing" className="text-blue-600 font-semibold">Learn more →</a>
            </div>

            {/* Card 2 */}
            <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-50 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Managed Detection & Response</h3>
              <p className="text-gray-600 mb-4">24/7 monitoring, threat hunting, and rapid incident response backed by experienced analysts.</p>
              <a href="/services/mdr" className="text-blue-600 font-semibold">Learn more →</a>
            </div>

            {/* Card 3 */}
            <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Cloud & Application Security</h3>
              <p className="text-gray-600 mb-4">Architecture reviews, secure deployments, and ongoing compliance for cloud-native apps.</p>
              <a href="/services/cloud-security" className="text-blue-600 font-semibold">Learn more →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-linear-to-r from-white to-gray-50 py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold">98%</div>
              <div className="text-sm text-gray-500">Client satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold">+250</div>
              <div className="text-sm text-gray-500">Assessments completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-sm text-gray-500">Security operations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-center">Trusted by organizations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <blockquote className="p-6 bg-white rounded-lg shadow">
              <p className="text-gray-700 mb-4">Cyber Hunter found critical issues in our environment and helped us remediate them quickly — great team.</p>
              <footer className="text-sm text-gray-500">— CTO, FinTech Co.</footer>
            </blockquote>

            <blockquote className="p-6 bg-white rounded-lg shadow">
              <p className="text-gray-700 mb-4">Their MDR service reduced our mean time to detect and respond significantly.</p>
              <footer className="text-sm text-gray-500">— Security Lead, HealthTech</footer>
            </blockquote>

            <blockquote className="p-6 bg-white rounded-lg shadow">
              <p className="text-gray-700 mb-4">Clear reporting and prioritized remediation made our audit a breeze.</p>
              <footer className="text-sm text-gray-500">— Compliance Officer, Retail Group</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-bold mb-4 text-center">Get in touch</h2>
          <p className="text-gray-600 text-center mb-8">Tell us about your project and we&#39;ll recommend the right services.</p>

          <form className="grid grid-cols-1 gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input aria-label="Name" placeholder="Full name" className="border rounded-lg px-4 py-3" />
              <input aria-label="Email" placeholder="Email address" className="border rounded-lg px-4 py-3" />
            </div>
            <input aria-label="Company" placeholder="Company (optional)" className="border rounded-lg px-4 py-3" />
            <textarea aria-label="Message" placeholder="How can we help?" rows={5} className="border rounded-lg px-4 py-3" />

            <div className="flex items-center justify-center">
              <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-semibold">Send message</button>
            </div>
          </form>
        </div>
      </section>

    </main>
  );
}
