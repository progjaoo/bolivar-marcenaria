import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { WHATSAPP_URL } from '../utils/constants';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll and add class to body when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('mobile-menu-open');
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('mobile-menu-open');
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Ambientes', href: '#ambientes' },
    { name: 'Processo', href: '#processo' }
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.6,
        ease: [0.65, 0, 0.35, 1],
        when: "afterChildren"
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.65, 0, 0.35, 1],
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const linkVariants = {
    closed: { y: 40, opacity: 0 },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1]
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-500 ${isScrolled ? 'bg-luxury-offwhite/95 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center relative z-[10001]">
        {/* Logo */}
        <motion.div
          animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          className="flex items-center"
        >
          <span className={`text-xl md:text-2xl font-serif tracking-tighter transition-colors duration-500 ${isScrolled ? 'text-luxury-graphite' : 'text-white'}`}>
            BOLIVAR MARCENARIA
          </span>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm tracking-[0.15em] uppercase transition-colors duration-500 hover:text-luxury-gold ${isScrolled ? 'text-luxury-graphite' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-6 py-3 border text-[10px] tracking-[0.2em] uppercase transition-all duration-500 ${
              isScrolled
                ? 'border-luxury-graphite text-luxury-graphite hover:bg-luxury-graphite hover:text-white'
                : 'border-white text-white hover:bg-white hover:text-luxury-graphite'
            }`}
          >
            Solicitar Projeto Exclusivo
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <X size={32} className="text-luxury-graphite" />
          ) : (
            <Menu size={32} className={isScrolled ? 'text-luxury-graphite' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 w-full h-[100dvh] bg-luxury-offwhite z-[10000] flex flex-col items-center justify-center overflow-hidden"
          >
            {/* Click outside to close (invisible backdrop within the menu) */}
            <div
              className="absolute inset-0 z-[-1]"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <div className="flex flex-col items-center space-y-10 text-center">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  variants={linkVariants}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl md:text-4xl font-serif text-luxury-graphite hover:text-luxury-gold transition-colors tracking-tight"
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.div variants={linkVariants} className="pt-6">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-10 py-5 bg-luxury-graphite text-white text-[10px] tracking-[0.3em] uppercase hover:bg-luxury-gold transition-colors"
                >
                  Solicitar Projeto Exclusivo
                </a>
              </motion.div>
            </div>

            <motion.div
              variants={linkVariants}
              className="absolute bottom-12 flex flex-col items-center"
            >
              <p className="text-[10px] uppercase tracking-[0.4em] text-luxury-graphite/40 mb-6">Redes Sociais</p>
              <div className="flex space-x-8 text-luxury-graphite text-sm tracking-widest">
                <a href="#" className="hover:text-luxury-gold transition-colors">Instagram</a>
                <a href="#" className="hover:text-luxury-gold transition-colors">Facebook</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
