"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Newspaper, Loader2, CheckCircle2 } from 'lucide-react';

interface SubscribeInput {
  email: string;
}

export default function Subscribe() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SubscribeInput>();

  const onSubmit = async (data: SubscribeInput) => {
    setStatus('loading');
    
    // Simulate API call to your backend or newsletter service (e.g., Mailchimp, Loops)
    console.log("Subscribing email:", data.email);
    
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setStatus('success');
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section className="container mx-auto md:px-24 px-6 pb-24">
      <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-blue-600 via-purple-600 to-blue-600" />
        
        <div className="relative z-10 max-w-2xl mx-auto">
          <Newspaper className="w-12 h-12 text-blue-500 mx-auto mb-6" />
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-tighter">Stay Informed</h3>
          <p className="text-slate-400 mb-8">
            Receive weekly summaries of critical vulnerabilities and regional cyber 
            trends directly in your inbox.
          </p>

          {status === 'success' ? (
            <div className="flex flex-col items-center animate-in fade-in zoom-in duration-500">
              <CheckCircle2 className="w-10 h-10 text-emerald-500 mb-2" />
              <p className="text-emerald-400 font-bold uppercase tracking-widest text-sm">
                Subscription_Active
              </p>
            </div>
          ) : (
            <form 
              onSubmit={handleSubmit(onSubmit)} 
              className="relative flex flex-col gap-2 max-w-md mx-auto"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <input 
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email endpoint"
                      }
                    })}
                    type="email" 
                    placeholder="Secure Email Endpoint" 
                    className={`w-full bg-slate-800 border ${errors.email ? 'border-red-500' : 'border-slate-700'} rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
                  />
                </div>
                
                <button 
                  disabled={status === 'loading'}
                  type="submit"
                  className="btnPrimary"
                >
                  {status === 'loading' ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    "Subscribe"
                  )}
                </button>
              </div>

              {/* Error Message */}
              {errors.email && (
                <span className="text-red-500 text-[10px] font-mono uppercase tracking-widest mt-1 text-left px-2">
                  Error: {errors.email.message}
                </span>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}