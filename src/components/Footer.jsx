import React from 'react';
import { Server, ShieldCheck, Mail, Phone, MapPin, Heart, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';

export default function Footer({ onOpenContact }) {
  return (
    <footer className="bg-[#050A14] border-t border-slate-800 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1 & 2: Brand Information */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-0.5">
                <div className="w-full h-full bg-[#070D18] rounded-[10px] flex items-center justify-center">
                  <Server className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl text-white">ITD</span>
                <span className="text-cyan-400 font-bold text-xl">HOST</span>
                <span className="text-[10px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-800 px-1.5 py-0.5 rounded">.net.tr</span>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Türkiye lokasyon yüksek performanslı NVMe Sanal Sunucular (VDS/VPS), LiteSpeed cPanel Web Hosting ve yetkili Google Workspace iş ortaklığı çözümleri.
            </p>

            <div className="pt-2 text-xs space-y-2 text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{COMPANY_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </div>
            </div>
          </div>

          {/* Col 3: Cloud & Sunucu */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Bulut & Sunucu</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#vds" className="hover:text-cyan-400 transition-colors">NVMe Cloud VDS</a>
              </li>
              <li>
                <a href="#vds" className="hover:text-cyan-400 transition-colors">Linux Sanal Sunucular</a>
              </li>
              <li>
                <a href="#vds" className="hover:text-cyan-400 transition-colors">Windows VDS Sunucu</a>
              </li>
              <li>
                <a href="#vds" className="hover:text-cyan-400 transition-colors">Özel VDS Konfigüratörü</a>
              </li>
              <li>
                <a href="#datacenter" className="hover:text-cyan-400 transition-colors">Voxility DDoS Koruması</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Hosting & E-Posta */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Hosting & Çözümler</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#hosting" className="hover:text-cyan-400 transition-colors">cPanel Web Hosting</a>
              </li>
              <li>
                <a href="#hosting" className="hover:text-cyan-400 transition-colors">LiteSpeed WordPress Hosting</a>
              </li>
              <li>
                <a href="#workspace" className="hover:text-cyan-400 transition-colors">Google Workspace Paketleri</a>
              </li>
              <li>
                <a href="#workspace" className="hover:text-cyan-400 transition-colors">Kurumsal E-Posta Taşıma</a>
              </li>
              <li>
                <a href="#domain" className="hover:text-cyan-400 transition-colors">.com.tr / .net.tr Domain</a>
              </li>
            </ul>
          </div>

          {/* Col 5: Kurumsal & Destek */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Hızlı Erişim</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href={COMPANY_INFO.panelUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-cyan-400 transition-colors">
                  <span>Müşteri Paneli</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <button onClick={() => onOpenContact("Footer - Teknik Destek")} className="hover:text-cyan-400 transition-colors text-left">
                  Teknik Destek Talebi
                </button>
              </li>
              <li>
                <a href={COMPANY_INFO.whatsappUrl} target="_blank" rel="noreferrer" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                  WhatsApp Canlı Destek
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-cyan-400 transition-colors">Sıkça Sorulan Sorular</a>
              </li>
              <li>
                <span className="text-[11px] text-slate-500 block pt-1">
                  7/24 Kesintisiz İzleme & NOC
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.domain} ({COMPANY_INFO.name}). Tüm hakları saklıdır.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Kullanım Şartları</span>
            <span className="hover:text-slate-400 cursor-pointer">Gizlilik Politikası</span>
            <span className="hover:text-slate-400 cursor-pointer">KVKK Aydınlatma Metni</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
