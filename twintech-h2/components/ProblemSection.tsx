import { getCopy } from '@/lib/copy';
import type { Locale } from '@/lib/demoData';
import { motion } from 'framer-motion';

export function ProblemSection({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  return (
    <section className="py-16" aria-labelledby="problem-heading">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="problem-heading" className="text-3xl font-bold text-neutral-900 md:text-4xl">
          {copy.problem.title}
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {copy.problem.cards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20%' }}
              transition={{ delay: index * 0.1 }}
              className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-primary-700">{card.title}</h3>
              <p className="mt-3 text-neutral-700">{card.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
