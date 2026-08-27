import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      'Son verdaderos profesionales. Dieron exactamente con lo que tenía. Muy, pero que muy bien.',
    author: 'MJ BO',
  },
  {
    quote:
      'Supervisan con detalle y cariño. Happy y Liber os dan las gracias.',
    author: 'Jose Luis Terán',
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="testimonios"
      className="relative overflow-hidden bg-forest-deep py-28 md:py-40"
    >
      {/* Grain texture */}
      <div className="grain absolute inset-0 opacity-30" />

      {/* Large decorative quote mark */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.08, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="absolute left-1/2 top-16 -translate-x-1/2"
      >
        <Quote className="h-40 w-40 text-cream md:h-56 md:w-56" strokeWidth={1} />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-10">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-center justify-center gap-3"
        >
          <span className="h-px w-12 bg-terracotta-light" />
          <span className="text-xs uppercase tracking-ultra-wide text-terracotta-light">
            Testimonios
          </span>
          <span className="h-px w-12 bg-terracotta-light" />
        </motion.div>

        {/* Carousel */}
        <div className="relative min-h-[280px] md:min-h-[340px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <blockquote className="font-serif text-3xl leading-snug text-cream md:text-5xl md:leading-[1.2]">
                "{testimonials[index].quote}"
              </blockquote>
              <p className="mt-10 text-sm uppercase tracking-ultra-wide text-terracotta-light">
                — {testimonials[index].author}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicators */}
        <div className="mt-16 flex items-center justify-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-500 ${
                i === index ? 'w-10 bg-terracotta' : 'w-2 bg-cream/30 hover:bg-cream/50'
              }`}
              aria-label={`Testimonio ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
