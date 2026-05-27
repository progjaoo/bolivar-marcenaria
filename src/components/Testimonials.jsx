
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Excelente trabalho! Profissionais de qualidade, entregue dentro do prazo e atendimento de excelência. Muito satisfeita! 😀",
      author: "Legalize Despachante ⭐⭐⭐⭐⭐",
      role: "Empresa"
    },
    {
      text: "Excelente profissionais, trabalho de qualidade, entrega dentro do prazo, muito atenciosos e mantém grande respeito com os clientes! meus pedidos ficaram perfeitos sem nenhum erro; Super, super recomendo!!! 👏👏👏",
      author: "Cristina Henrique dos Santos ⭐⭐⭐⭐⭐",
      role: "Cliente"
    },
    {
      text: "Atendimento ótimo, todos os móveis feitos dentro do prazo, material de excelente qualidade, tudo conforme combinado! Todos os funcionários muito atenciosos, todas as solicitações atendidas! Muito difícil hoje em dia conseguir um serviço de tanta qualidade, não tenho nenhuma reclamação a fazer, tudo perfeito , fiquei muito satisfeita! Recomendo!",
      author: "Luciana Torturello ⭐⭐⭐⭐⭐",
      role: "Cliente"
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
