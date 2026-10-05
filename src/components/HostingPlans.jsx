import React, { useState } from 'react';
import { Globe, Check, ShieldCheck, Zap, RefreshCw, Lock, Sparkles, ArrowRight } from 'lucide-react';
import { HOSTING_PLANS } from '../data/products';

export default function HostingPlans({ onOpenContact }) {
  const [billingCycle, setBillingCycle] = useState('yearly'); // 'monthly' | 'yearly'

  return (
    <section id="hosting" className="py-20 relative bg-[#09101E]/60 border-y border-brand-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800 text-blue-300 text-xs font-mono font-semibold mb-3">
            <Globe className="w-3.5 h-3.5" />
            <span>NVMe LITESPEED WEB HOSTING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Web Siteleriniz İçin <span className="text-cyan-400">Işık Hızında</span> Hosting
          </h2>
          <p className="mt-3 text-slate-300 text-base sm:text-lg">
            LiteSpeed Web Server, cPanel kolaylığı ve ücretsiz SSL ile web siteleriniz Google PageSpeed testlerinde 100/100 performansa ulaşsın.
          </p>

          {/* Toggle Switch */}
          <div className="mt-8 inline-flex items-center bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800 text-sm">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 rounded-xl font-medium transition-all ${
                billingCycle === 'monthly' ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              Aylık Faturalandırma
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-4 py-2 rounded-xl font-medium transition-all flex items-center gap-2 ${
                billingCycle === 'yearly'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>Yıllık Faturalandırma</span>
              <span className="bg-emerald-400 text-slate-950 text-[10px] font-bold px-1.5 py-0.5 rounded-full uppercase">
                İndirimli
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {HOSTING_PLANS.map((plan) => {
            const price = billingCycle === 'yearly' ? plan.priceYearly : plan.priceMonthly;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-b from-[#101D38] to-[#0A1224] border-2 border-cyan-400 shadow-2xl shadow-cyan-500/15 md:-translate-y-3'
                    : 'glass-card border border-slate-800 hover:border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold text-xs uppercase tracking-wider py-1 px-4 rounded-full shadow-lg">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                    <p className="text-xs text-slate-400 mt-1 min-h-[32px]">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="py-4 border-y border-slate-800/80 mb-6">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-extrabold text-white">${price}</span>
                      <span className="text-xs text-slate-400 ml-1.5">/ ay</span>
                    </div>
                    <div className="text-[11px] text-cyan-400 mt-1">
                      {billingCycle === 'yearly' ? 'Yıllık peşin ödemede indirimli fiyattır' : 'Aylık taahhütsüz standart fiyat'}
                    </div>
                  </div>

                  {/* Specs List */}
                  <div className="space-y-3 mb-8">
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                      Paket Özellikleri:
                    </div>
                    {plan.specs.map((spec, idx) => (
                      <div key={idx} className="flex items-start justify-between text-xs sm:text-sm py-1 border-b border-slate-800/40">
                        <span className="text-slate-300 flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          {spec.name}
                        </span>
                        <strong className="text-white font-medium text-right ml-2">{spec.value}</strong>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <div>
                  <button
                    onClick={() =>
                      onOpenContact(
                        `Web Hosting Siparişi: ${plan.name} - $${price}/ay [${billingCycle === 'yearly' ? 'Yıllık' : 'Aylık'}]`
                      )
                    }
                    className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 shadow-lg shadow-cyan-500/20'
                        : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                    }`}
                  >
                    <span>Paketi Seç</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Highlights Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12 border-t border-slate-800/80">
          <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-900/50 border border-slate-800/60">
            <div className="p-2.5 rounded-xl bg-cyan-950/80 text-cyan-400 border border-cyan-800/60 shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">LiteSpeed Web Server</h4>
              <p className="text-xs text-slate-400 mt-1">Apache'den 9 kat daha hızlı sayfa yükleme süreleri ve dahili LSCache eklentisi.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-900/50 border border-slate-800/60">
            <div className="p-2.5 rounded-xl bg-blue-950/80 text-blue-400 border border-blue-800/60 shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Ücretsiz Let's Encrypt SSL</h4>
              <p className="text-xs text-slate-400 mt-1">Tek tıkla otomatik kurulan ve kendini yenileyen güvenlik sertifikası.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-900/50 border border-slate-800/60">
            <div className="p-2.5 rounded-xl bg-emerald-950/80 text-emerald-400 border border-emerald-800/60 shrink-0">
              <RefreshCw className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Günlük Otomatik Yedek</h4>
              <p className="text-xs text-slate-400 mt-1">Web siteniz ve e-postalarınız her gece harici sunucularda güvenle yedeklenir.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-900/50 border border-slate-800/60">
            <div className="p-2.5 rounded-xl bg-purple-950/80 text-purple-400 border border-purple-800/60 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Ücretsiz Site Taşıma</h4>
              <p className="text-xs text-slate-400 mt-1">Mevcut hosting firmanızdaki tüm siteleri kesintisiz olarak ITD altyapısına taşıyoruz.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
