"use client";

import { PartnerFormValues } from "@/types/inputs";
import { useForm, SubmitHandler, FieldErrors } from "react-hook-form";
import { ShieldCheck, Send, Loader2 } from "lucide-react";

// Updated classes for the Light-Cyber look
const inputBaseClass =
  "w-full p-4 rounded-xl border transition-all duration-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 bg-white";
const inputDefaultClass = `${inputBaseClass} border-slate-200 hover:border-blue-300`;
const inputErrorClass = `${inputBaseClass} border-red-500 bg-red-50/30`;

export default function Email() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitSuccessful, errors, isSubmitting },
    reset,
  } = useForm<PartnerFormValues>({
    defaultValues: { company: "", email: "", message: "" },
  });

  const onSubmit: SubmitHandler<PartnerFormValues> = async (data) => {
    try {
      await fetch("/api/partner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      reset();
    } catch (error) {
      console.error("Transmission Error:", error);
    }
  };

  const onError = (errors: FieldErrors<PartnerFormValues>) => {
    console.log("Validation Failed:", errors);
  };

  return (
    <form
      className="space-y-6"
      onSubmit={handleSubmit(onSubmit, onError)}
      aria-busy={isSubmitting}
      noValidate
    >
      <div className="grid md:grid-cols-2 gap-6">
        {/* Company Input */}
        <div className="relative">
          <input
            id="company"
            {...register("company", {
              required: "Company name is required",
              minLength: { value: 3, message: "Name too short" },
            })}
            placeholder="Company name"
            disabled={isSubmitting || isSubmitSuccessful}
            className={errors.company ? inputErrorClass : inputDefaultClass}
          />
          {errors.company && (
            <p className="absolute -bottom-5 left-1 text-[10px] font-mono text-red-500 uppercase">
              {errors.company.message}
            </p>
          )}
        </div>

        {/* Email Input */}
        <div className="relative">
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid business email",
              },
            })}
            placeholder="Contact Email"
            disabled={isSubmitting || isSubmitSuccessful}
            className={errors.email ? inputErrorClass : inputDefaultClass}
          />
          {errors.email && (
            <p className="absolute -bottom-5 left-1 text-[10px] font-mono text-red-500 uppercase">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      {/* Message Textarea */}
      <div className="relative">
        <textarea
          id="message"
          {...register("message", {
            required: "Message required",
            minLength: { value: 20, message: "Minimum 20 characters required" },
          })}
          placeholder="Describe your partnership objectives..."
          rows={4}
          disabled={isSubmitting || isSubmitSuccessful}
          className={errors.message ? inputErrorClass : inputDefaultClass}
        />
        {errors.message && (
          <p className="absolute -bottom-5 left-1 text-[10px] font-mono text-red-500 uppercase">
            {errors.message.message}
          </p>
        )}
      </div>

      <div className="flex flex-col items-center pt-4">
        <button
          type="submit"
          disabled={isSubmitting || isSubmitSuccessful}
          className="btnPrimary group relative tracking-tight hover:bg-blue-600 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
        >
          {/* V4 Linear Accent on Hover */}
          <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <span className="relative z-10 flex items-center gap-2">
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                SECURE_SENDING...
              </>
            ) : isSubmitSuccessful ? (
              <>
                <ShieldCheck className="w-4 h-4" />
                INTEREST_RECEIVED
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Express Interest
              </>
            )}
          </span>
        </button>

        {isSubmitSuccessful && (
          <div className="mt-8 p-4 bg-emerald-50 border border-emerald-100 rounded-xl flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <p className="text-xs font-mono text-emerald-700 uppercase tracking-tighter">
              Status: Successful // Handshake_Initated. We will contact you shortly.
            </p>
          </div>
        )}
      </div>
    </form>
  );
}