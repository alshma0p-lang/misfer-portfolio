'use client';

import { useState } from 'react';
import { getCopy } from '@/lib/copy';
import type { Locale } from '@/lib/demoData';

export function ContactSection({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const [status, setStatus] = useState<string | null>(null);

  return (
    <section className="bg-neutral-100 py-16" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-4xl px-6">
        <h2 id="contact-heading" className="text-3xl font-bold text-neutral-900 md:text-4xl text-center">
          {copy.contact.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-neutral-700">{copy.contact.copy}</p>
        <form
          className="mt-10 space-y-4 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"
          onSubmit={(event) => {
            event.preventDefault();
            setStatus(locale === 'ar' ? 'تم استلام الطلب. سنعاود التواصل خلال {contact_response_sla_ar}.' : 'Request received. Expect a response within {contact_response_sla}.');
            (event.target as HTMLFormElement).reset();
          }}
        >
          <div className="grid gap-4 md:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-medium text-neutral-700">
              {copy.contact.fields.name}
              <input className="rounded-xl border border-neutral-300 px-3 py-2" required name="name" />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-neutral-700">
              {copy.contact.fields.email}
              <input type="email" className="rounded-xl border border-neutral-300 px-3 py-2" required name="email" />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-neutral-700">
              {copy.contact.fields.company}
              <input className="rounded-xl border border-neutral-300 px-3 py-2" required name="company" />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-neutral-700">
              {copy.contact.fields.role}
              <select className="rounded-xl border border-neutral-300 px-3 py-2" required name="role" defaultValue="">
                <option value="" disabled>
                  {copy.contact.fields.rolePlaceholder}
                </option>
                {copy.contact.roles.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <label className="flex flex-col gap-2 text-sm font-medium text-neutral-700">
            {copy.contact.fields.message}
            <textarea className="min-h-[120px] rounded-xl border border-neutral-300 px-3 py-2" required name="message" />
          </label>
          <button type="submit" className="w-full rounded-full bg-primary-700 px-6 py-3 text-white shadow-md transition hover:bg-primary-800">
            {copy.contact.submit}
          </button>
          {status && <p className="text-center text-sm text-primary-700">{status}</p>}
        </form>
      </div>
    </section>
  );
}
