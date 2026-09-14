import React, { useState } from 'react';
import { useSalon } from '../context/SalonContext';
import { Star, CheckCircle2, MessageSquare, ExternalLink, Quote, ThumbsUp } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const { testimonials, config } = useSalon();
  const [filterRating, setFilterRating] = useState<number | 'all'>('all');

  const filtered = testimonials.filter((t) => {
    if (filterRating === 'all') return true;
    return t.rating === filterRating;
  });

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Overall Google Rating Summary */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-md mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Rating score */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-center lg:items-start text-center lg:text-left gap-4 sm:gap-6 lg:gap-3 border-b lg:border-b-0 lg:border-r border-stone-200 pb-6 lg:pb-0 lg:pr-8">
              <div className="flex items-center gap-3">
                <span className="font-serif text-5xl sm:text-6xl font-bold text-stone-900 leading-none">
                  {config.rating}
                </span>
                <div>
                  <div className="flex text-[#D4AF37] mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#D4AF37]" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                    Out of 5.0 Stars
                  </span>
                </div>
              </div>

              <div>
                <div className="text-sm font-bold text-stone-900">
                  {config.reviewCount.toLocaleString()}+ Happy Client Reviews
                </div>
                <div className="text-xs text-stone-500 font-sans mt-0.5 flex items-center justify-center lg:justify-start gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                  <span>Verified Google Business Profile</span>
                </div>
              </div>

              <a
                href={config.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold bg-[#121212] text-white hover:bg-stone-800 transition-colors"
              >
                <span>Read on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Right Pillars from Client Feedback */}
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#D4AF37]/15 text-[#8C6D1F] border border-[#D4AF37]/30 mb-2">
                <MessageSquare className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>CLIENT EXPERIENCES</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 mb-3">
                Loved by Our Clients in Mulund
              </h2>
              <p className="text-stone-600 font-sans text-xs sm:text-sm leading-relaxed mb-4">
                Real feedback from patrons at Marathon Monte Plaza who trust Cre8 Salon Unisex for their hair, skin, and grooming rituals.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-[#FAF8F5] p-3 rounded-xl border border-stone-200/80">
                  <div className="text-xs font-bold text-stone-900">“5 Star Service”</div>
                  <div className="text-[11px] text-stone-500 mt-0.5">Polite, attentive & knowledgeable stylists</div>
                </div>
                <div className="bg-[#FAF8F5] p-3 rounded-xl border border-stone-200/80">
                  <div className="text-xs font-bold text-stone-900">“100% Original Products”</div>
                  <div className="text-[11px] text-stone-500 mt-0.5">Authentic L'Oréal, Olaplex & Rica Wax</div>
                </div>
                <div className="bg-[#FAF8F5] p-3 rounded-xl border border-stone-200/80">
                  <div className="text-xs font-bold text-stone-900">“Zero Wait Time”</div>
                  <div className="text-[11px] text-stone-500 mt-0.5">Punctual slots with online booking</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating stars and quote mark */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#D4AF37]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-stone-200" />
                </div>

                {/* Testimonial Text */}
                <p className="text-stone-700 font-sans text-sm leading-relaxed mb-5 italic">
                  "{review.text}"
                </p>

                {/* Service Tag */}
                {review.serviceMentioned && (
                  <span className="inline-block text-[11px] font-medium text-[#8C6D1F] bg-[#FBF7EE] px-2.5 py-1 rounded-md border border-[#D4AF37]/20 mb-4">
                    Service: {review.serviceMentioned}
                  </span>
                )}
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#121212] text-[#DFC46D] font-serif font-bold flex items-center justify-center text-xs">
                    {review.initials || review.author.substring(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-stone-900 flex items-center gap-1.5">
                      <span>{review.author}</span>
                      {review.verifiedGoogleReview && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" title="Verified Review" />
                      )}
                    </div>
                    <div className="text-[11px] text-stone-400 font-sans">
                      {review.userType || 'Verified Client'}
                    </div>
                  </div>
                </div>

                <div className="text-[10px] text-stone-400 font-sans">
                  {review.date}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Read More Reviews Button */}
        <div className="mt-12 text-center">
          <a
            href={config.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold bg-white text-stone-900 hover:bg-stone-100 border border-stone-300 shadow-sm transition-all"
          >
            <span>Read All 1,089+ Reviews on Google</span>
            <ExternalLink className="w-4 h-4 text-[#D4AF37]" />
          </a>
        </div>
      </div>
    </section>
  );
};
