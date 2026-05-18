
import { motion } from 'framer-motion';

const Concept = () => {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-luxury-offwhite">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs md:text-sm tracking-[0.3em] uppercase text-luxury-gold mb-8 block"
          >
            Nosso Manifesto
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-serif leading-tight mb-12 text-luxury-graphite"
          >
            Criamos atmosferas que traduzem identidade, sofisticação e autenticidade.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg md:text-xl text-luxury-graphite/70 font-light leading-relaxed">
              Na Muvaz, não apenas produzimos mobiliário; nós engenheiramos experiências de vida. Cada projeto é uma tela em branco onde a funcionalidade rigorosa e a estética sublime coexistem em perfeito equilíbrio.
            </p>
            <p className="text-lg md:text-xl text-luxury-graphite/70 font-light leading-relaxed">
              Através de processos de fabricação de ponta e uma curadoria obsessiva de materiais, elevamos a marcenaria ao status de design autoral, garantindo que cada detalhe reflita a singularidade de quem habita o espaço.
            </p>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-[1px] w-32 bg-luxury-gold mx-auto mt-16"
          />
        </div>
      </div>
    </section>
  );
};

export default Concept;
