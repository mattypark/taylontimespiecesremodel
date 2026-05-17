"use client";

import { useState } from "react";
import Link from "next/link";
import { brands } from "@/lib/products";

export default function SellPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="relative bg-[#0a0a0a] text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24 md:py-32">
          <p className="text-[11px] tracking-[4px] uppercase text-white/60 mb-4">
            Sell or Trade
          </p>
          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight leading-[0.95] max-w-3xl mb-6">
            Get a fair offer in 24 hours.
          </h1>
          <p className="text-base md:text-lg text-white/70 max-w-xl leading-relaxed">
            We pay top dollar for Rolex, Audemars Piguet, Patek Philippe, and other
            premium brands. No haggling. No middlemen. No surprises.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 lg:px-10">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {[
            { n: "01", t: "Submit", d: "Tell us about your watch in the form below. Add photos if you have them." },
            { n: "02", t: "Get an Offer", d: "We'll respond within 24 hours with a fair cash or trade offer." },
            { n: "03", t: "Get Paid", d: "Ship it free and insured. Funds wire same-day on arrival & inspection." },
          ].map((s, i) => (
            <div
              key={s.n}
              className="border border-[#e6e6e6] p-8 md:p-10 fade-up"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <p className="text-[11px] tracking-[3px] uppercase text-[#6b6b6b] mb-3">
                Step {s.n}
              </p>
              <h3 className="text-xl md:text-2xl font-extrabold mb-3">{s.t}</h3>
              <p className="text-[15px] text-[#6b6b6b] leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>

        <div id="trade" className="max-w-[800px] mx-auto">
          <div className="text-center mb-12 fade-up">
            <p className="text-[11px] tracking-[4px] uppercase text-[#6b6b6b] mb-3">
              Submit Your Watch
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Tell us what you have.
            </h2>
          </div>

          {submitted ? (
            <div className="border border-[#121212] p-12 text-center fade-up">
              <p className="text-[11px] tracking-[3px] uppercase text-[#6b6b6b] mb-3">
                Received
              </p>
              <h3 className="text-2xl md:text-3xl font-extrabold mb-4">
                Thanks. We&apos;ll be in touch within 24 hours.
              </h3>
              <p className="text-[15px] text-[#6b6b6b] mb-8">
                A specialist will reply to the email you provided with our offer.
              </p>
              <button onClick={() => setSubmitted(false)} className="btn-outline">
                Submit Another
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
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
              <Field label="Brand" required>
                <select className="input-line" required defaultValue="">
                  <option value="" disabled>Select brand</option>
                  {brands.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                  <option value="Other">Other</option>
                </select>
              </Field>
              <Field label="Model / Reference">
                <input className="input-line" type="text" placeholder="e.g. 126610LN" />
              </Field>
              <Field label="Year">
                <input className="input-line" type="number" min="1900" max="2030" />
              </Field>
              <Field label="Asking Price (USD)">
                <input className="input-line" type="number" min="0" placeholder="Optional" />
              </Field>
              <div className="md:col-span-2">
                <Field label="Box & Papers">
                  <select className="input-line" defaultValue="">
                    <option value="" disabled>Select</option>
                    <option>Full Set</option>
                    <option>Box Only</option>
                    <option>Papers Only</option>
                    <option>Watch Only</option>
                  </select>
                </Field>
              </div>
              <div className="md:col-span-2">
                <Field label="Condition Notes">
                  <textarea
                    className="input-line resize-y min-h-[100px] py-3"
                    placeholder="Service history, polishing, dial/case condition, etc."
                  />
                </Field>
              </div>
              <div className="md:col-span-2 flex items-center gap-3 mt-4">
                <input type="checkbox" id="trade-toggle" className="w-4 h-4" />
                <label htmlFor="trade-toggle" className="text-[14px]">
                  I&apos;m interested in trading toward another watch
                </label>
              </div>
              <div className="md:col-span-2 mt-4">
                <button type="submit" className="btn-solid w-full md:w-auto">
                  Get My Offer
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      <section className="bg-[#f7f6f3] py-16 md:py-20 px-6 lg:px-10 text-center">
        <div className="max-w-[800px] mx-auto fade-up">
          <p className="text-[11px] tracking-[4px] uppercase text-[#6b6b6b] mb-3">
            Prefer to talk?
          </p>
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-6">
            Call (555) 867-5309 — Mon–Sat, 10–6 ET
          </h3>
          <Link href="/contact" className="btn-outline">Contact a Specialist</Link>
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
