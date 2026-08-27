import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-forest py-4 shadow-[0_2px_30px_rgba(0,0,0,0.12)]'
            : 'bg-transparent py-6'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
          {/* Logo */}
          <a href="#top" className="group flex flex-col leading-none">
            <span
              className={`font-serif text-2xl tracking-tight transition-colors duration-500 ${
                scrolled ? 'text-cream' : 'text-forest'
              }`}
            >
              Odiel
            </span>
            <span
              className={`text-[10px] uppercase tracking-ultra-wide transition-colors duration-500 ${
                scrolled ? 'text-terracotta-light' : 'text-terracotta'
              }`}
            >
              Veterinaria · Huelva
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`group relative text-sm font-medium tracking-wide transition-colors duration-500 ${
                  scrolled ? 'text-cream/80 hover:text-cream' : 'text-forest/70 hover:text-forest'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full ${
                    scrolled ? 'bg-terracotta-light' : 'bg-terracotta'
                  }`}
                />
              </a>
            ))}
            <a
              href="tel:+34959254222"
              className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                scrolled
                  ? 'bg-terracotta text-cream hover:bg-terracotta-dark'
                  : 'bg-terracotta text-cream hover:bg-terracotta-dark'
              }`}
            >
              <Phone className="h-4 w-4" />
              Reservar cita
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(true)}
            className={`md:hidden ${scrolled ? 'text-cream' : 'text-forest'}`}
            aria-label="Abrir menú"
          >
            <Menu className="h-7 w-7" />
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-forest-deep md:hidden"
          >
            <div className="flex items-center justify-between px-6 py-6">
              <span className="font-serif text-2xl text-cream">Odiel</span>
              <button onClick={() => setMenuOpen(false)} aria-label="Cerrar menú">
                <X className="h-7 w-7 text-cream" />
              </button>
            </div>
            <motion.div
              className="flex flex-col gap-2 px-6 pt-12"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
              }}
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0 },
                  }}
                  className="border-b border-cream/15 py-5 font-serif text-3xl text-cream"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="tel:+34959254222"
                variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
                className="mt-8 flex items-center justify-center gap-2 rounded-full bg-terracotta px-5 py-4 text-lg font-medium text-cream"
              >
                <Phone className="h-5 w-5" />
                959 25 42 22
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
