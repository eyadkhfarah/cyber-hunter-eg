import { CheckCircle, Verified, Terminal, ShieldCheck } from "lucide-react";

export const GuaranteeBanner: React.FC = () => (
  <section className="relative overflow-hidden mx-auto max-w-7xl group">
    {/* Background with v4 Linear Gradient */}
    <div className="absolute inset-0 bg-linear-to-br from-emerald-600 to-teal-700 rounded-3xl" />

    {/* Technical Grid Overlay */}
    <div
      className="absolute inset-0 opacity-[0.07] pointer-events-none"
      style={{
        backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`,
        backgroundSize: "24px 24px",
      }}
    />

    <div className="relative z-10 p-8 md:p-12 flex flex-col lg:items-start items-center md:flex-row gap-8">
      {/* Visual Seal / Icon */}
      <div className="relative shrink-0">
        <div className="absolute inset-0 bg-white opacity-20 blur-2xl rounded-full animate-pulse" />
        <div className="relative w-20 h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center shadow-2xl">
          <ShieldCheck className="w-10 h-10 md:w-12 md:h-12 text-white" />
          {/* Badge indicator */}
          <div className="absolute -bottom-1 -right-1 bg-emerald-400 p-1.5 rounded-full border-2 border-emerald-600">
            <Verified className="w-4 h-4 text-emerald-900" />
          </div>
        </div>
      </div>

      <div className="flex-1 text-center md:text-left">
        <div className="flex flex-col md:flex-row md:items-center gap-3 mb-3">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight uppercase">
            100% Practical <span className="text-emerald-300">Guarantee</span>
          </h2>
          <div className="mx-auto md:mx-0 px-3 py-1 bg-emerald-950/30 border border-emerald-400/30 rounded-md font-mono text-[10px] text-emerald-200 tracking-widest uppercase">
            Verified_Hands_On
          </div>
        </div>

        <p className="text-lg md:text-xl text-emerald-50 leading-relaxed font-medium opacity-90">
          Every CyberHunter course is architected with a labs-first philosophy.
          We guarantee that you will spend more time in our virtual cyber ranges
          than in lecture slides, ensuring job-ready competence.
        </p>

        {/* System Status Line */}
        <div className="mt-6 flex items-center justify-center md:justify-start gap-4 text-emerald-200/60">
          <div className="flex items-center gap-2">
            <Terminal className="w-3 h-3" />
            <span className="md:text-[10px] text-[7px] font-mono uppercase tracking-[0.2em]">
              Real_World_Labs_Active
            </span>
          </div>
          <div className="w-1 h-1 rounded-full bg-emerald-400" />
          <div className="flex items-center gap-2">
            <CheckCircle className="w-3 h-3" />
            <span className="md:text-[10px] text-[7px] font-mono uppercase tracking-[0.2em]">
              Job_Ready_Validated
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);
