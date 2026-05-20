import { useState } from "react";
import type { ChangeEvent, CSSProperties, FormEvent } from "react";

import axios from "axios";
import { toast } from "sonner";

import { profile } from "./data";
import { useReveal } from "./useReveal";

const API = `${import.meta.env.VITE_BACKEND_URL}/api`;

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FieldProps = {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  testid: string;
};

export default function Contact() {
  const ref = useReveal();

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState<boolean>(false);

  const update =
    (key: keyof FormState) =>
    (
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ): void => {
      setForm((state) => ({
        ...state,
        [key]: e.target.value,
      }));
    };

  const submit = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error(
        "Name, email and a short message are required."
      );
      return;
    }

    setLoading(true);

    try {
      await axios.post(`${API}/contact`, form);

      toast.success(
        "Message sent. I'll reply within 48 hours."
      );

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err: any) {
      const detail =
        err?.response?.data?.detail ||
        "Something went wrong. Try again.";

      toast.error(
        typeof detail === "string"
          ? detail
          : "Submission failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      data-testid="contact-section"
      className="relative px-6 md:px-16 pt-28 md:pt-36 pb-12 border-t border-white/10"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-2 reveal">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-vermillion">
            07 / Contact
          </span>
        </div>

        <div
          className="md:col-span-10 reveal"
          style={{ animationDelay: "0.1s" } as CSSProperties}
        >
          <h2
            data-testid="contact-headline"
            className="font-display font-light text-white leading-[0.9] tracking-tighter"
            style={
              {
                fontSize: "clamp(3rem, 11vw, 12rem)",
              } as CSSProperties
            }
          >
            Let's
            <br />
            <span className="italic font-black">build</span>
            <span className="text-vermillion">.</span>
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mt-16 md:mt-24">
        {/* Left */}
        <div className="md:col-span-5 reveal space-y-10">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 mb-3">
              Direct line
            </div>

            <a
              href={`mailto:${profile.email}`}
              data-testid="contact-email-link"
              className="font-display text-2xl sm:text-3xl text-white link-accent"
            >
              {profile.email}
            </a>
          </div>

          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 mb-3">
              Located
            </div>

            <div className="font-display text-xl text-white">
              {profile.location}
            </div>

            <div className="font-mono text-xs text-neutral-500 mt-1">
              Available remote · Currently Q1 2026
            </div>
          </div>

          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 mb-4">
              Elsewhere
            </div>

            <ul className="space-y-2">
              {profile.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    data-testid={`social-${social.label
                      .toLowerCase()
                      .replace(/[^a-z]/g, "-")}`}
                    className="font-mono text-sm uppercase tracking-[0.2em] text-neutral-300 link-accent inline-block"
                  >
                    {social.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right */}
        <form
          onSubmit={submit}
          data-testid="contact-form"
          className="md:col-span-7 reveal space-y-8"
          style={{ animationDelay: "0.1s" } as CSSProperties}
        >
          <Field
            id="name"
            label="01 Name"
            value={form.name}
            onChange={update("name")}
            placeholder="Your full name"
            testid="contact-input-name"
          />

          <Field
            id="email"
            type="email"
            label="02 Email"
            value={form.email}
            onChange={update("email")}
            placeholder="you@studio.com"
            testid="contact-input-email"
          />

          <Field
            id="subject"
            label="03 Subject"
            value={form.subject}
            onChange={update("subject")}
            placeholder="Optional — what's this about?"
            testid="contact-input-subject"
          />

          <div>
            <label
              htmlFor="message"
              className="block font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 mb-3"
            >
              04 Message
            </label>

            <textarea
              id="message"
              rows={5}
              value={form.message}
              onChange={update("message")}
              placeholder="Tell me what you're building, the timeline, and the stack."
              data-testid="contact-input-message"
              className="w-full bg-transparent border-b border-white/20 text-white placeholder-neutral-600 py-3 focus:border-vermillion outline-none resize-none font-body"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            data-testid="contact-submit-button"
            className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] border border-white/30 px-6 py-4 hover:border-vermillion hover:bg-vermillion text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="w-1.5 h-1.5 bg-vermillion group-hover:bg-white" />

            {loading ? "Sending…" : "Send message"}
          </button>
        </form>
      </div>

      {/* Footer */}
      <div className="mt-28 md:mt-40 border-t border-white/10 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500">
          © 2026 {profile.name}. Built, not assembled.
        </div>

        <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500">
          CRAFTED IN SRI LANKA
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  testid,
}: FieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 mb-3"
      >
        {label}
      </label>

      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        data-testid={testid}
        className="w-full bg-transparent border-b border-white/20 text-white placeholder-neutral-600 py-3 focus:border-vermillion outline-none font-body"
      />
    </div>
  );
}