import React, { useState } from 'react';
import { useSalon } from '../context/SalonContext';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle, Phone } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const { faqs, config } = useSalon();
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#D4AF37]/15 text-[#8C6D1F] border border-[#D4AF37]/30 mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>COMMON QUESTIONS</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-stone-600 font-sans text-sm sm:text-base">
            Everything you need to know about our services, booking process, unisex suites, and salon experience in Mulund West.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.id}
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#D4AF37]/60 shadow-md ring-1 ring-[#D4AF37]/30'
                    : 'border-stone-200 hover:border-stone-300'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-stone-900 leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                      isOpen ? 'bg-[#121212] text-[#DFC46D]' : 'bg-stone-100 text-stone-500'
                    }`}
                  >
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-stone-600 font-sans leading-relaxed border-t border-stone-100 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Support Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-stone-200/90 shadow-sm text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h3 className="font-bold text-sm text-stone-900 font-sans">Have a specific question not listed here?</h3>
            <p className="text-xs text-stone-500 font-sans mt-0.5">
              Our team at Marathon Monte Plaza is happy to help you with pricing, packages or scheduling.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={`https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent('Hi Cre8 Salon, I have a quick question about your salon.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-full text-xs font-bold bg-[#25D366] text-white hover:bg-[#20ba5a] transition-colors flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>Ask on WhatsApp</span>
            </a>
            <a
              href={`tel:${config.phone.replace(/\s+/g, '')}`}
              className="px-4 py-2.5 rounded-full text-xs font-bold bg-[#121212] text-white hover:bg-stone-800 transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Call Salon</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
