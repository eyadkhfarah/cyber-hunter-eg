"use client";

import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { AcademyCoursesBlue, AcademyCoursesGRC, AcademyCoursesRed } from "@/lib/Data/AcademyCourses";
import { cn } from "@/lib/utils";
import { AcademyFormValues } from "@/types/inputs";
import { Loader2, ShieldCheck, Send } from "lucide-react";

type FormProps = {
  className?: string;
};

// --- Light-Cyber Design Tokens ---
const inputBaseClass =
  "w-full rounded-xl p-4 border transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/10 disabled:opacity-50 disabled:bg-slate-50 text-slate-900 placeholder-slate-400 bg-white";
const inputDefaultClass = `${inputBaseClass} border-slate-200 hover:border-blue-300`;
const inputErrorClass = `${inputBaseClass} border-red-500 bg-red-50/30 focus:ring-red-500/10`;

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

  const watchedTeam = watch("team");

  const coursesToShow =
    watchedTeam === "Blue Team"
      ? AcademyCoursesBlue
      : watchedTeam === "Red Team"
      ? AcademyCoursesRed
      : watchedTeam === "Purple Team"
      ? AcademyCoursesGRC
      : [];

  useEffect(() => {
    if (isSubmitSuccessful) {
      const timer = setTimeout(() => reset(), 5000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitSuccessful, reset]);

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
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("space-y-6 w-full", className)}
    >
      {/* Name + Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative">
          <input
            {...register("name", { required: "Identity required" })}
            placeholder="Full Name"
            disabled={isSubmitting}
            className={errors.name ? inputErrorClass : inputDefaultClass}
          />
          {errors.name && <p className="absolute -bottom-5 left-1 font-mono text-[9px] text-red-500 uppercase tracking-tighter">{errors.name.message}</p>}
        </div>
        <div className="relative">
          <input
            {...register("number", { 
                required: "Contact string required",
                pattern: { value: /^(01)[0-9]{9}$/, message: "Invalid format (11 digits)" } 
            })}
            placeholder="Phone Number"
            disabled={isSubmitting}
            className={errors.number ? inputErrorClass : inputDefaultClass}
          />
          {errors.number && <p className="absolute -bottom-5 left-1 font-mono text-[9px] text-red-500 uppercase tracking-tighter">{errors.number.message}</p>}
        </div>
      </div>

      {/* Email + Governorate */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative">
          <input
            {...register("email", { required: "Endpoint required" })}
            type="email"
            placeholder="Email Address"
            disabled={isSubmitting}
            className={errors.email ? inputErrorClass : inputDefaultClass}
          />
          {errors.email && <p className="absolute -bottom-5 left-1 font-mono text-[9px] text-red-500 uppercase tracking-tighter">{errors.email.message}</p>}
        </div>
        <div className="relative">
          <input
            {...register("governorate", { required: "Location required" })}
            placeholder="Governorate"
            disabled={isSubmitting}
            className={errors.governorate ? inputErrorClass : inputDefaultClass}
          />
          {errors.governorate && <p className="absolute -bottom-5 left-1 font-mono text-[9px] text-red-500 uppercase tracking-tighter">{errors.governorate.message}</p>}
        </div>
      </div>

      {/* Team + Course Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative">
            <select
            {...register("team", { validate: (v) => v !== "default" || "Vector selection required" })}
            disabled={isSubmitting}
            className={cn(
                errors.team ? inputErrorClass : inputDefaultClass,
                "appearance-none bg-no-repeat bg-position-[right_1rem_center] bg-size-[1em_1em]"
            )}
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364748b'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")` }}
            >
            <option value="default">Select Team Vector</option>
            <option value="Blue Team">Blue Team (Defensive)</option>
            <option value="Red Team">Red Team (Offensive)</option>
            <option value="Purple Team">Purple Team (GRC)</option>
            </select>
            {errors.team && <p className="absolute -bottom-5 left-1 font-mono text-[9px] text-red-500 uppercase tracking-tighter">{errors.team.message}</p>}
        </div>

        <div className="relative">
            <select
            {...register("courses", { validate: (v) => v !== "default" || "Module selection required" })}
            disabled={isSubmitting || watchedTeam === "default"}
            className={cn(
                errors.courses ? inputErrorClass : inputDefaultClass,
                "appearance-none bg-no-repeat bg-position-[right_1rem_center] bg-size-[1em_1em]"
            )}
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364748b'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")` }}
            >
            <option value="default">Select Course Module</option>
            {coursesToShow.map((course) => (
                <option key={course.title} value={course.title}>{course.title}</option>
            ))}
            </select>
            {errors.courses && <p className="absolute -bottom-5 left-1 font-mono text-[9px] text-red-500 uppercase tracking-tighter">{errors.courses.message}</p>}
        </div>
      </div>

      {/* Message */}
      <div className="relative">
        <textarea
            {...register("message", { required: "Payload description required" })}
            placeholder="Briefly describe your professional background and learning objectives..."
            disabled={isSubmitting}
            rows={4}
            className={cn(errors.message ? inputErrorClass : inputDefaultClass, "resize-none")}
        />
        {errors.message && <p className="absolute -bottom-5 left-1 font-mono text-[9px] text-red-500 uppercase tracking-tighter">{errors.message.message}</p>}
      </div>

      {/* SUBMIT BUTTON */}
      <div className="flex flex-col items-center pt-4">
        <button
          type="submit"
          disabled={isSubmitting || isSubmitSuccessful}
          className={cn(
            "group btnPrimary relative w-full flex justify-center items-center gap-2 overflow-hidden",
            isSubmitting 
              ? "bg-slate-100 text-slate-400 cursor-wait" 
              : "bg-slate-900 text-white hover:bg-blue-600 active:scale-[0.98]"
          )}
        >
          {/* V4 Linear Hover Overlay */}
          {!isSubmitting && <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />}
          
          <span className="relative z-10 flex items-center gap-2">
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                ENCRYPTING_TRANSMISSION...
              </>
            ) : isSubmitSuccessful ? (
              <>
                <ShieldCheck className="h-4 w-4" />
                ENROLLMENT_PACKET_SENT
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                Initialize Registration
              </>
            )}
          </span>
        </button>

        {/* SUCCESS MESSAGE */}
        {isSubmitSuccessful && (
          <div className="mt-8 p-4 bg-emerald-50 border border-emerald-100 rounded-xl flex items-center gap-3 w-full animate-in fade-in slide-in-from-top-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <p className="text-[10px] font-mono text-emerald-700 uppercase tracking-tighter leading-tight text-left">
              Status: 200_OK // Registration_Handshake_Complete <br/>
              An admissions analyst will verify your details and contact you.
            </p>
          </div>
        )}
      </div>
    </form>
  );
}