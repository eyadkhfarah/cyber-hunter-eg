"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  company: string;
  email: string;
  message: string;
};

export default function Email() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    defaultValues: { company: "", email: "", message: "" },
  });

  async function onSubmit(data: FormValues) {
    // Placeholder: you can replace this with a real API call
    try {
      // simulate network
      await new Promise((r) => setTimeout(r, 600));
      setSubmitted(true);
      reset();
    } catch (err) {
      // handle error (show toast or inline message)
      console.error(err);
    }
  }

  return (
    <form
      className="mx-auto max-w-xl space-y-4"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <input
            {...register("company", { required: "Company name is required" })}
            aria-label="Company name"
            placeholder="Company name"
            className={`w-full p-3 rounded-lg border border-dark ${errors.company ? "border-red-500" : ""} text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.company && (
            <p className="mt-1 text-sm text-red-400">{errors.company.message}</p>
          )}
        </div>

        <div>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" },
            })}
            aria-label="Contact email"
            placeholder="Email"
            className={`w-full p-3 rounded-lg border border-dark ${errors.email ? "border-red-500" : ""} text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div>
        <textarea
          {...register("message", { required: "Please add a short message" })}
          aria-label="Brief message"
          placeholder="Short message about your interest"
          rows={4}
          className={`w-full p-3 rounded-lg border border-dark ${errors.message ? "border-red-500" : ""} text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
        )}
      </div>

      <div className="flex flex-col items-center">
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-block bg-linear-to-r from-blue-500 to-cyan-400 text-white font-semibold px-6 py-3 rounded-2xl shadow hover:scale-[1.01] transition disabled:opacity-60"
          >
            {isSubmitting ? "Sending…" : "Express interest"}
          </button>
        </div>

        {submitted && (
          <p className="mt-3 text-sm text-emerald-400">Thanks — we received your interest and will reach out when the program launches.</p>
        )}
      </div>
    </form>
  );
}
