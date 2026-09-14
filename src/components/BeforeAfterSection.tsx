import React, { useState } from 'react';
import { useSalon } from '../context/SalonContext';
import { BeforeAfterItem } from '../types';
import { Sparkles, Calendar, Clock, SplitSquareVertical, ArrowRight } from 'lucide-react';

interface BeforeAfterSectionProps {
  onOpenBooking: () => void;
}

export const BeforeAfterSection: React.FC<BeforeAfterSectionProps> = ({ onOpenBooking }) => {
  const { beforeAfterList } = useSalon();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [sliderPositions, setSliderPositions] = useState<{ [key: string]: number }>({});
  const [viewModes, setViewModes] = useState<{ [key: string]: 'slider' | 'split' }>({});

  const filterTabs = [
    { id: 'all', label: 'All Transformations' },
    { id: 'hair', label: 'Hair Cuts & Styling' },
    { id: 'color', label: 'Balayage & Color' },
    { id: 'makeup', label: 'Bridal & Makeup' },
    { id: 'nails', label: 'Nails & Art' },
    { id: 'grooming', label: 'Men Grooming' }
  ];

  const filteredItems = beforeAfterList.filter(
    (item) => activeFilter === 'all' || item.category === activeFilter
  );

  const handleSliderChange = (id: string, value: number) => {
    setSliderPositions((prev) => ({ ...prev, [id]: value }));
  };

  const toggleViewMode = (id: string) => {
    setViewModes((prev) => ({
      ...prev,
      [id]: prev[id] === 'split' ? 'slider' : 'split'
    }));
  };

  return (
    <section id="transformations" className="py-20 lg:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#D4AF37]/15 text-[#8C6D1F] border border-[#D4AF37]/30 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>REAL CLIENT RESULTS</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight mb-4">
            See the Cre8 Difference
          </h2>
          <p className="text-stone-600 font-sans text-sm sm:text-base">
            Witness the craftsmanship of our master stylists. Slide across each photo to inspect the precision coloring, cuts, and bespoke makeovers created in Mulund West.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 hide-scrollbar">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                activeFilter === tab.id
                  ? 'bg-[#121212] text-white shadow-md'
                  : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Transformation Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => {
            const pos = sliderPositions[item.id] !== undefined ? sliderPositions[item.id] : 50;
            const mode = viewModes[item.id] || 'slider';

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                {/* Visual Before/After Container */}
                <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-stone-100 select-none">
                  {mode === 'slider' ? (
                    <div className="relative w-full h-full">
                      {/* After Image (Full Background) */}
                      <img
                        src={item.afterImage}
                        alt={`After: ${item.title}`}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />

                      {/* Before Image (Clipped Left Layer) */}
                      <div
                        className="absolute inset-0 overflow-hidden"
                        style={{ width: `${pos}%` }}
                      >
                        <img
                          src={item.beforeImage}
                          alt={`Before: ${item.title}`}
                          className="w-full h-full object-cover"
                          style={{
                            width: '100%',
                            minWidth: '300px'
                          }}
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      {/* Vertical Divider Line with handle */}
                      <div
                        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
                        style={{ left: `${pos}%` }}
                      >
                        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-stone-900 shadow-xl border border-stone-300 flex items-center justify-center text-[10px] font-bold">
                          ↔
                        </div>
                      </div>

                      {/* Interactive range slider overlay */}
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={pos}
                        onChange={(e) => handleSliderChange(item.id, Number(e.target.value))}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                        aria-label={`Slide to compare before and after for ${item.title}`}
                      />

                      {/* Pills indicating Before & After */}
                      <span className="absolute top-3 left-3 bg-black/75 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md z-10">
                        Before
                      </span>
                      <span className="absolute top-3 right-3 bg-[#D4AF37] text-black text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md z-10 shadow-md">
                        After Cre8
                      </span>
                    </div>
                  ) : (
                    /* Side by Side Split View */
                    <div className="grid grid-cols-2 h-full gap-0.5 bg-stone-300">
                      <div className="relative h-full">
                        <img
                          src={item.beforeImage}
                          alt="Before"
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <span className="absolute bottom-2 left-2 bg-black/80 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                          Before
                        </span>
                      </div>
                      <div className="relative h-full">
                        <img
                          src={item.afterImage}
                          alt="After"
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <span className="absolute bottom-2 right-2 bg-[#D4AF37] text-black text-[10px] font-bold px-2 py-0.5 rounded">
                          After
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Mode Toggle Button */}
                  <button
                    onClick={() => toggleViewMode(item.id)}
                    className="absolute bottom-3 right-3 z-30 bg-[#121212]/80 hover:bg-black text-white text-[11px] font-medium px-2.5 py-1 rounded-lg backdrop-blur-md flex items-center gap-1.5 transition-colors"
                  >
                    <SplitSquareVertical className="w-3 h-3 text-[#D4AF37]" />
                    <span>{mode === 'slider' ? 'Split View' : 'Slider View'}</span>
                  </button>
                </div>

                {/* Details Section */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-stone-500 mb-1.5">
                      <span className="font-semibold text-[#8C6D1F] uppercase tracking-wider text-[11px]">
                        {item.serviceName}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {item.duration}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-900 mb-2">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  <button
                    onClick={() => onOpenBooking()}
                    className="w-full py-2.5 rounded-xl text-xs font-bold bg-stone-100 hover:bg-[#121212] text-stone-900 hover:text-white transition-colors flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Book Similar Transformation</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
