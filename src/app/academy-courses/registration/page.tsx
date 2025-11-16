import { generateStaticMetadata } from "@/lib/generateStaticMetadata";
import { Metadata } from "next";
import Email from "./Email";
import { GuaranteeBanner } from "@/Components/Client/GuaranteeBanner";

export const metadata: Metadata = generateStaticMetadata({
  title: "Academy Courses Registration",
  description:
    "To register for our Academy Courses, please fill out the registration form below with your details. Once submitted, our team will review your information and get back to you with the next steps to complete your enrollment.",
  url: "/academy-courses/registration",
});

export default function page() {
  return (
    <main className="container mx-auto px-6 py-16">
      <header className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-black">
          Academy Courses Registration
        </h1>
        <p className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto">
          To register for our Academy Courses, please fill out the registration form below with your details. Once submitted, our team will review your information and get back to you with the next steps to complete your enrollment.
        </p>
      </header>

      <section className="grid md:col- md:grid-cols-3 gap-14">
        <Email className={"md:col-span-2 md:order-last order-first"} />
        <GuaranteeBanner />
      </section>
    </main>
  )
}
