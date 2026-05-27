
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Okssana Ferreira",
    stars: 5,
    text: "Serviço de qualidade e ótimo atendimento! Cumpriu os prazos acordados e superou minhas expectativas nos serviços prestados. Recomendo!"
  },
  {
    name: "Mariana Diogo",
    stars: 5,
    text: "O planejado de minha cozinha foi realizado com excelência e muito capricho. Material de primeira, entrega dentro do prazo realmente um trabalho muito bom. Indico sempre o trabalho do Bolívar."
  },
  {
    name: "João Serafim",
    stars: 5,
    text: "Desde o primeiro contato fui muito bem atendido. Ouviu minhas opiniões, fez ajustes e atendeu todas as minhas expectativas. No pós-venda também fui prontamente atendido. Super recomendo!"
  },
  {
    name: "Celma Ribeiro",
    stars: 5,
    text: "Trabalho de excelente qualidade... montagem, material e profissionais de primeira qualidade. Muito satisfeita com meu closet!"
  },
  {
    name: "Estéfani Leonardis",
    stars: 5,
    text: "O Bolívar sempre atencioso e pronto a nos atender e a realizar nossos sonhos! Super recomendo essa empresa. Realizei meu sonho com minha cozinha planejada ❤️ Entrega no tempo combinado e ótima qualidade nos materiais 🙏🏼"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const autoplayRef = useRef();

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextTestimonial = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    autoplayRef.current = setInterval(nextTestimonial, 6000);
    return () => clearInterval(autoplayRef.current);
  }, [nextTestimonial]);

  const handleManualNav = (fn) => {
    clearInterval(autoplayRef.current);
    fn();
    autoplayRef.current = setInterval(nextTestimonial, 6000);
  };

  const getVisibleCards = () => {
    const cards = [];
    const isMobile = windowWidth < 768;
    const isTablet = windowWidth >= 768 && windowWidth < 1024;
    
    // We want to show a set of cards centered around activeIndex
    // For Desktop (3 cards): active-1, active, active+1
    // For Tablet (2 cards): active, active+1
    // For Mobile (1 card): active
    
    if (isMobile) {
      return [activeIndex];
    } else if (isTablet) {
      return [activeIndex, (activeIndex + 1) % testimonials.length];
    } else {
      return [
        (activeIndex - 1 + testimonials.length) % testimonials.length,
        activeIndex,
        (activeIndex + 1) % testimonials.length
      ];
    }
  };

  const visibleIndices = getVisibleCards();

  return (
    <section className="py-24 md:py-32 bg-luxury-offwhite overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs tracking-[0.3em] uppercase text-luxury-gold mb-4 block font-medium"
          >
            Experiências Reais
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-serif text-luxury-graphite"
          >
            O que dizem nossos clientes
          </motion.h2>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-8 z-20">
            <button 
              onClick={() => handleManualNav(prevTestimonial)}
              className="p-2 md:p-3 rounded-full bg-white/80 backdrop-blur shadow-md text-luxury-graphite hover:text-luxury-gold hover:scale-110 transition-all duration-300 group"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-8 z-20">
            <button 
              onClick={() => handleManualNav(nextTestimonial)}
              className="p-2 md:p-3 rounded-full bg-white/80 backdrop-blur shadow-md text-luxury-graphite hover:text-luxury-gold hover:scale-110 transition-all duration-300 group"
              aria-label="Próximo"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>

          {/* Cards Container */}
          <div className="flex justify-center items-center gap-4 md:gap-8 min-h-[450px] px-4">
            <AnimatePresence mode="popLayout" initial={false}>
              {visibleIndices.map((index, i) => {
                const t = testimonials[index];
                const isDesktop = windowWidth >= 1024;
                const isCenter = isDesktop ? i === 1 : true;
                
                return (
                  <motion.div
                    key={`${index}-${i}`}
                    layout
                    initial={{ opacity: 0, scale: 0.8, x: 20 }}
                    animate={{ 
                      opacity: isDesktop ? (isCenter ? 1 : 0.6) : 1, 
                      scale: isCenter ? 1 : 0.9, 
                      x: 0,
                      zIndex: isCenter ? 10 : 1,
                    }}
                    exit={{ opacity: 0, scale: 0.8, x: -20 }}
                    transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={(_, info) => {
                      if (info.offset.x < -50) handleManualNav(nextTestimonial);
                      if (info.offset.x > 50) handleManualNav(prevTestimonial);
                    }}
                    whileHover={{ y: isCenter ? -10 : 0 }}
                    className={`flex-1 min-w-0 max-w-[400px] p-8 md:p-12 rounded-3xl relative transition-all duration-500 cursor-grab active:cursor-grabbing
                      ${isCenter 
                        ? 'bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] ring-1 ring-luxury-gold/5' 
                        : 'bg-white/40 backdrop-blur-md shadow-sm border border-white/20 hover:bg-white/60'
                      }
                    `}
                  >
                    <Quote className="absolute top-8 left-8 w-10 h-10 text-luxury-gold/10" />
                    
                    <div className="relative z-10">
                      <div className="mb-8">
                        <h4 className="font-serif text-xl md:text-2xl text-luxury-graphite mb-2">{t.name}</h4>
                        <div className="flex gap-1">
                          {[...Array(t.stars)].map((_, starIdx) => (
                            <Star key={starIdx} className="w-4 h-4 fill-luxury-gold text-luxury-gold" />
                          ))}
                        </div>
                      </div>

                      <p className="text-luxury-graphite/70 italic font-light leading-relaxed text-base md:text-lg">
                        “{t.text}”
                      </p>
                    </div>

                    {/* Decorative element for center card */}
                    {isCenter && (
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-luxury-gold rounded-t-full" />
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Pagination Indicators */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => handleManualNav(() => setActiveIndex(i))}
                className={`transition-all duration-500 rounded-full h-1.5 ${
                  activeIndex === i 
                    ? 'w-10 bg-luxury-gold' 
                    : 'w-2 bg-luxury-gold/20 hover:bg-luxury-gold/40'
                }`}
                aria-label={`Ir para depoimento ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 767px) {
          .container { padding-left: 1rem; padding-right: 1rem; }
        }
      `}} />
    </section>
  );
};

export default Testimonials;
