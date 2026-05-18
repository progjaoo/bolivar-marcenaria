
import { motion } from 'framer-motion';
import { Cpu, Award, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Cpu className="w-8 h-8 stroke-[1px]" />,
      title: "Tecnologia de Ponta",
      description: "Equipamentos de última geração garantem precisão milimétrica e acabamentos impossíveis de alcançar manualmente."
    },
    {
      icon: <Award className="w-8 h-8 stroke-[1px]" />,
      title: "Materiais Nobres",
      description: "Curadoria rigorosa de madeiras, metais e pedras, resultando em peças que transcendem gerações."
    },
    {
      icon: <Users className="w-8 h-8 stroke-[1px]" />,
      title: "Equipes Integradas",
      description: "Colaboração contínua entre marceneiros mestres, designers e arquitetos para viabilizar visões audaciosas."
    }
  ];

  return (
    <section id="diferenciais" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center group"
            >
              <div className="mb-8 flex justify-center text-luxury-gold transition-transform duration-500 group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif mb-4 tracking-wide text-luxury-graphite">
                {feature.title}
              </h3>
              <p className="text-luxury-graphite/60 font-light leading-relaxed max-w-xs mx-auto">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
