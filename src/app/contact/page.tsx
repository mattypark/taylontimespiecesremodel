"use client";

import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="px-6 lg:px-10 py-16 md:py-24 border-b border-[#e6e6e6]">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[11px] tracking-[4px] uppercase text-[#6b6b6b] mb-3 fade-up">
            Get in Touch
          </p>
          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight leading-[0.95] fade-up">
            Talk to a specialist.
          </h1>
        </div>
      </section>

      <section className="px-6 lg:px-10 py-16 md:py-20">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-14">
          {sent ? (
            <div className="border border-[#121212] p-12 text-center fade-up">
              <p className="text-[11px] tracking-[3px] uppercase text-[#6b6b6b] mb-3">
                Received
              </p>
              <h3 className="text-2xl md:text-3xl font-extrabold mb-4">
                Thanks. We&apos;ll be in touch within one business day.
              </h3>
              <button onClick={() => setSent(false)} className="btn-outline mt-4">
                Send Another
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 fade-up"
            >
              <Field label="First Name" required>
                <input className="input-line" type="text" required />
              </Field>
              <Field label="Last Name" required>
                <input className="input-line" type="text" required />
              </Field>
              <Field label="Email" required>
                <input className="input-line" type="email" required />
              </Field>
              <Field label="Phone">
                <input className="input-line" type="tel" />
              </Field>
              <div className="md:col-span-2">
                <Field label="Subject" required>
                  <select className="input-line" defaultValue="general" required>
                    <option value="general">General inquiry</option>
                    <option value="inquiry">Product inquiry</option>
                    <option value="sell">Selling a watch</option>
                    <option value="appointment">Book an appointment</option>
                    <option value="auction">Live auction registration</option>
                  </select>
                </Field>
              </div>
              <div className="md:col-span-2">
                <Field label="Message" required>
                  <textarea
                    className="input-line resize-y min-h-[140px] py-3"
                    placeholder="How can we help?"
                    required
                  />
                </Field>
              </div>
              <div className="md:col-span-2 mt-4">
                <button type="submit" className="btn-solid w-full md:w-auto">
                  Send Message
                </button>
              </div>
            </form>
          )}

          <aside className="space-y-10 fade-up">
            <Block label="Call">
              <p className="text-2xl font-extrabold mb-1">(555) 867-5309</p>
              <p className="text-[13px] text-[#6b6b6b]">Mon–Sat · 10am–6pm ET</p>
            </Block>
            <Block label="Email">
              <p className="text-lg font-semibold mb-1">sales@taylontimepieces.com</p>
              <p className="text-[13px] text-[#6b6b6b]">Replies within 1 business day</p>
            </Block>
            <Block label="Visit">
              <p className="text-lg font-semibold mb-1">218 Madison Avenue</p>
              <p className="text-lg font-semibold mb-3">New York, NY 10016</p>
              <p className="text-[13px] text-[#6b6b6b]">By appointment only</p>
            </Block>
            <Block label="Follow">
              <div className="flex flex-wrap gap-2">
                {["Instagram", "TikTok", "YouTube", "eBay"].map((s) => (
                  <a key={s} href="#" className="filter-pill">{s}</a>
                ))}
              </div>
            </Block>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-[11px] tracking-[2px] uppercase text-[#6b6b6b] mb-1">
        {label} {required && <span className="text-[#121212]">*</span>}
      </span>
      {children}
    </label>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-[#121212] pt-5">
      <p className="text-[11px] tracking-[3px] uppercase text-[#6b6b6b] mb-3">{label}</p>
      {children}
    </div>
  );
}
