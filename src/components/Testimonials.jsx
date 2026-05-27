
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "A precisão da Bolivar Marcenaria é incomparável. Como arquiteto, prezo pelo detalhe técnico e pela fidelidade ao projeto original. Eles entregam exatamente o que foi concebido, com um acabamento que impressiona os clientes mais exigentes.",
      author: "Rodrigo Almeida",
      role: "Arquiteto de Interiores"
    },
    {
      text: "Minha experiência com a Bolivar Marcenaria foi impecável do briefing à montagem. O profissionalismo da equipe e o respeito pelos prazos são raros no mercado de alto padrão. Recomendo sem hesitação.",
      author: "Beatriz Vasconcelos",
      role: "Designer de Interiores"
    },
    {
      text: "Transformaram nosso novo showroom em uma vitrine de sofisticação. A integração entre a madeira nobre e os elementos tecnológicos de abertura é simplesmente perfeita.",
      author: "Henrique Fontes",
      role: "CEO, Grupo HF"
    }
  ];

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
