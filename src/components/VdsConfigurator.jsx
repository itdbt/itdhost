import React, { useState } from 'react';
import { Cpu, HardDrive, Zap, Check, Server, Shield, Layers, Sliders, ArrowRight } from 'lucide-react';
import { VDS_PLANS } from '../data/products';

export default function VdsConfigurator({ onOpenContact }) {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'yearly'
  const [activeTab, setActiveTab] = useState('packages'); // 'packages' | 'custom'

  // Custom slider state
  const [customCpu, setCustomCpu] = useState(4); // cores
  const [customRam, setCustomRam] = useState(8); // GB
  const [customDisk, setCustomDisk] = useState(100); // GB NVMe
  const [selectedOs, setSelectedOs] = useState('Ubuntu 24.04 LTS');

  const operatingSystems = [
    { name: 'Ubuntu 24.04 LTS', type: 'linux', icon: '🐧' },
    { name: 'Debian 12 Bookworm', type: 'linux', icon: '🌀' },
    { name: 'AlmaLinux 9', type: 'linux', icon: '🔴' },
    { name: 'Windows Server 2022/2025', type: 'windows', icon: '🪟' },
  ];

  // Dynamic price formula (USD):
  // Base $4 + (CPU * $1.5) + (RAM * $0.9) + (Disk * $0.04)
  // If Windows, +$5.00 license fee
  const calculateCustomPrice = () => {
    let base = 4 + (customCpu * 1.5) + (customRam * 0.9) + (customDisk * 0.04);
    if (selectedOs.includes('Windows')) {
      base += 5;
    }
    const monthly = Number(base.toFixed(2));
    const yearly = Number((base * 0.8).toFixed(2)); // %20 discount
    return billingCycle === 'yearly' ? yearly : monthly;
  };

  return (
    <section id="vds" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-300 text-xs font-mono font-semibold mb-3">
            <Server className="w-3.5 h-3.5" />
            <span>NVMe BULUT SUNUCULAR (VDS / VPS)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Yüksek Güç, Özel Donanım: <span className="text-cyan-400">Sanal Sunucular</span>
          </h2>
          <p className="mt-3 text-slate-300 text-base sm:text-lg">
            Paylaşımsız CPU çekirdekleri, ultra hızlı Samsung Enterprise NVMe Gen4 diskler ve Voxility 10 Gbps DDoS kalkanı ile projelerinizi güvence altına alın.
          </p>

          {/* Controls: Billing Cycle and Tab Switcher */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* View Switch: Ready Packages vs Custom Configurator */}
            <div className="flex items-center bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800">
              <button
                onClick={() => setActiveTab('packages')}
                className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                  activeTab === 'packages'
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>Hazır Paketler</span>
              </button>
              <button
                onClick={() => setActiveTab('custom')}
                className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                  activeTab === 'custom'
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Sliders className="w-4 h-4" />
                <span>Özel Konfigüratör</span>
              </button>
            </div>

            {/* Monthly / Yearly Switch */}
            <div className="flex items-center bg-slate-900/90 px-3 py-1.5 rounded-2xl border border-slate-800 text-xs sm:text-sm">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                  billingCycle === 'monthly' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Aylık Ödeme
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-colors flex items-center gap-1.5 ${
                  billingCycle === 'yearly' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <span>Yıllık Ödeme</span>
                <span className="bg-emerald-500/20 text-emerald-300 text-[10px] px-1.5 py-0.5 rounded font-bold uppercase">
                  %20 İndirim
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Tab 1: Ready VDS Packages */}
        {activeTab === 'packages' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VDS_PLANS.map((plan) => {
              const price = billingCycle === 'yearly' ? plan.priceYearly : plan.priceMonthly;

              return (
                <div
                  key={plan.id}
                  className={`relative rounded-3xl p-6 flex flex-col transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-b from-[#0e1a33] to-[#0A1224] border-2 border-cyan-400/80 shadow-xl shadow-cyan-500/10 -translate-y-2'
                      : 'glass-card border border-slate-800 hover:border-cyan-500/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold text-xs uppercase tracking-wider py-1 px-4 rounded-full shadow-md">
                      {plan.badge}
                    </div>
                  )}

                  <div className="mb-4">
                    {!plan.popular && (
                      <span className="text-xs font-semibold text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-full border border-slate-700/60">
                        {plan.badge}
                      </span>
                    )}
                    <h3 className="text-xl font-bold text-white mt-2">{plan.name}</h3>
                  </div>

                  {/* Core Hardware Metrics */}
                  <div className="space-y-2.5 py-4 border-y border-slate-800/80 text-sm">
                    <div className="flex items-center justify-between text-slate-300">
                      <span className="flex items-center gap-2 text-slate-400">
                        <Cpu className="w-4 h-4 text-cyan-400" /> İşlemci
                      </span>
                      <strong className="text-white font-semibold">{plan.cpu}</strong>
                    </div>
                    <div className="flex items-center justify-between text-slate-300">
                      <span className="flex items-center gap-2 text-slate-400">
                        <Zap className="w-4 h-4 text-cyan-400" /> Bellek
                      </span>
                      <strong className="text-white font-semibold">{plan.ram}</strong>
                    </div>
                    <div className="flex items-center justify-between text-slate-300">
                      <span className="flex items-center gap-2 text-slate-400">
                        <HardDrive className="w-4 h-4 text-cyan-400" /> Disk
                      </span>
                      <strong className="text-white font-semibold">{plan.disk}</strong>
                    </div>
                    <div className="flex items-center justify-between text-slate-300">
                      <span className="flex items-center gap-2 text-slate-400">
                        <Server className="w-4 h-4 text-cyan-400" /> Trafik / Port
                      </span>
                      <strong className="text-white font-semibold">{plan.traffic}</strong>
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="mt-4 space-y-2.5 text-xs text-slate-300 flex-grow">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price and CTA */}
                  <div className="mt-6 pt-4 border-t border-slate-800/80">
                    <div className="flex items-baseline justify-between mb-4">
                      <div>
                        <span className="text-3xl font-extrabold text-white">${price}</span>
                        <span className="text-xs text-slate-400 ml-1">/ ay</span>
                      </div>
                      {billingCycle === 'yearly' && (
                        <span className="text-[11px] text-emerald-400 font-semibold bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded">
                          Yıllık Faturalandırma
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() =>
                        onOpenContact(
                          `Sanal Sunucu Siparişi: ${plan.name} (${plan.cpu}, ${plan.ram}, ${plan.disk}) - $${price}/ay [${billingCycle === 'yearly' ? 'Yıllık' : 'Aylık'}]`
                        )
                      }
                      className={`w-full py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 shadow-lg shadow-cyan-500/25'
                          : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                      }`}
                    >
                      <span>Hemen Sipariş Ver</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2: Interactive Custom VDS Configurator */}
        {activeTab === 'custom' && (
          <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-brand-border shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Sliders Area */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white">Özel İhtiyacınıza Göre Sunucu Tasarlayın</h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Donanım kaynaklarını projenizin büyüklüğüne göre anlık olarak artırın veya azaltın.
                  </p>
                </div>

                {/* Slider 1: CPU */}
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-slate-300 flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-cyan-400" /> İşlemci Çekirdeği (vCPU)
                    </span>
                    <span className="text-base font-bold text-cyan-400 font-mono">{customCpu} Core</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="16"
                    step="1"
                    value={customCpu}
                    onChange={(e) => setCustomCpu(Number(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-mono">
                    <span>1 vCPU</span>
                    <span>4 vCPU</span>
                    <span>8 vCPU</span>
                    <span>16 vCPU</span>
                  </div>
                </div>

                {/* Slider 2: RAM */}
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-slate-300 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-cyan-400" /> Bellek (RAM)
                    </span>
                    <span className="text-base font-bold text-cyan-400 font-mono">{customRam} GB DDR4</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="64"
                    step="2"
                    value={customRam}
                    onChange={(e) => setCustomRam(Number(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-mono">
                    <span>2 GB</span>
                    <span>16 GB</span>
                    <span>32 GB</span>
                    <span>64 GB</span>
                  </div>
                </div>

                {/* Slider 3: NVMe Disk */}
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-slate-300 flex items-center gap-2">
                      <HardDrive className="w-4 h-4 text-cyan-400" /> NVMe SSD Depolama
                    </span>
                    <span className="text-base font-bold text-cyan-400 font-mono">{customDisk} GB Gen4</span>
                  </div>
                  <input
                    type="range"
                    min="30"
                    max="500"
                    step="10"
                    value={customDisk}
                    onChange={(e) => setCustomDisk(Number(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-mono">
                    <span>30 GB</span>
                    <span>100 GB</span>
                    <span>250 GB</span>
                    <span>500 GB</span>
                  </div>
                </div>

                {/* OS Selector */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wider">
                    İşletim Sistemi Tercihi
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {operatingSystems.map((os) => (
                      <button
                        key={os.name}
                        onClick={() => setSelectedOs(os.name)}
                        className={`p-2.5 rounded-xl border text-xs font-medium transition-all text-left flex items-center gap-2 ${
                          selectedOs === os.name
                            ? 'bg-cyan-950/80 border-cyan-400 text-white shadow-sm'
                            : 'bg-slate-900/70 border-slate-800 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <span className="text-base">{os.icon}</span>
                        <span className="truncate">{os.name.split(' ')[0]}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price Summary & Instant Action Card */}
              <div className="lg:col-span-5 bg-gradient-to-b from-[#0F1C36] to-[#0A1224] rounded-2xl p-6 sm:p-8 border border-cyan-500/40 shadow-xl relative">
                <div className="absolute top-4 right-4">
                  <span className="text-[10px] uppercase font-mono font-bold bg-cyan-400/20 text-cyan-300 px-2 py-1 rounded">
                    Özel Yapılandırma
                  </span>
                </div>

                <div className="text-slate-400 text-xs uppercase tracking-wider font-semibold">
                  Hesaplanan Sunucu Paketi
                </div>
                <h4 className="text-2xl font-bold text-white mt-1">Özel Cloud VDS</h4>

                <div className="mt-6 space-y-3 pb-6 border-b border-slate-800 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">İşlemci:</span>
                    <span className="text-white font-semibold font-mono">{customCpu} vCPU Çekirdek</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Bellek:</span>
                    <span className="text-white font-semibold font-mono">{customRam} GB DDR4 ECC</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Disk Alanı:</span>
                    <span className="text-white font-semibold font-mono">{customDisk} GB NVMe Gen4 SSD</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">İşletim Sistemi:</span>
                    <span className="text-cyan-300 font-semibold">{selectedOs}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Trafik & Port:</span>
                    <span className="text-emerald-400 font-semibold">Limitsiz / 1 Gbps</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">DDoS Koruma:</span>
                    <span className="text-emerald-400 font-semibold">10 Gbps Voxility Aktif</span>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-xs text-slate-400">Tahmini Yatırım:</span>
                    <div className="text-right">
                      <span className="text-3xl font-extrabold text-white">${calculateCustomPrice()}</span>
                      <span className="text-xs text-slate-400 ml-1">/ ay</span>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-400 mb-6">
                    {billingCycle === 'yearly'
                      ? 'Yıllık %20 indirimli fiyat uygulanmıştır.'
                      : 'Aylık taahhütsüz faturalandırma seçildi.'}
                  </p>

                  <button
                    onClick={() =>
                      onOpenContact(
                        `Özel VDS Konfigürasyonu: ${customCpu} vCPU, ${customRam} GB RAM, ${customDisk} GB NVMe, OS: ${selectedOs} - $${calculateCustomPrice()}/ay [${billingCycle === 'yearly' ? 'Yıllık' : 'Aylık'}]`
                      )
                    }
                    className="w-full py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 text-slate-950 shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Bu Konfigürasyonla Teklif / Sipariş Al</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
