
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2 } from 'lucide-react';
import cozinha1 from '../assets/cozinha/cozinha1.jpeg';
import cozinha2 from '../assets/cozinha/cozinha2.jpeg';
import cozinha3 from '../assets/cozinha/cozinha3.jpeg';
import cozinha4 from '../assets/cozinha/cozinha4.jpeg';
import cozinha5 from '../assets/cozinha/cozinha5.jpeg';
import cozinha6 from '../assets/cozinha/cozinha6.jpeg';
import closet1 from '../assets/closet/closet1.jpeg';
import closet2 from '../assets/closet/closet2.jpeg';
import closet3 from '../assets/closet/closet3.jpeg';
import closet4 from '../assets/closet/closet4.jpeg';
import closet5 from '../assets/closet/closet5.jpeg';
import closet6 from '../assets/closet/closet6.jpeg';
import sala1 from '../assets/sala/sala1.jpeg';
import sala2 from '../assets/sala/sala2.jpeg';
import sala3 from '../assets/sala/sala3.jpeg';
import sala4 from '../assets/sala/sala4.jpeg';
import sala5 from '../assets/sala/sala5.jpeg';
import sala6 from '../assets/sala/sala6.jpeg';
import escritorio1 from '../assets/escritorio/escritorio1.jpeg';
import escritorio2 from '../assets/escritorio/escritorio2.jpeg';
import escritorio3 from '../assets/escritorio/escritorio3.jpeg';
import escritorio4 from '../assets/escritorio/escritorio4.jpeg';
import escritorio5 from '../assets/escritorio/escritorio5.jpeg';
import escritorio6 from '../assets/escritorio/escritorio6.jpeg';
import consultorio1 from '../assets/consultorio/consultorio1.jpeg';
import consultorio2 from '../assets/consultorio/consultorio2.jpeg';
import consultorio3 from '../assets/consultorio/consultorio3.jpeg';
import consultorio4 from '../assets/consultorio/consultorio4.jpeg';
import consultorio5 from '../assets/consultorio/consultorio5.jpeg';
import consultorio6 from '../assets/consultorio/consultorio6.jpeg';
const categoryData = {
  Cozinha: [
    cozinha1,
    cozinha2,
    cozinha3,
    cozinha4,
    cozinha5,
    cozinha6
  ],
  Closet: [
    closet1,
    closet2,
    closet3,
    closet4,
    closet5,
    closet6
  ],
  Sala: [
    sala1,
    sala2,
    sala3,
    sala4,
    sala5,
    sala6
  ],
  Escritório: [
    escritorio1,
    escritorio2,
    escritorio3,
    escritorio4,
    escritorio5,
    escritorio6
  ],
  "Consultórios": [
    consultorio1,
    consultorio2,
    consultorio3,
    consultorio4,
    consultorio5,
    consultorio6
  ]
};

const categories = Object.keys(categoryData);

const Showroom = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="ambientes" className="py-24 md:py-32 bg-luxury-offwhite">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-serif text-luxury-graphite uppercase tracking-tight mb-6"
          >
            FEITOS SOB MEDIDA PARA CRIAR EXPERIÊNCIAS ÚNICAS
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-luxury-graphite/70 font-light text-lg md:text-xl leading-relaxed"
          >
            Ambientes que mostram a essência do design autoral. Cada espaço é pensado para refletir seu estilo e transmitir exclusividade.
          </motion.p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16 border-b border-luxury-gray-light pb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative py-2 px-4 text-sm md:text-base uppercase tracking-widest transition-all duration-300 ${
                activeCategory === category
                ? 'text-luxury-gold'
                : 'text-luxury-graphite/40 hover:text-luxury-graphite'
              }`}
            >
              {category}
              {activeCategory === category && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-luxury-gold"
                />
              )}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {categoryData[activeCategory].map((image, index) => (
              <motion.div
                key={image}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative aspect-square overflow-hidden rounded-2xl bg-luxury-gray-light shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`${activeCategory} ${index + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                  <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 w-8 h-8" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-luxury-gold transition-colors z-50"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Preview"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Showroom;
