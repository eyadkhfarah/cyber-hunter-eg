"use client";

import { PartnerFormValues } from "@/types/inputs";
import { useForm, SubmitHandler, FieldErrors } from "react-hook-form";

// Define shared input styles to avoid repetition and improve maintainability
const inputBaseClass =
  "w-full p-3 rounded-2xl border-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500";
const inputDefaultClass = `${inputBaseClass} border-blue-950`;
const inputErrorClass = `${inputBaseClass} border-red-500`;

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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      // Optionally reset the form after a successful submission
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  const onError = (errors: FieldErrors<PartnerFormValues>) => {
    console.log("Please fix these errors:", errors);
  };

  return (
    <form
      className="space-y-4"
      onSubmit={handleSubmit(onSubmit, onError)}
      aria-busy={isSubmitting}
      noValidate
    >
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <input
            id="company"
            {...register("company", {
              required: "Company name is required for partnership",
              minLength: { value: 3, message: "Company name is too short" },
            })}
            aria-label="Company name"
            aria-invalid={errors.company ? "true" : "false"}
            aria-describedby={errors.company ? "company-error" : undefined}
            placeholder="Company name"
            disabled={isSubmitting || isSubmitSuccessful}
            className={errors.company ? inputErrorClass : inputDefaultClass}
          />
          {errors.company && (
            <p
              id="company-error"
              className="mt-1 text-sm text-red-400"
              role="alert"
            >
              {errors.company.message}
            </p>
          )}
        </div>

        <div>
          <input
            id="email"
            {...register("email", {
              required: "Email is required for contact",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Please enter a valid business email address",
              },
            })}
            type="email"
            aria-label="Contact email"
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
            placeholder="Contact Email"
            disabled={isSubmitting || isSubmitSuccessful}
            className={errors.email ? inputErrorClass : inputDefaultClass}
          />
          {errors.email && (
            <p
              id="email-error"
              className="mt-1 text-sm text-red-400"
              role="alert"
            >
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <textarea
          id="message"
          {...register("message", {
            required: "Please detail your interest in the partnership",
            minLength: {
              value: 20,
              message: "Message must be at least 20 characters",
            },
          })}
          aria-label="Brief message detailing partnership interest"
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? "message-error" : undefined}
          placeholder="Short message about your cybersecurity partnership interest"
          rows={4}
          disabled={isSubmitting || isSubmitSuccessful}
          className={errors.message ? inputErrorClass : inputDefaultClass}
        />
        {errors.message && (
          <p
            id="message-error"
            className="mt-1 text-sm text-red-400"
            role="alert"
          >
            {errors.message.message}
          </p>
        )}
      </div>

      <div className="flex flex-col items-center">
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting || isSubmitSuccessful}
            className="btnPrimary"
          >
            {isSubmitting
              ? "Sending Securely…"
              : "Express Partnership Interest"}
          </button>
        </div>

        {isSubmitSuccessful && (
          <p className="mt-3 text-sm text-emerald-400" role="status">
            Thanks — we received your interest and a member of our partnership
            security team will be in touch shortly.
          </p>
        )}
      </div>
    </form>
  );
}
