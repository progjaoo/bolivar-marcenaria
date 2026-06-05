import { motion } from 'framer-motion';
import { WHATSAPP_URL } from '../utils/constants';
import { FaWhatsapp } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('main > section:first-child');

      if (!heroSection) {
        setIsVisible(false);
        return;
      }

      setIsVisible(heroSection.getBoundingClientRect().bottom <= 0);
    };
    const handleClick = () => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'click_whatsapp', {
        'posicao': 'Fixo Flutuante',
        'texto_botao': 'Falar com especialista / Consultor'
      });
    }
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
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 24 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-x-0 bottom-0 z-[60] bg-white px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] shadow-[0_-8px_24px_rgba(18,18,18,0.1)] flex items-center justify-center group md:inset-x-auto md:right-8 md:bottom-8 md:bg-[#35A15D] md:p-4 md:rounded-full md:shadow-2xl [.mobile-menu-open_&]:!opacity-0 [.mobile-menu-open_&]:!pointer-events-none transition-opacity duration-300 ${isVisible ? 'pointer-events-auto' : 'pointer-events-none'}`}
      aria-label="Falar no WhatsApp"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
    >
      <div className="absolute right-full mr-4 bg-white text-luxury-graphite px-4 py-2 rounded-lg text-sm font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap hidden md:block">
        Falar com Consultor
      </div>
      <div className="flex min-h-[68px] w-full items-center justify-center gap-3 bg-[#35A15D] px-5 py-3 text-white shadow-lg md:contents md:min-h-0 md:w-auto md:bg-transparent md:p-0 md:shadow-none">
        <FaWhatsapp className="h-6 w-6 flex-shrink-0 md:h-8 md:w-8" />
        <span className="text-[12px] tracking-[0.22em] uppercase leading-[1.55] md:hidden">
          Falar com especialista
        </span>
      </div>
    </motion.a>
  );
};

export default WhatsAppButton;
