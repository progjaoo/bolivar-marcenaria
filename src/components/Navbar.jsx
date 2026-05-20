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

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
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
      x: "100%",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,  
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const linkVariants = {
    closed: { y: 20, opacity: 0 },
    open: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.1 + i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled || isMobileMenuOpen ? 'bg-luxury-offwhite/95 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center z-[60]">
          <span className={`text-xl md:text-2xl font-serif tracking-tighter transition-colors duration-500 ${isScrolled || isMobileMenuOpen ? 'text-luxury-graphite' : 'text-white'}`}>
            BOLIVAR MARCENARIA
          </span>
        </div>

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
          className="md:hidden z-[60] p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <X size={28} className="text-luxury-graphite" />
          ) : (
            <Menu size={28} className={isScrolled ? 'text-luxury-graphite' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[58]"
            />

            {/* Menu Content */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 h-screen w-[85%] max-w-sm bg-luxury-offwhite z-[59] shadow-2xl flex flex-col p-12"
            >
              <div className="flex flex-col space-y-8 mt-24">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    custom={i}
                    variants={linkVariants}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-serif text-luxury-graphite hover:text-luxury-gold transition-colors"
                  >
                    {link.name}
                  </motion.a>
                ))}

                <motion.div
                  variants={linkVariants}
                  custom={navLinks.length}
                  className="pt-8"
                >
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-6 py-4 bg-luxury-graphite text-white text-xs tracking-[0.2em] uppercase hover:bg-luxury-gold transition-colors"
                  >
                    Solicitar Projeto
                  </a>
                </motion.div>
              </div>

              <div className="mt-auto pt-12 border-t border-luxury-gray-light">
                <p className="text-xs uppercase tracking-widest text-luxury-graphite/40 mb-4">Redes Sociais</p>
                <div className="flex space-x-6 text-luxury-graphite">
                  <a href="https://www.instagram.com/bolivarmarcenaria/" target="_blank" rel="noopener noreferrer" className="hover:text-luxury-gold transition-colors">Instagram</a>
                  <a href="https://www.facebook.com/BoliarMarcenaria/mentions/" target='_blank' rel="noopener noreferrer" className="hover:text-luxury-gold transition-colors">Facebook</a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
