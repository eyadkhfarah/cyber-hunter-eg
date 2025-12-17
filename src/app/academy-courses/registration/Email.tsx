"use client";

import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { AcademyCoursesBlue, AcademyCoursesRed } from "@/lib/Data/AcademyCourses";
import { cn } from "@/lib/utils";
import { AcademyFormValues } from "@/types/inputs";

type FormProps = {
  className?: string;
};

const inputClass =
  "w-full rounded-2xl p-3 border-2 border-blue-950 text-black placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition disabled:opacity-50 disabled:bg-slate-100";

const errorInputClass = "border-red-500 focus:ring-red-500 focus:border-red-500";

export default function EmailForm({ className }: FormProps) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<AcademyFormValues>({
    defaultValues: {
      name: "",
      email: "",
      number: "",
      governorate: "",
      team: "default",
      courses: "default",
      message: "",
    },
  });

  // 1. WATCH the team value (removes the need for useState and fixes VS Code warnings)
  const watchedTeam = watch("team");

  // 2. DERIVE the course list directly from the watched value
  const coursesToShow =
    watchedTeam === "Blue Team"
      ? AcademyCoursesBlue
      : watchedTeam === "Red Team"
      ? AcademyCoursesRed
      : [];

  // 3. SUCCESS STATE: Reset form after success
  useEffect(() => {
    if (isSubmitSuccessful) {
      const timer = setTimeout(() => reset(), 5000); // Reset after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [isSubmitSuccessful, reset]);

  // 4. LOGIC: Reset course selection if the team changes
  useEffect(() => {
    setValue("courses", "default");
  }, [watchedTeam, setValue]);

  const onSubmit: SubmitHandler<AcademyFormValues> = async (data) => {
    try {
      const response = await fetch("/api/academy-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to submit");
    } catch (error) {
      console.error("Submission Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("space-y-6 w-full", className)}
    >
      {/* Name + Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <input
            {...register("name", { required: "Name is required" })}
            placeholder="Your Name"
            disabled={isSubmitting}
            className={cn(inputClass, errors.name && errorInputClass)}
          />
          {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <input
            {...register("number", { 
                required: "Phone is required",
                pattern: { value: /^(01)[0-9]{9}$/, message: "Must be 11 digits" } 
            })}
            placeholder="Phone Number"
            disabled={isSubmitting}
            className={cn(inputClass, errors.number && errorInputClass)}
          />
          {errors.number && <p className="text-red-400 text-sm mt-1">{errors.number.message}</p>}
        </div>
      </div>

      {/* Email + Governorate */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <input
            {...register("email", { required: "Email is required" })}
            type="email"
            placeholder="Email"
            disabled={isSubmitting}
            className={cn(inputClass, errors.email && errorInputClass)}
          />
        </div>
        <div>
          <input
            {...register("governorate", { required: "Required" })}
            placeholder="Governorate"
            disabled={isSubmitting}
            className={cn(inputClass, errors.governorate && errorInputClass)}
          />
        </div>
      </div>

      {/* Team + Course Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <select
          {...register("team", { validate: (v) => v !== "default" || "Select a team" })}
          disabled={isSubmitting}
          className={cn(inputClass, errors.team && errorInputClass)}
        >
          <option value="default">Select Team</option>
          <option value="Blue Team">Blue Team</option>
          <option value="Red Team">Red Team</option>
        </select>

        <select
          {...register("courses", { validate: (v) => v !== "default" || "Select a course" })}
          disabled={isSubmitting || watchedTeam === "default"}
          className={cn(inputClass, errors.courses && errorInputClass)}
        >
          <option value="default">Select Course</option>
          {coursesToShow.map((course) => (
            <option key={course.title} value={course.title}>{course.title}</option>
          ))}
        </select>
      </div>

      {/* Message */}
      <textarea
        {...register("message", { required: "Required" })}
        placeholder="Your Message"
        disabled={isSubmitting}
        rows={4}
        className={cn(inputClass, errors.message && errorInputClass)}
      />

      {/* SUBMIT BUTTON (Loading State) */}
      <div className="flex flex-col items-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            "btnPrimary w-full",
            isSubmitting ? "bg-slate-400 text-white cursor-not-allowed" : "bg-blue-900 text-white hover:bg-blue-800"
          )}
        >
          {isSubmitting ? (
            <>
              <span className="animate-spin border-2 border-white border-t-transparent rounded-full h-5 w-5"></span>
              Sending...
            </>
          ) : (
            "Register Now"
          )}
        </button>

        {/* SUCCESS MESSAGE */}
        {isSubmitSuccessful && (
          <div className="mt-4 p-3 bg-emerald-500/20 text-emerald-400 rounded-xl text-center w-full">
            ✓ Registration successful! We&apos;ll contact you soon.
          </div>
        )}
      </div>
    </form>
  );
}