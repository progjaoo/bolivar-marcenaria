
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

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
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-luxury-gold mb-4 block">Experiências</span>
          <h2 className="text-4xl md:text-5xl font-serif text-luxury-graphite">Prova Social</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="p-10 bg-luxury-offwhite relative flex flex-col justify-between"
            >
              <Quote className="absolute top-6 left-6 w-8 h-8 text-luxury-gold/20" />
              <p className="text-luxury-graphite/70 italic font-light leading-relaxed mb-8 relative z-10">
                "{t.text}"
              </p>
              <div>
                <h4 className="font-serif text-lg text-luxury-graphite">{t.author}</h4>
                <p className="text-xs tracking-widest uppercase text-luxury-gold">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
