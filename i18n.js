(() => {
  const STORAGE_KEY = 'mikduck_site_lang'
  const SUPPORTED = ['id', 'en']

  const dict = {
    id: {
      'meta.homeTitle': 'mikduck — Aplikasi Hotspot MikroTik Manager Open Source | Alternatif MikhMon',
      'meta.homeDesc':
        'mikduck adalah aplikasi desktop open source untuk kelola hotspot MikroTik: generate voucher, print, profile, user aktif realtime, dan finance. Alternatif modern MikhMon tanpa web server PHP. Gratis untuk Windows & Linux.',
      'meta.downloadTitle': 'Download mikduck Gratis — Hotspot Manager MikroTik Windows & Linux',
      'meta.downloadDesc':
        'Unduh mikduck gratis untuk Windows dan Linux. Installer & portable open source untuk generate voucher hotspot MikroTik, print, dan dashboard realtime. Alternatif MikhMon tanpa PHP.',
      'meta.changelogTitle': 'Changelog mikduck — Catatan Rilis Hotspot Manager MikroTik',
      'meta.changelogDesc':
        'Catatan rilis resmi mikduck: fitur baru, perbaikan bug, dan perubahan per versi aplikasi hotspot manager MikroTik open source.',
      'meta.partnersTitle': 'Partners mikduck — Partner & Pendukung Open Source Hotspot Manager',
      'meta.partnersDesc':
        'Daftar partner dan pendukung yang membantu pengembangan mikduck, aplikasi open source untuk mengelola hotspot MikroTik.',
      'meta.sponsorsTitle': 'Sponsorship mikduck — Dukung Open Source Hotspot Manager MikroTik',
      'meta.sponsorsDesc':
        'Sponsori mikduck: dukung pengembangan hotspot manager MikroTik open source lewat sponsorship, partnership, atau donasi kopi. Hubungi sponsors@mikduck.dev.',
      'meta.faqTitle': 'FAQ mikduck — Install, Connect API MikroTik & Beda dengan MikhMon',
      'meta.faqDesc':
        'Pertanyaan umum mikduck: cara install, connect RouterOS API port 8728, penyimpanan data lokal SQLite, apakah gratis/AGPL-3.0, dan perbedaan dengan MikhMon PHP.',
      'meta.timelineTitle': 'Timeline & Roadmap mikduck — Rencana Fitur Hotspot MikroTik',
      'meta.timelineDesc':
        'Roadmap mikduck: MVP, stabilisasi, packaging Linux, dan fitur lanjutan untuk aplikasi hotspot manager MikroTik open source.',
      'meta.pengajuanTitle': 'Pengajuan Fitur & Bug — mikduck Hotspot MikroTik',
      'meta.pengajuanDesc':
        'Ajukan fitur baru, laporkan bug, atau minta template voucher untuk mikduck. Form terhubung ke GitHub Issues proyek open source hotspot MikroTik.',
      'meta.coffeeTitle': 'Buy me a coffee — Dukung Pengembangan mikduck',
      'meta.coffeeDesc':
        'Traktir kopi untuk dukung pengembangan mikduck. Proyek tetap open source, gratis, dan fokus kelola hotspot MikroTik tanpa web server.',
      'meta.demoTitle': 'Live Demo mikduck — Coba UI Hotspot Manager MikroTik',
      'meta.demoDesc':
        'Coba antarmuka mikduck secara interaktif tanpa router: dashboard, voucher, dan alur hotspot manager ala MikhMon yang modern.',

      'common.skip': 'Lewati ke konten',
      'common.loading': 'Memuat…',
      'common.lang': 'Bahasa',
      'common.theme': 'Tema',
      'common.light': 'Light',
      'common.dark': 'Dark',
      'common.system': 'System',
      'common.comingSoon': 'Coming soon',
      'common.latest': 'Terbaru',
      'common.unavailable': 'Tidak tersedia',
      'common.officialVersion': 'Versi resmi saat ini.',

      'nav.home': 'Home',
      'nav.download': 'Download',
      'nav.changelog': 'Changelog',
      'nav.partners': 'Partners',
      'nav.sponsors': 'Sponsors',
      'nav.faq': 'FAQ',
      'nav.timeline': 'Timeline',
      'nav.pengajuan': 'Pengajuan',
      'nav.coffee': 'Buy me a coffee',
      'nav.demo': 'Live demo',
      'nav.main': 'Utama',
      'nav.menu': 'Menu',
      'nav.downloadCta': 'Unduh',
      'nav.brandHome': 'mikduck beranda',

      'footer.tagline': 'Open source MikroTik Hotspot Manager. Bukan produk resmi MikroTik.',
      'footer.product': 'Produk',
      'footer.community': 'Komunitas',
      'footer.partners': 'Our Partners',
      'footer.sponsors': 'Sponsorship',
      'footer.madeIn': 'Made in Indonesia',

      'home.heroTitle': 'Kelola hotspot MikroTik tanpa web server',
      'home.heroSubtitle':
        'Aplikasi desktop open source untuk generate voucher, print, dan pantau user aktif — alur kerja familiar ala MikhMon, dibangun modern.',
      'home.ctaDownload': 'Unduh sekarang',
      'home.ctaDemo': 'Live demo',
      'home.meta': 'AGPL-3.0 · Open source · Windows & Linux',
      'home.featuresTitle': 'Apa saja yang bisa dilakukan',
      'home.featuresLead': 'Siap operasional warnet & hotspot harian — tanpa setup PHP/Apache.',
      'home.f1Title': 'Voucher & Quick Print',
      'home.f1Body': 'Generate massal, cetak thermal/A4, template kustom, dan riwayat print.',
      'home.f2Title': 'Dashboard realtime',
      'home.f2Body': 'CPU, RAM, user aktif lewat WebSocket — status live tanpa refresh manual.',
      'home.f3Title': 'Profile hotspot',
      'home.f3Body': 'Validity, rate limit, expired mode (Remove & Record), lock MAC, script on-login.',
      'home.f4Title': 'Online · Binding · Cookies',
      'home.f4Body': 'Kick user, binding/unbinding MAC, cookies hotspot, copy MAC/IP cepat.',
      'home.f5Title': 'Finance',
      'home.f5Body': 'Income/expense manual + sync script Mikhmon dari router (dedupe ros_key).',
      'home.f6Title': 'DHCP · Queue · Tools',
      'home.f6Body': 'DHCP leases, queues (read-only), IP services, tools router.',
      'home.f7Title': 'Hak akses granular',
      'home.f7Body': 'Login app + role: batasi generate, hapus, print, finance per operator (API-enforced).',
      'home.f8Title': 'Multi-router & tema',
      'home.f8Body': 'Simpan beberapa router lokal, Switch Router sheet, Light/Dark · ID/EN.',
      'home.vsTitle': 'mikduck vs MikhMon',
      'home.vsLead': 'Alur hotspot familiar — stack & pengalaman beda total. Tabel fitur operasional:',
      'home.vsColFeature': 'Fitur',
      'home.vsR1': 'Cara jalan',
      'home.vsR1d': 'Desktop installer (Electron) — tanpa PHP',
      'home.vsR1m': 'Web + Apache/Nginx + PHP',
      'home.vsR2': 'Generate & print voucher',
      'home.vsR2d': 'Ya · Quick Print · template · riwayat',
      'home.vsR2m': 'Ya · klasik & matang',
      'home.vsR3': 'Profile hotspot',
      'home.vsR3d': 'Ya · Expired / Record / lock MAC',
      'home.vsR3m': 'Ya',
      'home.vsR4': 'User online / kick',
      'home.vsR4d': 'Ya · WebSocket live',
      'home.vsR4m': 'Ya · refresh / polling',
      'home.vsR5': 'MAC binding',
      'home.vsR5d': 'Binding / Unbinding di UI',
      'home.vsR5m': 'Ya',
      'home.vsR6': 'Finance / report jual',
      'home.vsR6d': 'Manual + sync script Mikhmon',
      'home.vsR6m': 'Ya (pola komunitas)',
      'home.vsR7': 'Hak akses operator',
      'home.vsR7d': 'Role granular di API',
      'home.vsR7m': 'Admin-style klasik',
      'home.vsR8': 'Tema & bahasa',
      'home.vsR8d': 'Light / Dark / System · ID & EN',
      'home.vsR8m': 'UI web klasik',
      'home.vsR9': 'DHCP / queue / tools',
      'home.vsR9d': 'Ya (terintegrasi di app)',
      'home.vsR9m': 'Tergantung setup / plugin',
      'home.vsR10': 'Stack',
      'home.vsDuckCta': 'Unduh mikduck',
      'home.vsFootnote': 'mikduck menghormati MikhMon sebagai referensi alur hotspot — bukan pengganti wajib.',
      'home.partnersTitle': 'Our Partners',
      'home.partnersLead': 'Partner & pendukung yang membantu mikduck tumbuh. Slot masih terbuka.',
      'home.partnersLoading': 'Memuat partners…',
      'home.partnersMoreHtml':
        'Lihat semua di <a href="./partners.html">halaman Partners</a> · <a href="./sponsors.html">jadi sponsor</a>',
      'home.exploreTitle': 'Jelajahi situs',
      'home.exploreLead': 'Download, changelog, partners, sponsorship, FAQ, dan lainnya.',
      'home.linkDl': 'Unduh versi terbaru — Windows & Linux.',
      'home.linkCl': 'Catatan rilis tiap versi.',
      'home.linkPartners': 'Partner & pendukung proyek.',
      'home.linkSponsors': 'Tier dukungan & kolaborasi.',
      'home.linkTimeline': 'Roadmap MVP → stabil → lanjutan.',
      'home.linkFaq': 'Install, router API, dan data lokal.',

      'download.eyebrow': 'Download',
      'download.title': 'Unduh mikduck gratis',
      'download.lead':
        'Open source (AGPL-3.0). Hanya versi terbaru yang tersedia — sama seperti di app: tidak bisa skip / unduh versi lama.',
      'download.versionLabel': 'Versi tersedia',
      'download.loading': 'Memuat…',
      'download.winSetup': 'Windows Setup',
      'download.winPortable': 'Windows Portable',
      'download.linuxAppImage': 'Linux AppImage',
      'download.linuxDeb': 'Linux .deb',
      'download.mac': 'macOS',
      'download.macBuild': 'mikduck.dmg',
      'download.macMeta': 'Apple Silicon & Intel',
      'download.msStore': 'Unduh via Microsoft Store',
      'download.msStoreAria': 'Dapatkan mikduck di Microsoft Store',
      'download.metaPortable': 'Tanpa install · x64',
      'download.metaAppImage': 'Ubuntu & distro modern · x64',
      'download.footerHtml':
        'Catatan perubahan: <a href="./changelog.html">Changelog</a> · build dari sumber: <a href="https://github.com/mikduck/mikduck" rel="noopener noreferrer" target="_blank">repo</a> · unduhan resmi hanya versi terbaru (tidak ada skip versi).',
      'download.stepsTitle': 'Mulai dalam 3 langkah',
      'download.stepsLead': 'Tidak perlu USBWebserver, XAMPP, atau Docker hanya untuk jalanin aplikasi.',
      'download.step1Title': 'Install',
      'download.step1Body': 'Jalankan Setup di Windows, atau buka AppImage/.deb di Linux.',
      'download.step2Title': 'Buat admin',
      'download.step2Body': 'First-run: buat akun admin aplikasi (password minimal 8 karakter).',
      'download.step3Title': 'Connect router',
      'download.step3Body': 'Masukkan IP, user, password MikroTik. Pastikan API aktif di port 8728.',
      'download.reqTitle': 'Persyaratan',
      'download.reqLead': 'Minimal agar connect dan generate voucher berjalan lancar.',
      'download.req1': 'Windows 10/11 atau Linux desktop modern (x64)',
      'download.req2': 'MikroTik RouterOS dengan layanan API aktif (`/ip service` api)',
      'download.req3': 'Router & PC di jaringan yang saling mencapai (lokal)',
      'download.req4': 'Hak akses user MikroTik cukup untuk hotspot user/profile',
      'download.latestFmt': 'v{version} — terbaru{date}',
      'download.oldHint': 'Versi lama tidak lagi ditawarkan — unduh hanya versi terbaru.',
      'download.downloadLatest': 'Unduh v{version} (terbaru)',

      'changelog.eyebrow': 'Rilis',
      'changelog.title': 'Changelog',
      'changelog.lead':
        'Ringkasan perubahan tiap versi. Unduhan resmi hanya versi terbaru (tidak bisa skip versi).',
      'changelog.loading': 'Memuat catatan rilis…',
      'changelog.empty': 'Belum ada catatan rilis.',
      'changelog.footerHtml':
        'Detail teknis lengkap di repo: <a href="https://github.com/mikduck/mikduck/blob/main/CHANGELOG.md" rel="noopener noreferrer" target="_blank">CHANGELOG.md</a>',

      'partners.eyebrow': 'Our Partners',
      'partners.title': 'Partner & pendukung',
      'partners.lead':
        'Organisasi dan komunitas yang mendukung ekosistem mikduck. Dikelola dari panel platform.',
      'partners.featuredTitle': 'Featured partners',
      'partners.featuredLeadHtml': 'Data dari backend platform (<code>/api/partners</code>).',
      'partners.loading': 'Memuat partners…',
      'partners.ctaHtml': 'Mau logo Anda di sini? <a href="./sponsors.html">Lihat sponsorship</a>',
      'partners.emptyTitle': 'Your logo here',
      'partners.emptyBody': 'Jadi partner pertama',

      'sponsors.eyebrow': 'Sponsorship',
      'sponsors.title': 'Dukung & sponsori mikduck',
      'sponsors.lead':
        'Proyek tetap gratis (AGPL-3.0). Sponsorship membantu maintenance, packaging Linux, dan dokumentasi — tanpa paywall fitur.',
      'sponsors.coffeeName': 'Coffee',
      'sponsors.coffeeTitle': 'Sukarela',
      'sponsors.coffeePrice': 'Mulai dari kopi',
      'sponsors.coffee1': 'Ucapan terima kasih',
      'sponsors.coffee2': 'Bantu biaya tooling',
      'sponsors.coffeeCta': 'Buy me a coffee',
      'sponsors.sponsorName': 'Sponsor',
      'sponsors.sponsorTitle': 'Bulanan / tahunan',
      'sponsors.sponsorPrice': 'Hubungi kami',
      'sponsors.sponsor1': 'Logo di halaman Partners',
      'sponsors.sponsor2': 'Mention di release notes',
      'sponsors.sponsor3': 'Prioritas review issue (wajar)',
      'sponsors.sponsorCta': 'Ajukan sponsorship',
      'sponsors.partnerName': 'Partner',
      'sponsors.partnerTitle': 'Kolaborasi',
      'sponsors.partnerPrice': 'Custom',
      'sponsors.partner1': 'Integrasi / branding bersama',
      'sponsors.partner2': 'Workshop / dokumentasi bersama',
      'sponsors.partner3': 'Slot featured di Our Partners',
      'sponsors.partnerCta': 'Lihat partners',
      'sponsors.footerHtml':
        'Juga bisa lewat <a href="./coffee.html">Buy me a coffee</a> atau star &amp; kontribusi di <a href="https://github.com/mikduck/mikduck" rel="noopener noreferrer" target="_blank">GitHub</a>.',

      'faq.eyebrow': 'Bantuan',
      'faq.title': 'FAQ',
      'faq.lead':
        'Jawaban singkat soal instalasi, koneksi router, data, dan posisi mikduck dibanding MikhMon.',
      'faq.q1': 'mikduck itu apa?',
      'faq.a1':
        'Aplikasi desktop untuk mengelola hotspot MikroTik (voucher, profile, user aktif, print, finance) lewat RouterOS API. Mirip alur MikhMon, tapi tanpa web server PHP.',
      'faq.q2': 'Apakah harus bayar?',
      'faq.a2': 'Tidak. mikduck open source dengan lisensi AGPL-3.0. Donasi kopi opsional di halaman Coffee.',
      'faq.q3': 'Bedanya dengan MikhMon?',
      'faq.a3':
        'MikhMon berjalan di PHP + web server. mikduck adalah app desktop (Electron) dengan backend FastAPI dan UI React, plus hak akses granular dan dashboard WebSocket.',
      'faq.q4': 'Kenapa gagal connect ke MikroTik?',
      'faq.a4':
        'Cek IP/host, user/password, firewall, dan pastikan service API aktif (`/ip service enable api`). Default port biasanya 8728. PC harus bisa ping/reach router.',
      'faq.q5': 'Data disimpan di mana?',
      'faq.a5':
        'Lokal di perangkat Anda (SQLite). Di Windows biasanya di folder AppData aplikasi. Password router bisa dienkripsi lewat penyimpanan aman Electron.',
      'faq.q6': 'Apakah ini Radius / User Manager?',
      'faq.a6':
        'Bukan. mikduck mengelola hotspot user lokal di router (seperti pola MikhMon), bukan server Radius terpisah.',
      'faq.q7': 'Lupa password login aplikasi?',
      'faq.a7':
        'Ada skrip reset password lokal di repo (`reset-password`). Jangan share database ke orang lain jika berisi kredensial tersimpan.',
      'faq.q8': 'Linux sudah tersedia?',
      'faq.a8':
        'Target unduhan Linux ada di halaman Download. Packaging Linux terus dilanjutkan di roadmap — lihat Timeline.',
      'faq.q9': 'Mau minta fitur baru?',
      'faq.a9Html':
        'Isi formulir di <a href="./pengajuan.html">Pengajuan</a> atau buat issue di GitHub. Semakin jelas use-case, semakin mudah diprioritaskan.',

      'timeline.eyebrow': 'Perencanaan',
      'timeline.title': 'Timeline & roadmap',
      'timeline.lead':
        'Empat fase berikutnya sudah pasti (cloud member + marketplace login, PPP, tools++, Android/iOS). Jadwal pengerjaan mengikuti target donasi tiap fase — lihat juga halaman Coffee.',
      'timeline.done': 'Selesai',
      'timeline.now': 'Sekarang',
      'timeline.next': 'Berikutnya',
      'timeline.later': 'Nanti',
      'timeline.loading': 'Memuat roadmap…',
      'timeline.empty': 'Belum ada item roadmap.',
      'timeline.footerHtml':
        'Dukung fase berikutnya lewat <a href="./coffee.html">Coffee / donasi</a>. Usul detail: <a href="./pengajuan.html">Pengajuan</a>.',

      'pengajuan.eyebrow': 'Komunitas',
      'pengajuan.title': 'Pengajuan',
      'pengajuan.lead':
        'Usulkan fitur, laporkan bug, atau minta perbaikan alur. Form membuka draft issue GitHub agar mudah dilacak.',
      'pengajuan.jenis': 'Jenis',
      'pengajuan.optFitur': 'Permintaan fitur',
      'pengajuan.optBug': 'Laporan bug',
      'pengajuan.optTemplate': 'Template voucher / login',
      'pengajuan.optDocs': 'Dokumentasi',
      'pengajuan.optOther': 'Lainnya',
      'pengajuan.judul': 'Judul singkat',
      'pengajuan.judulPh': 'Contoh: Export laporan finance ke CSV',
      'pengajuan.detail': 'Detail',
      'pengajuan.detailPh':
        'Jelaskan kebutuhan, langkah reproduksi (untuk bug), atau contoh yang diharapkan.',
      'pengajuan.kontak': 'Kontak (opsional)',
      'pengajuan.kontakPh': 'Telegram / email',
      'pengajuan.hint': 'Kirim akan membuka GitHub Issues dengan judul & isi yang sudah terisi.',
      'pengajuan.ok': 'Draft issue dibuka di tab baru. Lanjutkan submit di GitHub.',
      'pengajuan.submit': 'Buat pengajuan',
      'pengajuan.issueJenis': 'Jenis',
      'pengajuan.issueDetail': 'Detail',
      'pengajuan.issueKontak': 'Kontak (opsional)',

      'coffee.eyebrow': 'Dukung proyek',
      'coffee.title': 'Buy me a coffee',
      'coffee.lead':
        'mikduck gratis dan open source. Kalau membantu operasional hotspot Anda, traktir kopi opsional — tanpa paywall, tanpa fitur premium tersembunyi.',
      'coffee.panelTitle': 'Satu kopi = waktu coding',
      'coffee.panelBody':
        'Donasi dipakai untuk waktu maintenance, fix bug, packaging Windows/Linux, dan dokumentasi. Aplikasi tetap AGPL-3.0 — siapa pun boleh pakai, fork, dan kontribusi.',
      'coffee.cta': 'Traktir di Buy Me a Coffee',
      'coffee.feedback': 'Kirim masukan gratis',
      'coffee.qrCaption': 'Scan QR untuk traktir kopi',
      'coffee.thanks': 'Terima kasih',
      'coffee.thanksBody': 'Setiap dukungan bantu roadmap bergerak lebih cepat.',
      'coffee.w1Title': 'Star di GitHub',
      'coffee.w1Body': 'Gratis. Bantu orang lain menemukan proyek ini.',
      'coffee.w2Title': 'Laporkan bug',
      'coffee.w2Body': 'Issue yang jelas lebih berharga daripada donasi tanpa konteks.',
      'coffee.w3Title': 'Sebarkan',
      'coffee.w3Body': 'Bagikan ke komunitas warnet / MikroTik di grup Anda.',

      'demo.hint': 'Data fiktif · tanpa router',
      'demo.back': 'Kembali',
      'demo.download': 'Unduh app',
      'demo.navLabel': 'Navigasi demo',
      'demo.connected': 'Terhubung',
    },

    en: {
      'meta.homeTitle': 'mikduck — Open Source MikroTik Hotspot Manager | MikhMon Alternative',
      'meta.homeDesc':
        'mikduck is an open-source desktop app to manage MikroTik hotspots: voucher generation, printing, profiles, realtime active users, and finance. A modern MikhMon alternative without a PHP web server. Free for Windows & Linux.',
      'meta.downloadTitle': 'Download mikduck Free — MikroTik Hotspot Manager for Windows & Linux',
      'meta.downloadDesc':
        'Download mikduck free for Windows and Linux. Open-source installer & portable builds to generate MikroTik hotspot vouchers, print, and monitor realtime dashboards. MikhMon alternative without PHP.',
      'meta.changelogTitle': 'mikduck Changelog — MikroTik Hotspot Manager Release Notes',
      'meta.changelogDesc':
        'Official mikduck release notes: new features, bug fixes, and changes per version of the open-source MikroTik hotspot manager.',
      'meta.partnersTitle': 'mikduck Partners — Supporters of the Open Source Hotspot Manager',
      'meta.partnersDesc':
        'Partners and supporters helping develop mikduck, the open-source app for managing MikroTik hotspots.',
      'meta.sponsorsTitle': 'Sponsor mikduck — Support Open Source MikroTik Hotspot Manager',
      'meta.sponsorsDesc':
        'Sponsor mikduck: support open-source MikroTik hotspot manager development via sponsorship, partnership, or coffee. Contact sponsors@mikduck.dev.',
      'meta.faqTitle': 'mikduck FAQ — Install, MikroTik API Connect & vs MikhMon',
      'meta.faqDesc':
        'Common mikduck questions: how to install, connect RouterOS API on port 8728, local SQLite storage, AGPL-3.0/free licensing, and differences from PHP MikhMon.',
      'meta.timelineTitle': 'mikduck Timeline & Roadmap — Hotspot MikroTik Feature Plans',
      'meta.timelineDesc':
        'mikduck roadmap: MVP, stabilization, Linux packaging, and upcoming features for the open-source MikroTik hotspot manager.',
      'meta.pengajuanTitle': 'Feature & Bug Requests — mikduck MikroTik Hotspot',
      'meta.pengajuanDesc':
        'Request features, report bugs, or ask for voucher templates for mikduck. The form opens GitHub Issues for the open-source MikroTik hotspot project.',
      'meta.coffeeTitle': 'Buy me a coffee — Support mikduck Development',
      'meta.coffeeDesc':
        'Buy a coffee to support mikduck development. The project stays open source, free, and focused on MikroTik hotspot management without a web server.',
      'meta.demoTitle': 'Live Demo mikduck — Try the MikroTik Hotspot Manager UI',
      'meta.demoDesc':
        'Try the mikduck UI interactively without a router: dashboard, vouchers, and a modern MikhMon-style hotspot manager workflow.',

      'common.skip': 'Skip to content',
      'common.loading': 'Loading…',
      'common.lang': 'Language',
      'common.theme': 'Theme',
      'common.light': 'Light',
      'common.dark': 'Dark',
      'common.system': 'System',
      'common.comingSoon': 'Coming soon',
      'common.latest': 'Latest',
      'common.unavailable': 'Unavailable',
      'common.officialVersion': 'Current official version.',

      'nav.home': 'Home',
      'nav.download': 'Download',
      'nav.changelog': 'Changelog',
      'nav.partners': 'Partners',
      'nav.sponsors': 'Sponsors',
      'nav.faq': 'FAQ',
      'nav.timeline': 'Timeline',
      'nav.pengajuan': 'Requests',
      'nav.coffee': 'Buy me a coffee',
      'nav.demo': 'Live demo',
      'nav.main': 'Main',
      'nav.menu': 'Menu',
      'nav.downloadCta': 'Download',
      'nav.brandHome': 'mikduck home',

      'footer.tagline': 'Open-source MikroTik Hotspot Manager. Not an official MikroTik product.',
      'footer.product': 'Product',
      'footer.community': 'Community',
      'footer.partners': 'Our Partners',
      'footer.sponsors': 'Sponsorship',
      'footer.madeIn': 'Made in Indonesia',

      'home.heroTitle': 'Manage MikroTik hotspots without a web server',
      'home.heroSubtitle':
        'An open-source desktop app to generate vouchers, print, and monitor active users — a familiar MikhMon-style workflow, built modern.',
      'home.ctaDownload': 'Download now',
      'home.ctaDemo': 'Live demo',
      'home.meta': 'AGPL-3.0 · Open source · Windows & Linux',
      'home.featuresTitle': 'What you can do',
      'home.featuresLead': 'Ready for daily warnet & hotspot ops — no PHP/Apache setup.',
      'home.f1Title': 'Vouchers & Quick Print',
      'home.f1Body': 'Bulk generate, thermal/A4 print, custom templates, and print history.',
      'home.f2Title': 'Realtime dashboard',
      'home.f2Body': 'CPU, RAM, and active users over WebSocket — live status without manual refresh.',
      'home.f3Title': 'Hotspot profiles',
      'home.f3Body': 'Validity, rate limit, expired mode (Remove & Record), MAC lock, on-login script.',
      'home.f4Title': 'Online · Binding · Cookies',
      'home.f4Body': 'Kick users, MAC binding/unbinding, hotspot cookies, quick MAC/IP copy.',
      'home.f5Title': 'Finance',
      'home.f5Body': 'Manual income/expense + sync Mikhmon scripts from the router (ros_key dedupe).',
      'home.f6Title': 'DHCP · Queue · Tools',
      'home.f6Body': 'DHCP leases, queues (read-only), IP services, router tools.',
      'home.f7Title': 'Granular access',
      'home.f7Body': 'App login + roles: limit generate, delete, print, finance per operator (API-enforced).',
      'home.f8Title': 'Multi-router & theme',
      'home.f8Body': 'Save multiple local routers, Switch Router sheet, Light/Dark · ID/EN.',
      'home.vsTitle': 'mikduck vs MikhMon',
      'home.vsLead': 'Familiar hotspot workflow — different stack & experience. Feature table:',
      'home.vsColFeature': 'Feature',
      'home.vsR1': 'How it runs',
      'home.vsR1d': 'Desktop installer (Electron) — no PHP',
      'home.vsR1m': 'Web + Apache/Nginx + PHP',
      'home.vsR2': 'Generate & print vouchers',
      'home.vsR2d': 'Yes · Quick Print · templates · history',
      'home.vsR2m': 'Yes · classic & mature',
      'home.vsR3': 'Hotspot profiles',
      'home.vsR3d': 'Yes · Expired / Record / MAC lock',
      'home.vsR3m': 'Yes',
      'home.vsR4': 'Online users / kick',
      'home.vsR4d': 'Yes · live WebSocket',
      'home.vsR4m': 'Yes · refresh / polling',
      'home.vsR5': 'MAC binding',
      'home.vsR5d': 'Binding / Unbinding in UI',
      'home.vsR5m': 'Yes',
      'home.vsR6': 'Finance / sales report',
      'home.vsR6d': 'Manual + Mikhmon script sync',
      'home.vsR6m': 'Yes (community pattern)',
      'home.vsR7': 'Operator permissions',
      'home.vsR7d': 'Granular roles in API',
      'home.vsR7m': 'Classic admin-style',
      'home.vsR8': 'Theme & language',
      'home.vsR8d': 'Light / Dark / System · ID & EN',
      'home.vsR8m': 'Classic web UI',
      'home.vsR9': 'DHCP / queue / tools',
      'home.vsR9d': 'Yes (built into the app)',
      'home.vsR9m': 'Depends on setup / plugins',
      'home.vsR10': 'Stack',
      'home.vsDuckCta': 'Download mikduck',
      'home.vsFootnote': 'mikduck respects MikhMon as a hotspot workflow reference — not a mandatory replacement.',
      'home.partnersTitle': 'Our Partners',
      'home.partnersLead': 'Partners & supporters helping mikduck grow. Slots still open.',
      'home.partnersLoading': 'Loading partners…',
      'home.partnersMoreHtml':
        'See all on the <a href="./partners.html">Partners page</a> · <a href="./sponsors.html">become a sponsor</a>',
      'home.exploreTitle': 'Explore the site',
      'home.exploreLead': 'Download, changelog, partners, sponsorship, FAQ, and more.',
      'home.linkDl': 'Download the latest version — Windows & Linux.',
      'home.linkCl': 'Release notes for each version.',
      'home.linkPartners': 'Project partners & supporters.',
      'home.linkSponsors': 'Support tiers & collaboration.',
      'home.linkTimeline': 'Roadmap MVP → stable → next.',
      'home.linkFaq': 'Install, router API, and local data.',

      'download.eyebrow': 'Download',
      'download.title': 'Download mikduck for free',
      'download.lead':
        'Open source (AGPL-3.0). Only the latest version is offered — same as in the app: you cannot skip / download older versions.',
      'download.versionLabel': 'Available version',
      'download.loading': 'Loading…',
      'download.winSetup': 'Windows Setup',
      'download.winPortable': 'Windows Portable',
      'download.linuxAppImage': 'Linux AppImage',
      'download.linuxDeb': 'Linux .deb',
      'download.mac': 'macOS',
      'download.macBuild': 'mikduck.dmg',
      'download.macMeta': 'Apple Silicon & Intel',
      'download.msStore': 'Get it on Microsoft Store',
      'download.msStoreAria': 'Get mikduck on the Microsoft Store',
      'download.metaPortable': 'No install · x64',
      'download.metaAppImage': 'Ubuntu & modern distros · x64',
      'download.footerHtml':
        'Release notes: <a href="./changelog.html">Changelog</a> · build from source: <a href="https://github.com/mikduck/mikduck" rel="noopener noreferrer" target="_blank">repo</a> · official downloads are latest-only (no version skip).',
      'download.stepsTitle': 'Get started in 3 steps',
      'download.stepsLead': 'No USBWebserver, XAMPP, or Docker just to run the app.',
      'download.step1Title': 'Install',
      'download.step1Body': 'Run Setup on Windows, or open the AppImage/.deb on Linux.',
      'download.step2Title': 'Create admin',
      'download.step2Body': 'First run: create an app admin account (password at least 8 characters).',
      'download.step3Title': 'Connect router',
      'download.step3Body': 'Enter MikroTik IP, user, and password. Make sure API is on port 8728.',
      'download.reqTitle': 'Requirements',
      'download.reqLead': 'Minimum for connect and voucher generate to work smoothly.',
      'download.req1': 'Windows 10/11 or a modern Linux desktop (x64)',
      'download.req2': 'MikroTik RouterOS with API service enabled (`/ip service` api)',
      'download.req3': 'Router & PC on a mutually reachable network (local)',
      'download.req4': 'MikroTik user rights enough for hotspot users/profiles',
      'download.latestFmt': 'v{version} — latest{date}',
      'download.oldHint': 'Older versions are no longer offered — download the latest only.',
      'download.downloadLatest': 'Download v{version} (latest)',

      'changelog.eyebrow': 'Releases',
      'changelog.title': 'Changelog',
      'changelog.lead':
        'Summary of changes per version. Official downloads are latest-only (no version skip).',
      'changelog.loading': 'Loading release notes…',
      'changelog.empty': 'No release notes yet.',
      'changelog.footerHtml':
        'Full technical detail in the repo: <a href="https://github.com/mikduck/mikduck/blob/main/CHANGELOG.md" rel="noopener noreferrer" target="_blank">CHANGELOG.md</a>',

      'partners.eyebrow': 'Our Partners',
      'partners.title': 'Partners & supporters',
      'partners.lead':
        'Organizations and communities supporting the mikduck ecosystem. Managed from the platform panel.',
      'partners.featuredTitle': 'Featured partners',
      'partners.featuredLeadHtml': 'Data from the platform backend (<code>/api/partners</code>).',
      'partners.loading': 'Loading partners…',
      'partners.ctaHtml': 'Want your logo here? <a href="./sponsors.html">See sponsorship</a>',
      'partners.emptyTitle': 'Your logo here',
      'partners.emptyBody': 'Be the first partner',

      'sponsors.eyebrow': 'Sponsorship',
      'sponsors.title': 'Support & sponsor mikduck',
      'sponsors.lead':
        'The project stays free (AGPL-3.0). Sponsorship helps maintenance, Linux packaging, and docs — with no feature paywall.',
      'sponsors.coffeeName': 'Coffee',
      'sponsors.coffeeTitle': 'Voluntary',
      'sponsors.coffeePrice': 'Starting from a coffee',
      'sponsors.coffee1': 'A thank-you',
      'sponsors.coffee2': 'Help cover tooling costs',
      'sponsors.coffeeCta': 'Buy me a coffee',
      'sponsors.sponsorName': 'Sponsor',
      'sponsors.sponsorTitle': 'Monthly / yearly',
      'sponsors.sponsorPrice': 'Contact us',
      'sponsors.sponsor1': 'Logo on the Partners page',
      'sponsors.sponsor2': 'Mention in release notes',
      'sponsors.sponsor3': 'Reasonable issue review priority',
      'sponsors.sponsorCta': 'Apply for sponsorship',
      'sponsors.partnerName': 'Partner',
      'sponsors.partnerTitle': 'Collaboration',
      'sponsors.partnerPrice': 'Custom',
      'sponsors.partner1': 'Joint integration / branding',
      'sponsors.partner2': 'Joint workshop / documentation',
      'sponsors.partner3': 'Featured slot on Our Partners',
      'sponsors.partnerCta': 'View partners',
      'sponsors.footerHtml':
        'You can also use <a href="./coffee.html">Buy me a coffee</a> or star &amp; contribute on <a href="https://github.com/mikduck/mikduck" rel="noopener noreferrer" target="_blank">GitHub</a>.',

      'faq.eyebrow': 'Help',
      'faq.title': 'FAQ',
      'faq.lead':
        'Short answers on install, router connection, data, and how mikduck compares to MikhMon.',
      'faq.q1': 'What is mikduck?',
      'faq.a1':
        'A desktop app to manage MikroTik hotspots (vouchers, profiles, active users, print, finance) via the RouterOS API. Similar to MikhMon’s flow, but without a PHP web server.',
      'faq.q2': 'Do I have to pay?',
      'faq.a2': 'No. mikduck is open source under AGPL-3.0. Optional coffee donations are on the Coffee page.',
      'faq.q3': 'How is it different from MikhMon?',
      'faq.a3':
        'MikhMon runs on PHP + a web server. mikduck is a desktop app (Electron) with a FastAPI backend and React UI, plus granular access and a WebSocket dashboard.',
      'faq.q4': 'Why can’t I connect to MikroTik?',
      'faq.a4':
        'Check IP/host, user/password, firewall, and make sure the API service is enabled (`/ip service enable api`). Default port is usually 8728. Your PC must be able to reach the router.',
      'faq.q5': 'Where is data stored?',
      'faq.a5':
        'Locally on your device (SQLite). On Windows this is typically under the app’s AppData folder. Router passwords can be encrypted via Electron secure storage.',
      'faq.q6': 'Is this Radius / User Manager?',
      'faq.a6':
        'No. mikduck manages local hotspot users on the router (MikhMon-style), not a separate Radius server.',
      'faq.q7': 'Forgot the app login password?',
      'faq.a7':
        'There is a local password-reset script in the repo (`reset-password`). Don’t share the database if it contains stored credentials.',
      'faq.q8': 'Is Linux available?',
      'faq.a8':
        'Linux download targets are on the Download page. Linux packaging continues on the roadmap — see Timeline.',
      'faq.q9': 'Want to request a feature?',
      'faq.a9Html':
        'Fill the form on <a href="./pengajuan.html">Requests</a> or open a GitHub issue. Clearer use-cases are easier to prioritize.',

      'timeline.eyebrow': 'Planning',
      'timeline.title': 'Timeline & roadmap',
      'timeline.lead':
        'The next four phases are locked (cloud member panel + login marketplace, PPP, tools++, Android/iOS). Build timing follows each phase’s donation goal — see the Coffee page.',
      'timeline.done': 'Done',
      'timeline.now': 'Now',
      'timeline.next': 'Next',
      'timeline.later': 'Later',
      'timeline.loading': 'Loading roadmap…',
      'timeline.empty': 'No roadmap items yet.',
      'timeline.footerHtml':
        'Support the next phase via <a href="./coffee.html">Coffee / donations</a>. Detail requests: <a href="./pengajuan.html">Requests</a>.',

      'pengajuan.eyebrow': 'Community',
      'pengajuan.title': 'Requests',
      'pengajuan.lead':
        'Propose a feature, report a bug, or ask for workflow fixes. The form opens a GitHub issue draft so it’s easy to track.',
      'pengajuan.jenis': 'Type',
      'pengajuan.optFitur': 'Feature request',
      'pengajuan.optBug': 'Bug report',
      'pengajuan.optTemplate': 'Voucher / login template',
      'pengajuan.optDocs': 'Documentation',
      'pengajuan.optOther': 'Other',
      'pengajuan.judul': 'Short title',
      'pengajuan.judulPh': 'Example: Export finance report to CSV',
      'pengajuan.detail': 'Details',
      'pengajuan.detailPh':
        'Describe the need, reproduction steps (for bugs), or the expected example.',
      'pengajuan.kontak': 'Contact (optional)',
      'pengajuan.kontakPh': 'Telegram / email',
      'pengajuan.hint': 'Submit opens GitHub Issues with the title and body prefilled.',
      'pengajuan.ok': 'Issue draft opened in a new tab. Continue submit on GitHub.',
      'pengajuan.submit': 'Create request',
      'pengajuan.issueJenis': 'Type',
      'pengajuan.issueDetail': 'Details',
      'pengajuan.issueKontak': 'Contact (optional)',

      'coffee.eyebrow': 'Support the project',
      'coffee.title': 'Buy me a coffee',
      'coffee.lead':
        'mikduck is free and open source. If it helps your hotspot ops, an optional coffee is welcome — no paywall, no hidden premium features.',
      'coffee.panelTitle': 'One coffee = coding time',
      'coffee.panelBody':
        'Donations go toward maintenance time, bug fixes, Windows/Linux packaging, and docs. The app stays AGPL-3.0 — anyone can use, fork, and contribute.',
      'coffee.cta': 'Treat on Buy Me a Coffee',
      'coffee.feedback': 'Send free feedback',
      'coffee.qrCaption': 'Scan the QR to buy a coffee',
      'coffee.thanks': 'Thank you',
      'coffee.thanksBody': 'Every bit of support helps the roadmap move faster.',
      'coffee.w1Title': 'Star on GitHub',
      'coffee.w1Body': 'Free. Helps others discover the project.',
      'coffee.w2Title': 'Report bugs',
      'coffee.w2Body': 'A clear issue is worth more than a donation without context.',
      'coffee.w3Title': 'Share it',
      'coffee.w3Body': 'Tell warnet / MikroTik communities in your groups.',

      'demo.hint': 'Fictional data · no router',
      'demo.back': 'Back',
      'demo.download': 'Download app',
      'demo.navLabel': 'Demo navigation',
      'demo.connected': 'Connected',
    },
  }

  function detectLocale() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (SUPPORTED.includes(saved)) return saved
    } catch {
      /* ignore */
    }
    const nav = (navigator.language || 'id').toLowerCase()
    return nav.startsWith('en') ? 'en' : 'id'
  }

  let locale = detectLocale()

  function t(key, vars) {
    const table = dict[locale] || dict.id
    let text = table[key] ?? dict.id[key] ?? key
    if (vars && typeof vars === 'object') {
      Object.entries(vars).forEach(([k, v]) => {
        text = text.replaceAll(`{${k}}`, String(v ?? ''))
      })
    }
    return text
  }

  function applyI18n(root = document) {
    document.documentElement.lang = locale

    root.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n')
      if (!key) return
      el.textContent = t(key)
    })

    root.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html')
      if (!key) return
      el.innerHTML = t(key)
    })

    root.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder')
      if (!key) return
      el.setAttribute('placeholder', t(key))
    })

    root.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const key = el.getAttribute('data-i18n-aria')
      if (!key) return
      el.setAttribute('aria-label', t(key))
    })

    root.querySelectorAll('[data-i18n-content]').forEach((el) => {
      const key = el.getAttribute('data-i18n-content')
      if (!key) return
      el.setAttribute('content', t(key))
    })

    root.querySelectorAll('[data-i18n-title]').forEach((el) => {
      const key = el.getAttribute('data-i18n-title')
      if (!key) return
      if (el.tagName === 'TITLE') el.textContent = t(key)
      else el.setAttribute('title', t(key))
    })

    root.querySelectorAll('[data-set-lang]').forEach((btn) => {
      const lang = btn.getAttribute('data-set-lang')
      btn.classList.toggle('is-active', lang === locale)
      btn.setAttribute('aria-pressed', lang === locale ? 'true' : 'false')
    })

    root.querySelectorAll('[data-lang-select]').forEach((sel) => {
      if (sel.value !== locale) sel.value = locale
    })

    root.querySelectorAll('[data-theme-select]').forEach((sel) => {
      const pref = sel.value
      const opts = [
        ['light', `☀ ${t('common.light')}`],
        ['dark', `☾ ${t('common.dark')}`],
        ['system', `💻 ${t('common.system')}`],
      ]
      opts.forEach(([value, label], i) => {
        if (sel.options[i]) {
          sel.options[i].value = value
          sel.options[i].textContent = label
        }
      })
      sel.value = pref
    })
  }

  function setLocale(next) {
    if (!SUPPORTED.includes(next) || next === locale) return
    locale = next
    try {
      localStorage.setItem(STORAGE_KEY, locale)
    } catch {
      /* ignore */
    }
    applyI18n(document)
    window.dispatchEvent(new CustomEvent('mikduck:locale', { detail: { locale } }))
  }

  function getLocale() {
    return locale
  }

  window.MikduckI18n = { t, applyI18n, setLocale, getLocale, SUPPORTED }
})()
