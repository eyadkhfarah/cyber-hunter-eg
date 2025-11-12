
"use client";

export default function Email() {
  return (
    <form
      className="mx-auto max-w-xl space-y-4"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="grid md:grid-cols-2 gap-4">
        <input
          aria-label="Company name"
          placeholder="Company name"
          className="w-full p-3 rounded-lg bg-slate-800/50 border border-white/6 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          aria-label="Contact email"
          placeholder="Email"
          className="w-full p-3 rounded-lg bg-slate-800/50 border border-white/6 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <textarea
        aria-label="Brief message"
        placeholder="Short message about your interest"
        rows={4}
        className="w-full p-3 rounded-lg bg-slate-800/50 border border-white/6 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="flex justify-center">
        <button
          type="submit"
          className="btnPrimary"
        >
          Express interest
        </button>
      </div>
    </form>
  );
}
