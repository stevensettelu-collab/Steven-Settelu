import React, { useState } from 'react';
import { useSalon } from '../context/SalonContext';
import {
  X,
  Settings,
  Save,
  RotateCcw,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Tag,
  ListOrdered,
  Scissors,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

export const AdminDrawer: React.FC = () => {
  const {
    config,
    services,
    offers,
    isAdminOpen,
    closeAdmin,
    updateConfig,
    updateServicePrice,
    updateOffer,
    resetToDefaults,
    recentBookings
  } = useSalon();

  const [activeTab, setActiveTab] = useState<'general' | 'services' | 'offers' | 'bookings'>('general');
  const [formData, setFormData] = useState({
    name: config.name,
    phone: config.phone,
    displayPhone: config.displayPhone,
    whatsappNumber: config.whatsappNumber,
    address: config.address,
    landmark: config.landmark,
    openingHoursDisplay: config.openingHoursDisplay,
    instagramHandle: config.instagramHandle
  });

  const [saveSuccess, setSaveSuccess] = useState(false);

  if (!isAdminOpen) return null;

  const handleGeneralSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateConfig(formData);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all salon data to original defaults?')) {
      resetToDefaults();
      setFormData({
        name: config.name,
        phone: config.phone,
        displayPhone: config.displayPhone,
        whatsappNumber: config.whatsappNumber,
        address: config.address,
        landmark: config.landmark,
        openingHoursDisplay: config.openingHoursDisplay,
        instagramHandle: config.instagramHandle
      });
      alert('Salon data reset to defaults.');
    }
  };

  return (
    <div
      id="admin-cms-overlay"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-end animate-in fade-in duration-200"
      onClick={closeAdmin}
    >
      <div
        id="admin-cms-drawer"
        className="w-full max-w-xl bg-white h-full overflow-y-auto shadow-2xl flex flex-col text-stone-900 animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="bg-[#121212] text-white p-5 flex items-center justify-between border-b border-zinc-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-zinc-800 text-[#D4AF37]">
              <Settings className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-xl font-bold text-white leading-snug">
                Cre8 Salon Live CMS
              </h2>
              <p className="text-[11px] text-zinc-400 font-sans">
                Update salon contacts, prices & offers in real-time
              </p>
            </div>
          </div>

          <button
            onClick={closeAdmin}
            className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-stone-200 bg-stone-50 px-4 pt-2 gap-2 text-xs font-bold overflow-x-auto">
          <button
            onClick={() => setActiveTab('general')}
            className={`py-2.5 px-3 rounded-t-lg transition-all ${
              activeTab === 'general'
                ? 'bg-white text-stone-900 border-t border-x border-stone-200 shadow-sm'
                : 'text-stone-500 hover:text-stone-800'
            }`}
          >
            Salon Contacts
          </button>
          <button
            onClick={() => setActiveTab('services')}
            className={`py-2.5 px-3 rounded-t-lg transition-all ${
              activeTab === 'services'
                ? 'bg-white text-stone-900 border-t border-x border-stone-200 shadow-sm'
                : 'text-stone-500 hover:text-stone-800'
            }`}
          >
            Service Prices ({services.length})
          </button>
          <button
            onClick={() => setActiveTab('offers')}
            className={`py-2.5 px-3 rounded-t-lg transition-all ${
              activeTab === 'offers'
                ? 'bg-white text-stone-900 border-t border-x border-stone-200 shadow-sm'
                : 'text-stone-500 hover:text-stone-800'
            }`}
          >
            Special Offers ({offers.length})
          </button>
          <button
            onClick={() => setActiveTab('bookings')}
            className={`py-2.5 px-3 rounded-t-lg transition-all ${
              activeTab === 'bookings'
                ? 'bg-white text-stone-900 border-t border-x border-stone-200 shadow-sm'
                : 'text-stone-500 hover:text-stone-800'
            }`}
          >
            Recent Bookings ({recentBookings.length})
          </button>
        </div>

        {/* Drawer Content */}
        <div className="p-6 flex-1 overflow-y-auto space-y-6">
          {saveSuccess && (
            <div className="p-3 bg-emerald-50 text-emerald-800 rounded-xl border border-emerald-200 text-xs flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Settings saved to live website!</span>
            </div>
          )}

          {/* TAB 1: GENERAL CONFIG */}
          {activeTab === 'general' && (
            <form onSubmit={handleGeneralSave} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Salon Brand Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs font-medium"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    WhatsApp Number (with country code)
                  </label>
                  <input
                    type="text"
                    value={formData.whatsappNumber}
                    onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Full Address (Marathon Monte Plaza)
                </label>
                <textarea
                  rows={2}
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs font-medium"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Landmark
                  </label>
                  <input
                    type="text"
                    value={formData.landmark}
                    onChange={(e) => setFormData({ ...formData, landmark: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Instagram Handle
                  </label>
                  <input
                    type="text"
                    value={formData.instagramHandle}
                    onChange={(e) => setFormData({ ...formData, instagramHandle: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Opening Hours Display
                </label>
                <input
                  type="text"
                  value={formData.openingHoursDisplay}
                  onChange={(e) => setFormData({ ...formData, openingHoursDisplay: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs font-medium"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl text-xs font-bold bg-[#121212] text-white hover:bg-stone-800 transition-colors flex items-center justify-center gap-2"
              >
                <Save className="w-4 h-4 text-[#D4AF37]" />
                <span>Save Salon Details</span>
              </button>
            </form>
          )}

          {/* TAB 2: SERVICE PRICING */}
          {activeTab === 'services' && (
            <div className="space-y-3">
              <p className="text-xs text-stone-500 font-sans">
                Edit the starting prices for services. Changes apply immediately across the menu, featured cards, and booking flow.
              </p>

              <div className="space-y-2.5 max-h-[60vh] overflow-y-auto pr-1">
                {services.map((s) => (
                  <div
                    key={s.id}
                    className="p-3 bg-stone-50 rounded-xl border border-stone-200 flex items-center justify-between gap-3 text-xs"
                  >
                    <div className="min-w-0">
                      <div className="font-bold text-stone-900 truncate">{s.name}</div>
                      <div className="text-[10px] text-stone-400 capitalize">{s.category} · {s.duration}</div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="font-serif font-bold text-stone-600">₹</span>
                      <input
                        type="number"
                        min="50"
                        step="50"
                        value={s.startingPrice}
                        onChange={(e) => updateServicePrice(s.id, Number(e.target.value))}
                        className="w-20 px-2 py-1 bg-white rounded-lg border border-stone-300 text-right font-bold text-xs focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: SPECIAL OFFERS */}
          {activeTab === 'offers' && (
            <div className="space-y-4">
              <p className="text-xs text-stone-500 font-sans">
                Adjust promotional package prices and badge text.
              </p>

              {offers.map((offer) => (
                <div
                  key={offer.id}
                  className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2.5 text-xs"
                >
                  <div className="font-bold text-stone-900">{offer.title}</div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[10px] text-stone-500 block mb-1">Badge Text</label>
                      <input
                        type="text"
                        value={offer.badge}
                        onChange={(e) => updateOffer(offer.id, { badge: e.target.value })}
                        className="w-full px-2 py-1 bg-white rounded border border-stone-300 text-xs"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-stone-500 block mb-1">Offer Price (₹)</label>
                      <input
                        type="number"
                        value={offer.offerPrice}
                        onChange={(e) => updateOffer(offer.id, { offerPrice: Number(e.target.value) })}
                        className="w-full px-2 py-1 bg-white rounded border border-stone-300 text-xs font-bold"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 4: RECENT BOOKINGS */}
          {activeTab === 'bookings' && (
            <div className="space-y-3">
              <p className="text-xs text-stone-500 font-sans">
                Log of client booking submissions captured through the web booking form.
              </p>

              {recentBookings.length === 0 ? (
                <div className="text-center py-12 bg-stone-50 rounded-2xl border border-stone-200 text-xs text-stone-500">
                  No bookings received in this browser session yet. Test by submitting an appointment!
                </div>
              ) : (
                <div className="space-y-2.5 max-h-[60vh] overflow-y-auto">
                  {recentBookings.map((b) => (
                    <div
                      key={b.id}
                      className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 text-xs space-y-1"
                    >
                      <div className="flex justify-between font-bold text-stone-900">
                        <span>{b.clientName} ({b.clientPhone})</span>
                        <span className="font-mono text-[#8C6D1F]">{b.bookingRef}</span>
                      </div>
                      <div className="text-stone-600 font-medium">{b.serviceName}</div>
                      <div className="text-[11px] text-stone-400">
                        🗓️ {b.date} at {b.timeSlot} · {new Date(b.timestamp).toLocaleTimeString()}
                      </div>
                      {b.specialNotes && (
                        <div className="text-[11px] text-stone-500 italic bg-white p-1.5 rounded">
                          Note: {b.specialNotes}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Drawer Footer Reset Button */}
        <div className="p-4 bg-stone-100 border-t border-stone-200 flex justify-between items-center text-xs">
          <button
            onClick={handleReset}
            className="text-red-600 hover:text-red-800 flex items-center gap-1 font-medium"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Factory Defaults</span>
          </button>

          <button
            onClick={closeAdmin}
            className="px-4 py-2 rounded-lg bg-stone-800 text-white font-semibold"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
