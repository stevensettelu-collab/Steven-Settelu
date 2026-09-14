import React from 'react';
import { useSalon } from '../context/SalonContext';
import { TeamMember } from '../types';
import { Sparkles, Calendar, Award, Scissors, MessageCircle } from 'lucide-react';

interface TeamSectionProps {
  onOpenBooking: (stylist?: TeamMember) => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onOpenBooking }) => {
  const { team, config } = useSalon();

  const handleConsultWithStylist = (member: TeamMember) => {
    const msg = encodeURIComponent(
      `Hi Cre8 Salon, I'd like to book an appointment with ${member.name} (${member.role}). Could you check available slots?`
    );
    window.open(`https://wa.me/${config.whatsappNumber}?text=${msg}`, '_blank');
  };

  return (
    <section id="team" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#D4AF37]/15 text-[#8C6D1F] border border-[#D4AF37]/30 mb-3">
            <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>EXPERT ARTISTS & STYLISTS</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight mb-4">
            Meet the People Behind Your Look
          </h2>
          <p className="text-stone-600 font-sans text-sm sm:text-base">
            Our certified hair colorists, skincare aestheticians, and grooming artisans bring years of mastery, personalized attention, and genuine passion to every appointment.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {team.map((member) => (
            <div
              key={member.id}
              className="bg-[#FAF8F5] rounded-2xl border border-stone-200/90 overflow-hidden hover:border-[#D4AF37]/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Photo with Overlay */}
              <div className="relative h-64 overflow-hidden bg-stone-200">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <span className="absolute bottom-3 left-3 bg-[#121212]/90 backdrop-blur-md text-[#DFC46D] text-[10px] font-bold px-2.5 py-1 rounded-md border border-[#D4AF37]/30">
                  {member.experience}
                </span>
              </div>

              {/* Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-stone-900 leading-snug">
                    {member.name}
                  </h3>
                  <div className="text-xs font-semibold text-[#8C6D1F] font-sans mt-0.5 mb-2">
                    {member.role}
                  </div>

                  <div className="bg-white p-2.5 rounded-xl border border-stone-200/80 mb-3">
                    <span className="text-[10px] uppercase font-bold text-stone-400 block">
                      Specialty:
                    </span>
                    <span className="text-xs font-medium text-stone-700 font-sans line-clamp-2">
                      {member.specialty}
                    </span>
                  </div>

                  <p className="text-xs text-stone-500 font-sans leading-relaxed mb-4 line-clamp-2">
                    {member.bio}
                  </p>
                </div>

                {/* Actions */}
                <div className="pt-3 border-t border-stone-200/70 flex items-center gap-2">
                  <button
                    onClick={() => handleConsultWithStylist(member)}
                    className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
                    title={`Consult with ${member.name} on WhatsApp`}
                    aria-label={`Consult with ${member.name} on WhatsApp`}
                  >
                    <MessageCircle className="w-4 h-4 fill-emerald-600" />
                  </button>

                  <button
                    onClick={() => onOpenBooking(member)}
                    className="flex-1 py-2.5 rounded-xl text-xs font-bold bg-[#121212] text-white hover:bg-stone-800 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Book with {member.name.split(' ')[0]}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
