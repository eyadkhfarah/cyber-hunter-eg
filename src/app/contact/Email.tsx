"use client"

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

type FormValues = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

export default function Email(): React.ReactElement {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting, isSubmitSuccessful },
    } = useForm<FormValues>({
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
    });

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
        }
    }, [isSubmitSuccessful, reset]);

    const onSubmit = async (data: FormValues) => {
        // Replace endpoint with your real API route or email service
        try {
            await fetch("/api/contact", {
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
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
            {/* Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="name" className="block text-sm mb-2">Your name</label>
                    <input
                        id="name"
                        {...register("name", {
                            required: "Name is required",
                            maxLength: { value: 100, message: "Name is too long" },
                        })}
                        aria-invalid={errors.name ? "true" : "false"}
                        type="text"
                        className={`w-full rounded-lg p-3 border ${errors.name ? 'border-red-500' : ''} text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition`}
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>}
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm mb-2">Email</label>
                    <input
                        id="email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Enter a valid email address",
                            },
                        })}
                        aria-invalid={errors.email ? "true" : "false"}
                        type="email"
                        className={`w-full rounded-lg p-3 border ${errors.email ? 'border-red-500' : ''} text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition`}
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>}
                </div>
            </div>

            {/* Subject */}
            <div>
                <label htmlFor="subject" className="block text-sm mb-2">Subject</label>
                <input
                    id="subject"
                    {...register("subject", {
                        required: "Subject is required",
                        maxLength: { value: 150, message: "Subject is too long" },
                    })}
                    aria-invalid={errors.subject ? "true" : "false"}
                    type="text"
                    className={`w-full rounded-lg p-3 border ${errors.subject ? 'border-red-500' : ''} text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition`}
                />
                {errors.subject && <p className="mt-1 text-sm text-red-400">{errors.subject.message}</p>}
            </div>

            {/* Message */}
            <div>
                <label htmlFor="message" className="block text-sm mb-2">Message</label>
                <textarea
                    id="message"
                    {...register("message", {
                        required: "Message is required",
                        minLength: { value: 10, message: "Message is too short" },
                        maxLength: { value: 5000, message: "Message is too long" },
                    })}
                    aria-invalid={errors.message ? "true" : "false"}
                    rows={6}
                    className={`w-full rounded-lg p-3 border-2 ${errors.message ? 'border-red-500' : ''} text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition`}
                />
                {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>}
            </div>

            {/* Actions */}
            <div className="flex flex-col items-center">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btnPrimary"
                >
                    {isSubmitting ? "Sending..." : "Send message"}
                </button>

                {isSubmitSuccessful && (
                    <p className="mt-3 text-sm text-emerald-400">Thank you — your message was sent. We will reply shortly.</p>
                )}
            </div>
        </form>
    );
}