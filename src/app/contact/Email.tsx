"use client";

import { cyberSecurityServices } from "@/lib/Data/CyberSecurityServices";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

// 📝 Updated FormValues to include new fields
type FormValues = {
  name: string;
  email: string;
  phone: string; // New: Phone number
  serviceInterest: string; // New: Service selector
  subject: string;
  message: string;
};

// 💅 Style Improvement: Define shared classes for better maintainability
const inputBaseClass =
  "w-full rounded-lg p-3 border text-black placeholder-slate-400 rounded-2xl border-2 transition focus:outline-none focus:ring-2 focus:ring-cyan-400";
const inputDefaultClass = `${inputBaseClass} border-blue-950`;
const inputErrorClass = `${inputBaseClass} border-red-500 focus:ring-red-500`;

export default function ContactForm(): React.ReactElement {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      phone: "", // Initialize new field
      serviceInterest: "default", // Initialize new field
      subject: "",
      message: "",
    },
  });

  // UX Improvement: Reset form fields immediately on successful submission
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit = async (data: FormValues) => {
    // Security/Data Quality Improvement: Trim whitespace from all string inputs
    const sanitizedData = {
      name: data.name.trim(),
      email: data.email.trim(),
      phone: data.phone.trim(),
      serviceInterest: data.serviceInterest.trim(),
      subject: data.subject.trim(),
      message: data.message.trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sanitizedData),
      });

      if (!response.ok) {
        throw new Error(`Submission failed with status: ${response.status}`);
      }
    } catch (error) {
      console.error("Send email failed", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      aria-busy={isSubmitting}
      noValidate
      className="space-y-6"
    >
      {/* Name + Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <input
            id="name"
            {...register("name", {
              required: "Name is required",
              maxLength: { value: 100, message: "Name is too long" },
            })}
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "name-error" : undefined}
            type="text"
            placeholder="Your Name"
            className={errors.name ? inputErrorClass : inputDefaultClass}
            disabled={isSubmitting || isSubmitSuccessful}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-sm text-red-400" role="alert">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <input
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Enter a valid email address",
              },
            })}
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
            type="email"
            placeholder="domain@example.com"
            className={errors.email ? inputErrorClass : inputDefaultClass}
            disabled={isSubmitting || isSubmitSuccessful}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-red-400" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      {/* NEW: Phone Number + Service Interest (Select) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <input
            id="phone"
            {...register("phone", {
              required: "Phone number is required for follow-up",
              pattern: {
                value: /^[0-9\s-()+]{7,20}$/, // Basic phone number regex
                message: "Please enter a valid phone number",
              },
            })}
            aria-invalid={errors.phone ? "true" : "false"}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            type="tel"
            placeholder="Contact Phone (e.g., +1 555-1234)"
            className={errors.phone ? inputErrorClass : inputDefaultClass}
            disabled={isSubmitting || isSubmitSuccessful}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1 text-sm text-red-400" role="alert">
              {errors.phone.message}
            </p>
          )}
        </div>

        <div>
          <select
            id="serviceInterest"
            {...register("serviceInterest", {
              validate: (value) =>
                value !== "default" || "Please select a service interest",
            })}
            aria-invalid={errors.serviceInterest ? "true" : "false"}
            aria-describedby={
              errors.serviceInterest ? "service-error" : undefined
            }
            className={
              errors.serviceInterest ? inputErrorClass : inputDefaultClass
            }
            disabled={isSubmitting || isSubmitSuccessful}
          >
            <option value="default" disabled>
              Select Service Interest
            </option>
            {cyberSecurityServices.map((service, i) => (
              <option key={i} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>
          {errors.serviceInterest && (
            <p id="service-error" className="mt-1 text-sm text-red-400" role="alert">
              {errors.serviceInterest.message}
            </p>
          )}
        </div>
      </div>

      {/* Subject */}
      <div>
        <input
          id="subject"
          {...register("subject", {
            required: "Subject is required",
            maxLength: { value: 150, message: "Subject is too long" },
          })}
          aria-invalid={errors.subject ? "true" : "false"}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          type="text"
          placeholder="Your Subject"
          className={errors.subject ? inputErrorClass : inputDefaultClass}
          disabled={isSubmitting || isSubmitSuccessful}
        />
        {errors.subject && (
          <p id="subject-error" className="mt-1 text-sm text-red-400" role="alert">
            {errors.subject.message}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <textarea
          id="message"
          {...register("message", {
            required: "Message is required",
            minLength: { value: 10, message: "Message is too short" },
            maxLength: { value: 5000, message: "Message is too long" },
          })}
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? "message-error" : undefined}
          placeholder="Please describe your security requirements or specific challenge"
          rows={6}
          className={errors.message ? inputErrorClass : inputDefaultClass}
          disabled={isSubmitting || isSubmitSuccessful}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-red-400" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Actions */}
      <div className="flex flex-col items-center">
        <button
          type="submit"
          disabled={isSubmitting || isSubmitSuccessful}
          className="btnPrimary"
        >
          {isSubmitting ? "Sending Secure Inquiry..." : "Send message"}
        </button>

        {isSubmitSuccessful && (
          <p className="mt-3 text-sm text-emerald-400" role="status">
            Thank you — your secure inquiry was sent. We will reply shortly.
          </p>
        )}
      </div>
    </form>
  );
}