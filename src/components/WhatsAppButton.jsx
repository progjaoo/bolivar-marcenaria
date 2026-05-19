import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { WHATSAPP_URL } from '../utils/constants';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.5, delay: 2 }}
      className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
      aria-label="Falar no WhatsApp"
    >
      <div className="absolute right-full mr-4 bg-white text-luxury-graphite px-4 py-2 rounded-lg text-sm font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap hidden md:block">
        Falar com Consultor
      </div>
      <FaWhatsapp className="w-8 h-8" />
    </motion.a>
  );
};

export default WhatsAppButton;
