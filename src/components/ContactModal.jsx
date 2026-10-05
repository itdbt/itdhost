import React, { useState, useEffect } from 'react';
import { X, Send, MessageSquare, CheckCircle, Phone, Mail, Building, User } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';

export default function ContactModal({ isOpen, onClose, prefilledService }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: prefilledService || 'Genel Teklif & Danışmanlık',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({ ...prev, service: prefilledService }));
    }
    setSubmitted(false);
  }, [prefilledService, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Merhaba ITD Host,\nitd.net.tr üzerinden teklif almak istiyorum.\n\nİlgilendiğim Hizmet: ${formData.service}\nAd Soyad: ${formData.name || 'Belirtilmedi'}\nŞirket: ${formData.company || 'Belirtilmedi'}`
    );
    return `${COMPANY_INFO.whatsappUrl}?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#040810]/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-lg rounded-3xl bg-[#0B1426] border border-cyan-500/40 p-6 sm:p-8 shadow-2xl z-10 animate-scaleUp">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Kapat"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">Talebiniz Alındı!</h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto">
              Teşekkürler <strong className="text-white">{formData.name}</strong>. Uzman müşteri temsilcimiz talebinizi inceleyerek <strong className="text-cyan-400">{formData.phone || formData.email}</strong> üzerinden en kısa sürede sizinle iletişime geçecektir.
            </p>
            <div className="pt-4">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl font-semibold text-sm bg-slate-800 text-white hover:bg-slate-700 transition-colors"
              >
                Pencereyi Kapat
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs uppercase font-mono font-bold tracking-wider text-cyan-400">
                HIZLI TEKLİF & SİPARİŞ HATTI
              </span>
              <h3 className="text-2xl font-extrabold text-white mt-1">İletişime Geçin</h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                İster formu doldurun, ister anında WhatsApp üzerinden uzman ekibimize bağlanın.
              </p>
            </div>

            {/* Direct WhatsApp CTA Button */}
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 px-4 mb-6 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-600/20"
            >
              <MessageSquare className="w-5 h-5" />
              <span>WhatsApp ile Anında Teklif Al</span>
            </a>

            <div className="relative flex py-2 items-center mb-6">
              <div className="flex-grow border-t border-slate-800"></div>
              <span className="flex-shrink mx-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">veya Formu Doldurun</span>
              <div className="flex-grow border-t border-slate-800"></div>
            </div>

            {/* Contact / Order Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Seçilen Hizmet / Paket:
                </label>
                <input
                  type="text"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-cyan-300 font-medium text-xs sm:text-sm focus:outline-none focus:border-cyan-500"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Adınız Soyadınız *</label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Ahmet Yılmaz"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 pl-9 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-500"
                      required
                    />
                    <User className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Şirket / Firma Adı</label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Şirket A.Ş."
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 pl-9 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-500"
                    />
                    <Building className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Telefon Numarası *</label>
                  <div className="relative">
                    <input
                      type="tel"
                      placeholder="05XX XXX XX XX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 pl-9 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-500"
                      required
                    />
                    <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">E-Posta Adresi *</label>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="ornek@sirket.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 pl-9 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-500"
                      required
                    />
                    <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Ek Notlar / İstekleriniz</label>
                <textarea
                  rows="2"
                  placeholder="Mevcut sitemizin taşınmasını istiyoruz vb."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-500 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Teklif Talebini Gönder</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
