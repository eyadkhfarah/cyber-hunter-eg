"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

// Define the shape of the form data
type FormValues = {
  email: string;
};

/**
 * Subscription Email Form Component
 */
// FIX: Changed from named export (export const) to default export (export default function) 
// to resolve the "Element type is invalid" error in the React environment.
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

  // 📝 Improvement: Reset form fields immediately on successful submission
  useEffect(() => {
    if (isSubmitSuccessful) {
      // Optional: Add a short delay before resetting to allow the success message to be seen
      const timer = setTimeout(() => reset(), 3000); 
      return () => clearTimeout(timer);
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit = async (data: FormValues) => {
    console.log("Submitting email:", data.email.trim());

    // --- Mock API Submission ---
    // Replace with actual API call to your subscription service (e.g., fetch('/api/subscribe', { ... }))
    try {
      // Simulate API latency
      await new Promise(resolve => setTimeout(resolve, 1500)); 
      
      // Assume success for mock submission
      console.log("Subscription successful for:", data.email);

      // If you had a real API, you would check response.ok here:
      // const response = await fetch('/api/subscribe', { ... });
      // if (!response.ok) throw new Error('Subscription failed');

    } catch (error) {
      console.error("Subscription failed:", error);
      // Optional: Handle error state visibility here
    }
  };

  const inputErrorClass = errors.email ? "border-red-500 ring-red-500" : "border-transparent focus:ring-blue-200";

  return (
    <div className="p-6 bg-blue-600 rounded-xl text-white shadow-xl">
      <h3 className="text-xl font-bold mb-2">Stay Ahead of Threats</h3>
      <p className="text-sm mb-4 opacity-90">Subscribe for the latest security research and news.</p>
      
      {isSubmitSuccessful ? (
        <div className="text-center py-4 rounded-lg">
            <p className="font-bold text-lg">Subscribed!</p>
            <p className="text-sm">Thank you for joining our newsletter.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-3" noValidate>
          <input 
            id="email-subscribe"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Enter a valid email address",
              },
            })}
            type="email" 
            placeholder="Your professional email" 
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-subscribe-error" : undefined}
            disabled={isSubmitting}
            className={`p-3 rounded-lg text-gray-800 focus:ring-2 focus:outline-none placeholder-gray-500 transition ${inputErrorClass}`}
          />
          
          {errors.email && (
            <p id="email-subscribe-error" role="alert" className="text-sm text-red-200 -mt-2">
              {errors.email.message}
            </p>
          )}

          <button 
            type="submit" 
            disabled={isSubmitting}
            // Using standard Tailwind classes for a strong button look
            className="w-full btnPrimary from-blue-900 to-indigo-600 hover:to-blue-900 disabled:bg-blue-900/70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Subscribing..." : "Subscribe Securely"}
          </button>
        </form>
      )}
    </div>
  );
};