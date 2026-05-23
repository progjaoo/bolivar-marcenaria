
import { motion } from 'framer-motion';

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Briefing & Alinhamento",
      description: "Entendemos seu estilo de vida, necessidades funcionais e aspirações estéticas para o espaço."
    },
    {
      number: "02",
      title: "Projeto 3D",
      description: "Visualização fotorrealista do ambiente, permitindo ajustes finos antes do início da produção."
    },
    {
      number: "03",
      title: "Produção Industrial",
      description: "Sua marcenaria ganha vida em nossa fábrica com rigor técnico e engenharia de precisão."
    },
    {
      number: "04",
      title: "Montagem Especializada",
      description: "Nossa equipe própria executa a instalação final com cuidado cirúrgico e limpeza impecável."
    }
  ];

  return (
    <section id="processo" className="py-24 md:py-32 bg-[#2B2B2B] text-luxury-gold overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <span className="text-xs tracking-[0.3em] uppercase text-luxury-gold mb-4 block">Metodologia</span>
          <h2 className="text-4xl md:text-5xl font-serif text-luxury-gold">O Processo Executivo</h2>
        </div>

        <div className="relative">
          {/* Horizontal Line for Desktop */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-luxury-gold/20" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative z-10"
              >
                <div className="w-24 h-24 flex items-center justify-center bg-[#2B2B2B] border border-luxury-gold/30 mb-8 mx-auto md:mx-0 group-hover:border-luxury-gold transition-colors duration-500">
                  <span className="text-3xl font-serif text-luxury-gold">{step.number}</span>
                </div>
                <h3 className="text-xl font-serif mb-4 text-center md:text-left text-luxury-gold">{step.title}</h3>
                <p className="text-luxury-gold/70 font-light leading-relaxed text-center md:text-left">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
