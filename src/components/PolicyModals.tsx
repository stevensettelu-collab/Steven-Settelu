import React from 'react';
import { X, ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';

interface PolicyModalsProps {
  activePolicy: 'privacy' | 'terms' | 'hygiene' | null;
  onClose: () => void;
}

export const PolicyModals: React.FC<PolicyModalsProps> = ({ activePolicy, onClose }) => {
  if (!activePolicy) return null;

  return (
    <div
      id="policy-modal-overlay"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="policy-modal-card"
        className="bg-white rounded-3xl w-full max-w-2xl max-h-[80vh] overflow-y-auto shadow-2xl border border-stone-200 p-6 sm:p-8 text-stone-800 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-stone-200 mb-6">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#FBF7EE] text-[#D4AF37]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-stone-900">
                {activePolicy === 'privacy' && 'Privacy Policy'}
                {activePolicy === 'terms' && 'Salon Terms & Booking Guidelines'}
                {activePolicy === 'hygiene' && 'Hospital-Grade Hygiene & Sterilization Protocol'}
              </h3>
              <p className="text-xs text-stone-500 font-sans">
                Cre8 Salon Unisex · Marathon Monte Plaza, Mulund West, Mumbai
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed space-y-4">
          {activePolicy === 'privacy' && (
            <>
              <p>
                At <strong>Cre8 Salon Unisex</strong> (Marathon Monte Plaza, Mulund West, Mumbai 400080), we respect your privacy. We collect client contact information (name, phone number, email) strictly for appointment reservations, service consultations, and salon reminders.
              </p>
              <p>
                <strong>Information Usage:</strong> Your phone number is used to confirm booking slots via WhatsApp or SMS and provide care recommendations. We never sell, rent, or distribute personal data to third parties.
              </p>
              <p>
                <strong>Security:</strong> All client information submitted through our website or in-salon registry is kept securely. You may request deletion or modification of your contact preferences at any time by contacting our desk at 090042 39091.
              </p>
            </>
          )}

          {activePolicy === 'terms' && (
            <>
              <p>
                <strong>1. Punctuality & Appointments:</strong> We recommend arriving 5–10 minutes before your scheduled appointment time. If running late, please notify us via WhatsApp or call so our stylists can accommodate you smoothly.
              </p>
              <p>
                <strong>2. Consultation & Patch Tests:</strong> For intensive chemical services (such as Balayage, global lightening, or hair botox), our stylists conduct an initial hair health consultation. Skin patch tests are provided for sensitive clients.
              </p>
              <p>
                <strong>3. Pricing Transparency:</strong> Starting prices shown on our website reflect base hair length or standard treatments. Final quotes may be provided during consultation based on custom requirements, length, and density.
              </p>
              <p>
                <strong>4. Cancellations:</strong> We appreciate at least 2 hours advance notice if you need to reschedule or cancel your slot.
              </p>
            </>
          )}

          {activePolicy === 'hygiene' && (
            <>
              <p>
                Our number one commitment at Cre8 Salon Unisex is the health, safety, and comfort of every client who walks through our doors at Marathon Monte Plaza.
              </p>
              <div className="space-y-2 pt-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Autoclave & UV Sterilization:</strong> All metal scissors, clippers, razor handles, and manicure tools undergo hospital-grade UV sterilization between clients.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Single-Use Disposables:</strong> Fresh disposable neck strips, wax spatulas, and sanitized bed sheets are used for every waxing and skincare session.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>100% Genuine Sealed Products:</strong> We only open genuine products from verified brand distributors (L'Oréal Professionnel, Olaplex, Rica Wax, MAC, Schwarzkopf).</span>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="mt-8 pt-4 border-t border-stone-200 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-xs font-bold bg-[#121212] text-white hover:bg-stone-800 transition-colors"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
