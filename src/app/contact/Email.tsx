"use client";

import { cyberSecurityServices } from "@/lib/Data/CyberSecurityServices";
import { ContactFormValues } from "@/types/inputs";
import React, { useEffect } from "react";
import { useForm, SubmitHandler, FieldErrors } from "react-hook-form";
import { cn } from "@/lib/utils";
import { ShieldCheck, Send, Loader2 } from "lucide-react";

// 💅 Light-Cyber Design Tokens
const inputBaseClass =
  "w-full rounded-xl p-4 border transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/10 disabled:opacity-50 disabled:bg-slate-50 text-slate-900 placeholder-slate-400 bg-white";
const inputDefaultClass = `${inputBaseClass} border-slate-200 hover:border-blue-300`;
const inputErrorClass = `${inputBaseClass} border-red-500 focus:ring-red-500/10 bg-red-50/30`;

export default function ContactForm(): React.ReactElement {
  const {
    register,
    handleSubmit,
    formState: { isSubmitSuccessful, errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      serviceInterest: "default",
      subject: "",
      message: "",
    },
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      const timer = setTimeout(() => reset(), 5000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Failed to send inquiry");
    } catch (error) {
      console.error(error);
    }
  };

  const onError = (errors: FieldErrors<ContactFormValues>) => {
    console.log("Transmission intercepted - validation failed:", errors);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      aria-busy={isSubmitting}
      noValidate
      className="space-y-5"
    >
      {/* Name + Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="relative">
          <input
            {...register("name", { required: "Identity required" })}
            type="text"
            placeholder="Full Name"
            className={errors.name ? inputErrorClass : inputDefaultClass}
            disabled={isSubmitting}
          />
          {errors.name && <p className="absolute -bottom-5 left-1 font-mono text-[9px] text-red-500 uppercase tracking-tighter" role="alert">{errors.name.message}</p>}
        </div>

        <div className="relative">
          <input
            {...register("email", {
              required: "Email required",
              pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid endpoint" },
            })}
            type="email"
            placeholder="Work Email"
            className={errors.email ? inputErrorClass : inputDefaultClass}
            disabled={isSubmitting}
          />
          {errors.email && <p className="absolute -bottom-5 left-1 font-mono text-[9px] text-red-500 uppercase tracking-tighter" role="alert">{errors.email.message}</p>}
        </div>
      </div>

      {/* Phone + Service Interest */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="relative">
          <input
            {...register("phone", { required: "Contact string required" })}
            type="tel"
            placeholder="Phone Number"
            className={errors.phone ? inputErrorClass : inputDefaultClass}
            disabled={isSubmitting}
          />
          {errors.phone && <p className="absolute -bottom-5 left-1 font-mono text-[9px] text-red-500 uppercase tracking-tighter" role="alert">{errors.phone.message}</p>}
        </div>

        <div className="relative">
          <select
            {...register("serviceInterest", { validate: (v) => v !== "default" || "Selection required" })}
            className={cn(
              errors.serviceInterest ? inputErrorClass : inputDefaultClass,
              "appearance-none bg-no-repeat bg-position-[right_1rem_center] bg-size-[1em_1em]"
            )}
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364748b'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")` }}
            disabled={isSubmitting}
          >
            <option value="default" disabled>Select Interest</option>
            {cyberSecurityServices.map((service, i) => (
              <option key={i} value={service.name}>{service.name}</option>
            ))}
          </select>
          {errors.serviceInterest && <p className="absolute -bottom-5 left-1 font-mono text-[9px] text-red-500 uppercase tracking-tighter" role="alert">{errors.serviceInterest.message}</p>}
        </div>
      </div>

      {/* Subject */}
      <div className="relative">
        <input
          {...register("subject", { required: "Subject header required" })}
          placeholder="Inquiry Subject"
          className={errors.subject ? inputErrorClass : inputDefaultClass}
          disabled={isSubmitting}
        />
        {errors.subject && <p className="absolute -bottom-5 left-1 font-mono text-[9px] text-red-500 uppercase tracking-tighter">{errors.subject.message}</p>}
      </div>

      {/* Message */}
      <div className="relative">
        <textarea
          {...register("message", { required: "Payload required" })}
          placeholder="Detail your security requirements..."
          rows={5}
          className={cn(
            errors.message ? inputErrorClass : inputDefaultClass,
            "resize-none"
          )}
          disabled={isSubmitting}
        />
        {errors.message && <p className="absolute -bottom-5 left-1 font-mono text-[9px] text-red-500 uppercase tracking-tighter">{errors.message.message}</p>}
      </div>

      {/* ACTIONS */}
      <div className="flex flex-col items-center pt-4">
        <button
          type="submit"
          disabled={isSubmitting || isSubmitSuccessful}
          className={cn(
            "btnPrimary group w-full flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden",
            isSubmitting 
              ? "bg-slate-100 text-slate-400 cursor-wait" 
              : "bg-slate-900 text-white hover:bg-blue-600 active:scale-[0.98]"
          )}
        >
          {/* V4 Linear Hover Overlay */}
          <div className="bg-linear-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          
          <span className="z-10 flex items-center w-full gap-2">
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                SECURE_TRANSMISSION_INITIATED...
              </>
            ) : isSubmitSuccessful ? (
              <>
                <ShieldCheck className="h-4 w-4" />
                PACKET_DELIVERED
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                Send Secure Inquiry
              </>
            )}
          </span>
        </button>

        {/* SUCCESS STATUS */}
        {isSubmitSuccessful && (
          <div className="mt-8 p-4 bg-emerald-50 border border-emerald-100 rounded-xl flex items-center gap-3 w-full animate-in fade-in slide-in-from-top-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <p className="text-[10px] font-mono text-emerald-700 uppercase tracking-tighter leading-tight text-left">
              Handshake: Complete // Status: 200_OK <br/>
              Our analysts will review your requirements and respond shortly.
            </p>
          </div>
        )}
      </div>
    </form>
  );
}