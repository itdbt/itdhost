import React, { useState } from 'react';
import { Search, CheckCircle2, AlertCircle, ArrowRight, Sparkles } from 'lucide-react';
import { DOMAIN_EXTENSIONS } from '../data/products';

export default function DomainSearch({ onOpenContact }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedExt, setSelectedExt] = useState('.com.tr');
  const [searchResult, setSearchResult] = useState(null);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const cleanTerm = searchTerm.trim().toLowerCase().replace(/^(https?:\/\/)?(www\.)?/, '').split('.')[0];
    if (!cleanTerm) return;

    setIsSearching(true);
    setSearchResult(null);

    setTimeout(() => {
      setIsSearching(false);
      // Deterministic simulation
      const isTaken = ['google', 'apple', 'microsoft', 'itd', 'turkhost', 'hosting'].includes(cleanTerm);
      const fullDomain = `${cleanTerm}${selectedExt}`;
      const extInfo = DOMAIN_EXTENSIONS.find(item => item.ext === selectedExt) || DOMAIN_EXTENSIONS[0];

      setSearchResult({
        domain: fullDomain,
        isAvailable: !isTaken,
        price: extInfo.price,
        ext: selectedExt,
      });
    }, 600);
  };

  return (
    <section id="domain" className="py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-brand-border/80 shadow-2xl relative overflow-hidden">
          {/* Subtle decoration */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-3xl mx-auto text-center mb-8">
            <span className="text-cyan-400 font-mono text-xs uppercase tracking-wider font-semibold">Alan Adı Tescili</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              İdeal Alan Adınızı <span className="text-cyan-400">itd.net.tr</span> ile Keşfedin
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              .com.tr ve .net.tr alan adları artık belgesiz ve anında tescil edilebilir durumda.
            </p>
          </div>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center gap-2 p-2 rounded-2xl bg-[#091122] border border-slate-700/80 focus-within:border-cyan-500 shadow-inner transition-colors">
              <div className="flex items-center gap-3 w-full px-3 py-2">
                <Search className="w-5 h-5 text-slate-400 shrink-0" />
                <input
                  type="text"
                  placeholder="Hayalinizdeki alan adını yazın (örn: sirketim)"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-transparent text-white placeholder-slate-500 focus:outline-none text-base"
                />
              </div>

              {/* TLD Dropdown */}
              <div className="flex items-center w-full sm:w-auto gap-2 justify-end px-2">
                <select
                  value={selectedExt}
                  onChange={(e) => setSelectedExt(e.target.value)}
                  className="bg-slate-800 text-cyan-300 font-mono text-sm font-semibold rounded-xl px-3 py-2.5 border border-slate-700 focus:outline-none cursor-pointer"
                >
                  {DOMAIN_EXTENSIONS.map((item) => (
                    <option key={item.ext} value={item.ext}>
                      {item.ext} (${item.price})
                    </option>
                  ))}
                </select>

                <button
                  type="submit"
                  disabled={isSearching || !searchTerm.trim()}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 transition-all flex items-center justify-center gap-1.5 disabled:opacity-50 shrink-0"
                >
                  {isSearching ? (
                    <div className="w-5 h-5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <span>Sorgula</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>

          {/* Search Result Feedback */}
          {searchResult && (
            <div className="max-w-2xl mx-auto mt-6 animate-fadeIn">
              {searchResult.isAvailable ? (
                <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-600/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                    <div>
                      <div className="text-white font-bold text-base sm:text-lg flex items-center gap-2">
                        <span>{searchResult.domain}</span>
                        <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-medium">Müsait!</span>
                      </div>
                      <div className="text-xs text-slate-300 mt-0.5">
                        Yıllık sadece <strong className="text-emerald-300 font-semibold">${searchResult.price}</strong> ile hemen tescil edin.
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => onOpenContact(`Alan Adı Tescili: ${searchResult.domain}`)}
                    className="w-full sm:w-auto px-5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors shrink-0 shadow-lg shadow-emerald-500/20"
                  >
                    Hemen Tescil Et
                  </button>
                </div>
              ) : (
                <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-600/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="w-6 h-6 text-amber-400 shrink-0" />
                    <div>
                      <div className="text-white font-bold text-base sm:text-lg flex items-center gap-2">
                        <span>{searchResult.domain}</span>
                        <span className="text-xs bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full font-medium">Dolu</span>
                      </div>
                      <div className="text-xs text-slate-300 mt-0.5">
                        Bu alan adı daha önce tescil edilmiş. Sahiplik sorgusu, transfer veya alternatif uzantılar için destek alın.
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => onOpenContact(`Alan Adı Transfer / Sorgu: ${searchResult.domain}`)}
                    className="w-full sm:w-auto px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-colors shrink-0"
                  >
                    Transfer / Danışmanlık
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Popular Extension Badges */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {DOMAIN_EXTENSIONS.map((ext) => (
              <div
                key={ext.ext}
                onClick={() => {
                  setSelectedExt(ext.ext);
                  if (searchTerm) {
                    handleSearch({ preventDefault: () => {} });
                  }
                }}
                className={`cursor-pointer px-4 py-2.5 rounded-xl border transition-all text-center flex flex-col items-center min-w-[100px] ${
                  selectedExt === ext.ext
                    ? 'bg-cyan-950/70 border-cyan-500 text-white shadow-md shadow-cyan-500/10'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                <div className="font-mono font-bold text-sm sm:text-base text-cyan-400">{ext.ext}</div>
                <div className="text-xs font-semibold text-white mt-0.5">${ext.price} <span className="text-[10px] text-slate-400 font-normal">/yıl</span></div>
                {ext.popular && (
                  <span className="text-[9px] uppercase tracking-wider text-emerald-400 font-medium mt-1">Öne Çıkan</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
