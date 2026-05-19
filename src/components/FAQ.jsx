
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    question: "Atendem minha região?",
    answer: "Sim, atendemos todo o Sul Fluminense."
  },
  {
    question: "Fazem visita?",
    answer: "Sim, atendemos a domicílio."
  },
  {
    question: "Qual o prazo de entrega?",
    answer: "Entregamos em até 2 meses."
  },
  {
    question: "Fazem projeto personalizado?",
    answer: "Sim, desenvolvemos projetos de acordo com o gosto e necessidade do cliente."
  },
  {
    question: "Trabalham com apartamentos pequenos?",
    answer: "Sim, atendemos todos os tipos de ambientes e tamanhos."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-luxury-gray-light last:border-0">
      <button
        className="w-full py-6 flex items-center justify-between text-left group"
        onClick={onClick}
      >
        <span className={`text-lg md:text-xl font-medium transition-colors duration-300 ${isOpen ? 'text-luxury-gold' : 'text-luxury-graphite group-hover:text-luxury-gold'}`}>
          {question}
        </span>
        <div className={`flex-shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          {isOpen ? (
            <Minus size={24} className="text-luxury-gold" />
          ) : (
            <Plus size={24} className="text-luxury-graphite/40 group-hover:text-luxury-gold" />
          )}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-luxury-graphite/70 leading-relaxed max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-serif text-luxury-graphite mb-6"
            >
              Perguntas Frequentes
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-luxury-graphite/60 text-lg font-light max-w-2xl"
            >
              Tire suas dúvidas sobre nossos serviços, atendimento e projetos personalizados.
            </motion.p>
          </div>

          {/* Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-2xl p-6 md:p-12 shadow-sm border border-luxury-gray-light"
          >
            {faqData.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
