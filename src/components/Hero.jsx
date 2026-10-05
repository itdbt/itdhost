import React from 'react';
import { ArrowRight, Zap, Shield, Cpu, Sparkles, CheckCircle2, MessageSquare, Terminal } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';

export default function Hero({ onOpenContact }) {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(90deg, #38bdf8 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-300 text-xs sm:text-sm font-medium mb-6 backdrop-blur-md shadow-sm">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Türkiye Lokasyon Yeni Nesil Bulut & Hosting Altyapısı</span>
            <span className="hidden sm:inline bg-cyan-500/20 text-cyan-200 px-2 py-0.5 rounded-full text-xs font-mono">
              v2026 Ready
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
            İşletmeniz İçin Ultra Hızlı <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
              Sanal Sunucu & Bulut
            </span> Çözümleri
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            <strong className="text-white font-semibold">{COMPANY_INFO.domain}</strong> güvencesiyle yüksek performanslı NVMe VDS, cPanel Web Hosting ve kurumsal <span className="text-cyan-300 font-semibold">Google Workspace</span> iş ortaklığı hizmetleri bir arada.
          </p>

          {/* CTA Group */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#vds"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-base text-slate-900 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 transition-all flex items-center justify-center gap-2 group"
            >
              <span>Sunucu Paketlerini İncele</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#workspace"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-base text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/50 transition-all flex items-center justify-center gap-2"
            >
              <span>Google Workspace Planları</span>
            </a>

            <button
              onClick={() => onOpenContact("Hero Hızlı Danışmanlık")}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-base text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-800/60 transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Uzmana Danışın</span>
            </button>
          </div>

          {/* Trust bullets */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-400">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>60 Saniyede Otomatik Kurulum</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Tier III İstanbul Veri Merkezi</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Ücretsiz Taşıma & 7/24 Destek</span>
            </div>
          </div>
        </div>

        {/* Live Metrics Grid / High-Tech Cards */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="glass-card rounded-2xl p-5 sm:p-6 border border-slate-800/80 hover:border-cyan-500/40 transition-all">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase font-mono tracking-wider text-slate-400">UPTIME SLA</span>
              <div className="w-8 h-8 rounded-lg bg-emerald-950/60 border border-emerald-800/50 flex items-center justify-center">
                <Zap className="w-4 h-4 text-emerald-400" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">{COMPANY_INFO.uptime}</div>
            <p className="text-xs text-slate-400 mt-1">Kesintisiz yüksek erişilebilirlik garantisi</p>
          </div>

          <div className="glass-card rounded-2xl p-5 sm:p-6 border border-slate-800/80 hover:border-cyan-500/40 transition-all">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase font-mono tracking-wider text-slate-400">DDoS SAVUNMASI</span>
              <div className="w-8 h-8 rounded-lg bg-blue-950/60 border border-blue-800/50 flex items-center justify-center">
                <Shield className="w-4 h-4 text-blue-400" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">10+ Gbps</div>
            <p className="text-xs text-slate-400 mt-1">Voxility donanımsal koruma kalkanı</p>
          </div>

          <div className="glass-card rounded-2xl p-5 sm:p-6 border border-slate-800/80 hover:border-cyan-500/40 transition-all">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase font-mono tracking-wider text-slate-400">NVMe GEN4 HIZI</span>
              <div className="w-8 h-8 rounded-lg bg-cyan-950/60 border border-cyan-800/50 flex items-center justify-center">
                <Cpu className="w-4 h-4 text-cyan-400" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">7.000 MB/s</div>
            <p className="text-xs text-slate-400 mt-1">Samsung Enterprise SSD disk altyapısı</p>
          </div>

          <div className="glass-card rounded-2xl p-5 sm:p-6 border border-slate-800/80 hover:border-cyan-500/40 transition-all">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase font-mono tracking-wider text-slate-400">PROVİZYON</span>
              <div className="w-8 h-8 rounded-lg bg-purple-950/60 border border-purple-800/50 flex items-center justify-center">
                <Terminal className="w-4 h-4 text-purple-400" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">&lt; 90 Sn</div>
            <p className="text-xs text-slate-400 mt-1">Sipariş anında otomatik aktivasyon</p>
          </div>
        </div>
      </div>
    </section>
  );
}
