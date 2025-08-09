"use client";
import { Section, SectionHeading } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(formData: FormData) {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <Section id="contact" className="py-20">
      <SectionHeading title="Contact" subtitle="Let's build something great together" />
      <div className="grid md:grid-cols-2 gap-8">
        <form
          className="bg-white/60 dark:bg-slate-900/60 backdrop-blur border border-slate-200 dark:border-slate-800 rounded-xl p-6 space-y-4"
          action={async (fd) => onSubmit(fd)}
        >
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
            <input name="name" required className="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 outline-none focus:ring-2 focus:ring-[#3B82F6]" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
            <input type="email" name="email" required className="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 outline-none focus:ring-2 focus:ring-[#3B82F6]" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
            <textarea name="message" rows={5} required className="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 outline-none focus:ring-2 focus:ring-[#3B82F6]" />
          </div>
          <div className="flex items-center gap-3">
            <Button type="submit" disabled={status === "loading"}>{status === "loading" ? "Sending..." : "Send"}</Button>
            {status === "success" && <p className="text-sm text-green-600">Message sent!</p>}
            {status === "error" && <p className="text-sm text-red-600">Something went wrong.</p>}
          </div>
        </form>
        <div className="flex items-center">
          <div className="space-y-4">
            <p className="text-slate-700 dark:text-slate-300">
              Have an idea, a project, or a position where I can contribute? Feel free to reach out.
            </p>
            <a href="#contact">
              <Button size="lg">Hire Me</Button>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}