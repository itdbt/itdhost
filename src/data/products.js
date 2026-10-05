export const COMPANY_INFO = {
  name: "ITD Host & Bilişim",
  domain: "itd.net.tr",
  phone: "+90 (212) 982 72 66",
  whatsapp: "+90 501 604 50 70",
  whatsappUrl: "https://wa.me/905016045070",
  email: "destek@itd.net.tr",
  salesEmail: "satis@itd.net.tr",
  address: "Fulya Mh. Büyükdere cd. No:76 Fairmont Quasar, D:118, Şişli İstanbul - Türkiye",
  datacenter: "İstanbul Equinix / Tier III+ Veri Merkezi",
  uptime: "%99.99",
  panelUrl: "https://panel.itd.net.tr",
};

export const DOMAIN_EXTENSIONS = [
  { ext: ".com.tr", price: "4.99", oldPrice: "6.99", popular: true, note: "Belgesiz & Anında Tahsis" },
  { ext: ".net.tr", price: "5.99", oldPrice: "7.99", popular: true, note: "Kurumsal Ağ & IT Tercihi" },
  { ext: ".com", price: "11.99", oldPrice: "14.99", popular: true, note: "En Popüler Global Uzantı" },
  { ext: ".net", price: "13.99", oldPrice: "16.99", popular: false, note: "Teknoloji & Altyapı" },
  { ext: ".org", price: "12.99", oldPrice: "15.99", popular: false, note: "Kurumlar & Topluluklar" },
  { ext: ".io", price: "34.99", oldPrice: "39.99", popular: false, note: "Yazılım & Startup" },
];

export const VDS_PLANS = [
  {
    id: "vds-1",
    name: "Cloud VDS-1",
    badge: "Giriş Seviye",
    cpu: "2 vCPU",
    ram: "4 GB DDR4",
    disk: "50 GB NVMe SSD",
    traffic: "2 TB Trafik",
    port: "1 Gbit/s Port",
    priceMonthly: 79.90,
    priceYearly: 59.90,
    features: [
      "İstanbul Tier III Veri Merkezi",
      "Ücretsiz DDoS Koruması (Voxility)",
      "1 Adet Sabit Statik IPv4",
      "Anında Otomatik Kurulum",
      "Yeniden Başlatma & Format Paneli",
      "Linux (Ubuntu, Debian, AlmaLinux)"
    ],
    popular: false,
  },
  {
    id: "vds-2",
    name: "Cloud VDS-2",
    badge: "En Çok Tercih Edilen",
    cpu: "4 vCPU",
    ram: "8 GB DDR4",
    disk: "100 GB NVMe SSD",
    traffic: "4 TB Trafik",
    port: "1 Gbit/s Port",
    priceMonthly: 149.90,
    priceYearly: 119.90,
    features: [
      "İstanbul Tier III Veri Merkezi",
      "Gelişmiş 10 Gbps DDoS Koruması",
      "1 Adet Sabit Statik IPv4",
      "Anında Otomatik Kurulum",
      "Gelişmiş Web Yönetim Konsolu",
      "Linux & Windows Server Desteği",
      "Haftalık Otomatik İmaj Yedeği"
    ],
    popular: true,
  },
  {
    id: "vds-3",
    name: "Cloud VDS-3",
    badge: "Yüksek Güç",
    cpu: "6 vCPU",
    ram: "16 GB DDR4",
    disk: "200 GB NVMe SSD",
    traffic: "Limitsiz Trafik",
    port: "1 Gbit/s Port",
    priceMonthly: 249.90,
    priceYearly: 199.90,
    features: [
      "İstanbul Tier III Veri Merkezi",
      "Gelişmiş 10 Gbps DDoS Koruması",
      "2 Adet Sabit Statik IPv4",
      "Anında Otomatik Kurulum",
      "Gelişmiş Web Yönetim Konsolu",
      "Linux & Windows Server Desteği",
      "Haftalık Otomatik İmaj Yedeği",
      "Öncelikli 7/24 Teknik Destek"
    ],
    popular: false,
  },
  {
    id: "vds-pro",
    name: "Cloud VDS Ultra",
    badge: "Kurumsal Performans",
    cpu: "8 vCPU AMD EPYC",
    ram: "32 GB DDR4 ECC",
    disk: "400 GB NVMe Gen4",
    traffic: "Limitsiz Trafik",
    port: "10 Gbit/s Port",
    priceMonthly: 449.90,
    priceYearly: 369.90,
    features: [
      "İstanbul Tier III Veri Merkezi",
      "Özel Donanımsal DDoS Filtreleme",
      "4 Adet Sabit Statik IPv4",
      "Birebir Ayrılmış Donanım Kaynağı",
      "Linux & Windows Server Desteği",
      "Günlük Snapshot & Harici Yedek",
      "SLA Garantili Kurumsal Destek"
    ],
    popular: false,
  },
];

export const HOSTING_PLANS = [
  {
    id: "host-starter",
    name: "Başlangıç Web Hosting",
    description: "Kişisel web siteleri, bloglar ve tekil projeler için ideal.",
    priceMonthly: 24.90,
    priceYearly: 17.90,
    popular: false,
    specs: [
      { name: "Web Sitesi Barındırma", value: "1 Adet Site" },
      { name: "NVMe SSD Disk", value: "10 GB Ultra Hızlı" },
      { name: "Aylık Trafik", value: "Limitsiz" },
      { name: "Kurumsal E-Posta", value: "5 Adet Hesap" },
      { name: "Ücretsiz SSL Sertifikası", value: "Ömür Boyu Ücretsiz Let's Encrypt" },
      { name: "cPanel & LiteSpeed Hızlandırma", value: "Dahil" },
      { name: "Otomatik Günlük Yedek", value: "7 Günlük Geri Dönüş" },
    ]
  },
  {
    id: "host-business",
    name: "Profesyonel Hosting",
    badge: "En Çok Satan",
    description: "KOBİ'ler, e-ticaret siteleri ve yüksek ziyaretçi alan portallar için.",
    priceMonthly: 44.90,
    priceYearly: 34.90,
    popular: true,
    specs: [
      { name: "Web Sitesi Barındırma", value: "5 Adet Site" },
      { name: "NVMe SSD Disk", value: "30 GB Ultra Hızlı" },
      { name: "Aylık Trafik", value: "Limitsiz" },
      { name: "Kurumsal E-Posta", value: "25 Adet Hesap" },
      { name: "Ücretsiz SSL Sertifikası", value: "Tüm Siteler İçin Ücretsiz" },
      { name: "cPanel & LiteSpeed Web Server", value: "Dahil (LSCache Destekli)" },
      { name: "Yüksek CPU & RAM Limiti", value: "2 Çekirdek / 3 GB RAM" },
      { name: "Otomatik Günlük Yedek", value: "14 Günlük Geri Dönüş" },
    ]
  },
  {
    id: "host-enterprise",
    name: "Kurumsal Mega Hosting",
    description: "Çoklu proje barındıran ajanslar ve kurumsal şirketler için.",
    priceMonthly: 79.90,
    priceYearly: 59.90,
    popular: false,
    specs: [
      { name: "Web Sitesi Barındırma", value: "Limitsiz Site" },
      { name: "NVMe SSD Disk", value: "75 GB Ultra Hızlı" },
      { name: "Aylık Trafik", value: "Limitsiz" },
      { name: "Kurumsal E-Posta", value: "Limitsiz Hesap" },
      { name: "Ücretsiz SSL Sertifikası", value: "Tüm Siteler İçin Ücretsiz" },
      { name: "cPanel & LiteSpeed Web Server", value: "Maksimum Hız Profili" },
      { name: "Yüksek CPU & RAM Limiti", value: "4 Çekirdek / 6 GB RAM" },
      { name: "Otomatik Günlük Yedek", value: "30 Günlük Geri Dönüş" },
      { name: "Özel IP Adresi", value: "Ücretsiz 1 Adet Dedicated IP" },
    ]
  },
];

export const WORKSPACE_PLANS = [
  {
    id: "ws-starter",
    name: "Business Starter",
    badge: "Küçük Ekipler",
    pricePerUser: 6, // USD / kullanıcı / ay
    storage: "Kullanıcı Başı 30 GB Bulut Depolama",
    meetCapacity: "100 Katılımcılı HD Görüntülü Toplantı",
    popular: false,
    features: [
      "Özel şirket uzantılı e-posta (adiniz@itd.net.tr)",
      "Gmail, Drive, Meet, Takvim, Chat, Dokümanlar, E-Tablolar",
      "Gelişmiş spam ve kimlik avı koruması (%99.9 engel)",
      "Standart Güvenlik ve Yönetici Denetimleri",
      "Mobil cihaz yönetimi",
      "ITD Host Ücretsiz Geçiş ve DNS Kurulum Desteği"
    ]
  },
  {
    id: "ws-standard",
    name: "Business Standard",
    badge: "Önerilen / En Popüler",
    pricePerUser: 12, // USD / kullanıcı / ay
    storage: "Kullanıcı Başı 2 TB (2.000 GB) Bulut Depolama",
    meetCapacity: "150 Katılımcı + Toplantı Kaydı (Google Drive)",
    popular: true,
    features: [
      "Özel şirket uzantılı e-posta (adiniz@itd.net.tr)",
      "Geniş 2 TB depolama ve Ortak Drive (Team Drive) desteği",
      "Gelişmiş Google Meet: Kayıt alma, gürültü engelleme",
      "Tüm ofis uygulamaları ve gerçek zamanlı iş birliği",
      "Merkezi yönetici konsolu ve veri saklama kuralları",
      "ITD Host Öncelikli 7/24 Teknik Danışmanlık ve Kurulum"
    ]
  },
  {
    id: "ws-plus",
    name: "Business Plus",
    badge: "Kurumsal Güvenlik",
    pricePerUser: 18, // USD / kullanıcı / ay
    storage: "Kullanıcı Başı 5 TB (5.000 GB) Bulut Depolama",
    meetCapacity: "500 Katılımcı + Kayıt + Katılım Takibi",
    popular: false,
    features: [
      "Özel şirket uzantılı e-posta (adiniz@itd.net.tr)",
      "Kullanıcı başı 5 TB devasa depolama alanı",
      "Google Vault ile e-keşif ve yasal veri arşivleme",
      "Gelişmiş Uç Nokta Yönetimi (Cihaz güvenliği & uzaktan silme)",
      "Veri Kaybı Önleme (DLP) kuralları",
      "SLA Garantili Kurumsal Destek ve ITD Özel Hesap Yöneticisi"
    ]
  }
];

export const FAQS = [
  {
    q: "Sanal Sunucu (VDS) siparişim ne kadar sürede aktif olur?",
    a: "itd.net.tr altyapısında tüm Sanal Sunucular (VDS) ödeme onayının hemen ardından otomatik provizyon sistemi sayesinde ortalama 60-90 saniye içinde kurularak IP ve giriş bilgileri e-posta adresinize iletilir."
  },
  {
    q: "Mevcut web sitemi ve e-postalarımı itd.net.tr'ye ücretsiz taşıyor musunuz?",
    a: "Evet! Başka bir hosting veya sunucu firmasındaki cPanel, Plesk veya DirectAdmin altyapılı web sitelerinizi ve e-posta hesaplarınızı uzman teknik ekibimiz sıfır kesintiyle tamamen ücretsiz olarak taşımaktadır."
  },
  {
    q: "Google Workspace kurulumunu ve DNS yönlendirmelerini siz mi yapıyorsunuz?",
    a: "Kesinlikle. Alan adınızın (itd.net.tr veya kendi domaininiz) MX, SPF, DKIM ve DMARC kayıtlarını sizin adınıza eksiksiz yapılandırıyor, eski e-postalarınızı Gmail altyapısına taşıyor ve kullanıcı hesaplarınızı kullanıma hazır teslim ediyoruz."
  },
  {
    q: "Sunucularınız hangi veri merkezinde ve hangi donanımlarla barındırılıyor?",
    a: "Sunucu altyapımız İstanbul Equinix / Tier III+ veri merkezinde, kurumsal Intel Xeon Gold ve AMD EPYC işlemciler, Samsung Enterprise NVMe Gen4 diskler ve yedekli 10 Gbps Türk Telekom / Turkcell omurga bağlantıları üzerinde çalışmaktadır."
  },
  {
    q: "DDoS saldırılarına karşı koruma sağlıyor musunuz?",
    a: "Tüm VDS ve Web Hosting hizmetlerimizde Voxility ve donanımsal Arbor koruma kalkanı standart ve ücretsiz olarak aktiftir. Sunucularınız yurt içi ve yurt dışı kaynaklı hacimli saldırılara karşı 7/24 kesintisiz korunur."
  },
  {
    q: "Fiyatlar USD bazında mı? Fatura kesiliyor mu?",
    a: "Tüm fiyatlarımız döviz kurlarındaki dalgalanmalara karşı şeffaf bir şekilde USD cinsinden belirlenmiştir. Sipariş esnasında güncel TCMB döviz kuruyla Türk Lirası veya USD olarak e-fatura/e-arşiv fatura düzenlenir."
  }
];
