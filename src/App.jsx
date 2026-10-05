import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DomainSearch from './components/DomainSearch';
import VdsConfigurator from './components/VdsConfigurator';
import HostingPlans from './components/HostingPlans';
import GoogleWorkspace from './components/GoogleWorkspace';
import Infrastructure from './components/Infrastructure';
import Faq from './components/Faq';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import { MessageSquare, PhoneCall } from 'lucide-react';
import { COMPANY_INFO } from './data/products';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState('');

  const handleOpenContact = (serviceTitle = '') => {
    setPrefilledService(serviceTitle);
    setModalOpen(true);
  };

  const handleCloseContact = () => {
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#070D18] text-slate-100 selection:bg-cyan-500 selection:text-slate-950 font-sans">
      {/* Navbar */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Content */}
      <main className="flex-grow">
        <Hero onOpenContact={handleOpenContact} />
        <DomainSearch onOpenContact={handleOpenContact} />
        <VdsConfigurator onOpenContact={handleOpenContact} />
        <HostingPlans onOpenContact={handleOpenContact} />
        <GoogleWorkspace onOpenContact={handleOpenContact} />
        <Infrastructure />
        <Faq />
      </main>

      {/* Footer */}
      <Footer onOpenContact={handleOpenContact} />

      {/* Contact & Order Modal */}
      <ContactModal
        isOpen={modalOpen}
        onClose={handleCloseContact}
        prefilledService={prefilledService}
      />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {/* Quick Contact Form Trigger */}
        <button
          onClick={() => handleOpenContact("Hızlı Destek & Teklif")}
          className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-900/90 text-cyan-400 border border-cyan-500/40 hover:bg-slate-800 shadow-xl backdrop-blur-md transition-all text-xs font-bold"
        >
          <PhoneCall className="w-4 h-4 text-cyan-400" />
          <span>Hızlı Teklif İste</span>
        </button>

        {/* WhatsApp Floating Button */}
        <a
          href={COMPANY_INFO.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold shadow-xl shadow-emerald-500/30 hover:scale-105 transition-all text-sm group"
          aria-label="WhatsApp Canlı Destek"
        >
          <MessageSquare className="w-5 h-5 fill-slate-950 text-emerald-500" />
          <span className="hidden sm:inline">WhatsApp Canlı Destek</span>
        </a>
      </div>
    </div>
  );
}
