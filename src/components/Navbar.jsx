import React, { useState } from 'react';
import { Server, ShieldCheck, Mail, Globe, Menu, X, MessageSquare, User, ExternalLink, Headphones } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';

export default function Navbar({ onOpenContact }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Sanal Sunucu (VDS)', href: '#vds', icon: Server },
    { name: 'Web Hosting', href: '#hosting', icon: Globe },
    { name: 'Google Workspace', href: '#workspace', icon: Mail },
    { name: 'Altyapı & Ağ', href: '#datacenter', icon: ShieldCheck },
    { name: 'S.S.S', href: '#faq', icon: null },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#070D18]/90 backdrop-blur-md border-b border-brand-border">
      {/* Top micro bar */}
      <div className="bg-[#0B1323] border-b border-slate-800/60 py-1.5 px-4 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              Tüm Sistemler Operasyonel (%99.99 Uptime)
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:inline">İstanbul Tier III+ Datacenter</span>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={`mailto:${COMPANY_INFO.salesEmail}`} 
              className="hover:text-brand-cyan transition-colors hidden md:inline"
            >
              {COMPANY_INFO.salesEmail}
            </a>
            <a 
              href={COMPANY_INFO.whatsappUrl} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Destek</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-0.5 shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">
              <div className="w-full h-full bg-[#070D18] rounded-[10px] flex items-center justify-center">
                <Server className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-white">ITD</span>
                <span className="text-cyan-400 font-bold text-xl">HOST</span>
                <span className="text-[10px] font-mono bg-cyan-950/80 text-cyan-300 border border-cyan-800/50 px-1.5 py-0.5 rounded">.net.tr</span>
              </div>
              <span className="text-[10px] text-slate-400 tracking-wider uppercase font-medium">Cloud & Hosting Solutions</span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all flex items-center gap-1.5"
              >
                {link.icon && <link.icon className="w-4 h-4 text-cyan-400" />}
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenContact("Genel Bilgi & Teklif")}
              className="px-4 py-2 text-sm font-medium text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-all"
            >
              Hızlı Teklif Al
            </button>
            <a
              href={COMPANY_INFO.panelUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-lg shadow-md shadow-cyan-600/20 hover:shadow-cyan-500/30 transition-all"
            >
              <User className="w-4 h-4" />
              <span>Müşteri Paneli</span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Menüyü Aç"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A1122] border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800/80 hover:text-cyan-400"
              >
                {link.icon && <link.icon className="w-5 h-5 text-cyan-400" />}
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact("Mobil Menü - Hızlı Teklif");
              }}
              className="w-full text-center py-2.5 rounded-lg font-medium text-sm bg-slate-800 text-white border border-slate-700"
            >
              Hızlı Teklif Talebi
            </button>
            <a
              href={COMPANY_INFO.panelUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full text-center py-2.5 rounded-lg font-semibold text-sm bg-gradient-to-r from-cyan-600 to-blue-600 text-white flex items-center justify-center gap-2"
            >
              <User className="w-4 h-4" />
              Müşteri Paneli Girişi
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
