
import { motion } from 'framer-motion';
import fotoFamilia from '../assets/familiabolivar4k.png';

const Concept = () => {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-luxury-offwhite">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Left Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <div className="relative">
              <img
                src={fotoFamilia}
                alt="Família Bolivar"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              
              />
              {/* Decorative gold border */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-luxury-gold/30 rounded-2xl -z-10 hidden md:block" />
            </div>
          </motion.div>

          {/* Right Column: Story */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <span className="text-xs md:text-sm tracking-[0.3em] uppercase text-luxury-gold mb-6 block font-medium">
              Nossa História
            </span>

            <h2 className="text-3xl md:text-4xl font-serif leading-tight mb-8 text-luxury-graphite">
              Uma trajetória de paixão e excelência  na  marcenaria
            </h2>

            <div className="space-y-6 text-luxury-graphite/70 font-light leading-relaxed text-lg">
              <p>
                A Bolivar Marcenaria nasceu do sonho de transformar ambientes através da madeira, unindo a tradição do trabalho artesanal com as mais modernas tecnologias de fabricação. O que começou como uma pequena oficina familiar evoluiu para uma referência em móveis planejados de alto padrão.
              </p>
              <p>
                Nossa história é pautada pelo compromisso com a qualidade e pela atenção aos mínimos detalhes. Cada projeto que executamos carrega o DNA da nossa família: honestidade, dedicação e a busca incansável pela satisfação dos nossos clientes.
              </p>
              <p>
                Acreditamos que o lar é o reflexo da nossa alma. Por isso, dedicamos 13 anos de nossa experiência para criar soluções que não apenas organizam espaços, mas que contam histórias e realizam sonhos em cada centímetro planejado.
              </p>
            </div>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-[1px] w-32 bg-luxury-gold mt-12"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Concept;
