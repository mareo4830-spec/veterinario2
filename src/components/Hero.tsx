import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const heroImage =
  'https://images.pexels.com/photos/7470633/pexels-photo-7470633.jpeg?auto=compress&cs=tinysrgb&w=1400';

const titleWords = ['Medicina', 'veterinaria', 'con', 'alma.'];

const wordContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.4 },
  },
};

const wordItem = {
  hidden: { y: '100%', opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [0.35, 0.6]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative h-screen min-h-[700px] w-full overflow-hidden"
    >
      {/* Background image with parallax */}
      <motion.div style={{ y: imageY }} className="absolute inset-0 h-[120%]">
        <img
          src={heroImage}
          alt="Veterinaria examinando a un perro con cariño"
          className="h-full w-full object-cover"
        />
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-gradient-to-r from-forest-deep/70 via-forest/30 to-transparent"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/50 via-transparent to-cream/10" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 flex h-full flex-col justify-center px-6 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8 flex items-center gap-3"
            >
              <span className="h-px w-12 bg-terracotta" />
              <span className="text-xs uppercase tracking-ultra-wide text-cream/80">
                Huelva · Centro de Bienestar Animal
              </span>
            </motion.div>

            {/* Title — staggered word reveal */}
            <motion.h1
              variants={wordContainer}
              initial="hidden"
              animate="show"
              className="font-serif text-5xl leading-[1.05] text-cream sm:text-6xl md:text-7xl lg:text-8xl"
            >
              {titleWords.map((word, i) => (
                <span key={i} className="mr-[0.25em] inline-block overflow-hidden pb-2">
                  <motion.span variants={wordItem} className="inline-block">
                    {word}
                  </motion.span>
                </span>
              ))}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="mt-8 max-w-xl text-lg leading-relaxed text-cream/85 md:text-xl"
            >
              Mucho más que una clínica en Huelva. Un espacio de bienestar
              integral, peluquería y boutique para el rey de la casa.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="mt-10"
            >
              <a
                href="#experiencia"
                className="group inline-flex items-center gap-3 rounded-full bg-terracotta px-8 py-4 text-base font-medium text-cream shadow-[0_8px_30px_rgba(193,119,103,0.35)] transition-all duration-300 hover:bg-terracotta-dark hover:shadow-[0_12px_40px_rgba(193,119,103,0.45)]"
              >
                Conoce nuestro espacio
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-cream/60"
        >
          <span className="text-[10px] uppercase tracking-ultra-wide">Scroll</span>
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
