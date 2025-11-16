"use client";

import {
  AcademyCoursesBlue,
  AcademyCoursesRed,
} from "@/lib/Data/AcademyCourses";
import { cn } from "@/lib/utils";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

// Define the shape of your form data
type FormValues = {
  name: string;
  email: string;
  number: string;
  governate: string;
  // Use union for predefined values
  team: "blue" | "red" | "default";
  courses: string;
  message: string;
};

// Define the component props
type FormProps = {
  className?: string;
};

// Base class for inputs (for consistency)
const inputClass =
  "w-full rounded-lg p-3 border text-black placeholder-slate-400 rounded-2xl border-2 border-blue-950 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition";

// Class for inputs with validation errors (uses cn for clean override)
const errorInputClass = cn(
  inputClass,
  "border-red-500 focus:ring-red-500 focus:border-red-500"
);

export default function EmailForm({ className }: FormProps): React.ReactElement {
  const {
    register,
    handleSubmit,
    reset,
    watch, // <-- Add watch here
    setValue, // <-- Add setValue here
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      number: "",
      governate: "",
      team: "default",
      courses: "default",
      message: "",
    },
  });

  // Watch the 'team' field
  const selectedTeam = watch("team");

  // Effect to reset the form upon successful submission
  useEffect(() => {
    if (isSubmitSuccessful) {
      const timeout = setTimeout(() => {
        reset();
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [isSubmitSuccessful, reset]);

  // Effect to handle course selection change when team changes
  useEffect(() => {
    // 1. Reset the 'courses' field value
    setValue("courses", "default");
    // 2. Optionally, trigger validation for 'courses' to clear any previous error
    // trigger("courses"); // Uncomment if you want immediate validation feedback
  }, [selectedTeam, setValue]); // Re-run whenever selectedTeam changes

  const onSubmit = async (data: FormValues) => {
    try {
      const response = await fetch("/api/academy-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("Send email failed", error);
    }
  };

  // Determine which course list to display
  const coursesToShow =
    selectedTeam === "blue"
      ? AcademyCoursesBlue
      : selectedTeam === "red"
      ? AcademyCoursesRed
      : []; // Empty array if 'default' is selected

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      aria-busy={isSubmitting}
      noValidate
      className={cn("space-y-6 w-full", className)}
    >
      {/* Name + Phone Number */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <input
            id="name"
            {...register("name", {
              required: "Name is required",
              maxLength: { value: 100, message: "Name is too long" },
            })}
            aria-invalid={errors.name ? "true" : "false"}
            type="text"
            disabled={isSubmitSuccessful || isSubmitting}
            placeholder="Your Name"
            className={errors.name ? errorInputClass : inputClass}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-400" role="alert">
              {errors.name.message}
            </p>
          )}
        </div>
        <div>
          <input
            id="number"
            {...register("number", {
              required: "Your phone number is required",
              minLength: { value: 11, message: "Number must be 11 digits" },
              pattern: {
                value: /^(01)[0-9]{9}$/,
                message: "Invalid phone number format (must be 11 digits)",
              },
            })}
            aria-invalid={errors.number ? "true" : "false"}
            type="tel"
            disabled={isSubmitSuccessful || isSubmitting}
            placeholder="Your Phone Number (WhatsApp Prefer)"
            className={errors.number ? errorInputClass : inputClass}
          />
          {errors.number && (
            <p className="mt-1 text-sm text-red-400" role="alert">
              {errors.number.message}
            </p>
          )}
        </div>
      </div>

      {/* Email + Governate */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <input
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Invalid email address",
              },
            })}
            aria-invalid={errors.email ? "true" : "false"}
            type="email"
            disabled={isSubmitSuccessful || isSubmitting}
            placeholder="Your Email"
            className={errors.email ? errorInputClass : inputClass}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-400" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <input
            id="governate"
            {...register("governate", {
              required: "Governate is required",
            })}
            aria-invalid={errors.governate ? "true" : "false"}
            type="text"
            disabled={isSubmitSuccessful || isSubmitting}
            placeholder="Governate"
            className={errors.governate ? errorInputClass : inputClass}
          />
          {errors.governate && (
            <p className="mt-1 text-sm text-red-400" role="alert">
              {errors.governate.message}
            </p>
          )}
        </div>
      </div>

      {/* Team + Courses */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="">
          <select
            id="team"
            disabled={isSubmitSuccessful || isSubmitting}
            aria-invalid={errors.team ? "true" : "false"}
            {...register("team", {
              validate: (value) =>
                value !== "default" || "Select Your Team",
            })}
            className={errors.team ? errorInputClass : inputClass}
          >
            <option value="default">Select Team</option>
            <option value="blue">Blue Team</option>
            <option value="red">Red Team</option>
          </select>
          {errors.team && (
            <p className="mt-1 text-sm text-red-400" role="alert">
              {errors.team.message}
            </p>
          )}
        </div>

        {/* Courses */}
        <div className="">
          <select
            id="courses"
            disabled={isSubmitSuccessful || isSubmitting}
            aria-invalid={errors.courses ? "true" : "false"}
            {...register("courses", {
              validate: (value) =>
                value !== "default" || "Select the course you want",
            })}
            className={errors.courses ? errorInputClass : inputClass}
          >
            <option value="default">
              {/* Change prompt based on selection */}
              {selectedTeam === 'default' ? "Select Course" : `Select ${selectedTeam.charAt(0).toUpperCase() + selectedTeam.slice(1)} Course`}
            </option>
            {/* CONDITIONAL RENDERING: Display only courses for the selected team */}
            {coursesToShow.map((course) => (
              <option value={course.title} key={`${selectedTeam}-${course.title}`}>
                {course.title}
              </option>
            ))}
            {/* Show a placeholder if a team hasn't been selected */}
            {selectedTeam === 'default' && (
                <option value="" disabled>First, select a team above</option>
            )}
          </select>

          {errors.courses && (
            <p className="mt-1 text-sm text-red-400" role="alert">
              {errors.courses.message}
            </p>
          )}
        </div>
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
          placeholder="Your Message"
          disabled={isSubmitSuccessful || isSubmitting}
          rows={6}
          className={errors.message ? errorInputClass : inputClass}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-400" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Actions */}
      <div className="flex flex-col items-center">
        <button
          type="submit"
          disabled={isSubmitting || isSubmitSuccessful}
          className="w-full btnPrimary"
        >
          {isSubmitting ? "Sending..." : "Register the course"}
        </button>

        {isSubmitSuccessful && (
          <p className="mt-3 text-sm text-emerald-400" role="status">
            Thank you — your registration was sent. We will reply shortly.
          </p>
        )}
      </div>
    </form>
  );
}