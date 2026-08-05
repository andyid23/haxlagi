📚 LD-3: Akun Digital dan Pengaturan 
=====================================

Menjadi Jagoan Keamanan Akun & Finansial Digital
------------------------------------------------

🔐 Login
--------

<learning-component type="assessment" accent-color="red" subtitle="Keamanan Akun" title="Assessment" icon="lrn:assessment"><p>Tujuan Pembelajaran (XI-LD-03):</p><ol><li>Mampu mengelola kata sandi dengan manajer kata sandi,</li><li>menerapkan autentikasi dua langkah dengan beragam moda, serta</li><li>memahami pemanfaatan platform lokapasar, perbankan digital, dompet digital beserta aspek keamanannya.</li></ol></learning-component>

📖 Materi Pembelajaran
----------------------

Pada pertemuan ini, kita akan mempelajari konsep keamanan akun digital

#### <fake-hax-list-break>Misi &amp; Mindset Fondasi Keamanan Digital<br></fake-hax-list-break>

Keamanan digital bukan sekadar pilihan aplikasi, melainkan higiene digital dan pola pikir kritis (critical mindset). Prinsip paling mendasar dalam keamanan informasi adalah:

Semakin instan dan tanpa kendala (frictionless) sebuah proses login atau transaksi, biasanya semakin besar celah risiko keamanan yang ada.

Langkah Aktivitas Awal:

*   Inventarisasi Aset Digital: Identifikasi 3 aset digital utama milikmu (misal: Email Utama, WhatsApp, Account Bank/E-Wallet).
*   Evaluasi Risiko: Tentukan dampak risiko jika salah satu aset tersebut terkompromi (kerugian finansial, pencurian identitas, penyebaran hoaks/penipuan atas nama pribadi

#### <fake-hax-list-break>Arsitektur Kata Sandi &amp; Manajer Kata Sandi (Password Manager)<br></fake-hax-list-break>

A. Mengapa Kata Sandi Konvensional Gagal?

Kata sandi tunggal seperti kopi123 atau tanggal lahir sangat rentan terhadap serangan Dictionary Attack dan Brute Force. Kekuatan sebuah kata sandi diukur dari Entropi ($E$):

L = Panjang karakter (length)

R = Jumlah variasi karakter (pool of characters)

Mengubah kata sandi dari password pendek menjadi passphrase (kalimat acak) meningkatkan $L$ secara signifikan, membuat perhitungan brute force membutuhkan waktu ratusan tahun.

B. Manajer Kata Sandi (Password Manager)

Password Manager berfungsi sebagai brankas digital terenkripsi.

Teknologi Enkripsi: Menggunakan enkripsi simetris $AES\\text{-}256$ bit.

Zero-Knowledge Architecture: Penyedia layanan tidak menyimpan kunci dekripsi (Master Password). Hanya pengguna yang memegang kunci tersebut.

Rekomendasi Alat: Bitwarden, KeePass (Sumber Terbuka/Open-Source), Dashlane.

C. Praktik Mandiri:

Buat Master Password menggunakan metode Passphrase minimal 4 kata acak dengan simbol/angka.

Contoh: KucingNontonBioskopSambilMakanMie!24

Pindahkan seluruh akun dari pencatatan manual/browser bawaan ke Manajer Kata Sandi.

Aktifkan fitur Auto-Generate Password acak 16+ karakter untuk setiap akun baru.

1.  Autentikasi Berlapis: Multi-Factor Authentication (MFA/2FA) & Passkeys

Autentikasi dua langkah menambahkan faktor pembuktian identitas tambahan. Faktor autentikasi terbagi menjadi tiga:

Something You Know: Kata Sandi / PIN / Passphrase.

Something You Have: Smartphone, Aplikasi Authenticator, Security Key.

Something You Are: Sidik Jari, Wajah (Biometrik).

A. Hirarki Keamanan Moda 2FA

Moda 2FA

Tingkat Keamanan

Kelemahan Utama

Rekomendasi Penggunaan

SMS OTP

Rendah

Vektor serangan SIM Swap, intercept jaringan SS7, Smishing

Hindari jika ada alternatif lain

Email OTP

Sedang

Rentan jika email utama di-retas

Hanya untuk akun prioritas rendah

Aplikasi Authenticator (TOTP)

Tinggi

Kode berbasis waktu (Time-based One-Time Password) berganti tiap 30 detik

Sangat Direkomendasikan (Google Auth, Aegis, Bitwarden)

Security Key Fisik (FIDO2/U2F)

Sangat Tinggi

Risiko kehilangan fisik

Untuk infrastruktur / akun bisnis vital

Passkeys (FIDO2)

Sangat Tinggi

Bergantung pada ekosistem perangkat

Standar modern masa depan (tanpa kata sandi)

B. Manajemen Kode Cadangan (Backup Codes)

Saat mengaktifkan 2FA berbasis aplikasi, sistem selalu memberikan 8–10 kode cadangan.

Aturan Emas: Simpan kode cadangan secara fisik (dicetak dan disimpan di tempat aman) atau dalam brankas Password Manager yang terenkripsi. Jangan menyimpan di screenshot galeri smartphone.

1.  Ekosistem Finansial Digital & Keamanan Transaksi

A. Diferensiasi Platform Finansial Digital

B. Vektor Celah Keamanan & Transaksi Aman

Bahaya Wi-Fi Publik: Melakukan transaksi perbankan atau login finansial melalui Wi-Fi umum berisiko terkena serangan Man-in-the-Middle (MitM) atau Wi-Fi Eavesdropping.

Solusi: Selalu gunakan jaringan data seluler pribadi atau proteksi dengan VPN terpercaya saat bertransaksi.

Modus Skema Rekening Bersama (Escrow Bypass): Penjual nakal di lokapasar sering mengajak pembeli bertransaksi di luar aplikasi (misal via WA/Transfer Langsung) dengan iming-iming diskon.

Aturan Emas: Jangan pernah bertransaksi di luar sistem resmi lokapasar agar perlindungan dana garansi tetap berlaku.

1.  Rekayasa Sosial (Social Engineering) & Deteksi Phishing

Penjahat siber modern lebih sering mengeksploitasi kerentanan emosional manusia (human error) daripada meretas benteng sistem teknologi.

A. Modus Serangan Populer

Phishing: Situs web palsu yang meniru tampilan resmi untuk mencuri kata sandi/OTP.

Smishing / Vishing: Penipuan via SMS/Telepon mengatasnamakan pihak bank/kurir paket (misal berkas .APK undangan/resi palsu).

Impersonation: Memalsukan identitas teman/keluarga yang meminta bantuan dana darurat.

B. Teknik Verifikasi Lateral untuk Link/Domain

Sebelum memasukkan kredensial login pada suatu halaman web, lakukan verifikasi domain:

Periksa Fully Qualified Domain Name (FQDN):

Domain Resmi: [https://login.bca.co.id](https://login.bca.co.id)

Domain Phishing: [https://bca.co.id.login-security-update.com](https://bca.co.id.login-security-update.com) (Domain sebenarnya adalah login-security-update.com).

Cek Sertifikat HTTPS & Reputasi:

Gunakan alat seperti WHOIS lookup atau Google Transparency Report untuk melihat usia dan identitas pendaftar domain.

1.  Audit Keamanan Mandiri & Protokol Tanggap Insiden (Incident Response)

A. Cek Berkala (Keamanan Preventif)

Perangkat Tertaut (Linked Devices): Cek menu Settings $\\rightarrow$ Devices pada WhatsApp, Telegram, Google Account, dan Email secara berkala. Segera Log out all other sessions jika terdapat perangkat tidak dikenal.

Pemeriksaan Kebocoran Data (Data Breach Check): Periksa alamat email di portal independen tepercaya seperti haveibeenpwned.com untuk mengetahui apakah data pribadi pernah terlepas dalam insiden kebocoran data publik.

B. SOP Pertolongan Pertama Jika Akun/Finansial Terkompromi

Jika terindikasi akun atau keuangan digital diretas:

\[Langkah 1\] Isolasi Perangkat ──────> Matikan Wi-Fi & Data Seluler jika ada malware (.APK) │ \[Langkah 2\] Amankan Finansial ────> Hubungi Call Center Bank/E-Wallet untuk blokir rekening/kartu │ \[Langkah 3\] Reset Kredensial ────> Ganti kata sandi Master & Email Utama dari perangkat bersih │ \[Langkah 4\] Revoke Access ────> Putuskan semua sesi aktif (Log out from all devices) & cabut akses OAuth │ \[Langkah 5\] Lapor & Dokumentasi ──> Laporkan ke pihak berwajib / AduanSiber.id dengan bukti screenshot

📥 Download Materi
------------------

Klik link di bawah untuk mengunduh file materi (aktivitas download akan tercatat otomatis):

*   [📄 Download PDF: Panduan Literasi Digital](files/panduan-literasi-digital.pdf)

🎯 Evaluasi: Kuis LD-3
----------------------

Setelah membaca materi di atas, silakan kerjakan kuis berikut untuk menguji pemahaman Anda:

💬 Forum Diskusi: LD-3
----------------------

📝 Tugas Mandiri: LD-3
----------------------

📊 Kehadiran & Aktivitas
------------------------

Ringkasan kehadiran dan aktivitas Anda untuk KD-Materi LD-3: