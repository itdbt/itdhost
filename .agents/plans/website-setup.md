# itd.net.tr Web Sitesi Geliştirme Planı

## 1. Proje Altyapısı
- React + Vite projesinin oluşturulması
- Tailwind CSS ve Lucide React ikon setinin yapılandırılması
- Tipografi, kurumsal renk paleti (Derin Lacivert & Camgöbeği) ve animasyon sınıflarının eklenmesi

## 2. Bileşenler ve Sayfa Mimarisi
- **Header & Navigation**: Logo (ITD Bilişim / itd.net.tr), Menü (Sanal Sunucu, Web Hosting, Google Workspace, Veri Merkezi, İletişim), Hızlı Müşteri Paneli Girişi, WhatsApp Butonu.
- **Hero Section**: Güçlü kurumsal slogan, anlık canlı ağ metrikleri (%99.99 Uptime, Tier III İstanbul DC, NVMe Gen4 Hızı, 10Gbps DDoS Koruması), CTA butonları.
- **Alan Adı (Domain) Arama Modülü**: .com, .com.tr, .net.tr, .org gibi popüler uzantıların canlı sorgulama simülasyonu ve fiyat listesi.
- **Sanal Sunucu (VDS / Cloud VPS) Konfigüratörü**:
  - CPU (vCPU), RAM (GB), NVMe Disk (GB) ve Trafik için dinamik interaktif slider / konfigüratör.
  - Hazır popüler VDS paketleri (VDS-1, VDS-2, VDS-3, VDS Pro).
  - İşletim sistemi seçimi (Ubuntu, Debian, AlmaLinux, Windows Server).
- **Web Hosting Çözümleri**:
  - cPanel / Plesk / DirectAdmin destekli NVMe Web Hosting paketleri (Bireysel, Ticari, Kurumsal).
  - Aylık / Yıllık indirimli fiyat toggle switch.
  - WordPress hızlandırma, LiteSpeed & Ücretsiz SSL özellikleri.
- **Google Workspace Yetkili Çözümleri**:
  - Business Starter, Business Standard, Business Plus ve Kurumsal planlar.
  - Kullanıcı başı fiyatlandırma, depolama, Meet kapasitesi ve güvenlik avantajları.
  - Kurumsal e-posta taşıma ve kurulum desteği rozeti.
- **Veri Merkezi & Ağ Altyapısı**: İstanbul Equinix / Tier III altyapısı, doğrudan Türk Telekom & Turkcell omurgası, düşük gecikme (ping).
- **Hızlı Sipariş / Teklif Alma & İletişim Modalı**:
  - Seçilen paketi otomatik olarak forma veya WhatsApp mesajına aktaran akıllı akış.
  - Kurumsal iletişim bilgileri, adres, telefon, e-posta, vergi no alanı.
- **SSS (Sıkça Sorulan Sorular)** ve **Footer**: Sözleşmeler, KVKK, hizmet şartları, iletişim kanalları.

## 3. Doğrulama ve Test
- `npm.cmd run build` ile hatasız derleme kontrolü.
- Responsive görünüm (mobil, tablet, masaüstü) doğrulaması.
- `HANDOFF.md` güncellenmesi.
