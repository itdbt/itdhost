import React, { useState } from 'react';
import { Mail, Check, Users, Sparkles, Shield, ArrowRight, Video, Cloud, Award } from 'lucide-react';
import { WORKSPACE_PLANS } from '../data/products';

export default function GoogleWorkspace({ onOpenContact }) {
  const [userCount, setUserCount] = useState(5); // default 5 users

  const googleApps = [
    { name: 'Gmail', desc: 'Şirket uzantılı kurumsal e-posta' },
    { name: 'Google Meet', desc: 'Gelişmiş HD görüntülü toplantı' },
    { name: 'Google Drive', desc: 'Güvenli bulut depolama & paylaşım' },
    { name: 'Google Dokümanlar', desc: 'Gerçek zamanlı ortak çalışma' },
    { name: 'Google Takvim', desc: 'Ekipler için akıllı planlama' },
    { name: 'Google Chat', desc: 'Hızlı ve güvenli ekip içi mesajlaşma' },
  ];

  return (
    <section id="workspace" className="py-20 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800 text-emerald-300 text-xs font-mono font-semibold mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>GOOGLE WORKSPACE RESMİ İŞ ORTAKLIĞI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Şirketinizi <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-emerald-400 to-amber-400">Google Gücüyle</span> Donatın
          </h2>
          <p className="mt-3 text-slate-300 text-base sm:text-lg">
            Özel alan adı uzantınızla Gmail, Drive, Meet ve ofis uygulamalarını tek bir güvenli çatı altında birleştirin. Tüm geçiş ve kurulum işlemlerini ITD Host uzmanları yönetsin.
          </p>

          {/* User Count Interactive Slider */}
          <div className="mt-8 max-w-xl mx-auto p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold text-slate-300 flex items-center gap-2">
                <Users className="w-4 h-4 text-emerald-400" /> Şirket Çalışanı / Kullanıcı Sayısı:
              </span>
              <span className="text-lg font-bold text-emerald-400 font-mono">{userCount} Kullanıcı</span>
            </div>
            <input
              type="range"
              min="1"
              max="50"
              value={userCount}
              onChange={(e) => setUserCount(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
            />
            <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-mono">
              <span>1 Kullanıcı</span>
              <span>10 Kullanıcı</span>
              <span>25 Kullanıcı</span>
              <span>50+ Kullanıcı</span>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WORKSPACE_PLANS.map((plan) => {
            const totalPrice = plan.pricePerUser * userCount;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-b from-[#0e2132] to-[#0A1224] border-2 border-emerald-400 shadow-2xl shadow-emerald-500/10 -translate-y-2'
                    : 'glass-card border border-slate-800 hover:border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-400 to-cyan-500 text-slate-950 font-bold text-xs uppercase tracking-wider py-1 px-4 rounded-full shadow-lg">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-emerald-300 bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-800/60">
                      {plan.badge}
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-2">{plan.name}</h3>
                  </div>

                  {/* Pricing Box */}
                  <div className="py-4 border-y border-slate-800/80 mb-6">
                    <div className="flex items-baseline">
                      <span className="text-3xl font-extrabold text-white">${plan.pricePerUser}</span>
                      <span className="text-xs text-slate-400 ml-1.5">/ kullanıcı / ay</span>
                    </div>
                    <div className="text-xs font-medium text-emerald-400 mt-2 bg-emerald-950/40 p-2 rounded-lg border border-emerald-800/40">
                      Toplam ({userCount} Kullanıcı): <strong className="text-white">${totalPrice} / ay</strong>
                    </div>
                  </div>

                  {/* Storage & Meet Highlight */}
                  <div className="space-y-2 mb-6 text-xs">
                    <div className="flex items-center gap-2 text-slate-300 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800">
                      <Cloud className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{plan.storage}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800">
                      <Video className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{plan.meetCapacity}</span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-2.5 text-xs text-slate-300 mb-8">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() =>
                    onOpenContact(
                      `Google Workspace Siparişi: ${plan.name} (${userCount} Kullanıcı) - $${totalPrice}/ay`
                    )
                  }
                  className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 text-slate-950 shadow-lg shadow-emerald-500/20'
                      : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                  }`}
                >
                  <span>Hemen Başla</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Free Migration & Setup Guarantee Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0C1B33] via-[#0F243E] to-[#0A1A2E] border border-cyan-500/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center shrink-0">
              <Award className="w-7 h-7 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Ücretsiz Kurulum ve Eski E-Postaları Taşıma Garantisi
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                Yandex, cPanel, Outlook veya Exchange üzerindeki mevcut şirket e-postalarınızı hiçbir veri ve klasör kaybı olmadan Google Workspace altyapısına ücretsiz olarak taşıyoruz.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenContact("Google Workspace E-Posta Taşıma Danışmanlığı")}
            className="w-full md:w-auto px-6 py-3 rounded-xl font-bold text-sm text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shrink-0 shadow-md"
          >
            Geçiş Desteği Al
          </button>
        </div>

        {/* Google Apps Icons Showcase */}
        <div className="mt-12 text-center">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-6">
            Dahil Olan Popüler Google Uygulamaları
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {googleApps.map((app) => (
              <div key={app.name} className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                <div className="font-bold text-sm text-white">{app.name}</div>
                <div className="text-[11px] text-slate-400 mt-0.5">{app.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
