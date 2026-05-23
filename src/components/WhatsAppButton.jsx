import { motion } from 'framer-motion';
import { WHATSAPP_URL } from '../utils/constants';
import { FaWhatsapp } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const conceptSection = document.getElementById('sobre');

      if (!conceptSection) {
        setIsVisible(false);
        return;
      }

      setIsVisible(conceptSection.getBoundingClientRect().top <= window.innerHeight * 0.85);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className={`fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group [.mobile-menu-open_&]:!opacity-0 [.mobile-menu-open_&]:!pointer-events-none transition-opacity duration-300 ${isVisible ? 'pointer-events-auto' : 'pointer-events-none'}`}
      aria-label="Falar no WhatsApp"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
    >
      <div className="absolute right-full mr-4 bg-white text-luxury-graphite px-4 py-2 rounded-lg text-sm font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap hidden md:block">
        Falar com Consultor
      </div>
      <FaWhatsapp className="w-8 h-8" />
    </motion.a>
  );
};

export default WhatsAppButton;
