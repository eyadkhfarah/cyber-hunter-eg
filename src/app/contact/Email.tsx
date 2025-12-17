"use client";

import { cyberSecurityServices } from "@/lib/Data/CyberSecurityServices";
import { ContactFormValues } from "@/types/inputs";
import React, { useEffect } from "react";
import { useForm, SubmitHandler, FieldErrors } from "react-hook-form";
import { cn } from "@/lib/utils"; // Assuming you have a cn utility for tailwind classes

// 💅 Style Improvement: Define shared classes
const inputBaseClass =
  "w-full rounded-2xl p-3 border-2 transition focus:outline-none focus:ring-2 focus:ring-cyan-400 disabled:opacity-50 disabled:bg-slate-100 text-black placeholder-slate-400";
const inputDefaultClass = `${inputBaseClass} border-blue-950`;
const inputErrorClass = `${inputBaseClass} border-red-500 focus:ring-red-500`;

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

  // UX: Auto-reset form after a delay following success
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
      alert("Submission failed. Please try again later.");
    }
  };

  const onError = (errors: FieldErrors<ContactFormValues>) => {
    console.log("Validation Errors:", errors);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      aria-busy={isSubmitting}
      noValidate
      className="space-y-6"
    >
      {/* Name + Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <input
            {...register("name", { required: "Name is required" })}
            type="text"
            placeholder="Your Name"
            className={errors.name ? inputErrorClass : inputDefaultClass}
            disabled={isSubmitting}
          />
          {errors.name && <p className="mt-1 text-sm text-red-400" role="alert">{errors.name.message}</p>}
        </div>

        <div>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email" },
            })}
            type="email"
            placeholder="domain@example.com"
            className={errors.email ? inputErrorClass : inputDefaultClass}
            disabled={isSubmitting}
          />
          {errors.email && <p className="mt-1 text-sm text-red-400" role="alert">{errors.email.message}</p>}
        </div>
      </div>

      {/* Phone + Service Interest */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <input
            {...register("phone", { required: "Phone is required" })}
            type="tel"
            placeholder="Contact Phone"
            className={errors.phone ? inputErrorClass : inputDefaultClass}
            disabled={isSubmitting}
          />
          {errors.phone && <p className="mt-1 text-sm text-red-400" role="alert">{errors.phone.message}</p>}
        </div>

        <div>
          <select
            {...register("serviceInterest", { validate: (v) => v !== "default" || "Required" })}
            className={errors.serviceInterest ? inputErrorClass : inputDefaultClass}
            disabled={isSubmitting}
          >
            <option value="default" disabled>Select Service Interest</option>
            {cyberSecurityServices.map((service, i) => (
              <option key={i} value={service.name}>{service.name}</option>
            ))}
          </select>
          {errors.serviceInterest && <p className="mt-1 text-sm text-red-400" role="alert">{errors.serviceInterest.message}</p>}
        </div>
      </div>

      {/* Subject */}
      <div>
        <input
          {...register("subject", { required: "Subject is required" })}
          placeholder="Your Subject"
          className={errors.subject ? inputErrorClass : inputDefaultClass}
          disabled={isSubmitting}
        />
        {errors.subject && <p className="mt-1 text-sm text-red-400">{errors.subject.message}</p>}
      </div>

      {/* Message */}
      <textarea
        {...register("message", { required: "Message is required" })}
        placeholder="Please describe your security requirements"
        rows={5}
        className={errors.message ? inputErrorClass : inputDefaultClass}
        disabled={isSubmitting}
      />

      {/* ACTIONS */}
      <div className="flex flex-col items-center">
        <button
          type="submit"
          disabled={isSubmitting || isSubmitSuccessful}
          className={cn(
            "w-full btnPrimary transition flex justify-center items-center gap-2",
            isSubmitting 
              ? "bg-slate-400 cursor-wait text-white" 
              : ""
          )}
        >
          {isSubmitting ? (
            <>
              {/* Spinner */}
              <span className="animate-spin border-2 border-white border-t-transparent rounded-full h-5 w-5"></span>
              Sending Secure Inquiry...
            </>
          ) : (
            "Send Message"
          )}
        </button>

        {/* SUCCESS MESSAGE */}
        {isSubmitSuccessful && (
          <div className="mt-4 p-4 bg-emerald-500/20 text-emerald-400 border border-emerald-500/50 rounded-xl text-center w-full animate-in fade-in slide-in-from-top-2 duration-300">
            <span className="font-bold">✓ Success!</span> Your inquiry has been sent securely. We will contact you soon.
          </div>
        )}
      </div>
    </form>
  );
}