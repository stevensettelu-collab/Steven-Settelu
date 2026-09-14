import React, { useState } from 'react';
import { useSalon } from '../context/SalonContext';
import { GalleryItem } from '../types';
import { Instagram, Sparkles, ExternalLink, X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const { gallery, config } = useSalon();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'interior', label: 'Salon Ambiance' },
    { id: 'hair', label: 'Hair & Color' },
    { id: 'beauty', label: 'Skin & Spa' },
    { id: 'styling', label: 'Men Grooming' },
    { id: 'nails', label: 'Nails & Art' },
    { id: 'bridal', label: 'Bridal' }
  ];

  const filtered = gallery.filter((item) =>
    activeFilterMatch(item.category, activeCategory)
  );

  function activeFilterMatch(itemCat: string, filter: string) {
    if (filter === 'all') return true;
    return itemCat === filter;
  }

  const handleNextPhoto = () => {
    if (!selectedPhoto) return;
    const currentIndex = filtered.findIndex((i) => i.id === selectedPhoto.id);
    const nextIndex = (currentIndex + 1) % filtered.length;
    setSelectedPhoto(filtered[nextIndex]);
  };

  const handlePrevPhoto = () => {
    if (!selectedPhoto) return;
    const currentIndex = filtered.findIndex((i) => i.id === selectedPhoto.id);
    const prevIndex = (currentIndex - 1 + filtered.length) % filtered.length;
    setSelectedPhoto(filtered[prevIndex]);
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#D4AF37]/15 text-[#8C6D1F] border border-[#D4AF37]/30 mb-3">
              <Instagram className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{config.instagramHandle}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight">
              Life at Cre8 Salon
            </h2>
            <p className="text-stone-600 font-sans text-sm sm:text-base mt-2 max-w-xl">
              Glimpses into our luxury salon suites at Marathon Monte Plaza, styling transformations, and team craft.
            </p>
          </div>

          <a
            href={config.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold bg-[#121212] text-white hover:bg-stone-800 transition-colors shadow-sm"
          >
            <Instagram className="w-4 h-4 text-[#D4AF37]" />
            <span>Follow Cre8 on Instagram</span>
            <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
          </a>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 hide-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#121212] text-white shadow'
                  : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Masonry / Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group relative h-60 sm:h-72 rounded-2xl overflow-hidden cursor-pointer bg-stone-200 border border-stone-200/80 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-white">
                <div className="flex justify-end">
                  <span className="p-2 rounded-full bg-black/50 backdrop-blur-md text-white">
                    <ZoomIn className="w-4 h-4 text-[#D4AF37]" />
                  </span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#DFC46D]">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-sm font-bold leading-tight">{item.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          id="gallery-lightbox"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white z-50"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrevPhoto();
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white z-50"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNextPhoto();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white z-50"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            className="max-w-4xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedPhoto.image}
              alt={selectedPhoto.title}
              className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="mt-4 text-center text-white">
              <h3 className="font-serif text-xl font-bold">{selectedPhoto.title}</h3>
              <p className="text-xs text-zinc-300 mt-1 max-w-lg font-sans">
                {selectedPhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
