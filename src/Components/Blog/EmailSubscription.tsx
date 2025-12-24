"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ShieldCheck, Loader2, CheckCircle2 } from "lucide-react";

type FormValues = {
  email: string;
};

export default function EmailSubscription() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormValues>({
    defaultValues: {
      email: "",
    },
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      const timer = setTimeout(() => reset(), 4000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit = async (data: FormValues) => {
    // Simulate API latency
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Subscription successful for:", data.email);
  };

  return (
    <div className="p-8 bg-slate-900 rounded-4xl text-white shadow-2xl relative overflow-hidden group">
      {/* Decorative background element */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-colors duration-500" />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-blue-600/20 rounded-lg">
            <ShieldCheck className="w-5 h-5 text-blue-400" />
          </div>
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-100">
            Intel_Alerts
          </h3>
        </div>

        <p className="text-xs text-slate-400 mb-6 leading-relaxed">
          Get mission-critical threat reports and regional security updates delivered to your endpoint.
        </p>

        {isSubmitSuccessful ? (
          <div className="flex flex-col items-center py-4 animate-in fade-in zoom-in duration-500 text-center">
            <CheckCircle2 className="w-10 h-10 text-emerald-500 mb-3" />
            <p className="font-bold text-emerald-400 text-sm tracking-widest uppercase">
              Connection_Established
            </p>
            <p className="text-[10px] text-slate-500 mt-1 uppercase">Check your inbox for confirmation</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
            <div className="space-y-1">
              <input
                {...register("email", {
                  required: "Endpoint email required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email format",
                  },
                })}
                type="email"
                placeholder="analyst@agency.com"
                disabled={isSubmitting}
                className={`w-full bg-slate-800/50 border ${
                  errors.email ? "border-red-500/50" : "border-slate-700"
                } rounded-xl p-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all`}
              />
              
              {errors.email && (
                <p role="alert" className="text-[10px] font-mono text-red-400 uppercase tracking-tighter px-1">
                  &gt; {errors.email.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-slate-800 disabled:text-slate-500 text-white font-bold py-3 rounded-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2 uppercase text-[10px] tracking-[0.2em]"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-3 h-3 animate-spin" />
                  Encrypting...
                </>
              ) : (
                "Join_Network"
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}