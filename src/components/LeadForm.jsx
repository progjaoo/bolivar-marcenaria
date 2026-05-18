
import { motion } from 'framer-motion';

const LeadForm = () => {
  return (
    <section id="contato" className="py-24 md:py-32 bg-luxury-offwhite">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <span className="text-xs tracking-[0.3em] uppercase text-luxury-gold mb-6 block">Consultoria</span>
            <h2 className="text-4xl md:text-5xl font-serif text-luxury-graphite mb-8">Inicie o seu Projeto Conosco.</h2>
            <p className="text-luxury-graphite/60 font-light leading-relaxed">
              Estamos prontos para transformar sua visão em realidade técnica. Deixe seus dados e um de nossos consultores especializados entrará em contato para agendar uma reunião exclusiva.
            </p>
          </div>

          <div className="lg:w-2/3">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Nome Completo"
                    className="w-full bg-transparent border-b border-luxury-gray-dark/30 py-4 focus:border-luxury-gold outline-none transition-colors font-light"
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="E-mail"
                    className="w-full bg-transparent border-b border-luxury-gray-dark/30 py-4 focus:border-luxury-gold outline-none transition-colors font-light"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <input
                    type="tel"
                    placeholder="Telefone / WhatsApp"
                    className="w-full bg-transparent border-b border-luxury-gray-dark/30 py-4 focus:border-luxury-gold outline-none transition-colors font-light"
                  />
                </div>
                <div className="relative">
                  <select className="w-full bg-transparent border-b border-luxury-gray-dark/30 py-4 focus:border-luxury-gold outline-none transition-colors font-light text-luxury-graphite/60 appearance-none">
                    <option value="" disabled selected>Você é:</option>
                    <option value="cliente">Cliente Final</option>
                    <option value="arquiteto">Arquiteto / Designer</option>
                  </select>
                </div>
              </div>

              <div className="relative">
                <textarea
                  rows="4"
                  placeholder="Conte-nos brevemente sobre seu projeto"
                  className="w-full bg-transparent border-b border-luxury-gray-dark/30 py-4 focus:border-luxury-gold outline-none transition-colors font-light resize-none"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ backgroundColor: "#121212", color: "#fff" }}
                className="w-full md:w-auto px-12 py-5 border border-luxury-graphite text-xs tracking-[0.3em] uppercase transition-all duration-300"
              >
                Enviar Dados do Projeto
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
