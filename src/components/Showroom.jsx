
import { motion } from 'framer-motion';

const Showroom = () => {
  const environments = [
    {
      title: "Cozinhas Planejadas",
      category: "Luxo Integrado",
      image: "https://images.unsplash.com/photo-1556912177-c54030639a60?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Dormitórios & Closets",
      category: "Refúgio Pessoal",
      image: "https://images.unsplash.com/photo-1505693413171-293669746a57?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Home Theaters",
      category: "Entretenimento Imersivo",
      image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Ambientes Corporativos",
      category: "Prestigio Profissional",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <section id="ambientes" className="py-24 md:py-32 bg-luxury-offwhite">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-xs tracking-[0.3em] uppercase text-luxury-gold mb-4 block">Portfólio</span>
            <h2 className="text-4xl md:text-5xl font-serif text-luxury-graphite">Soluções para todos os ambientes do seu projeto.</h2>
          </div>
          <div className="hidden md:block">
            <p className="text-luxury-graphite/60 font-light max-w-xs text-right">
              Cada ambiente é planejado para maximizar a estética e a funcionalidade sem concessões.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {environments.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.1 }}
              className="relative group overflow-hidden aspect-[4/3]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                <span className="text-luxury-gold text-xs tracking-[0.2em] uppercase mb-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {item.category}
                </span>
                <h3 className="text-white text-2xl md:text-3xl font-serif translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  {item.title}
                </h3>
                <div className="w-0 group-hover:w-16 h-[1px] bg-luxury-gold mt-4 transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showroom;
