import { useRef } from 'react';
import { motion, useScroll, useTransform, type Variants } from 'framer-motion';

/* Curtain reveal: image appears as a curtain opens left-to-right */
function CurtainImage({
  src,
  alt,
  className,
  delay = 0,
}: {
  src: string;
  alt: string;
  className: string;
  delay?: number;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        initial={{ scale: 1.3 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay }}
      />
      {/* Curtain overlay */}
      <motion.div
        className="absolute inset-0 bg-forest"
        initial={{ x: '0%' }}
        whileInView={{ x: '-101%' }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1], delay }}
      />
    </div>
  );
}

/* Staggered heading — words rise from bottom */
const headingVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const wordVariants: Variants = {
  hidden: { y: '100%', opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

function StaggeredHeading({
  text,
  className,
}: {
  text: string;
  className: string;
}) {
  const words = text.split(' ');
  return (
    <motion.h2
      variants={headingVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      className={className}
    >
      {words.map((word, i) => (
        <span key={i} className="mr-[0.25em] inline-block overflow-hidden pb-1">
          <motion.span variants={wordVariants} className="inline-block">
            {word}
          </motion.span>
        </span>
      ))}
    </motion.h2>
  );
}

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section id="experiencia" ref={ref} className="relative bg-cream py-24 md:py-36">
      {/* Section eyebrow */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-center gap-3 md:mb-24"
        >
          <span className="h-px w-12 bg-terracotta" />
          <span className="text-xs uppercase tracking-ultra-wide text-terracotta">
            La Experiencia Odiel
          </span>
        </motion.div>

        {/* Block 1 — Paz para Felinos y Cánidos */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Image — asymmetric, large */}
          <div className="lg:col-span-7 lg:col-start-1">
            <CurtainImage
              src="https://images.pexels.com/photos/28243688/pexels-photo-28243688.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Gato durmiendo plácidamente al sol"
              className="aspect-[4/5] w-full"
            />
          </div>
          {/* Text — offset down */}
          <div className="flex flex-col justify-end lg:col-span-4 lg:col-start-9 lg:pb-12">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-4 text-xs uppercase tracking-ultra-wide text-forest/50"
            >
              01 — Calma
            </motion.span>
            <StaggeredHeading
              text="Paz para Felinos y Cánidos"
              className="font-serif text-3xl leading-tight text-forest md:text-4xl"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-6 text-lg leading-relaxed text-forest/70"
            >
              Disponemos de zonas de consulta estrictamente separadas.
              Entendemos el estrés, y lo eliminamos.
            </motion.p>
          </div>
        </div>

        {/* Block 2 — Manos expertas, corazón cálido (reversed) */}
        <div className="mt-24 grid grid-cols-1 gap-12 lg:mt-32 lg:grid-cols-12 lg:gap-16">
          {/* Text — offset up */}
          <div className="order-2 flex flex-col justify-start lg:order-1 lg:col-span-4 lg:col-start-2 lg:pt-20">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-4 text-xs uppercase tracking-ultra-wide text-forest/50"
            >
              02 — Cuidado
            </motion.span>
            <StaggeredHeading
              text="Manos expertas, corazón cálido"
              className="font-serif text-3xl leading-tight text-forest md:text-4xl"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-6 text-lg leading-relaxed text-forest/70"
            >
              Rocío (Veterinaria) y Elena (Auxiliar) no solo curan, cuidan.
              Dirigido por mujeres, pensado para las familias.
            </motion.p>
          </div>
          {/* Image — offset right, overlapping */}
          <div className="order-1 lg:order-2 lg:col-span-6 lg:col-start-7">
            <CurtainImage
              src="https://images.pexels.com/photos/6235023/pexels-photo-6235023.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Veterinaria revisando a un perro con delicadeza"
              className="aspect-[4/5] w-full"
              delay={0.15}
            />
          </div>
        </div>

        {/* Block 3 — Boutique & Peluquería (full-width band with parallax) */}
        <div className="mt-24 lg:mt-32">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Small image */}
            <div className="lg:col-span-5 lg:col-start-1">
              <CurtainImage
                src="https://images.pexels.com/photos/19145882/pexels-photo-19145882.jpeg?auto=compress&cs=tinysrgb&w=1000"
                alt="Perro siendo cuidado en la peluquería"
                className="aspect-[3/4] w-full"
                delay={0.1}
              />
            </div>
            {/* Text centered between two images */}
            <div className="flex flex-col justify-center lg:col-span-3 lg:col-start-7">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-4 text-xs uppercase tracking-ultra-wide text-forest/50"
              >
                03 — Boutique
              </motion.span>
              <StaggeredHeading
                text="Peluquería y boutique"
                className="font-serif text-3xl leading-tight text-forest md:text-4xl"
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mt-6 text-lg leading-relaxed text-forest/70"
              >
                Cuidado estético premium y productos seleccionados para el
                bienestar de tu mascota.
              </motion.p>
            </div>
            {/* Parallax image */}
            <div className="lg:col-span-3 lg:col-start-10">
              <div className="relative overflow-hidden">
                <motion.img
                  style={{ y: parallaxY }}
                  src="https://images.pexels.com/photos/6131156/pexels-photo-6131156.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Peluquería canina profesional"
                  className="aspect-[3/4] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
