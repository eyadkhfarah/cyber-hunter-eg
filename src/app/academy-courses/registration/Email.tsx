"use client";

import {
  AcademyCoursesBlue,
  AcademyCoursesRed,
} from "@/lib/Data/AcademyCourses";
import { cn } from "@/lib/utils";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  number: number;
  governate: string;
  team: string;
  courses: string;
  message: string;
};

type Form = {
  className: string;
};

const inputClass =
  "w-full rounded-lg p-3 border text-black placeholder-slate-400 rounded-2xl border-2 border-blue-950 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition";
const errorInputClass = "ring-red-500" + inputClass;

export default function Email({ className }: Form): React.ReactElement {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormValues>();

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit = async (data: FormValues) => {
    // Replace endpoint with your real API route or email service
    try {
      await fetch("/api/academy-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      // Optionally show a success toast / message here
    } catch (error) {
      // Optionally handle/send error to logging service
      console.error("Send email failed", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className={cn("space-y-6 w-full", className)}
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
            type="text"
            disabled={isSubmitSuccessful}
            placeholder="Your Name"
            className={errors.name ? errorInputClass : inputClass}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
          )}
        </div>
        <div>
          <input
            id="number"
            {...register("number", {
              required: "Your phone number is required",
              minLength: { value: 11, message: "Number is too short" },
            })}
            aria-invalid={errors.number ? "true" : "false"}
            type="number"
            disabled={isSubmitSuccessful}
            placeholder="Your Phone Number (WhatsApp Prefer)"
            className={errors.number ? errorInputClass : inputClass}
          />
          {errors.number && (
            <p className="mt-1 text-sm text-red-400">{errors.number.message}</p>
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
            disabled={isSubmitSuccessful}
            placeholder="Governate"
            className={errors.governate ? errorInputClass + "w-full" : inputClass}
          />
          {errors.governate && (
            <p className="mt-1 text-sm text-red-400">
              {errors.governate.message}
            </p>
          )}
        </div>
        {/* Team */}

        <div className="">
          <select
            id="team"
            defaultValue={"default"}
            disabled={isSubmitSuccessful}
            // aria-invalid={errors.courses ? "true" : "false"}
            {...register("team", { required: "Select Your Team" })}
            className={errors.team ? errorInputClass : inputClass}
          >
            <option value="default">Select Team</option>

            <option value={"blue"}>Blue Team</option>
            <option value={"red"}>Red Team</option>
          </select>
          {errors.team && (
            <p className="mt-1 text-sm text-red-400">{errors.team.message}</p>
          )}
        </div>
      </div>

      {/* Courses */}
      <div className="">
        <select
          id="courses"
          defaultValue={"default"}
          disabled={isSubmitSuccessful}
          aria-invalid={errors.courses ? "true" : "false"}
          {...register("courses", { required: "Select the course you want" })}
          className={errors.courses ? errorInputClass : inputClass}
        >
          <option value="default" selected>
            Select Course
          </option>
          {AcademyCoursesBlue.map((courses, i) => (
            <option value={courses.title} key={i}>
              {courses.title}
            </option>
          ))}
          {AcademyCoursesRed.map((courses, i) => (
            <option value={courses.title} key={i}>
              {courses.title}
            </option>
          ))}
        </select>

        {errors.courses && (
          <p className="mt-1 text-sm text-red-400">{errors.courses.message}</p>
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
          placeholder="Your Message"
          disabled={isSubmitSuccessful}
          rows={6}
          className={`w-full rounded-lg p-3 border-2 ${
            errors.message ? "border-red-500" : ""
          } text-black placeholder-slate-400 rounded-2xl border-2 border-blue-950 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition`}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
        )}
      </div>

      {/* Actions */}
      <div className="flex flex-col items-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btnPrimary"
        >
          {isSubmitting ? "Sending..." : "Register the course"}
        </button>

        {isSubmitSuccessful && (
          <p className="mt-3 text-sm text-emerald-400">
            Thank you — your registration was sent. We will reply shortly.
          </p>
        )}
      </div>
    </form>
  );
}
