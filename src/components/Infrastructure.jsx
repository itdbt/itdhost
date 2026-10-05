import React from 'react';
import { Shield, Server, Activity, Wifi, Lock, Zap, HardDrive, CheckCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';

export default function Infrastructure() {
  const infraStats = [
    { label: "Veri Merkezi Standardı", value: "Tier III+", desc: "Yedekli enerji ve iklimlendirme" },
    { label: "DDoS Filtreleme Kapasitesi", value: "10+ Gbps", desc: "Voxility donanımsal koruma" },
    { label: "İnternet Omurga Erişimi", value: "Yedekli 40 Gbps", desc: "Türk Telekom, Turkcell & DE-CIX" },
    { label: "Ortalama Yurt İçi Ping", value: "< 3 ms", desc: "Türkiye içi ultra düşük gecikme" },
  ];

  return (
    <section id="datacenter" className="py-20 relative bg-[#070D18] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-300 text-xs font-mono font-semibold">
              <Activity className="w-3.5 h-3.5" />
              <span>GÜÇLÜ VE KESİNTİSİZ ALTYAPI</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              İstanbul Veri Merkezinde <br />
              <span className="text-cyan-400">Kurumsal Güvenlik & Hız</span>
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              <strong className="text-white">{COMPANY_INFO.domain}</strong> sunucuları, Türkiye'nin en gelişmiş veri merkezi standartlarına sahip olan İstanbul Tier III+ tesisinde barındırılmaktadır. 2N+1 yedekli jeneratörler, iklimlendirme sistemleri ve doğrudan yerel fiber omurgaya bağlıdır.
            </p>

            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white text-sm font-semibold">Donanımsal Voxility DDoS Kalkanı</h4>
                  <p className="text-xs text-slate-400">Yurt dışı ve yurt içi kaynaklı TCP/UDP SYN/ACK ve DNS Flood saldırıları sunucunuza ulaşmadan temizlenir.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white text-sm font-semibold">Samsung Enterprise NVMe Gen4 Depolama</h4>
                  <p className="text-xs text-slate-400">Geleneksel SATA SSD'lere kıyasla 14 kat daha yüksek IOPS ve okuma/yazma hızı ile veritabanı darboğazına son verin.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white text-sm font-semibold">DE-CIX İstanbul & Türk Telekom Peering</h4>
                  <p className="text-xs text-slate-400">Ziyaretçileriniz sitenize bağlanırken yurt dışına çıkmadan doğrudan yerel fiber üzerinden 1-4 ms ping ile ulaşır.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Dashboard */}
          <div className="lg:col-span-6">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-brand-border/80 shadow-2xl relative">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
                  <span className="text-sm font-bold text-white font-mono">EDGE-CORE-ROUTER-IST01</span>
                </div>
                <span className="text-xs bg-emerald-950 text-emerald-300 border border-emerald-800 px-2 py-0.5 rounded font-mono">
                  SLA: %99.99
                </span>
              </div>

              {/* Ping & Telemetry Display */}
              <div className="grid grid-cols-2 gap-4 my-6">
                {infraStats.map((stat, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                    <span className="text-[11px] text-slate-400 block">{stat.label}</span>
                    <strong className="text-xl font-bold text-cyan-400 font-mono block mt-1">{stat.value}</strong>
                    <span className="text-[10px] text-slate-500 mt-1 block">{stat.desc}</span>
                  </div>
                ))}
              </div>

              {/* Console Status Box */}
              <div className="rounded-xl bg-[#050912] p-4 border border-slate-800 font-mono text-xs space-y-1 text-slate-400">
                <div className="flex items-center justify-between text-slate-500 text-[10px] pb-1 border-b border-slate-800/80 mb-2">
                  <span>CANLI TELEMETRİ MONİTÖRÜ</span>
                  <span>STATUS: HEALTHY</span>
                </div>
                <div className="text-emerald-400">[OK] BGP Session 1 (Türk Telekom AS9121) - 10 Gbps Active</div>
                <div className="text-emerald-400">[OK] BGP Session 2 (Turkcell Superonline AS34984) - 10 Gbps Active</div>
                <div className="text-cyan-400">[INFO] Voxility Scrubbing Center Scrubbing Status: Standby/Passing Clean Traffic</div>
                <div className="text-slate-300">[METRIC] Current Latency to Istanbul: 1.82 ms | Ankara: 6.40 ms | Izmir: 7.10 ms</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
