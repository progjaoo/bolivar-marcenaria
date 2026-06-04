
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    question: "Qual o prazo de entrega?",
    answer: (
      <div className="space-y-4">
        <p className="font-bold">Varia conforme a complexidade:</p>
        <ul className="space-y-2 ml-4">
          <li>
            <span className="font-bold">Projetos pequenos: 30-45 dias úteis</span> (painel, gaveteiro, armário)
          </li>
          <li>
            <span className="font-bold">Projetos comerciais: 30-45 dias úteis</span> (ambientes corporativos)
          </li>
          <li>
            <span className="font-bold">Projetos médios/grandes : 60 dias úteis</span> (cozinha, closet, sala)
          </li>
        </ul>
        <p className="pt-2">
          Preferimos cumprir prazo com qualidade do que prometer 15 dias e atrasar 6 meses.
          Você recebe o prazo exato na <span className="underline font-bold decoration-luxury-gold/40 underline-offset-4">consultoria.</span>
        </p>
      </div>
    )
  },
  {
    question: "Atendem minha região?",
    answer: (
      <div className="space-y-6">
        <p className="font-bold">Sim! Atendemos em duas regiões principais:</p>

        <div className="space-y-2">
          <p className="font-bold text-luxury-graphite">Sul-Fluminense:</p>
          <p className="ml-4 font-bold">Volta Redonda, Barra Mansa, Resende, Porto Real, Pinheiral e região.</p>
        </div>

        <div className="space-y-2">
          <p className="font-bold text-luxury-graphite">Rio de Janeiro:</p>
          <p className="ml-4 font-bold">Barra da Tijuca, Aterro do Flamengo e outras regiões do Rio.</p>
        </div>

        <p className="ml-8">
          Maioria dos clientes são de Barra Mansa e Volta Redonda, mas estamos expandindo para o Rio.
          Se estiver em outro lugar, consulte nosso <span className="font-bold underline decoration-luxury-gold underline-offset-4">especialista.</span>
        </p>
      </div>
    )
  },
  {
    question: "Fazem visita e projeto personalizado?",
    answer: "Sim! Atendemos a domicílio e desenvolvemos projetos exclusivos de acordo com o gosto e necessidade de cada cliente, garantindo que cada centímetro seja bem aproveitado."
  },
  {
    question: "Trabalham com apartamentos pequenos?",
    answer: "Sim, somos especialistas em otimização de espaços. Atendemos todos os tipos de ambientes, desde studios e apartamentos compactos até grandes residências e áreas comerciais."
  },
  {
    question: "Qual o investimento aproximado?",
    answer: (
      <div className="space-y-6">
        <p className="font-bold">
          Varia bastante: R$5.000 a R$50.000+ (depende tamanho, complexidade, materiais, design).
        </p>

        <div className="space-y-2">
          <p className="font-bold">Exemplos:</p>
          <ul className="space-y-1 ml-4">
            <li className="font-bold">- Armário personalizado: R$5-8k aproximadamente</li>
            <li className="font-bold">- Closet: R$15-25k aproximadamente</li>
            <li className="font-bold">- Cozinha completa: R$15-50k aproximadamente</li>
            <li className="font-bold">- Múltiplos ambientes: R$50k+</li>
          </ul>
        </div>

        <p className="font-bold">
          Orçamento sem surpresa. O que a gente passa é o que você <span className="underline decoration-luxury-gold underline-offset-4">paga.</span>
        </p>
      </div>
    )
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
            <div className="pb-6 text-luxury-graphite/70 leading-relaxed max-w-3xl">
              {answer}
            </div>
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
