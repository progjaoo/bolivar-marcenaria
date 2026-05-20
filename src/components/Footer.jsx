import { Share2, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-luxury-black text-white pt-24 pb-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <span className="text-3xl font-serif tracking-tighter text-white">BOLIVAR MARCENARIA</span>
            <p className="text-white/40 font-light leading-relaxed max-w-xs">
              Excelência em marcenaria de alto padrão, unindo design autoral e precisão industrial para projetos exclusivos.
            </p>
            <div className="flex space-x-6 text-white/60">
              <a href="#" className="hover:text-luxury-gold transition-colors"><Share2 className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-sm tracking-[0.2em] uppercase font-serif mb-8 text-luxury-gold">Navegação</h4>
            <ul className="space-y-4 font-light text-white/60">
              <li><a href="#sobre" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#diferenciais" className="hover:text-white transition-colors">Diferenciais</a></li>
              <li><a href="#ambientes" className="hover:text-white transition-colors">Ambientes</a></li>
              <li><a href="#processo" className="hover:text-white transition-colors">Processo</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm tracking-[0.2em] uppercase font-serif mb-8 text-luxury-gold">Contato</h4>
            <ul className="space-y-4 font-light text-white/60">
              <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-luxury-gold" /> +55 (24) 9 8147-0662</li>
              <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-luxury-gold" /> contato@bolivarmarcenaria.com.br</li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-luxury-gold mt-1" />
                <span>Rua: Major José Bento, 235 Vila Nova, Barra Mansa<br />Rio de Janeiro - RJ</span>
              </li>
            </ul>
          </div>

          {/* <div>
            <h4 className="text-sm tracking-[0.2em] uppercase font-serif mb-8 text-luxury-gold">Newsletter</h4>
            <p className="text-white/40 font-light mb-6 text-sm">Receba tendências de design e arquitetura.</p>
            <div className="flex border-b border-white/20 pb-2">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="bg-transparent w-full outline-none text-sm font-light"
              />
              <button className="text-luxury-gold text-xs tracking-widest uppercase">Assinar</button>
            </div>
          </div> */}
        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/30 text-xs font-light">
            © {new Date().getFullYear()} BOLIVAR MARCENARIA. Todos os direitos reservados.
          </p>
          <div className="flex space-x-8 text-white/30 text-xs font-light tracking-widest uppercase">
            <a href="#" className="hover:text-white">Privacidade</a>
            <a href="#" className="hover:text-white">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
