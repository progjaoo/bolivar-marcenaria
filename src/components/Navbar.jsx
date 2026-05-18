import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'A Muvaz', href: '#sobre' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Ambientes', href: '#ambientes' },
    { name: 'Processo', href: '#processo' },
    { name: 'Portfólio', href: '#portfolio' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-luxury-offwhite/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center">
          <span className={`text-2xl font-serif tracking-tighter transition-colors duration-500 ${isScrolled ? 'text-luxury-graphite' : 'text-white'}`}>
            MUVAZ
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm tracking-[0.15em] uppercase transition-colors duration-500 hover:text-luxury-gold ${isScrolled ? 'text-luxury-graphite' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div>
          <a
            href="#contato"
            className={`px-6 py-3 border text-xs tracking-[0.2em] uppercase transition-all duration-500 ${
              isScrolled
                ? 'border-luxury-graphite text-luxury-graphite hover:bg-luxury-graphite hover:text-white'
                : 'border-white text-white hover:bg-white hover:text-luxury-graphite'
            }`}
          >
            Solicitar Projeto Exclusivo
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
