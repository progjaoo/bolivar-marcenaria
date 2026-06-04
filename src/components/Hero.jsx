
import { motion } from 'framer-motion';
import { WHATSAPP_URL } from '../utils/constants';
import { FaWhatsapp } from 'react-icons/fa';

const Hero = () => {
  const locations = [
    "Barra Mansa",
    "Volta Redonda",
    "Resende",
    "Barra da Tijuca",
    "Aterro do Flamengo"
  ];

  return (
    <section className="relative h-screen min-h-[970px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Darker Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat md:bg-center max-md:bg-[length:auto_112%] max-md:bg-[position:center_calc(20%_+_22px)]"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url("https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
        }} />

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center text-white">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="block text-xs md:text-sm tracking-[0.4em] uppercase mb-6 font-medium text-luxury-gold"
        >
          Marcenaria Personalizada
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif mb-8 leading-[1.2] max-w-5xl mx-auto"
        >
          Móveis Planejados que <br className="hidden md:block" /> Transformam Seu Espaço
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-xl md:text-2xl font-light max-w-3xl mx-auto mb-10 text-luxury-offwhite/90"
        >
          13 anos criando soluções personalizadas <br className="hidden md:block" /> para sua casa, seu estilo, sua vida.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-12"
        >
          <p className="text-sm md:text-base tracking-widest uppercase mb-6 text-luxury-gold/80">
            Atendemos em toda a região Sul Fluminense e Rio de Janeiro:
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm md:text-base font-light text-white/80">
            {locations.map((loc, index) => (
              <span key={index} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-luxury-gold rounded-full" />
                {loc}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-luxury-gold hover:bg-luxury-gold/80 text-luxury-graphite font-bold px-10 py-5 text-sm tracking-[0.2em] uppercase transition-all duration-300 rounded-sm shadow-xl"
          >
            <FaWhatsapp className="h-5 w-5 flex-shrink-0" />
            Comece seu projeto agora
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-luxury-gold to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
