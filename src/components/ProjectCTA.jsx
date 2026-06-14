import clsx from 'clsx';
import { FaWhatsapp } from 'react-icons/fa';
import { WHATSAPP_URL } from '../utils/constants';

const ProjectCTA = ({
  location,
  label = 'Comece seu projeto agora',
  variant = 'primary',
  isScrolled = false,
  showIcon = true,
  onClick,
  className,
}) => {
  const handleClick = (event) => {
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'click_whatsapp',
        posicao: location,
        texto_botao: label,
      });
    }

    onClick?.(event);
  };

  const primaryClasses = 'inline-flex max-w-full items-center justify-center gap-3 rounded-sm bg-luxury-green px-8 py-5 text-center text-sm font-bold uppercase tracking-[0.2em] text-white shadow-xl transition-all duration-300 hover:bg-luxury-green/80 sm:px-10';
  const navbarClasses = clsx(
    'inline-flex items-center justify-center border px-6 py-3 text-[10px] uppercase tracking-[0.2em] transition-all duration-500',
    isScrolled
      ? 'border-luxury-graphite text-luxury-graphite hover:bg-luxury-graphite hover:text-white'
      : 'border-white text-white hover:bg-white hover:text-luxury-graphite',
  );

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      data-gtm-event="click_whatsapp"
      data-cta-location={location}
      data-cta-label={label}
      className={clsx(variant === 'navbar' ? navbarClasses : primaryClasses, className)}
    >
      {showIcon && <FaWhatsapp className="h-5 w-5 flex-shrink-0" aria-hidden="true" />}
      <span>{label}</span>
    </a>
  );
};

export default ProjectCTA;
