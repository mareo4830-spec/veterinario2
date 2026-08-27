import { motion } from 'framer-motion';
import { Phone, MapPin, Star, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      id="contacto"
      className="relative overflow-hidden bg-forest-deep pt-24 text-cream md:pt-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Top — big phone + location */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <Phone className="h-4 w-4 text-terracotta-light" />
              <span className="text-xs uppercase tracking-ultra-wide text-cream/50">
                Llámanos
              </span>
            </div>
            <a
              href="tel:+34959254222"
              className="group font-serif text-5xl text-cream transition-colors duration-300 hover:text-terracotta-light md:text-7xl"
            >
              959 25 42 22
            </a>
            <p className="mt-4 text-sm text-cream/50">
              Lunes a Viernes · 10:00 – 20:00
            </p>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:pt-4"
          >
            <div className="mb-5 flex items-center gap-3">
              <MapPin className="h-4 w-4 text-terracotta-light" />
              <span className="text-xs uppercase tracking-ultra-wide text-cream/50">
                Dónde estamos
              </span>
            </div>
            <a
              href="https://maps.google.com/?q=Av.+Guatemala,+44,+21003+Huelva"
              target="_blank"
              rel="noopener noreferrer"
              className="group font-serif text-2xl leading-snug text-cream transition-colors duration-300 hover:text-terracotta-light md:text-3xl"
            >
              Av. Guatemala, 44
              <br />
              21003 Huelva
            </a>
          </motion.div>
        </div>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 flex flex-wrap items-center gap-6 border-t border-cream/10 pt-12"
        >
          <div className="flex items-center gap-3 rounded-full border border-cream/15 px-6 py-3">
            <Star className="h-5 w-5 fill-terracotta-light text-terracotta-light" />
            <span className="text-sm tracking-wide text-cream/80">
              4.8/5 en Google Reviews
            </span>
          </div>
          <div className="flex items-center gap-3 rounded-full border border-cream/15 px-6 py-3">
            <Heart className="h-5 w-5 fill-terracotta-light text-terracotta-light" />
            <span className="text-sm tracking-wide text-cream/80">
              Dirigido por mujeres
            </span>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-cream/10 py-10 md:flex-row">
          <div className="flex flex-col items-center gap-1 md:items-start">
            <span className="font-serif text-xl text-cream">Odiel</span>
            <span className="text-[10px] uppercase tracking-ultra-wide text-cream/40">
              Veterinaria · Huelva
            </span>
          </div>
          <p className="text-xs text-cream/40">
            © {new Date().getFullYear()} Centro Veterinario Odiel. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
