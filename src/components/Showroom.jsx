
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2 } from 'lucide-react';

const categoryData = {
  Cozinha: [
    "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1000",
    "https://images.unsplash.com/photo-1556909212-d5b604ad9290?q=80&w=1000",
    "https://images.unsplash.com/photo-1556912177-c54030639a60?q=80&w=1000",
    "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1000",
    "https://images.unsplash.com/photo-1565182999561-18d7dc63c391?q=80&w=1000",
    "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?q=80&w=1000"
  ],
  Closet: [
    "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1000",
    "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1000",
    "https://images.unsplash.com/photo-1558997519-83ea9252edf8?q=80&w=1000",
    "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1000",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1000",
    "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1000"
  ],
  Sala: [
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000",
    "https://images.unsplash.com/photo-1616489953149-755174092144?q=80&w=1000",
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1000",
    "https://images.unsplash.com/photo-1615529328331-f8917597711f?q=80&w=1000",
    "https://images.unsplash.com/photo-1617806118233-f8e187c44b5c?q=80&w=1000"
  ],
  Escritório: [
    "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000",
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1000",
    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1000",
    "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?q=80&w=1000",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000",
    "https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=1000"
  ],
  "Área Gourmet": [
    "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=1000",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000",
    "https://images.unsplash.com/photo-1596522354195-e84ae3c98731?q=80&w=1000",
    "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=1000",
    "https://images.unsplash.com/photo-1588854333355-112aaecf4a58?q=80&w=1000",
    "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=1000"
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
